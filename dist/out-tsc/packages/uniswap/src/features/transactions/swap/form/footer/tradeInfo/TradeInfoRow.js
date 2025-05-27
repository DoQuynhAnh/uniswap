import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, Flex, Text } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { iconSizes } from 'ui/src/theme';
import { getAlertColor } from 'uniswap/src/components/modals/WarningModal/getAlertColor';
import { WarningLabel } from 'uniswap/src/components/modals/WarningModal/types';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useDebouncedTrade } from 'uniswap/src/features/transactions/swap/form/footer/hooks/useDebouncedTrade';
import { CanonicalBridgeLinkBanner } from 'uniswap/src/features/transactions/swap/form/footer/tradeInfo/CanonicalBridgeLinkBanner';
import { GasInfoRow } from 'uniswap/src/features/transactions/swap/form/footer/tradeInfo/GasInfoRow';
import { TradeWarning } from 'uniswap/src/features/transactions/swap/form/footer/tradeInfo/TradeWarning';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { SwapRateRatio } from 'uniswap/src/features/transactions/swap/review/SwapRateRatio';
import { isInterface, isMobileApp } from 'utilities/src/platform';
// TradeInfoRow take `gasInfo` as a prop (rather than directly using useDebouncedGasInfo) because on mobile,
// the parent needs to check whether to render an empty row based on `gasInfo` fields first.
export function TradeInfoRow({ gasInfo, warning }) {
    var _a, _b;
    // Debounce the trade to prevent flickering on input
    const debouncedTrade = useDebouncedTrade();
    const { text: warningTextColor } = getAlertColor(warning === null || warning === void 0 ? void 0 : warning.severity);
    const { isTestnetModeEnabled } = useEnabledChains();
    const priceUXEnabled = usePriceUXEnabled();
    const { derivedSwapInfo: { currencies }, } = useSwapFormContext();
    if (isTestnetModeEnabled) {
        return null;
    }
    if (isMobileApp || priceUXEnabled) {
        return _jsx(GasInfoRow, { gasInfo: gasInfo });
    }
    // On interface, if the warning is a no quotes found warning, we want to show an external link to a canonical bridge
    const inputChainId = (_a = currencies.input) === null || _a === void 0 ? void 0 : _a.currency.chainId;
    const outputChainId = (_b = currencies.output) === null || _b === void 0 ? void 0 : _b.currency.chainId;
    const showCanonicalBridge = isInterface && (warning === null || warning === void 0 ? void 0 : warning.type) === WarningLabel.NoQuotesFound && inputChainId !== outputChainId;
    return (_jsxs(Flex, { centered: true, row: true, children: [_jsxs(Flex, { fill: true, children: [debouncedTrade && !warning && (_jsx(SwapRateRatio, { initialInverse: true, styling: "secondary", trade: debouncedTrade })), warning && (_jsx(TradeWarning, { warning: warning, children: _jsxs(Flex, { row: true, centered: true, gap: "$gap8", children: [_jsx(AlertTriangleFilled, { color: warningTextColor, size: "$icon.20" }), _jsx(Text, { color: warningTextColor, variant: "body3", children: warning.title })] }) }))] }), showCanonicalBridge ? (_jsx(CanonicalBridgeLinkBanner, { chainId: outputChainId !== null && outputChainId !== void 0 ? outputChainId : UniverseChainId.Mainnet })) : debouncedTrade ? (_jsx(Accordion.Trigger, { p: "$none", style: { background: '$surface1' }, focusStyle: { background: '$surface1' }, hoverStyle: { background: '$surface1' }, children: ({ open }) => (_jsxs(Flex, { row: true, gap: "$spacing4", alignItems: "center", children: [_jsx(GasInfoRow, { gasInfo: gasInfo, hidden: open }), _jsx(RotatableChevron, { animation: "fast", width: iconSizes.icon16, height: iconSizes.icon16, direction: open ? 'up' : 'down', color: "$neutral3" })] })) })) : (_jsx(GasInfoRow, { gasInfo: gasInfo }))] }));
}
//# sourceMappingURL=TradeInfoRow.js.map