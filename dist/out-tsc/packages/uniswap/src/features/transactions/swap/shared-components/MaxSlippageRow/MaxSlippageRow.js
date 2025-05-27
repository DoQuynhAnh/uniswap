import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { IndicativeLoadingWrapper } from 'uniswap/src/components/misc/IndicativeLoadingWrapper';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { AutoSlippageBadge } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormTooltips';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { SlippageInfo } from 'uniswap/src/features/transactions/swap/shared-components/MaxSlippageRow/SlippageInfo/SlippageInfo';
import { BridgeTrade } from 'uniswap/src/features/transactions/swap/types/trade';
export function MaxSlippageRow({ acceptedDerivedSwapInfo, autoSlippageTolerance, customSlippageTolerance, }) {
    var _a;
    const priceUxEnabled = usePriceUXEnabled();
    const { t } = useTranslation();
    const formatter = useLocalizationContext();
    const { formatPercent } = formatter;
    const acceptedTrade = (_a = acceptedDerivedSwapInfo.trade.trade) !== null && _a !== void 0 ? _a : acceptedDerivedSwapInfo.trade.indicativeTrade;
    if (!acceptedTrade) {
        throw new Error('Invalid render of `MaxSlippageInfo` with no `trade`');
    }
    if (acceptedTrade instanceof BridgeTrade) {
        throw new Error('Invalid render of `MaxSlippageInfo` for bridge trade');
    }
    // If we don't have a custom slippage tolerance set, we won't have a tolerance to display for an indicative quote,
    // since only the full quote has a slippage tolerance. In this case, we display a loading state until the full quote is received.
    const showLoadingState = acceptedTrade.indicative && !acceptedTrade.slippageTolerance;
    // Make text the warning color if user is setting custom slippage higher than auto slippage value
    const showSlippageWarning = acceptedTrade.slippageTolerance && autoSlippageTolerance
        ? acceptedTrade.slippageTolerance > autoSlippageTolerance
        : false;
    return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing12", justifyContent: "space-between", children: [_jsx(SlippageInfo, { autoSlippageTolerance: autoSlippageTolerance, isCustomSlippage: !!customSlippageTolerance, trade: acceptedTrade, children: _jsx(Flex, { row: true, shrink: true, alignItems: "center", gap: "$spacing4", children: _jsx(Text, { color: "$neutral2", numberOfLines: 3, variant: "body3", children: priceUxEnabled ? t('settings.maxSlippage') : t('swap.details.slippage') }) }) }), _jsx(IndicativeLoadingWrapper, { loading: showLoadingState, children: _jsxs(Flex, { centered: true, row: true, gap: "$spacing8", children: [!customSlippageTolerance ? (priceUxEnabled ? (_jsx(AutoSlippageBadge, {})) : (_jsx(Flex, { centered: true, backgroundColor: "$surface3", borderRadius: "$roundedFull", px: "$spacing4", py: "$spacing2", children: _jsx(Text, { color: "$neutral2", variant: "buttonLabel3", children: t('swap.settings.slippage.control.auto') }) }))) : null, _jsx(Text, { color: showSlippageWarning ? '$statusWarning' : '$neutral1', variant: "body3", children: formatPercent(acceptedTrade === null || acceptedTrade === void 0 ? void 0 : acceptedTrade.slippageTolerance) })] }) })] }));
}
//# sourceMappingURL=MaxSlippageRow.js.map