import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Trans, useTranslation } from 'react-i18next';
import { Button, Flex, Text, useSporeColors } from 'ui/src';
import { ExternalLink } from 'ui/src/components/icons/ExternalLink';
import { Passkey } from 'ui/src/components/icons/Passkey';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName, ModalName } from 'uniswap/src/features/telemetry/constants';
import { openUri } from 'uniswap/src/utils/linking';
import { isWeb } from 'utilities/src/platform';
export function PasskeyManagementModal({ isOpen, onClose, address }) {
    const colors = useSporeColors();
    const { t } = useTranslation();
    const passkeyManagementUrl = new URL(uniswapUrls.passkeysManagementUrl);
    const launchPasskeyManagement = async () => {
        await openUri(passkeyManagementUrl.toString() + (address ? `/${address}` : ''));
        onClose();
    };
    return (_jsx(Modal, { backgroundColor: colors.surface1.val, isDismissible: true, isModalOpen: isOpen, name: ModalName.PasskeyManagement, onClose: onClose, children: _jsxs(Flex, { centered: true, gap: "$spacing16", pb: isWeb ? '$none' : '$spacing24', pt: isWeb ? '$spacing20' : '$spacing12', px: isWeb ? '$none' : '$spacing24', children: [_jsx(Flex, { centered: true, borderRadius: "$rounded12", p: "$spacing12", backgroundColor: "$surface3", children: _jsx(Passkey, { color: "$neutral1", size: "$icon.24" }) }), _jsxs(Flex, { gap: "$spacing8", children: [_jsx(Text, { textAlign: "center", variant: "subheading1", children: t('passkeys.manage.modal.title') }), _jsx(Text, { color: "$neutral2", textAlign: "center", variant: "body3", children: _jsx(Trans, { components: {
                                    highlightLink: _jsx(Text, { color: "$accent1", variant: "buttonLabel3", onPress: launchPasskeyManagement }),
                                }, i18nKey: "passkeys.manage.modal.subtitle", values: {
                                    passkeyManagementUrl: passkeyManagementUrl.hostname + passkeyManagementUrl.pathname,
                                } }) })] }), _jsx(Flex, { row: true, alignSelf: "stretch", pt: "$spacing8", children: _jsx(Trace, { logPress: true, element: ElementName.Continue, modal: ModalName.PasskeyManagement, children: _jsx(Button, { fill: true, icon: _jsx(ExternalLink, { color: "$neutral1", size: "$icon.20" }), iconPosition: "after", testID: ElementName.Continue, emphasis: "secondary", onPress: launchPasskeyManagement, children: t('common.button.continue') }) }) })] }) }));
}
//# sourceMappingURL=PasskeyManagementModal.js.map