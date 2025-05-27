import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { getRelevantTokenWarningSeverity } from 'uniswap/src/features/transactions/TransactionDetails/utils/getRelevantTokenWarningSeverity';
import { useFeeOnTransferAmounts } from 'uniswap/src/features/transactions/swap/hooks/useFeeOnTransferAmount';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { SwapReviewTransactionContext, } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewTransactionContext';
import { isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { isWrapAction } from 'uniswap/src/features/transactions/swap/utils/wrap';
import { CurrencyField } from 'uniswap/src/types/currency';
export function SwapReviewTransactionContextProvider({ children, derivedSwapInfo, swapTxContext, swapAcceptedDerivedSwapInfo, newTradeRequiresAcceptance, }) {
    const uniswapXGasBreakdown = isUniswapX(swapTxContext) ? swapTxContext.gasFeeBreakdown : undefined;
    const { chainId, currencies, wrapType, trade: { trade, indicativeTrade }, // TODO(WEB-5823): rm indicative trade usage from review screen
     } = derivedSwapInfo;
    const { blockingWarning, reviewScreenWarning } = useParsedSwapWarnings();
    const isWrap = isWrapAction(wrapType);
    const acceptedDerivedSwapInfo = isWrap ? derivedSwapInfo : swapAcceptedDerivedSwapInfo;
    const acceptedTrade = acceptedDerivedSwapInfo === null || acceptedDerivedSwapInfo === void 0 ? void 0 : acceptedDerivedSwapInfo.trade.trade;
    const feeOnTransferProps = useFeeOnTransferAmounts(acceptedDerivedSwapInfo);
    const tokenWarningProps = getRelevantTokenWarningSeverity(acceptedDerivedSwapInfo);
    const txSimulationErrors = useMemo(() => {
        var _a;
        if (!trade || !isClassic(trade)) {
            return undefined;
        }
        return (_a = trade.quote) === null || _a === void 0 ? void 0 : _a.quote.txFailureReasons;
    }, [trade]);
    // Pack up all the values and callbacks into the context value
    const contextValue = {
        // State
        trade: trade !== null && trade !== void 0 ? trade : undefined,
        indicativeTrade: indicativeTrade !== null && indicativeTrade !== void 0 ? indicativeTrade : undefined,
        acceptedTrade: acceptedTrade !== null && acceptedTrade !== void 0 ? acceptedTrade : undefined,
        swapTxContext,
        gasFee: swapTxContext.gasFee,
        uniswapXGasBreakdown,
        derivedSwapInfo,
        acceptedDerivedSwapInfo,
        isWrap,
        blockingWarning,
        reviewScreenWarning,
        txSimulationErrors,
        newTradeRequiresAcceptance,
        feeOnTransferProps,
        tokenWarningProps,
        currencyInInfo: currencies[CurrencyField.INPUT],
        currencyOutInfo: currencies[CurrencyField.OUTPUT],
        chainId,
    };
    return _jsx(SwapReviewTransactionContext.Provider, { value: contextValue, children: children });
}
//# sourceMappingURL=SwapReviewTransactionContextProvider.js.map