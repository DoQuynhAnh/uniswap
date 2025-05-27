import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Popover } from 'ui/src';
import { TransactionSettingsModal } from 'uniswap/src/features/transactions/components/settings/TransactionSettingsModal/TransactionSettingsModal';
import { SlippageUpdate } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippageUpdate/SlippageUpdate';
import { isInterface } from 'utilities/src/platform';
export function SlippageEdit({ onWalletSlippageEditPress: onSlippageEditPress, }) {
    const { t } = useTranslation();
    const [showInterfaceSlippageSettings, setShowInterfaceSlippageSettings] = useState(false);
    const editButton = (_jsx(Button, { size: "xxsmall", emphasis: "secondary", fill: false, onPress: () => (isInterface ? setShowInterfaceSlippageSettings(true) : onSlippageEditPress === null || onSlippageEditPress === void 0 ? void 0 : onSlippageEditPress()), children: t('common.button.edit') }));
    if (!isInterface) {
        return editButton;
    }
    // Web needs to use a popover, so we need to wrap both the button and the modal in a popover
    return (_jsxs(Popover, { placement: "bottom-end", open: showInterfaceSlippageSettings, onOpenChange: (open) => {
            if (!open && isInterface) {
                setShowInterfaceSlippageSettings(false);
            }
        }, children: [_jsx(Popover.Trigger, { asChild: true, children: editButton }), _jsx(TransactionSettingsModal, { settings: [SlippageUpdate], initialSelectedSetting: SlippageUpdate, isOpen: showInterfaceSlippageSettings, onClose: () => setShowInterfaceSlippageSettings(false) })] }));
}
//# sourceMappingURL=SlippageEdit.js.map