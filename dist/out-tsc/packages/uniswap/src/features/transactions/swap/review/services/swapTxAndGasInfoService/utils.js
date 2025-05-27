/* eslint-disable max-lines */
import { SwapEventName } from '@uniswap/analytics-events';
import { useMemo } from 'react';
import { getTradeSettingsDeadline } from 'uniswap/src/data/apiClients/tradingApi/utils/getTradeSettingsDeadline';
import { Routing, TransactionFailureReason, } from 'uniswap/src/data/tradingApi/__generated__/index';
import { getChainLabel } from 'uniswap/src/features/chains/utils';
import { convertGasFeeToDisplayValue, useActiveGasStrategy } from 'uniswap/src/features/gas/hooks';
import { areEqualGasStrategies } from 'uniswap/src/features/gas/types';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { getBaseTradeAnalyticsPropertiesFromSwapInfo } from 'uniswap/src/features/transactions/swap/analytics';
import { UNKNOWN_SIM_ERROR } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/constants';
import { PermitMethod, } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { ApprovalAction, } from 'uniswap/src/features/transactions/swap/types/trade';
import { mergeGasFeeResults } from 'uniswap/src/features/transactions/swap/utils/gas';
import { isBridge, isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { validatePermit, validateTransactionRequest, validateTransactionRequests, } from 'uniswap/src/features/transactions/swap/utils/trade';
import { SWAP_GAS_URGENCY_OVERRIDE, isClassicQuote } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { CurrencyField } from 'uniswap/src/types/currency';
import { logger } from 'utilities/src/logger/logger';
import { isExtension, isInterface, isMobileApp } from 'utilities/src/platform';
export function processWrapResponse({ gasFeeResult, wrapTxRequest, fallbackGasParams, }) {
    var _a, _b;
    const gasParams = (_b = (_a = gasFeeResult.params) !== null && _a !== void 0 ? _a : fallbackGasParams) !== null && _b !== void 0 ? _b : {};
    const wrapTxRequestWithGasFee = { ...wrapTxRequest, ...gasParams };
    const gasEstimate = {
        wrapEstimates: gasFeeResult.gasEstimates,
    };
    return {
        gasFeeResult,
        txRequests: [wrapTxRequestWithGasFee],
        gasEstimate,
        swapRequestArgs: undefined,
    };
}
export function createPrepareSwapRequestParams({ activeGasStrategy, shadowGasStrategies, v4SwapEnabled, }) {
    return function prepareSwapRequestParams({ swapQuoteResponse, signature, transactionSettings, alreadyApproved, }) {
        const isBridgeTrade = (swapQuoteResponse === null || swapQuoteResponse === void 0 ? void 0 : swapQuoteResponse.routing) === Routing.BRIDGE;
        const permitData = swapQuoteResponse === null || swapQuoteResponse === void 0 ? void 0 : swapQuoteResponse.permitData;
        /**
         * Simulate transactions to ensure they will not fail on-chain.
         * Do not simulate for bridge transactions or txs that need an approval
         * as those require Tenderly to simulate and it is not currently integrated into the gas servic
         */
        const shouldSimulateTxn = isBridgeTrade ? false : alreadyApproved;
        const deadline = getTradeSettingsDeadline(transactionSettings.customDeadline);
        return {
            quote: swapQuoteResponse.quote,
            permitData: permitData !== null && permitData !== void 0 ? permitData : undefined,
            signature,
            simulateTransaction: shouldSimulateTxn,
            deadline,
            refreshGasPrice: true,
            gasStrategies: [activeGasStrategy, ...(shadowGasStrategies !== null && shadowGasStrategies !== void 0 ? shadowGasStrategies : [])],
            urgency: SWAP_GAS_URGENCY_OVERRIDE,
            v4Enabled: v4SwapEnabled,
        };
    };
}
export function getSwapInputExceedsBalance({ derivedSwapInfo }) {
    const { currencyBalances, currencyAmounts } = derivedSwapInfo;
    const currencyAmount = currencyAmounts[CurrencyField.INPUT];
    const currencyBalance = currencyBalances[CurrencyField.INPUT];
    return Boolean(currencyBalance && currencyAmount && currencyBalance.lessThan(currencyAmount));
}
export function getShouldSkipSwapRequest({ derivedSwapInfo, tokenApprovalInfo, signature, permitsDontNeedSignature, }) {
    var _a;
    const { trade } = derivedSwapInfo.trade;
    const requiresPermit2Sig = !!((_a = trade === null || trade === void 0 ? void 0 : trade.quote) === null || _a === void 0 ? void 0 : _a.permitData);
    const missingSig = requiresPermit2Sig && !signature && !permitsDontNeedSignature;
    const approvalInfoMissing = !(tokenApprovalInfo === null || tokenApprovalInfo === void 0 ? void 0 : tokenApprovalInfo.action) || (tokenApprovalInfo === null || tokenApprovalInfo === void 0 ? void 0 : tokenApprovalInfo.action) === ApprovalAction.Unknown;
    return (getIsWrapApplicable({ derivedSwapInfo }) ||
        getSwapInputExceedsBalance({ derivedSwapInfo }) ||
        approvalInfoMissing ||
        missingSig);
}
/** Returns an error if simulation fails on backend and we expect the swap transaction to fail */
export function getSimulationError({ swapQuote, isRevokeNeeded, }) {
    var _a;
    if (!isClassicQuote(swapQuote)) {
        return null;
    }
    const validSimulationErrors = (_a = swapQuote === null || swapQuote === void 0 ? void 0 : swapQuote.txFailureReasons) === null || _a === void 0 ? void 0 : _a.filter((reason) => {
        const isExpectedErrorFromRevoke = isRevokeNeeded && reason === TransactionFailureReason.SIMULATION_ERROR;
        return !isExpectedErrorFromRevoke;
    });
    if ((validSimulationErrors === null || validSimulationErrors === void 0 ? void 0 : validSimulationErrors.includes(TransactionFailureReason.SIMULATION_ERROR)) ||
        (validSimulationErrors === null || validSimulationErrors === void 0 ? void 0 : validSimulationErrors.includes(TransactionFailureReason.SLIPPAGE_TOO_LOW))) {
        return new Error(UNKNOWN_SIM_ERROR);
    }
    return null;
}
export function createProcessSwapResponse({ activeGasStrategy }) {
    return function processSwapResponse({ response, error, swapQuote, isSwapLoading, permitData, swapRequestParams, isRevokeNeeded, permitsDontNeedSignature, }) {
        var _a, _b;
        // We use the gasFee estimate from quote, as its more accurate
        const swapGasFee = {
            value: swapQuote === null || swapQuote === void 0 ? void 0 : swapQuote.gasFee,
            displayValue: convertGasFeeToDisplayValue(swapQuote === null || swapQuote === void 0 ? void 0 : swapQuote.gasFee, activeGasStrategy),
        };
        // This is a case where simulation fails on backend, meaning txn is expected to fail
        const simulationError = getSimulationError({ swapQuote, isRevokeNeeded });
        const gasEstimateError = simulationError ? new Error(UNKNOWN_SIM_ERROR) : error;
        const gasFeeResult = {
            value: swapGasFee.value,
            displayValue: swapGasFee.displayValue,
            isLoading: isSwapLoading,
            error: gasEstimateError,
        };
        const activeGasEstimate = (_a = response === null || response === void 0 ? void 0 : response.gasEstimates) === null || _a === void 0 ? void 0 : _a.find((e) => areEqualGasStrategies(e.strategy, activeGasStrategy));
        const swapGasEstimate = activeGasEstimate
            ? {
                activeEstimate: activeGasEstimate,
                shadowEstimates: (_b = response === null || response === void 0 ? void 0 : response.gasEstimates) === null || _b === void 0 ? void 0 : _b.filter((e) => e !== activeGasEstimate),
            }
            : undefined;
        const gasEstimate = {
            swapEstimates: swapGasEstimate,
        };
        return {
            gasFeeResult,
            txRequests: response === null || response === void 0 ? void 0 : response.transactions,
            permitData: permitsDontNeedSignature ? undefined : permitData,
            gasEstimate,
            swapRequestArgs: swapRequestParams,
        };
    };
}
export function getIsWrapApplicable({ derivedSwapInfo }) {
    const { trade } = derivedSwapInfo.trade;
    const isUniswapXWrap = trade && isUniswapX(trade) && trade.needsWrap;
    return Boolean(derivedSwapInfo.wrapType !== WrapType.NotApplicable || isUniswapXWrap);
}
/** Extracts classic or bridge quote from a quote response */
export function getBridgeOrClassicQuoteResponse({ quote, }) {
    if (quote && (isClassic(quote) || isBridge(quote))) {
        return quote;
    }
    return undefined;
}
export function createLogSwapRequestErrors({ trace }) {
    return function logSwapRequestErrors({ txRequest, gasFeeResult, derivedSwapInfo, transactionSettings, previousRequestId, }) {
        var _a, _b;
        const quote = (_a = derivedSwapInfo.trade.trade) === null || _a === void 0 ? void 0 : _a.quote;
        const isNewQuote = (quote === null || quote === void 0 ? void 0 : quote.requestId) !== previousRequestId;
        // Only log errors if we have a new valid quote
        if (!quote || !isNewQuote) {
            return;
        }
        const swapQuote = (_b = getBridgeOrClassicQuoteResponse({ quote })) === null || _b === void 0 ? void 0 : _b.quote;
        if (gasFeeResult.error) {
            logger.warn('useTransactionRequestInfo', 'useTransactionRequestInfo', UNKNOWN_SIM_ERROR, {
                ...getBaseTradeAnalyticsPropertiesFromSwapInfo({ derivedSwapInfo, transactionSettings, trace }),
                // we explicitly log it here to show on Datadog dashboard
                chainLabel: getChainLabel(derivedSwapInfo.chainId),
                requestId: quote === null || quote === void 0 ? void 0 : quote.requestId,
                quoteId: swapQuote === null || swapQuote === void 0 ? void 0 : swapQuote.quoteId,
                error: gasFeeResult.error,
                simulationFailureReasons: isClassicQuote(swapQuote) ? swapQuote === null || swapQuote === void 0 ? void 0 : swapQuote.txFailureReasons : undefined,
                txRequest,
            });
            if (!(isMobileApp || isExtension)) {
                sendAnalyticsEvent(SwapEventName.SWAP_ESTIMATE_GAS_CALL_FAILED, {
                    ...getBaseTradeAnalyticsPropertiesFromSwapInfo({ derivedSwapInfo, transactionSettings, trace }),
                    error: gasFeeResult.error,
                    txRequest,
                    simulationFailureReasons: isClassicQuote(swapQuote) ? swapQuote === null || swapQuote === void 0 ? void 0 : swapQuote.txFailureReasons : undefined,
                });
            }
        }
    };
}
export function createGasFields({ swapTxInfo, approvalTxInfo, permitTxInfo = EMPTY_PERMIT_TX_INFO, }) {
    const { approvalGasFeeResult, revokeGasFeeResult } = approvalTxInfo;
    // Gas fees for: swap from quote response directly, wrap from Gas Fee API, approvals from checkApprovalQuery
    const gasFee = mergeGasFeeResults(swapTxInfo.gasFeeResult, approvalGasFeeResult, revokeGasFeeResult, permitTxInfo.gasFeeResult);
    const gasFeeEstimation = {
        ...swapTxInfo.gasEstimate,
        approvalEstimates: approvalGasFeeResult.gasEstimates,
    };
    return {
        gasFee,
        gasFeeEstimation,
    };
}
export function createApprovalFields({ approvalTxInfo, }) {
    const { tokenApprovalInfo } = approvalTxInfo;
    const approveTxRequest = validateTransactionRequest(tokenApprovalInfo === null || tokenApprovalInfo === void 0 ? void 0 : tokenApprovalInfo.txRequest);
    const revocationTxRequest = validateTransactionRequest(tokenApprovalInfo === null || tokenApprovalInfo === void 0 ? void 0 : tokenApprovalInfo.cancelTxRequest);
    return {
        approveTxRequest,
        revocationTxRequest,
    };
}
export function getClassicSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo, permitTxInfo, }) {
    const txRequests = validateTransactionRequests(swapTxInfo.txRequests);
    const unsigned = Boolean(isInterface && swapTxInfo.permitData);
    const typedData = validatePermit(swapTxInfo.permitData);
    const permit = typedData
        ? { method: PermitMethod.TypedData, typedData }
        : (permitTxInfo === null || permitTxInfo === void 0 ? void 0 : permitTxInfo.permitTxRequest)
            ? { method: PermitMethod.Transaction, txRequest: permitTxInfo.permitTxRequest }
            : undefined;
    return {
        routing: trade.routing,
        trade,
        ...createGasFields({ swapTxInfo, approvalTxInfo, permitTxInfo }),
        ...createApprovalFields({ approvalTxInfo }),
        swapRequestArgs: swapTxInfo.swapRequestArgs,
        unsigned,
        txRequests,
        permit,
    };
}
const EMPTY_PERMIT_TX_INFO = {
    permitTxRequest: undefined,
    gasFeeResult: {
        value: '0',
        displayValue: '0',
        isLoading: false,
        error: null,
    },
};
export function usePermitTxInfo({ quote }) {
    const classicQuote = quote && isClassic(quote) ? quote : undefined;
    const activeGasStrategy = useActiveGasStrategy(classicQuote === null || classicQuote === void 0 ? void 0 : classicQuote.quote.chainId, 'swap');
    const getPermitTxInfo = useMemo(() => createGetPermitTxInfo({ activeGasStrategy }), [activeGasStrategy]);
    return useMemo(() => {
        if (!classicQuote) {
            return EMPTY_PERMIT_TX_INFO;
        }
        return getPermitTxInfo({ quote: classicQuote });
    }, [getPermitTxInfo, classicQuote]);
}
export function createGetPermitTxInfo({ activeGasStrategy }) {
    return function getPermitTxInfo({ quote }) {
        const permitTxRequest = validateTransactionRequest(quote.permitTransaction);
        if (!permitTxRequest) {
            return EMPTY_PERMIT_TX_INFO;
        }
        return {
            permitTxRequest,
            gasFeeResult: {
                value: quote.permitGasFee,
                displayValue: convertGasFeeToDisplayValue(quote.permitGasFee, activeGasStrategy),
                isLoading: false,
                error: null,
            },
        };
    };
}
export function getBridgeSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo, }) {
    const txRequests = validateTransactionRequests(swapTxInfo.txRequests);
    return {
        routing: trade.routing,
        trade,
        ...createGasFields({ swapTxInfo, approvalTxInfo }),
        ...createApprovalFields({ approvalTxInfo }),
        txRequests,
    };
}
export function getWrapTxAndGasInfo({ swapTxInfo }) {
    const txRequests = validateTransactionRequests(swapTxInfo.txRequests);
    return {
        routing: Routing.CLASSIC,
        txRequests,
        swapRequestArgs: swapTxInfo.swapRequestArgs,
        permit: undefined,
        unsigned: false,
        approveTxRequest: undefined,
        revocationTxRequest: undefined,
        gasFee: swapTxInfo.gasFeeResult,
        gasFeeEstimation: swapTxInfo.gasEstimate,
    };
}
export function getFallbackSwapTxAndGasInfo({ swapTxInfo, approvalTxInfo, }) {
    const txRequests = validateTransactionRequests(swapTxInfo.txRequests);
    return {
        routing: Routing.CLASSIC,
        ...createGasFields({ swapTxInfo, approvalTxInfo }),
        ...createApprovalFields({ approvalTxInfo }),
        txRequests,
        permit: undefined,
        swapRequestArgs: swapTxInfo.swapRequestArgs,
        unsigned: false,
    };
}
//# sourceMappingURL=utils.js.map