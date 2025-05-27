import { jsx as _jsx } from "react/jsx-runtime";
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { SwapReviewCallbacksContext } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewCallbacksContext';
import { useSwapReviewState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewStateContext';
import { useSwapWarningState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewWarningStateContext';
import { useCreateSwapReviewCallbacks } from 'uniswap/src/features/transactions/swap/review/hooks/useCreateSwapReviewCallbacks';
export const SwapReviewCallbacksContextProvider = ({ children, setScreen, authTrigger, onSubmitSwap, onClose, onAcceptTrade, getExecuteSwapService, }) => {
    const { showWarningModal, warningAcknowledged, shouldSubmitTx, setShouldSubmitTx, setShowWarningModal, setWarningAcknowledged, } = useSwapWarningState();
    const { resetCurrentStep, setSubmissionError, setRetrySwap } = useSwapReviewState();
    const { updateSwapForm } = useSwapFormContext();
    const { reviewScreenWarning } = useParsedSwapWarnings();
    const { setCurrentStep, setSteps } = useSwapReviewState();
    const { onSwapButtonClick, onConfirmWarning, onCancelWarning, onShowWarning, onCloseWarning } = useCreateSwapReviewCallbacks({
        resetCurrentStep,
        setSubmissionError,
        setRetrySwap,
        showWarningModal,
        warningAcknowledged,
        shouldSubmitTx,
        setShowWarningModal,
        setWarningAcknowledged,
        setShouldSubmitTx,
        setScreen,
        authTrigger,
        onSubmitSwap,
        onClose,
        getExecuteSwapService,
        updateSwapForm,
        reviewScreenWarning,
        setCurrentStep,
        setSteps,
    });
    return (_jsx(SwapReviewCallbacksContext.Provider, { value: { onSwapButtonClick, onConfirmWarning, onCancelWarning, onShowWarning, onCloseWarning, onAcceptTrade }, children: children }));
};
//# sourceMappingURL=SwapReviewCallbacksContextProvider.js.map