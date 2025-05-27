import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex } from 'ui/src';
import { ShieldCheck } from 'ui/src/components/icons/ShieldCheck';
import { InfoLinkModal } from 'uniswap/src/components/modals/InfoLinkModal';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { ModalName, WalletEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send.web';
export function HiddenTokenInfoModal({ isOpen, onClose }) {
    const { t } = useTranslation();
    const handleAnalytics = useCallback(() => {
        sendAnalyticsEvent(WalletEventName.ExternalLinkOpened, {
            url: uniswapUrls.helpArticleUrls.hiddenTokenInfo,
        });
    }, []);
    return (_jsx(InfoLinkModal, { showCloseButton: true, buttonText: t('common.button.close'), description: t('hidden.tokens.info.text.info'), icon: _jsx(Flex, { centered: true, backgroundColor: "$surface3", borderRadius: "$rounded12", p: "$spacing12", children: _jsx(ShieldCheck, { color: "$neutral1", size: "$icon.24" }) }), isOpen: isOpen, linkText: t('common.button.learn'), linkUrl: uniswapUrls.helpArticleUrls.hiddenTokenInfo, name: ModalName.HiddenTokenInfoModal, title: t('hidden.tokens.info.text.title'), onAnalyticsEvent: handleAnalytics, onButtonPress: onClose, onDismiss: onClose }));
}
//# sourceMappingURL=HiddenTokenInfoModal.js.map