import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Button, Flex, Text, useSporeColors } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { Passkey } from 'ui/src/components/icons/Passkey';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName, ModalName } from 'uniswap/src/features/telemetry/constants';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { openUri } from 'uniswap/src/utils/linking';
import { isWeb } from 'utilities/src/platform';
export var PasskeysHelpModalTypes;
(function (PasskeysHelpModalTypes) {
    PasskeysHelpModalTypes["Default"] = "default";
    PasskeysHelpModalTypes["InvalidPasskey"] = "invalidPasskey";
    PasskeysHelpModalTypes["TechnicalError"] = "technicalIssue";
})(PasskeysHelpModalTypes || (PasskeysHelpModalTypes = {}));
const passkeysHelpModalContent = {
    [PasskeysHelpModalTypes.Default]: {
        title: (t) => t('passkeys.help.modal.title'),
        subtitle: (t) => t('passkeys.help.modal.subtitle'),
        icon: (_jsx(Flex, { centered: true, borderRadius: "$rounded12", p: "$spacing12", backgroundColor: "$surface3", children: _jsx(Passkey, { color: "$neutral1", size: "$icon.24" }) })),
    },
    [PasskeysHelpModalTypes.InvalidPasskey]: {
        title: (t) => t('passkeys.help.modal.title.invalidPasskey'),
        subtitle: (t) => t('passkeys.help.modal.subtitle.invalidPasskey'),
        icon: (_jsx(Flex, { centered: true, borderRadius: "$rounded12", p: "$spacing12", backgroundColor: "$redLight", children: _jsx(AlertTriangleFilled, { color: "$statusCritical", size: "$icon.24" }) })),
    },
    [PasskeysHelpModalTypes.TechnicalError]: {
        title: (t) => t('passkeys.help.modal.title.technicalError'),
        subtitle: (t) => t('passkeys.help.modal.subtitle.technicalError'),
        icon: (_jsx(Flex, { centered: true, borderRadius: "$rounded12", p: "$spacing12", backgroundColor: "$redLight", children: _jsx(AlertTriangleFilled, { color: "$statusCritical", size: "$icon.24" }) })),
    },
};
export function PasskeysHelpModal({ isOpen, onClose, type = PasskeysHelpModalTypes.Default, accountName, }) {
    const { t } = useTranslation();
    const colors = useSporeColors();
    const onPressGetHelp = async () => {
        await openUri(uniswapUrls.helpArticleUrls.passkeysInfo);
    };
    const displayName = accountName !== null && accountName !== void 0 ? accountName : t('common.thisAccount');
    const modalContent = passkeysHelpModalContent[type];
    const title = modalContent.title(t);
    const subtitle = modalContent.subtitle(t);
    const icon = modalContent.icon;
    return (_jsx(Modal, { backgroundColor: colors.surface1.val, isDismissible: true, isModalOpen: isOpen, name: ModalName.PasskeysHelp, onClose: onClose, children: _jsxs(Flex, { centered: true, gap: "$spacing12", pb: isWeb ? '$none' : '$spacing12', pt: "$spacing12", px: isWeb ? '$none' : '$spacing24', children: [icon, _jsx(Text, { textAlign: "center", variant: "subheading1", children: title }), _jsxs(Text, { color: "$neutral2", textAlign: "center", variant: "subheading2", children: [subtitle, type === PasskeysHelpModalTypes.InvalidPasskey && (_jsxs(Text, { color: accountName ? '$neutral1' : '$neutral2', textAlign: "center", variant: "subheading2", display: "inline-flex", children: [displayName, "."] }))] }), _jsxs(Flex, { row: true, alignSelf: "stretch", gap: "$spacing12", pt: "$spacing24", children: [_jsx(Trace, { logPress: true, element: ElementName.Confirm, modal: ModalName.PasskeysHelp, children: _jsx(Button, { testID: TestID.Confirm, emphasis: "secondary", onPress: onPressGetHelp, children: _jsx(Text, { variant: "buttonLabel2", children: t('common.getHelp.button') }) }) }), _jsx(Trace, { logPress: true, element: ElementName.BackButton, modal: ModalName.PasskeysHelp, children: _jsx(Button, { emphasis: "primary", onPress: onClose, children: _jsx(Text, { variant: "buttonLabel2", color: "$surface1", children: t('common.button.close') }) }) })] })] }) }));
}
//# sourceMappingURL=PasskeysHelpModal.js.map