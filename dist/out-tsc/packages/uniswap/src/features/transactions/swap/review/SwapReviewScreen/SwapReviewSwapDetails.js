import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { SwapDetails } from 'uniswap/src/features/transactions/swap/review/SwapDetails/SwapDetails';
import { useSwapReviewCallbacks } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewCallbacksContext';
import { useSwapReviewTransactionState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewTransactionContext';
import { useSwapWarningState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewWarningStateContext';
export const SwapReviewSwapDetails = memo(function SwapReviewSwapDetails() {
    const { acceptedDerivedSwapInfo, derivedSwapInfo, feeOnTransferProps, tokenWarningProps, gasFee, newTradeRequiresAcceptance, uniswapXGasBreakdown, reviewScreenWarning, txSimulationErrors, } = useSwapReviewTransactionState();
    const { tokenWarningChecked, setTokenWarningChecked } = useSwapWarningState();
    const { onAcceptTrade, onShowWarning } = useSwapReviewCallbacks();
    const { autoSlippageTolerance, customSlippageTolerance } = useTransactionSettingsContext();
    if (!derivedSwapInfo || !acceptedDerivedSwapInfo) {
        return null;
    }
    return (_jsx(SwapDetails, { acceptedDerivedSwapInfo: acceptedDerivedSwapInfo, autoSlippageTolerance: autoSlippageTolerance, customSlippageTolerance: customSlippageTolerance, derivedSwapInfo: derivedSwapInfo, feeOnTransferProps: feeOnTransferProps, tokenWarningProps: tokenWarningProps, tokenWarningChecked: tokenWarningChecked, setTokenWarningChecked: setTokenWarningChecked, gasFee: gasFee, newTradeRequiresAcceptance: newTradeRequiresAcceptance, uniswapXGasBreakdown: uniswapXGasBreakdown, warning: reviewScreenWarning === null || reviewScreenWarning === void 0 ? void 0 : reviewScreenWarning.warning, txSimulationErrors: txSimulationErrors, onAcceptTrade: onAcceptTrade, onShowWarning: onShowWarning }));
});
//# sourceMappingURL=SwapReviewSwapDetails.js.map