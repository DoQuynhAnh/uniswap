import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea } from 'ui/src';
import { InfoCircle } from 'ui/src/components/icons/InfoCircle';
import { BlockedAddressModal } from 'uniswap/src/features/transactions/modals/BlockedAddressModal';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
export function BlockedAddressWarning({ isRecipientBlocked, ...props }) {
    const { t } = useTranslation();
    const [showBlockedAddressModal, setShowBlockedAddressModal] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(BlockedAddressModal, { isOpen: showBlockedAddressModal, onClose: () => setShowBlockedAddressModal(false) }), _jsx(TouchableArea, { onPress: () => {
                    dismissNativeKeyboard();
                    setShowBlockedAddressModal(true);
                }, children: _jsxs(Flex, { gap: "$spacing8", ...props, children: [_jsx(InfoCircle, { color: "$neutral2", size: "$icon.16" }), _jsx(Text, { color: "$neutral2", variant: "subheading2", children: isRecipientBlocked ? t('send.warning.blocked.recipient') : t('send.warning.blocked.default') })] }) })] }));
}
//# sourceMappingURL=BlockedAddressWarning.js.map