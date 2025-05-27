import { jsx as _jsx } from "react/jsx-runtime";
import { useSporeColors } from 'ui/src';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { TransactionSettingsModalContent } from 'uniswap/src/features/transactions/components/settings/TransactionSettingsModal/TransactionSettingsModalContent/TransactionSettingsModalContent';
import { TransactionSettingsContext, useTransactionSettingsContext, } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { SwapFormContext, useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { isExtension } from 'utilities/src/platform';
export function TransactionSettingsModalWallet({ settings, initialSelectedSetting, onClose, isOpen, }) {
    const swapFormContext = useSwapFormContext();
    const transactionSettingsContext = useTransactionSettingsContext();
    const colors = useSporeColors();
    return (_jsx(Modal, { alignment: isExtension ? 'top' : undefined, backgroundColor: colors.surface1.val, isModalOpen: isOpen, name: ModalName.SwapSettings, onClose: onClose, children: _jsx(TransactionSettingsContext.Provider, { value: transactionSettingsContext, children: _jsx(SwapFormContext.Provider, { value: swapFormContext, children: _jsx(TransactionSettingsModalContent, { initialSelectedSetting: initialSelectedSetting, settings: settings, onClose: onClose }) }) }) }));
}
//# sourceMappingURL=TransactionSettingsModalWallet.js.map