import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Flex, Image, Text, TouchableArea, UniversalImage, UniversalImageResizeMode } from 'ui/src';
import { ALL_NETWORKS_LOGO } from 'ui/src/assets';
import { GlobeFilled } from 'ui/src/components/icons/GlobeFilled';
import { X } from 'ui/src/components/icons/X';
import { borderRadii, iconSizes, zIndexes } from 'ui/src/theme';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { isInterface } from 'utilities/src/platform';
export function NetworkLogos({ chains }) {
    const { t } = useTranslation();
    const [isShowingModal, setIsShowingModal] = useState(false);
    const closeModal = useCallback(() => setIsShowingModal(false), []);
    const openModal = useCallback(() => setIsShowingModal(true), []);
    const chainPills = useMemo(() => (_jsx(Flex, { row: true, flexWrap: "wrap", justifyContent: "center", gap: "$gap12", children: chains.map((chain) => {
            const { label, logo } = getChainInfo(chain);
            return (_jsxs(Flex, { row: true, centered: true, p: "$spacing4", backgroundColor: "$surface2", width: "max-content", borderRadius: "$rounded8", gap: "$gap8", children: [logo && (_jsx(Image, { objectFit: "contain", source: logo, style: {
                            width: iconSizes.icon16,
                            height: iconSizes.icon16,
                            borderRadius: borderRadii.rounded4,
                        } })), _jsx(Text, { color: "$neutral1", variant: "body4", children: label })] }, chain));
        }) })), [chains]);
    return (_jsxs(_Fragment, { children: [_jsx(Flex, { row: true, centered: true, children: _jsx(Button, { size: "xxsmall", emphasis: "secondary", "aria-label": t('extension.connection.networks'), fill: false, icon: _jsx(UniversalImage, { allowLocalUri: true, uri: ALL_NETWORKS_LOGO, size: {
                            width: iconSizes.icon20,
                            height: iconSizes.icon20,
                            resizeMode: UniversalImageResizeMode.Contain,
                        } }), onPress: openModal, children: t('extension.connection.networks') }) }), _jsx(Modal, { name: ModalName.QRCodeNetworkInfo, isModalOpen: isShowingModal, onClose: closeModal, children: _jsxs(Flex, { gap: "$spacing12", px: "$padding16", pb: "$spacing4", alignItems: "center", mt: "$gap12", children: [isInterface && (_jsx(TouchableArea, { alignSelf: "flex-end", zIndex: zIndexes.default, onPress: closeModal, children: _jsx(X, { color: "$neutral2", size: "$icon.24" }) })), _jsx(Flex, { centered: true, p: "$padding12", backgroundColor: "$surface3", borderRadius: "$rounded12", children: _jsx(GlobeFilled, { color: "$neutral1", size: "$icon.20" }) }), _jsx(Text, { color: "$neutral1", mt: "$spacing2", textAlign: "center", variant: "subheading1", children: t('qrScanner.wallet.networks') }), chainPills, _jsx(LearnMoreLink, { textColor: "$neutral1", textVariant: "buttonLabel3", url: uniswapUrls.helpArticleUrls.supportedNetworks }), _jsx(Flex, { row: true, width: "100%", children: _jsx(Button, { mt: "$spacing12", emphasis: "secondary", onPress: closeModal, children: t('common.button.close') }) })] }) })] }));
}
//# sourceMappingURL=NetworkLogos.js.map