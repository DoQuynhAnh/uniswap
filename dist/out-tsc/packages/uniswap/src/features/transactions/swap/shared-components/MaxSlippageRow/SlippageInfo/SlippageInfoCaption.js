import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TradeType } from '@uniswap/sdk-core';
import { useTranslation } from 'react-i18next';
import { Flex, isWeb, Text } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useFormatSlippageAmount } from 'uniswap/src/features/transactions/swap/shared-components/MaxSlippageRow/SlippageInfo/useFormatSlippageAmount';
import { isMobileApp } from 'utilities/src/platform';
function SlippageWarningText() {
    const { t } = useTranslation();
    return (_jsxs(Flex, { centered: true, row: true, gap: "$spacing8", children: [_jsx(AlertTriangleFilled, { color: "$statusWarning", size: "$icon.16" }), _jsx(Text, { color: "$statusWarning", variant: isWeb ? 'body4' : 'body2', children: t('swap.settings.slippage.warning.message') })] }));
}
function MobileAppSlippageInfo({ isCustomSlippage, showSlippageWarning, slippageTolerance, }) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing12", justifyContent: "space-between", children: [_jsx(Text, { color: "$neutral2", flexShrink: 1, numberOfLines: 3, variant: "body2", children: t('swap.slippage.settings.title') }), _jsxs(Flex, { row: true, gap: "$spacing8", children: [!isCustomSlippage ? (_jsx(Flex, { centered: true, backgroundColor: "$accent2", borderRadius: "$roundedFull", px: "$spacing8", children: _jsx(Text, { color: "$accent1", variant: "buttonLabel3", children: t('swap.settings.slippage.control.auto') }) })) : null, _jsx(Text, { color: showSlippageWarning ? '$statusWarning' : '$neutral1', variant: "subheading2", children: formatPercent(slippageTolerance) })] })] }));
}
export function SlippageInfoCaption({ trade, isCustomSlippage, autoSlippageTolerance, }) {
    const { t } = useTranslation();
    const { slippageTolerance, tradeType } = trade;
    const showSlippageWarning = Boolean(autoSlippageTolerance && slippageTolerance > autoSlippageTolerance);
    const formattedSlippageAmount = useFormatSlippageAmount(trade);
    return (_jsxs(Flex, { gap: "$spacing12", width: "100%", children: [_jsxs(Text, { color: "$neutral2", textAlign: isWeb ? 'left' : 'center', variant: isWeb ? 'body4' : 'body2', children: [tradeType === TradeType.EXACT_INPUT
                        ? t('swap.settings.slippage.input.message')
                        : t('swap.settings.slippage.output.message'), ' ', isWeb && (_jsx(Flex, { display: "inline-flex", children: _jsx(LearnMoreLink, { url: uniswapUrls.helpArticleUrls.swapSlippage, textVariant: "body4", textColor: "white" }) }))] }), showSlippageWarning && isWeb && _jsx(SlippageWarningText, {}), _jsxs(Flex, { backgroundColor: "$surface2", borderRadius: isWeb ? '$rounded8' : '$rounded20', gap: "$spacing8", px: isWeb ? '$spacing8' : '$spacing16', py: isWeb ? '$spacing8' : '$spacing12', width: "100%", children: [isMobileApp && (_jsx(MobileAppSlippageInfo, { isCustomSlippage: isCustomSlippage, showSlippageWarning: showSlippageWarning, slippageTolerance: slippageTolerance })), _jsxs(Flex, { row: true, alignItems: "center", gap: isWeb ? '$spacing8' : '$spacing12', justifyContent: "space-between", children: [_jsx(Text, { color: "$neutral2", flexShrink: 1, numberOfLines: 3, variant: isWeb ? 'body4' : 'body2', children: tradeType === TradeType.EXACT_INPUT
                                    ? t('swap.settings.slippage.input.receive.title')
                                    : t('swap.settings.slippage.output.spend.title') }), _jsx(Text, { color: "$neutral1", textAlign: "center", variant: isWeb ? 'body4' : 'subheading2', children: formattedSlippageAmount })] })] }), showSlippageWarning && isMobileApp && _jsx(SlippageWarningText, {})] }));
}
//# sourceMappingURL=SlippageInfoCaption.js.map