import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { Flex, Popover } from 'ui/src';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { AccountType } from 'uniswap/src/features/accounts/types';
import { TransactionSettingsModal } from 'uniswap/src/features/transactions/components/settings/TransactionSettingsModal/TransactionSettingsModal';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { ViewOnlyModal } from 'uniswap/src/features/transactions/modals/ViewOnlyModal';
import SlippageWarningModal from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/SlippageWarningModal';
import { SwapFormSettingsButton } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/SwapFormSettingsButton';
import { ViewOnlyButton } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/ViewOnlyButton';
import { useSlippageSettings } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/useSlippageSettings';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
import { isExtension, isInterface, isMobileApp, isMobileWeb } from 'utilities/src/platform';
import { useEvent } from 'utilities/src/react/hooks';
import { useBooleanState } from 'utilities/src/react/useBooleanState';
export function SwapFormSettings(props) {
    return (_jsx(SwapFormSettingsProvider, { children: _jsx(SwapFormSettingsInner, { ...props }) }));
}
function SwapFormSettingsInner({ settings, adjustTopAlignment = true, adjustRightAlignment = true, position = 'absolute', iconColor = '$neutral2', iconSize, defaultTitle, isBridgeTrade, }) {
    const account = useAccountMeta();
    const { customSlippageTolerance, slippageWarningModalSeen, updateTransactionSettings } = useTransactionSettingsContext();
    const { autoSlippageTolerance } = useSlippageSettings();
    const { isTransactionSettingsModalVisible, showViewOnlyModal, showSlippageWarningModal, handleShowTransactionSettingsModal, handleHideTransactionSettingsModal, handleShowViewOnlyModal, handleHideViewOnlyModal, handleShowSlippageWarningModal, handleHideSlippageWarningModal, } = useSwapFormSettingsContext();
    const onCloseSettingsModal = useEvent(() => {
        const shouldShowSlippageWarning = !slippageWarningModalSeen && customSlippageTolerance && customSlippageTolerance >= 20;
        if (shouldShowSlippageWarning) {
            // Delay showing the slippage warning modal to avoid conflict with popover dismissal for a smoother UX
            setTimeout(() => {
                handleShowSlippageWarningModal();
                updateTransactionSettings({ slippageWarningModalSeen: true });
            }, 80);
            // Leave swap settings modal open for mobile app (to layer modals), but close for web apps
            if (!isMobileApp) {
                handleHideTransactionSettingsModal();
            }
        }
        else {
            handleHideTransactionSettingsModal();
        }
    });
    const onPressSwapSettings = useEvent(() => {
        if (isTransactionSettingsModalVisible) {
            onCloseSettingsModal();
        }
        else {
            handleShowTransactionSettingsModal();
        }
        dismissNativeKeyboard();
    });
    const isViewOnlyWallet = (account === null || account === void 0 ? void 0 : account.type) === AccountType.Readonly;
    const topAlignment = adjustTopAlignment ? (isInterface ? -38 : 6) : 0;
    const rightAlignment = adjustRightAlignment ? (isMobileApp ? 24 : 4) : 0;
    const popoverOffset = isInterface
        ? { crossAxis: adjustRightAlignment ? 0 : 8, mainAxis: adjustTopAlignment ? 0 : 8 }
        : undefined;
    const shouldShowCustomSlippage = customSlippageTolerance && !isBridgeTrade;
    const meetsPlatformConditions = (isInterface || isExtension) && !isMobileWeb;
    const exceedsSlippageTolerance = !!customSlippageTolerance && customSlippageTolerance > autoSlippageTolerance;
    const shouldShowSettingsIconTooltip = meetsPlatformConditions && exceedsSlippageTolerance && !isTransactionSettingsModalVisible;
    return (_jsxs(_Fragment, { children: [_jsx(ViewOnlyModal, { isOpen: showViewOnlyModal, onDismiss: handleHideViewOnlyModal }), _jsx(SlippageWarningModal, { isOpen: showSlippageWarningModal, onClose: handleHideSlippageWarningModal }), _jsx(Flex, { row: true, gap: "$spacing4", position: position, top: topAlignment, right: rightAlignment, zIndex: "$default", children: isViewOnlyWallet ? (_jsx(ViewOnlyButton, { onPress: handleShowViewOnlyModal })) : (_jsx(Popover, { offset: popoverOffset, placement: "bottom-end", open: isTransactionSettingsModalVisible, onOpenChange: (open) => {
                        // Only close on interface because SwapSettings are rendered in a modal on mobile/extension
                        // and when click is triggered inside extension Modal it causes onOpenChange to trigger
                        if (!open && isInterface) {
                            onCloseSettingsModal();
                        }
                    }, children: _jsxs(Flex, { children: [_jsx(SwapFormSettingsButton, { shouldShowCustomSlippage: !!shouldShowCustomSlippage, customSlippageTolerance: customSlippageTolerance, shouldShowTooltip: shouldShowSettingsIconTooltip, iconColor: iconColor, iconSize: iconSize, onPress: onPressSwapSettings }), _jsx(TransactionSettingsModal, { settings: settings, defaultTitle: defaultTitle, isOpen: isTransactionSettingsModalVisible, onClose: onCloseSettingsModal })] }) })) })] }));
}
const SwapFormSettingsContext = createContext({
    isTransactionSettingsModalVisible: false,
    showViewOnlyModal: false,
    showSlippageWarningModal: false,
    handleShowTransactionSettingsModal: () => { },
    handleHideTransactionSettingsModal: () => { },
    handleShowViewOnlyModal: () => { },
    handleHideViewOnlyModal: () => { },
    handleShowSlippageWarningModal: () => { },
    handleHideSlippageWarningModal: () => { },
});
const SwapFormSettingsProvider = ({ children }) => {
    const { value: isTransactionSettingsModalVisible, setTrue: handleShowTransactionSettingsModal, setFalse: handleHideTransactionSettingsModal, } = useBooleanState(false);
    const { value: showViewOnlyModal, setTrue: handleShowViewOnlyModal, setFalse: handleHideViewOnlyModal, } = useBooleanState(false);
    const { value: showSlippageWarningModal, setTrue: handleShowSlippageWarningModal, setFalse: handleHideSlippageWarningModal, } = useBooleanState(false);
    return (_jsx(SwapFormSettingsContext.Provider, { value: {
            isTransactionSettingsModalVisible,
            showViewOnlyModal,
            showSlippageWarningModal,
            handleShowTransactionSettingsModal,
            handleHideTransactionSettingsModal,
            handleShowViewOnlyModal,
            handleHideViewOnlyModal,
            handleShowSlippageWarningModal,
            handleHideSlippageWarningModal,
        }, children: children }));
};
export const useSwapFormSettingsContext = () => {
    const context = useContext(SwapFormSettingsContext);
    if (!context) {
        throw new Error('useSwapFormSettingsContext must be used within a SwapFormSettingsProvider');
    }
    return context;
};
//# sourceMappingURL=SwapFormSettings.js.map