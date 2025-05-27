import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, isWeb } from 'ui/src';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { UniswapLogo } from 'ui/src/components/icons/UniswapLogo';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
export function V4HooksInfo() {
    const { t } = useTranslation();
    return (_jsx(WarningInfo, { infoButton: _jsx(LearnMoreLink, { textVariant: isWeb ? 'body4' : undefined, url: uniswapUrls.helpArticleUrls.v4HooksInfo }), modalProps: {
            caption: t('swap.settings.routingPreference.option.v4.hooks.tooltip'),
            rejectText: t('common.button.close'),
            severity: WarningSeverity.None,
            modalName: ModalName.V4HooksInfo,
            icon: _jsx(UniswapLogo, { size: "$icon.24" }),
        }, trigger: _jsxs(Flex, { row: true, centered: true, children: [_jsx(Text, { color: "$neutral1", variant: "subheading2", mr: "$spacing4", children: t('swap.settings.routingPreference.option.v4.hooks.title') }), _jsx(InfoCircleFilled, { color: "$neutral3", size: "$icon.16" })] }), tooltipProps: {
            text: t('swap.settings.routingPreference.option.v4.hooks.tooltip'),
            placement: 'bottom',
        } }));
}
//# sourceMappingURL=V4HooksInfo.js.map