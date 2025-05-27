import { useMemo } from 'react';
import { useUniswapContextSelector } from 'uniswap/src/contexts/UniswapContext';
import { useCheckApprovalQuery } from 'uniswap/src/data/apiClients/tradingApi/useCheckApprovalQuery';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { convertGasFeeToDisplayValue, useActiveGasStrategy, useShadowGasStrategies, } from 'uniswap/src/features/gas/hooks';
import { areEqualGasStrategies } from 'uniswap/src/features/gas/types';
import { ApprovalAction } from 'uniswap/src/features/transactions/swap/types/trade';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { getTokenAddressForApi, toTradingApiSupportedChainId, } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { logger } from 'utilities/src/logger/logger';
import { ONE_MINUTE_MS, ONE_SECOND_MS } from 'utilities/src/time/time';
function useApprovalWillBeBatchedWithSwap(chainId, routing) {
    const canBatchTransactions = useUniswapContextSelector((ctx) => { var _a; return (_a = ctx.getCanBatchTransactions) === null || _a === void 0 ? void 0 : _a.call(ctx, chainId); });
    const swapDelegationAddress = useUniswapContextSelector((ctx) => { var _a; return (_a = ctx.getSwapDelegationAddress) === null || _a === void 0 ? void 0 : _a.call(ctx, chainId); });
    const isBatchableFlow = Boolean(routing && !isUniswapX({ routing }));
    return Boolean((canBatchTransactions || swapDelegationAddress) && isBatchableFlow);
}
export function useTokenApprovalInfo(params) {
    const { account, chainId, wrapType, currencyInAmount, currencyOutAmount, routing } = params;
    const isWrap = wrapType !== WrapType.NotApplicable;
    const address = account === null || account === void 0 ? void 0 : account.address;
    const inputWillBeWrapped = routing && isUniswapX({ routing });
    // Off-chain orders must have wrapped currencies approved, rather than natives.
    const currencyIn = inputWillBeWrapped ? currencyInAmount === null || currencyInAmount === void 0 ? void 0 : currencyInAmount.currency.wrapped : currencyInAmount === null || currencyInAmount === void 0 ? void 0 : currencyInAmount.currency;
    const amount = currencyInAmount === null || currencyInAmount === void 0 ? void 0 : currencyInAmount.quotient.toString();
    const tokenInAddress = getTokenAddressForApi(currencyIn);
    // Only used for bridging
    const isBridge = routing === Routing.BRIDGE;
    const currencyOut = currencyOutAmount === null || currencyOutAmount === void 0 ? void 0 : currencyOutAmount.currency;
    const tokenOutAddress = getTokenAddressForApi(currencyOut);
    const activeGasStrategy = useActiveGasStrategy(chainId, 'general');
    const shadowGasStrategies = useShadowGasStrategies(chainId, 'general');
    const approvalRequestArgs = useMemo(() => {
        const tokenInChainId = toTradingApiSupportedChainId(chainId);
        const tokenOutChainId = toTradingApiSupportedChainId(currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.chainId);
        if (!address || !amount || !currencyIn || !tokenInAddress || !tokenInChainId) {
            return undefined;
        }
        if (isBridge && !tokenOutAddress && !tokenOutChainId) {
            return undefined;
        }
        return {
            walletAddress: address,
            token: tokenInAddress,
            amount,
            chainId: tokenInChainId,
            includeGasInfo: true,
            tokenOut: tokenOutAddress,
            tokenOutChainId,
            gasStrategies: [activeGasStrategy, ...(shadowGasStrategies !== null && shadowGasStrategies !== void 0 ? shadowGasStrategies : [])],
        };
    }, [
        activeGasStrategy,
        address,
        amount,
        chainId,
        currencyIn,
        currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.chainId,
        isBridge,
        tokenInAddress,
        tokenOutAddress,
        shadowGasStrategies,
    ]);
    const approvalWillBeBatchedWithSwap = useApprovalWillBeBatchedWithSwap(chainId, routing);
    const shouldSkip = !approvalRequestArgs || isWrap || !address || approvalWillBeBatchedWithSwap;
    const { data, isLoading, error } = useCheckApprovalQuery({
        params: shouldSkip ? undefined : approvalRequestArgs,
        staleTime: 15 * ONE_SECOND_MS,
        immediateGcTime: ONE_MINUTE_MS,
    });
    const tokenApprovalInfo = useMemo(() => {
        if (error) {
            logger.error(error, {
                tags: { file: 'useTokenApprovalInfo', function: 'useTokenApprovalInfo' },
                extra: {
                    approvalRequestArgs,
                },
            });
        }
        // Approval is N/A for wrap transactions or unconnected state.
        if (isWrap || !address || approvalWillBeBatchedWithSwap) {
            return {
                action: ApprovalAction.None,
                txRequest: null,
                cancelTxRequest: null,
            };
        }
        if (data && !error) {
            // API returns null if no approval is required
            if (data.approval === null) {
                return {
                    action: ApprovalAction.None,
                    txRequest: null,
                    cancelTxRequest: null,
                };
            }
            if (data.approval) {
                if (data.cancel) {
                    return {
                        action: ApprovalAction.RevokeAndPermit2Approve,
                        txRequest: data.approval,
                        cancelTxRequest: data.cancel,
                    };
                }
                return {
                    action: ApprovalAction.Permit2Approve,
                    txRequest: data.approval,
                    cancelTxRequest: null,
                };
            }
        }
        // No valid approval type found
        return {
            action: ApprovalAction.Unknown,
            txRequest: null,
            cancelTxRequest: null,
        };
    }, [address, approvalRequestArgs, approvalWillBeBatchedWithSwap, data, error, isWrap]);
    return useMemo(() => {
        var _a, _b;
        const activeEstimate = (_a = data === null || data === void 0 ? void 0 : data.gasEstimates) === null || _a === void 0 ? void 0 : _a.find((e) => areEqualGasStrategies(e.strategy, activeGasStrategy));
        const noApprovalNeeded = tokenApprovalInfo.action === ApprovalAction.None;
        const noRevokeNeeded = tokenApprovalInfo.action === ApprovalAction.Permit2Approve || tokenApprovalInfo.action === ApprovalAction.None;
        const approvalFee = noApprovalNeeded ? '0' : data === null || data === void 0 ? void 0 : data.gasFee;
        const revokeFee = noRevokeNeeded ? '0' : data === null || data === void 0 ? void 0 : data.cancelGasFee;
        const unknownApproval = tokenApprovalInfo.action === ApprovalAction.Unknown;
        const isGasLoading = unknownApproval && isLoading;
        const approvalGasError = unknownApproval && !isLoading ? new Error('Approval action unknown') : null;
        let gasEstimates;
        if (activeEstimate) {
            gasEstimates = {
                activeEstimate,
                shadowEstimates: (_b = data === null || data === void 0 ? void 0 : data.gasEstimates) === null || _b === void 0 ? void 0 : _b.filter((e) => e !== activeEstimate),
            };
        }
        return {
            tokenApprovalInfo,
            approvalGasFeeResult: {
                value: approvalFee,
                displayValue: convertGasFeeToDisplayValue(approvalFee, activeGasStrategy),
                isLoading: isGasLoading,
                error: approvalGasError,
                gasEstimates,
                activeEstimate,
            },
            revokeGasFeeResult: {
                value: revokeFee,
                displayValue: convertGasFeeToDisplayValue(revokeFee, activeGasStrategy),
                isLoading: isGasLoading,
                error: approvalGasError,
            },
        };
    }, [activeGasStrategy, data === null || data === void 0 ? void 0 : data.cancelGasFee, data === null || data === void 0 ? void 0 : data.gasEstimates, data === null || data === void 0 ? void 0 : data.gasFee, isLoading, tokenApprovalInfo]);
}
//# sourceMappingURL=useTokenApprovalInfo.js.map