import { queryOptions, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useAccountMeta, useUniswapContext } from 'uniswap/src/contexts/UniswapContext';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__';
import { useActiveGasStrategy, useShadowGasStrategies } from 'uniswap/src/features/gas/hooks';
import { DynamicConfigs, SwapConfigKey } from 'uniswap/src/features/gating/configs';
import { useDynamicConfigValue } from 'uniswap/src/features/gating/hooks';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useTokenApprovalInfo, } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo';
import { useV4SwapEnabled } from 'uniswap/src/features/transactions/swap/hooks/useV4SwapEnabled';
import { createBridgeSwapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/bridge/bridgeSwapTxAndGasInfoService';
import { createClassicSwapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/classic/classicSwapTxAndGasInfoService';
import { FALLBACK_SWAP_REQUEST_POLL_INTERVAL_MS, WRAP_FALLBACK_GAS_LIMIT_IN_GWEI, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/constants';
import { createEVMSwapInstructionsService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapInstructionsService';
import { usePresignPermit } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/hooks';
import { createDecorateSwapTxInfoServiceWithEVMLogging } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/logging';
import { createSwapTxAndGasInfoService, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/swapTxAndGasInfoService';
import { createUniswapXSwapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/uniswapx/uniswapXSwapTxAndGasInfoService';
import { createWrapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/wrap/wrapTxAndGasInfoService';
import { CurrencyField } from 'uniswap/src/types/currency';
import { useEvent, usePrevious } from 'utilities/src/react/hooks';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
const EMPTY_SWAP_TX_AND_GAS_INFO = {
    routing: Routing.CLASSIC,
    txRequests: undefined,
    approveTxRequest: undefined,
    revocationTxRequest: undefined,
    gasFee: { isLoading: false, error: null },
    gasFeeEstimation: {},
    trade: undefined,
    permit: undefined,
    swapRequestArgs: undefined,
    unsigned: false,
};
// TODO(swap arch): replace with swap config service
function useSwapConfig() {
    const { chainId } = useSwapFormContext().derivedSwapInfo;
    const activeGasStrategy = useActiveGasStrategy(chainId, 'general');
    const shadowGasStrategies = useShadowGasStrategies(chainId, 'general');
    const v4SwapEnabled = useV4SwapEnabled(chainId);
    const { getCanBatchTransactions, getSwapDelegationAddress } = useUniswapContext();
    return useMemo(() => ({
        v4SwapEnabled,
        activeGasStrategy,
        shadowGasStrategies,
        getCanBatchTransactions,
        getSwapDelegationAddress,
    }), [v4SwapEnabled, activeGasStrategy, shadowGasStrategies, getCanBatchTransactions, getSwapDelegationAddress]);
}
export function useSwapTxAndGasInfoService() {
    const swapConfig = useSwapConfig();
    const presignPermit = usePresignPermit();
    const trace = useTrace();
    const transactionSettings = useTransactionSettingsContext();
    const instructionService = useMemo(() => {
        return createEVMSwapInstructionsService({
            ...swapConfig,
            presignPermit,
        });
    }, [swapConfig, presignPermit]);
    const decorateWithEVMLogging = useEvent(createDecorateSwapTxInfoServiceWithEVMLogging({ trace, transactionSettings }));
    const classicSwapTxInfoService = useMemo(() => {
        const classicService = createClassicSwapTxAndGasInfoService({
            ...swapConfig,
            transactionSettings,
            instructionService,
        });
        return decorateWithEVMLogging(classicService);
    }, [swapConfig, transactionSettings, instructionService, decorateWithEVMLogging]);
    const bridgeSwapTxInfoService = useMemo(() => {
        const bridgeService = createBridgeSwapTxAndGasInfoService({
            ...swapConfig,
            transactionSettings,
            instructionService,
        });
        return decorateWithEVMLogging(bridgeService);
    }, [swapConfig, transactionSettings, instructionService, decorateWithEVMLogging]);
    const uniswapXSwapTxInfoService = useMemo(() => {
        return createUniswapXSwapTxAndGasInfoService();
    }, []);
    const wrapTxInfoService = useMemo(() => {
        return createWrapTxAndGasInfoService({ ...swapConfig, fallbackGasLimit: WRAP_FALLBACK_GAS_LIMIT_IN_GWEI * 10e9 });
    }, [swapConfig]);
    const services = useMemo(() => {
        return {
            [Routing.CLASSIC]: classicSwapTxInfoService,
            [Routing.BRIDGE]: bridgeSwapTxInfoService,
            [Routing.PRIORITY]: uniswapXSwapTxInfoService,
            [Routing.DUTCH_V2]: uniswapXSwapTxInfoService,
            [Routing.DUTCH_V3]: uniswapXSwapTxInfoService,
            // TODO(WEB-7243): remove noops after we implement trade variant for wraps
            [Routing.WRAP]: createNoopService(),
            [Routing.UNWRAP]: createNoopService(),
            [Routing.LIMIT_ORDER]: createNoopService(),
            [Routing.DUTCH_LIMIT]: createNoopService(),
        };
    }, [classicSwapTxInfoService, bridgeSwapTxInfoService, uniswapXSwapTxInfoService]);
    return useMemo(() => {
        return createSwapTxAndGasInfoService({ services, tradelessWrapService: wrapTxInfoService });
    }, [services, wrapTxInfoService]);
}
function createNoopService() {
    return {
        getSwapTxAndGasInfo: async () => {
            throw new Error('Not implemented');
        },
    };
}
// TODO(WEB-7243): Simplify query key logic once all routing types have a corresponding trade this query can be decoupled from derivedSwapInfo
function parseQueryKeyParams(params) {
    var _a, _b;
    const { trade, derivedSwapInfo } = params;
    // If a trade is not defined, supply information about the currencies and amounts to use as a placeholder key params
    if (!trade) {
        const { input, output } = derivedSwapInfo.currencies;
        const amounts = derivedSwapInfo.currencyAmounts;
        const inputAmount = (_a = amounts[CurrencyField.INPUT]) === null || _a === void 0 ? void 0 : _a.toExact();
        const outputAmount = (_b = amounts[CurrencyField.OUTPUT]) === null || _b === void 0 ? void 0 : _b.toExact();
        return {
            inputCurrencyId: input === null || input === void 0 ? void 0 : input.currencyId,
            outputCurrencyId: output === null || output === void 0 ? void 0 : output.currencyId,
            inputAmount,
            outputAmount,
        };
    }
    return {
        requestId: trade.quote.requestId,
        approvalTxInfo: params.approvalTxInfo,
    };
}
/**
 * Returns true if the params have updated in such a way that the previous query result should be used as placeholder data while fetching the new result,
 * rather than showing a brief loading state in the UX.
 */
function getCanUsePlaceholderData(params, prevParams) {
    if ((prevParams === null || prevParams === void 0 ? void 0 : prevParams.trade) && params.trade) {
        const approvalUnchanged = prevParams.approvalTxInfo.tokenApprovalInfo.action === params.approvalTxInfo.tokenApprovalInfo.action;
        const tradeInputUnchanged = (prevParams.trade.tradeType === params.trade.tradeType &&
            prevParams.trade.inputAmount.equalTo(params.trade.inputAmount)) ||
            prevParams.trade.outputAmount.equalTo(params.trade.outputAmount);
        return approvalUnchanged && tradeInputUnchanged;
    }
    return false;
}
function createGetQueryOptions(ctx) {
    return function getQueryOptions(params) {
        return queryOptions({
            queryKey: ['swapTxAndGasInfo', parseQueryKeyParams(params)],
            queryFn: () => {
                return ctx.swapTxAndGasInfoService.getSwapTxAndGasInfo(params);
            },
            refetchInterval: ctx.refetchInterval,
        });
    };
}
function useSwapParams() {
    const { derivedSwapInfo } = useSwapFormContext();
    const account = useAccountMeta();
    const { chainId, wrapType, currencyAmounts, trade: { trade }, } = derivedSwapInfo;
    const approvalTxInfo = useTokenApprovalInfo({
        account,
        chainId,
        wrapType,
        currencyInAmount: currencyAmounts[CurrencyField.INPUT],
        currencyOutAmount: currencyAmounts[CurrencyField.OUTPUT],
        routing: trade === null || trade === void 0 ? void 0 : trade.routing,
    });
    return {
        approvalTxInfo,
        derivedSwapInfo,
        trade: trade !== null && trade !== void 0 ? trade : undefined,
    };
}
function useSwapTxAndGasInfoQuery(input) {
    const swapTxAndGasInfoService = useSwapTxAndGasInfoService();
    const refetchInterval = useDynamicConfigValue(DynamicConfigs.Swap, SwapConfigKey.TradingApiSwapRequestMs, FALLBACK_SWAP_REQUEST_POLL_INTERVAL_MS);
    const getQueryOptions = useEvent(createGetQueryOptions({ swapTxAndGasInfoService, refetchInterval }));
    return useQuery(getQueryOptions(input));
}
export function useSwapTxAndGasInfo() {
    var _a;
    const params = useSwapParams();
    const { data } = useSwapTxAndGasInfoQuery(params);
    const prevData = usePrevious(data);
    const prevParams = usePrevious(params);
    // Persist prev query result as placeholder data when applicable
    const canUsePlaceholderData = useMemo(() => getCanUsePlaceholderData(params, prevParams), [params, prevParams]);
    const placeholderData = canUsePlaceholderData ? prevData : undefined;
    return (_a = data !== null && data !== void 0 ? data : placeholderData) !== null && _a !== void 0 ? _a : EMPTY_SWAP_TX_AND_GAS_INFO;
}
//# sourceMappingURL=hooks.js.map