import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { Dot } from 'ui/src/components/icons/Dot';
import { ShieldCheck } from 'ui/src/components/icons/ShieldCheck';
import { UniswapLogo } from 'ui/src/components/icons/UniswapLogo';
import { UniswapX } from 'ui/src/components/icons/UniswapX';
import { VerticalDotLine } from 'ui/src/components/icons/VerticalDotLine';
import { UniswapXText } from 'ui/src/components/text/UniswapXText';
import { CurrencyLogo } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import RoutingDiagram from 'uniswap/src/components/RoutingDiagram/RoutingDiagram';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useUSDCValue } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import * as SwapDetailsTooltip from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapDetailsTooltip';
import { getSwapFeeUsdFromDerivedSwapInfo } from 'uniswap/src/features/transactions/swap/utils/getSwapFeeUsd';
import { isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { CurrencyField } from 'uniswap/src/types/currency';
import { getFormattedCurrencyAmount, getSymbolDisplayText } from 'uniswap/src/utils/currency';
import getRoutingDiagramEntries from 'uniswap/src/utils/getRoutingDiagramEntries';
import { NumberType } from 'utilities/src/format/types';
import { isMobileApp } from 'utilities/src/platform';
export function YouReceiveDetailsTooltip({ receivedAmount, feeOnTransferProps, }) {
    var _a, _b, _c;
    const { t } = useTranslation();
    const swapTxContext = useSwapTxContext();
    const isUniswapXContext = isUniswapX(swapTxContext);
    const { formatPercent } = useLocalizationContext();
    const { derivedSwapInfo } = useSwapFormContext();
    const swapFee = (_a = derivedSwapInfo.trade.trade) === null || _a === void 0 ? void 0 : _a.swapFee;
    const swapFeeUsd = getSwapFeeUsdFromDerivedSwapInfo(derivedSwapInfo);
    const formatter = useLocalizationContext();
    const { convertFiatAmountFormatted } = formatter;
    const outputCurrencyUSDValue = useUSDCValue(derivedSwapInfo.outputAmountUserWillReceive);
    const formattedOutputCurrencyUSDValue = outputCurrencyUSDValue
        ? convertFiatAmountFormatted(outputCurrencyUSDValue.toExact(), NumberType.FiatTokenQuantity)
        : undefined;
    const formattedSwapFee = swapFee &&
        getFormattedCurrencyAmount((_b = derivedSwapInfo.currencies[CurrencyField.OUTPUT]) === null || _b === void 0 ? void 0 : _b.currency, swapFee.amount, formatter) +
            getSymbolDisplayText((_c = derivedSwapInfo.currencies[CurrencyField.OUTPUT]) === null || _c === void 0 ? void 0 : _c.currency.symbol);
    const formattedSwapFeeAmountFiat = swapFeeUsd && !isNaN(swapFeeUsd) ? convertFiatAmountFormatted(swapFeeUsd, NumberType.FiatGasPrice) : undefined;
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: {
                    title: t('swap.bestPrice.through', { provider: isUniswapXContext ? 'UniswapX' : 'Uniswap API' }),
                }, Icon: isUniswapXContext ? UniswapX : UniswapLogo, iconColor: "$accent1" }), _jsxs(SwapDetailsTooltip.Content, { children: [(feeOnTransferProps === null || feeOnTransferProps === void 0 ? void 0 : feeOnTransferProps.inputTokenInfo.fee.greaterThan(0)) && (_jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: `${t('swap.details.feeOnTransfer', { tokenSymbol: feeOnTransferProps.inputTokenInfo.tokenSymbol })} (${formatPercent(feeOnTransferProps.inputTokenInfo.fee.toFixed(8))})` }), _jsx(SwapDetailsTooltip.LineItemValue, { value: feeOnTransferProps.inputTokenInfo.formattedAmount, usdValue: feeOnTransferProps.inputTokenInfo.formattedUsdAmount })] })), (feeOnTransferProps === null || feeOnTransferProps === void 0 ? void 0 : feeOnTransferProps.outputTokenInfo.fee.greaterThan(0)) && (_jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: `${t('swap.details.feeOnTransfer', { tokenSymbol: feeOnTransferProps.outputTokenInfo.tokenSymbol })} (${formatPercent(feeOnTransferProps.outputTokenInfo.fee.toFixed(8))})` }), _jsx(SwapDetailsTooltip.LineItemValue, { value: feeOnTransferProps.outputTokenInfo.formattedAmount, usdValue: feeOnTransferProps.outputTokenInfo.formattedUsdAmount })] })), _jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: t('fee.uniswap', { percent: formatPercent(0.25) }) }), _jsx(SwapDetailsTooltip.LineItemValue, { value: formattedSwapFee, usdValue: formattedSwapFeeAmountFiat })] }), _jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: t('common.youReceive') }), _jsx(SwapDetailsTooltip.LineItemValue, { value: receivedAmount, usdValue: formattedOutputCurrencyUSDValue })] })] }), _jsx(SwapDetailsTooltip.Separator, {}), _jsx(SwapDetailsTooltip.Description, { text: t('swap.warning.uniswapFee.message') })] }));
}
export function AutoSlippageBadge() {
    const { t } = useTranslation();
    return (_jsx(Flex, { borderRadius: "$rounded6", py: "$spacing2", px: "$spacing6", backgroundColor: "$surface3", children: _jsx(Text, { variant: "buttonLabel4", color: "$neutral1", children: t('common.automatic') }) }));
}
const shieldKeyframe = `
  @keyframes shield-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(150, 70, 250, 0.2);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(150, 70, 250, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(150, 70, 250, 0);
    }
  }
`;
const shieldIconKeyframe = `
  @keyframes shield-icon-pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;
export function MaxSlippageTooltip({ receivedAmount, minimumAmount, autoSlippageEnabled, currentSlippageTolerance, }) {
    const { t } = useTranslation();
    const { derivedSwapInfo } = useSwapFormContext();
    const outputCurrencyInfo = derivedSwapInfo.currencies[CurrencyField.OUTPUT];
    if (isMobileApp) {
        return null;
    }
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: {
                    title: t('swap.details.slippage.uniswap'),
                }, Icon: ShieldCheck, iconColor: "$uniswapXPurple" }), _jsxs(SwapDetailsTooltip.Content, { children: [_jsxs(SwapDetailsTooltip.Row, { children: [_jsxs(Flex, { row: true, gap: "$spacing4", children: [_jsx(Dot, { size: "$icon.16", color: "$neutral1" }), _jsx(Text, { variant: "body4", color: "$neutral1", children: t('swap.expected.price') })] }), _jsx(SwapDetailsTooltip.LineItemValue, { value: receivedAmount, logo: _jsx(CurrencyLogo, { currencyInfo: outputCurrencyInfo, size: 16 }) })] }), _jsx(Flex, { position: "absolute", left: 4, top: 19, children: _jsx(VerticalDotLine, { minHeight: 12, color: "$uniswapXPurple" }) }), _jsx(SwapDetailsTooltip.Row, { children: _jsxs(Flex, { row: true, gap: "$spacing4", position: "relative", children: [_jsx("style", { children: shieldKeyframe }), _jsx("style", { children: shieldIconKeyframe }), _jsx(Flex, { width: "$spacing16" }), _jsx(Flex, { row: true, left: -3, top: -3, position: "absolute", alignItems: "center", justifyContent: "center", borderWidth: "$spacing1", borderColor: "$surface3", borderRadius: "$roundedFull", p: "$spacing4", style: { animation: 'shield-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }, children: _jsx(Flex, { opacity: 0.6, style: { animation: 'shield-icon-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }, children: _jsx(ShieldCheck, { size: "$icon.12", color: "$uniswapXPurple" }) }) }), _jsx(SwapDetailsTooltip.LineItemLabel, { label: t('settings.maxSlippage.percent', { percent: currentSlippageTolerance }) }), autoSlippageEnabled && _jsx(AutoSlippageBadge, {})] }) }), _jsx(Flex, { position: "absolute", left: 4, top: 50, children: _jsx(VerticalDotLine, { minHeight: 12, color: "$uniswapXPurple" }) }), _jsxs(SwapDetailsTooltip.Row, { children: [_jsxs(Flex, { row: true, gap: "$spacing4", children: [_jsx(Dot, { size: "$icon.16", color: "$neutral1" }), _jsx(SwapDetailsTooltip.LineItemLabel, { label: t('swap.min.price') })] }), _jsx(SwapDetailsTooltip.LineItemValue, { value: minimumAmount, logo: _jsx(CurrencyLogo, { currencyInfo: outputCurrencyInfo, size: 16 }) })] })] }), _jsx(SwapDetailsTooltip.Separator, {}), _jsx(SwapDetailsTooltip.Description, { text: t('swap.slippage.description'), learnMoreUrl: uniswapUrls.helpArticleUrls.swapSlippage })] }));
}
export function BestRouteTooltip() {
    const { t } = useTranslation();
    const { trade } = useSwapTxContext();
    const routes = useMemo(() => (trade && isClassic(trade) ? getRoutingDiagramEntries(trade) : []), [trade]);
    if (!trade || !isClassic(trade)) {
        return null;
    }
    const { inputAmount, outputAmount } = trade;
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: {
                    title: t('common.bestRoute.with', { provider: 'Uniswap API' }),
                }, Icon: UniswapLogo, iconColor: "$accent1" }), _jsx(SwapDetailsTooltip.Content, { children: _jsx(SwapDetailsTooltip.Row, { children: _jsx(Flex, { width: "100%", children: _jsx(RoutingDiagram, { routes: routes, currencyIn: inputAmount.currency, currencyOut: outputAmount.currency }) }) }) }), _jsx(SwapDetailsTooltip.Separator, {}), _jsx(SwapDetailsTooltip.Description, { learnMoreUrl: uniswapUrls.helpArticleUrls.routingSettings, text: t('swap.autoRouter') })] }));
}
export function BestRouteUniswapXTooltip() {
    const { t } = useTranslation();
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: {
                    title: t('common.bestRoute.with', { provider: 'UniswapX' }),
                    uniswapX: true,
                }, Icon: UniswapX }), _jsx(SwapDetailsTooltip.Content, { children: _jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: t('swap.settings.protection.title') }), _jsx(SwapDetailsTooltip.LineItemValue, { Icon: ShieldCheck, value: t('common.active'), iconColor: "$uniswapXPurple" })] }) }), _jsx(SwapDetailsTooltip.Description, { learnMoreUrl: uniswapUrls.helpArticleUrls.uniswapXInfo, text: t('routing.aggregateLiquidity.uniswapx') })] }));
}
export function NetworkCostTooltipClassic() {
    const { t } = useTranslation();
    const { derivedSwapInfo } = useSwapFormContext();
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: { title: t('common.chain.networkCost', { chain: getChainInfo(derivedSwapInfo.chainId).name }) }, logo: _jsx(NetworkLogo, { chainId: derivedSwapInfo.chainId, size: 16 }) }), _jsx(SwapDetailsTooltip.Description, { learnMoreUrl: uniswapUrls.helpArticleUrls.networkFeeInfo, text: t('transaction.networkCost.description') })] }));
}
export function NetworkCostTooltipUniswapX({ uniswapXGasFeeInfo, }) {
    const { t } = useTranslation();
    const { approvalFeeFormatted, wrapFeeFormatted, swapFeeFormatted, inputTokenSymbol } = uniswapXGasFeeInfo;
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: { title: t('swap.warning.networkFee.message.uniswapX.title'), uniswapX: true }, Icon: UniswapX }), _jsxs(SwapDetailsTooltip.Content, { children: [_jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: t('transaction.details.networkFee.swap') }), _jsxs(Flex, { row: true, gap: "$spacing6", children: [_jsx(Text, { color: "$neutral2", textDecorationLine: "line-through", variant: "body4", children: swapFeeFormatted }), _jsx(UniswapXText, { variant: "body4", children: t('common.free') })] })] }), wrapFeeFormatted && (_jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: t('swap.warning.networkFee.wrap') }), _jsx(SwapDetailsTooltip.LineItemValue, { value: wrapFeeFormatted })] })), approvalFeeFormatted && (_jsxs(SwapDetailsTooltip.Row, { children: [_jsx(SwapDetailsTooltip.LineItemLabel, { label: t('swap.warning.networkFee.allow', { inputTokenSymbol: inputTokenSymbol !== null && inputTokenSymbol !== void 0 ? inputTokenSymbol : '' }) }), _jsx(SwapDetailsTooltip.LineItemValue, { value: approvalFeeFormatted })] }))] }), _jsx(SwapDetailsTooltip.Separator, {}), _jsx(SwapDetailsTooltip.Description, { learnMoreUrl: uniswapUrls.helpArticleUrls.uniswapXInfo, text: t('uniswapX.cost') })] }));
}
export function LargePriceDifferenceTooltip() {
    const { t } = useTranslation();
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: { title: t('large.price.difference') } }), _jsx(SwapDetailsTooltip.Description, { text: t('large.price.difference.tooltip'), learnMoreUrl: uniswapUrls.helpArticleUrls.priceImpact })] }));
}
function FeeDetails(props) {
    const { t } = useTranslation();
    return (_jsxs(Flex, { row: true, p: "$spacing8", backgroundColor: "$surface2", borderRadius: "$rounded8", justifyContent: "space-between", alignItems: "center", children: [_jsx(Text, { variant: "body4", color: "$neutral2", children: t('swap.details.feeOnTransfer', { tokenSymbol: props.tokenSymbol }) }), _jsx(Text, { variant: "body4", color: "$neutral1", children: props.feePercent })] }));
}
export function SwapFeeOnTransferTooltip(props) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    const buyFeePercent = formatPercent(props.outputTokenInfo.fee.toFixed(8));
    const hasBuyFee = props.outputTokenInfo.fee.greaterThan(0);
    const sellFeePercent = formatPercent(props.inputTokenInfo.fee.toFixed(8));
    const hasSellFee = props.inputTokenInfo.fee.greaterThan(0);
    return (_jsxs(SwapDetailsTooltip.Outer, { children: [_jsx(SwapDetailsTooltip.Header, { title: {
                    title: t('token.safety.fee.detected'),
                } }), _jsxs(SwapDetailsTooltip.Content, { children: [hasBuyFee && (_jsx(SwapDetailsTooltip.Description, { text: t('token.safety.warning.tokenChargesFee.buy.message.descriptive', {
                            tokenSymbol: props.outputTokenInfo.tokenSymbol,
                            feePercent: buyFeePercent,
                        }) })), hasSellFee && (_jsx(SwapDetailsTooltip.Description, { text: t('token.safety.warning.tokenChargesFee.sell.message.descriptive', {
                            tokenSymbol: props.inputTokenInfo.tokenSymbol,
                            feePercent: sellFeePercent,
                        }) }))] }), hasBuyFee && _jsx(FeeDetails, { tokenSymbol: props.outputTokenInfo.tokenSymbol, feePercent: buyFeePercent }), hasSellFee && _jsx(FeeDetails, { tokenSymbol: props.inputTokenInfo.tokenSymbol, feePercent: sellFeePercent })] }));
}
export function AcrossRoutingInfoTooltip() {
    const { t } = useTranslation();
    return (_jsx(SwapDetailsTooltip.Outer, { children: _jsx(SwapDetailsTooltip.Description, { text: t('swap.details.orderRoutingInfo') }) }));
}
//# sourceMappingURL=SwapFormTooltips.js.map