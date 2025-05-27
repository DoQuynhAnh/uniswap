import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { TransactionDetails } from 'uniswap/src/features/transactions/TransactionDetails/TransactionDetails';
import { useSwapReviewCallbacks } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewCallbacksContext';
import { useSwapReviewTransactionState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewTransactionContext';
export const SwapReviewWrapTransactionDetails = memo(function SwapReviewWrapTransactionDetails() {
    const { chainId, gasFee, reviewScreenWarning, txSimulationErrors } = useSwapReviewTransactionState();
    const { onShowWarning } = useSwapReviewCallbacks();
    return (_jsx(TransactionDetails, { chainId: chainId, gasFee: gasFee, warning: reviewScreenWarning === null || reviewScreenWarning === void 0 ? void 0 : reviewScreenWarning.warning, txSimulationErrors: txSimulationErrors, onShowWarning: onShowWarning }));
});
//# sourceMappingURL=SwapReviewWrapTransactionDetails.js.map