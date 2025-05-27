import { createContext, useContext } from 'react';
import { useSwapReviewCallbacks } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewCallbacksContext';
import { useSwapReviewState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewStateContext';
import { CurrencyField } from 'uniswap/src/types/currency';
export const SwapReviewTransactionContext = createContext(null);
export const useSwapReviewTransactionState = () => {
    const context = useContext(SwapReviewTransactionContext);
    if (!context) {
        throw new Error('useSwapReview must be used within a SwapReviewContextProvider');
    }
    return context;
};
export function useIsSwapReviewLoading() {
    const { derivedSwapInfo, acceptedDerivedSwapInfo, isWrap, indicativeTrade, acceptedTrade, trade } = useSwapReviewTransactionState();
    // A missing `acceptedTrade` or `trade` can happen when the user leaves the app and comes back to the review screen after 1 minute when the TTL for the quote has expired.
    // When that happens, we remove the quote from the cache before refetching, so there's no `trade`.
    return !derivedSwapInfo || !acceptedDerivedSwapInfo || (!isWrap && !indicativeTrade && (!acceptedTrade || !trade));
}
export function useIsSwapMissingParams() {
    const { currencyInInfo, currencyOutInfo, acceptedDerivedSwapInfo, derivedSwapInfo } = useSwapReviewTransactionState();
    return (!currencyInInfo ||
        !currencyOutInfo ||
        !(derivedSwapInfo === null || derivedSwapInfo === void 0 ? void 0 : derivedSwapInfo.currencyAmounts[CurrencyField.INPUT]) ||
        !(derivedSwapInfo === null || derivedSwapInfo === void 0 ? void 0 : derivedSwapInfo.currencyAmounts[CurrencyField.OUTPUT]) ||
        !(acceptedDerivedSwapInfo === null || acceptedDerivedSwapInfo === void 0 ? void 0 : acceptedDerivedSwapInfo.currencyAmounts[CurrencyField.INPUT]) ||
        !(acceptedDerivedSwapInfo === null || acceptedDerivedSwapInfo === void 0 ? void 0 : acceptedDerivedSwapInfo.currencyAmounts[CurrencyField.OUTPUT]));
}
export function useSwapReviewError() {
    const { onSwapButtonClick } = useSwapReviewCallbacks();
    const { submissionError, setSubmissionError, onPressRetry } = useSwapReviewState();
    return {
        submissionError,
        setSubmissionError,
        onSwapButtonClick,
        onPressRetry,
    };
}
//# sourceMappingURL=SwapReviewTransactionContext.js.map