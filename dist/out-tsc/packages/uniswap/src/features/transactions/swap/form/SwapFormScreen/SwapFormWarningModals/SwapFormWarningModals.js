import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TokenWarningModal from 'uniswap/src/features/tokens/TokenWarningModal';
import { LowNativeBalanceModal } from 'uniswap/src/features/transactions/modals/LowNativeBalanceModal';
import { ViewOnlyModal } from 'uniswap/src/features/transactions/modals/ViewOnlyModal';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { BridgingModal } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormWarningModals/BridgingModal';
import { useBridgingModalActions } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useBridgingModalActions';
import { useCurrenciesWithProtectionWarnings } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useCurrenciesWithProtectionWarnings';
import { useOnReviewPress } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useOnReviewPress';
import { useSwapFormWarningState } from 'uniswap/src/features/transactions/swap/form/context/SwapFormWarningStateContext';
export const SwapFormWarningModals = () => {
    const { derivedSwapInfo } = useSwapFormContext();
    const { isTokenWarningModalVisible, isBridgingWarningModalVisible, isMaxNativeTransferModalVisible, isViewOnlyModalVisible, handleHideTokenWarningModal, handleHideBridgingWarningModal, handleHideMaxNativeTransferModal, handleHideViewOnlyModal, } = useSwapFormWarningState();
    const { onReviewPress, handleOnAcknowledgeTokenWarningPress, handleOnAcknowledgeLowNativeBalancePress } = useOnReviewPress();
    const { handleBridgingOnContinue, handleBridgingOnClose } = useBridgingModalActions({
        handleHideBridgingWarningModal,
        onReviewPress,
    });
    const { currencyInfo0, currencyInfo1 } = useCurrenciesWithProtectionWarnings();
    return (_jsxs(_Fragment, { children: [_jsx(LowNativeBalanceModal, { isOpen: isMaxNativeTransferModalVisible, onClose: handleHideMaxNativeTransferModal, onAcknowledge: handleOnAcknowledgeLowNativeBalancePress }), _jsx(ViewOnlyModal, { isOpen: isViewOnlyModalVisible, onDismiss: handleHideViewOnlyModal }), _jsx(BridgingModal, { isOpen: isBridgingWarningModalVisible, derivedSwapInfo: derivedSwapInfo, onContinue: handleBridgingOnContinue, onClose: handleBridgingOnClose }), currencyInfo0 && (_jsx(TokenWarningModal, { isVisible: isTokenWarningModalVisible, currencyInfo0: currencyInfo0, currencyInfo1: currencyInfo1, closeModalOnly: handleHideTokenWarningModal, onAcknowledge: handleOnAcknowledgeTokenWarningPress }))] }));
};
//# sourceMappingURL=SwapFormWarningModals.js.map