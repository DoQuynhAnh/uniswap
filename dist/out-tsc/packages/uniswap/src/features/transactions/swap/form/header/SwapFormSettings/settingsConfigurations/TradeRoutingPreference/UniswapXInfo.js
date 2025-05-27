import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { UniswapXText, isWeb } from 'ui/src';
import { UniswapX } from 'ui/src/components/icons/UniswapX';
import { colors, opacify, zIndexes } from 'ui/src/theme';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
export function UniswapXInfo({ children, tooltipTrigger, placement = 'top', }) {
    const { t } = useTranslation();
    return (_jsx(WarningInfo, { infoButton: _jsx(LearnMoreLink, { textVariant: isWeb ? 'body4' : undefined, url: uniswapUrls.helpArticleUrls.uniswapXInfo }), modalProps: {
            backgroundIconColor: opacify(16, colors.uniswapXPurple),
            caption: t('uniswapx.description'),
            rejectText: t('common.button.close'),
            icon: _jsx(UniswapX, { size: "$icon.24" }),
            modalName: ModalName.UniswapXInfo,
            severity: WarningSeverity.None,
            titleComponent: _jsx(UniswapXText, { variant: isWeb ? 'subheading2' : 'body1', children: t('uniswapx.label') }),
            zIndex: zIndexes.popover,
        }, tooltipProps: {
            text: t('uniswapx.description'),
            placement,
            icon: _jsx(UniswapX, { size: "$icon.24" }),
        }, trigger: tooltipTrigger, analyticsTitle: "UniswapX info", children: children }));
}
//# sourceMappingURL=UniswapXInfo.js.map