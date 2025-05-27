import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { getAlertColor } from 'uniswap/src/components/modals/WarningModal/getAlertColor';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { MarketPriceImpactWarningModal } from 'uniswap/src/features/transactions/swap/review/SwapDetails/MarketPriceImpactWarningModal';
import { usePriceImpact } from 'uniswap/src/features/transactions/swap/review/hooks/usePriceImpact';
import { isBridge } from 'uniswap/src/features/transactions/swap/utils/routing';
export function PriceImpactRow({ hide, derivedSwapInfo, }) {
    const { t } = useTranslation();
    const { formattedPriceImpact } = usePriceImpact({ derivedSwapInfo });
    const { priceImpactWarning } = useParsedSwapWarnings();
    const { text: priceImpactWarningColor } = getAlertColor(priceImpactWarning === null || priceImpactWarning === void 0 ? void 0 : priceImpactWarning.severity);
    const trade = derivedSwapInfo.trade.trade;
    if (hide || !trade || isBridge(trade)) {
        return null;
    }
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsx(MarketPriceImpactWarningModal, { routing: trade.routing, missing: !formattedPriceImpact, children: _jsx(Flex, { centered: true, row: true, gap: "$spacing4", children: _jsx(Text, { color: "$neutral2", variant: "body3", children: t('swap.priceImpact') }) }) }), _jsx(Flex, { row: true, shrink: true, justifyContent: "flex-end", children: _jsx(Text, { adjustsFontSizeToFit: true, color: priceImpactWarningColor, variant: "body3", children: formattedPriceImpact !== null && formattedPriceImpact !== void 0 ? formattedPriceImpact : 'N/A' }) })] }));
}
//# sourceMappingURL=PriceImpactRow.js.map