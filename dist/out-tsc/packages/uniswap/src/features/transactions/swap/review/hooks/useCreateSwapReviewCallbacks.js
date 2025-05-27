import { useCallback, useMemo } from 'react';
import { TransactionScreen } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { createTransactionId } from 'uniswap/src/utils/createTransactionId';
import { isInterface } from 'utilities/src/platform';
import { useEvent } from 'utilities/src/react/hooks';
export function useCreateSwapReviewCallbacks(ctx) {
    const { resetCurrentStep, setScreen, authTrigger, onSubmitSwap, setSubmissionError, setRetrySwap, onClose, showWarningModal, warningAcknowledged, shouldSubmitTx, setShowWarningModal, setWarningAcknowledged, setShouldSubmitTx, getExecuteSwapService, updateSwapForm, reviewScreenWarning, setCurrentStep, setSteps, } = ctx;
    const onFailure = useCallback((error, onPressRetry) => {
        resetCurrentStep();
        // Create a new txId for the next transaction, as the existing one may be used in state to track the failed submission.
        const newTxId = createTransactionId();
        updateSwapForm({ isSubmitting: false, txId: newTxId, showPendingUI: false });
        setSubmissionError(error);
        setRetrySwap(() => onPressRetry);
    }, [updateSwapForm, setSubmissionError, resetCurrentStep, setRetrySwap]);
    const onSuccess = useCallback(() => {
        // On interface, the swap component stays mounted; after swap we reset the form to avoid showing the previous values.
        if (isInterface) {
            updateSwapForm({ exactAmountFiat: undefined, exactAmountToken: '', isSubmitting: false, showPendingUI: false });
            setScreen(TransactionScreen.Form);
        }
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [setScreen, updateSwapForm, onClose]);
    const onPending = useCallback(() => {
        updateSwapForm({ showPendingUI: true });
    }, [updateSwapForm]);
    const swapTxContext = useSwapTxContext();
    const getSwapTxContext = useEvent(() => swapTxContext);
    const executeSwapService = useMemo(() => getExecuteSwapService({
        onSuccess,
        onFailure,
        onPending,
        setCurrentStep,
        setSteps,
        getSwapTxContext,
    }), [getExecuteSwapService, onSuccess, onFailure, onPending, setCurrentStep, setSteps, getSwapTxContext]);
    const submitTransaction = useCallback(() => {
        if (reviewScreenWarning && !showWarningModal && !warningAcknowledged) {
            setShouldSubmitTx(true);
            setShowWarningModal(true);
            return;
        }
        executeSwapService.executeSwap();
    }, [
        reviewScreenWarning,
        showWarningModal,
        warningAcknowledged,
        setShouldSubmitTx,
        setShowWarningModal,
        executeSwapService,
    ]);
    const onSwapButtonClick = useCallback(async () => {
        updateSwapForm({ isSubmitting: true });
        if (authTrigger) {
            await authTrigger({
                successCallback: submitTransaction,
                failureCallback: onFailure,
            });
        }
        else {
            submitTransaction();
        }
        await (onSubmitSwap === null || onSubmitSwap === void 0 ? void 0 : onSubmitSwap());
    }, [authTrigger, onFailure, submitTransaction, updateSwapForm, onSubmitSwap]);
    const onConfirmWarning = useCallback(() => {
        setWarningAcknowledged(true);
        setShowWarningModal(false);
        if (shouldSubmitTx) {
            executeSwapService.executeSwap();
        }
    }, [shouldSubmitTx, executeSwapService, setShowWarningModal, setWarningAcknowledged]);
    const onCancelWarning = useCallback(() => {
        if (shouldSubmitTx) {
            onFailure();
        }
        setShowWarningModal(false);
        setWarningAcknowledged(false);
        setShouldSubmitTx(false);
    }, [onFailure, shouldSubmitTx, setShowWarningModal, setWarningAcknowledged, setShouldSubmitTx]);
    const onShowWarning = useCallback(() => {
        setShowWarningModal(true);
    }, [setShowWarningModal]);
    const onCloseWarning = useCallback(() => {
        setShowWarningModal(false);
    }, [setShowWarningModal]);
    return {
        onSwapButtonClick,
        onConfirmWarning,
        onCancelWarning,
        onShowWarning,
        onCloseWarning,
    };
}
//# sourceMappingURL=useCreateSwapReviewCallbacks.js.map