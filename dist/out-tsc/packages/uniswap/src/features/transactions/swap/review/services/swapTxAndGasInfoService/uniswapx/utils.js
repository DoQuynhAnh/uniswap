import { createApprovalFields, createGasFields, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { PermitMethod, } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { validatePermit, validateTransactionRequests } from 'uniswap/src/features/transactions/swap/utils/trade';
// TODO(WEB-7432): Remove deprecated UniswapX Wrap logic
export function processUniswapXResponse({ wrapTransactionRequestInfo, permitData, needsWrap, }) {
    if (needsWrap && wrapTransactionRequestInfo) {
        return {
            ...wrapTransactionRequestInfo, // Extend the wrap response if a wrap is needed
            permitData,
        };
    }
    return {
        gasFeeResult: { value: '0', displayValue: '0', error: null, isLoading: false }, // Set a 0 gas fee when no wrap is needed
        gasEstimate: {},
        txRequests: undefined,
        swapRequestArgs: undefined,
        permitData,
    };
}
function createUniswapXGasBreakdown({ trade, approvalTxInfo, swapTxInfo, }) {
    const { approvalGasFeeResult } = approvalTxInfo;
    const gasFeeBreakdown = {
        classicGasUseEstimateUSD: trade.quote.quote.classicGasUseEstimateUSD,
        approvalCost: approvalGasFeeResult === null || approvalGasFeeResult === void 0 ? void 0 : approvalGasFeeResult.displayValue,
        wrapCost: swapTxInfo.gasFeeResult.displayValue,
        inputTokenSymbol: trade.inputAmount.currency.wrapped.symbol,
    };
    return { gasFeeBreakdown };
}
export function getUniswapXSwapTxAndGasInfo({ trade, swapTxInfo, approvalTxInfo, }) {
    const txRequests = validateTransactionRequests(swapTxInfo.txRequests);
    const permit = validatePermit(swapTxInfo.permitData);
    return {
        routing: trade.routing,
        trade,
        ...createGasFields({ swapTxInfo, approvalTxInfo }),
        ...createApprovalFields({ approvalTxInfo }),
        ...createUniswapXGasBreakdown({ trade, approvalTxInfo, swapTxInfo }),
        wrapTxRequest: txRequests === null || txRequests === void 0 ? void 0 : txRequests[0],
        permit: permit ? { method: PermitMethod.TypedData, typedData: permit } : undefined,
    };
}
//# sourceMappingURL=utils.js.map