import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { isWeb, Text, TouchableArea, useSporeColors } from 'ui/src';
import { ChartBar } from 'ui/src/components/icons/ChartBar';
import { zIndexes } from 'ui/src/theme';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { openUri } from 'uniswap/src/utils/linking';
function getPriceImpactInfo(t, routing, missing) {
    if (isUniswapX({ routing })) {
        if (missing) {
            return {
                caption: t('swap.impactOfTrade.uniswapx.missing'),
                link: uniswapUrls.helpArticleUrls.uniswapXInfo,
            };
        }
        else {
            return {
                caption: t('swap.impactOfTrade.uniswapx'),
                link: uniswapUrls.helpArticleUrls.uniswapXInfo,
            };
        }
    }
    else {
        return {
            caption: t('swap.impactOfTrade'),
            link: uniswapUrls.helpArticleUrls.priceImpact,
        };
    }
}
export function MarketPriceImpactWarningModal({ children, routing, missing, }) {
    const colors = useSporeColors();
    const { t } = useTranslation();
    const { caption, link } = getPriceImpactInfo(t, routing, missing);
    return (_jsx(WarningInfo, { infoButton: _jsx(TouchableArea, { onPress: async () => await openUri(link), children: _jsx(Text, { color: "$accent1", variant: isWeb ? 'body4' : 'buttonLabel2', children: t('common.button.learn') }) }), modalProps: {
            hideIcon: isWeb,
            icon: _jsx(ChartBar, { color: "$neutral1", size: "$icon.18" }),
            backgroundIconColor: colors.surface2.get(),
            captionComponent: (_jsx(Text, { color: "$neutral2", textAlign: isWeb ? 'left' : 'center', variant: isWeb ? 'body4' : 'body2', children: caption })),
            rejectText: t('common.button.close'),
            modalName: ModalName.NetworkFeeInfo,
            severity: WarningSeverity.None,
            title: t('swap.priceImpact'),
            zIndex: zIndexes.popover,
        }, tooltipProps: { text: caption, placement: 'top' }, analyticsTitle: "Price Impact", children: children }));
}
//# sourceMappingURL=MarketPriceImpactWarning.js.map