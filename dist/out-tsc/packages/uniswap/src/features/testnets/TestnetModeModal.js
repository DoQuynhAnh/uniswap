import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex } from 'ui/src';
import { Wrench } from 'ui/src/components/icons/Wrench';
import { InfoLinkModal } from 'uniswap/src/components/modals/InfoLinkModal';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
export function TestnetModeModal({ isOpen, descriptionCopy, unsupported = false, showCloseButton = false, onClose, }) {
    const { t } = useTranslation();
    return (_jsx(InfoLinkModal, { title: unsupported ? t('common.notSupported') : t('settings.setting.wallet.testnetMode.title'), description: (descriptionCopy !== null && descriptionCopy !== void 0 ? descriptionCopy : unsupported) ? t('testnet.unsupported') : t('settings.setting.wallet.testnetMode.description'), isOpen: isOpen, buttonText: t('common.button.close'), name: ModalName.TestnetMode, icon: _jsx(Flex, { centered: true, backgroundColor: "$surface3", borderRadius: "$rounded12", p: "$spacing12", children: _jsx(Wrench, { color: "$neutral1", size: "$icon.24" }) }), showCloseButton: showCloseButton, height: "max-content", onDismiss: onClose, onButtonPress: onClose }));
}
//# sourceMappingURL=TestnetModeModal.js.map