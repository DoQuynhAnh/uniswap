import { useCallback } from 'react';
export const useBridgingModalActions = ({ handleHideBridgingWarningModal, onReviewPress, }) => {
    const handleBridgingOnContinue = useCallback(() => {
        handleHideBridgingWarningModal();
        onReviewPress({ skipBridgingWarning: true, skipMaxTransferWarning: false, skipTokenProtectionWarning: true });
    }, [onReviewPress, handleHideBridgingWarningModal]);
    return {
        handleBridgingOnContinue,
        handleBridgingOnClose: handleHideBridgingWarningModal,
    };
};
//# sourceMappingURL=useBridgingModalActions.js.map