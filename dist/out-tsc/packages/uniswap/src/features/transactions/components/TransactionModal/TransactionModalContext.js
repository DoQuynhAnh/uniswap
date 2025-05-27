import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
export var TransactionScreen;
(function (TransactionScreen) {
    TransactionScreen["Form"] = "Form";
    TransactionScreen["Review"] = "Review";
})(TransactionScreen || (TransactionScreen = {}));
export const TransactionModalContext = createContext(undefined);
export function TransactionModalContextProvider({ children, renderBiometricsIcon, authTrigger, bottomSheetViewStyles, onClose, onCurrencyChange, openWalletRestoreModal, walletNeedsRestore, screen, setScreen, swapRedirectCallback, }) {
    const state = useMemo(() => ({
        renderBiometricsIcon,
        authTrigger,
        bottomSheetViewStyles,
        onClose,
        onCurrencyChange,
        openWalletRestoreModal,
        screen,
        setScreen,
        swapRedirectCallback,
        walletNeedsRestore,
    }), [
        renderBiometricsIcon,
        authTrigger,
        bottomSheetViewStyles,
        onClose,
        onCurrencyChange,
        openWalletRestoreModal,
        screen,
        setScreen,
        swapRedirectCallback,
        walletNeedsRestore,
    ]);
    return _jsx(TransactionModalContext.Provider, { value: state, children: children });
}
export const useTransactionModalContext = () => {
    const context = useContext(TransactionModalContext);
    if (context === undefined) {
        throw new Error('`useTransactionModalContext` must be used inside of `TransactionModalContextProvider`');
    }
    return context;
};
//# sourceMappingURL=TransactionModalContext.js.map