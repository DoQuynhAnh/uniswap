import { jsx as _jsx } from "react/jsx-runtime";
import { TransactionSettingsModalInterface } from 'uniswap/src/features/transactions/components/settings/TransactionSettingsModal/TransactionSettingsModalInterface';
import { TransactionSettingsModalWallet } from 'uniswap/src/features/transactions/components/settings/TransactionSettingsModal/TransactionSettingsModalWallet';
import { isInterface } from 'utilities/src/platform';
export function TransactionSettingsModal(props) {
    if (isInterface) {
        return _jsx(TransactionSettingsModalInterface, { ...props });
    }
    return _jsx(TransactionSettingsModalWallet, { ...props });
}
//# sourceMappingURL=TransactionSettingsModal.js.map