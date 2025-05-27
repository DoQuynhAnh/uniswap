import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Percent } from '@uniswap/sdk-core';
import { useTranslation } from 'react-i18next';
import { Flex, HeightAnimator, Separator, Text, TouchableArea, UniswapXText, isWeb } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { AnglesDownUp } from 'ui/src/components/icons/AnglesDownUp';
import { SortVertical } from 'ui/src/components/icons/SortVertical';
import { UniswapX } from 'ui/src/components/icons/UniswapX';
import { AcrossLogo } from 'ui/src/components/logos/AcrossLogo';
import { WarningLabel } from 'uniswap/src/components/modals/WarningModal/types';
import { InfoTooltip } from 'uniswap/src/components/tooltip/InfoTooltip';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import * as SwapDetailsRow from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapDetailsRow';
import { AcrossRoutingInfoTooltip, AutoSlippageBadge, BestRouteTooltip, BestRouteUniswapXTooltip, LargePriceDifferenceTooltip, MaxSlippageTooltip, SwapFeeOnTransferTooltip, YouReceiveDetailsTooltip, } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormTooltips';
import { useSlippageSettings } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/useSlippageSettings';
import { useFeeOnTransferAmounts } from 'uniswap/src/features/transactions/swap/hooks/useFeeOnTransferAmount';
import { usePriceDifference, } from 'uniswap/src/features/transactions/swap/hooks/usePriceDifference';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { slippageToleranceToPercent } from 'uniswap/src/features/transactions/swap/utils/format';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { useIsBlocked } from 'uniswap/src/features/trm/hooks';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { formatCurrencyAmount } from 'utilities/src/format/localeBased';
import { NumberType } from 'utilities/src/format/types';
import { isInterfaceDesktop } from 'utilities/src/platform';
import { useBooleanState } from 'utilities/src/react/useBooleanState';
const ZERO_PERCENT = new Percent(0, 100);
const MAX_TOOLTIP_WIDTH = 300;
function YouReceiveDisplay({ isBridge, outputAmountUserWillReceive, formattedPostFeesAmount, priceDifference, feeOnTransferProps, isIndicative, isLoading, isLoadingIndicative, isOpen, }) {
    const { t } = useTranslation();
    const ExpandoIcon = isOpen ? AnglesDownUp : SortVertical;
    return (_jsxs(SwapDetailsRow.Outer, { children: [_jsx(SwapDetailsRow.Label, { label: t('common.youReceive'), analyticsTitle: "You receive", tooltip: isBridge ? (_jsx(AcrossRoutingInfoTooltip, {})) : (_jsx(YouReceiveDetailsTooltip, { receivedAmount: formattedPostFeesAmount !== null && formattedPostFeesAmount !== void 0 ? formattedPostFeesAmount : '-', feeOnTransferProps: feeOnTransferProps })) }), _jsxs(Flex, { row: true, gap: "$spacing6", alignItems: "center", children: [_jsx(SwapDetailsRow.ReceivingAmount, { amount: outputAmountUserWillReceive, formattedAmount: formattedPostFeesAmount, priceDifferenceWarning: priceDifference, isIndicative: isIndicative, isLoading: isLoading, feeOnTransferProps: feeOnTransferProps, isLoadingIndicative: isLoadingIndicative }), isInterfaceDesktop && (_jsx(Flex, { rotate: isOpen ? '180deg' : '0deg', animation: "simple", transition: "ease-in-out", children: _jsx(ExpandoIcon, { color: "$neutral2", size: "$icon.24" }) }))] })] }));
}
function FeeOnTransferDisplay({ feeOnTransferProps, }) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    return (_jsxs(_Fragment, { children: [(feeOnTransferProps === null || feeOnTransferProps === void 0 ? void 0 : feeOnTransferProps.inputTokenInfo.fee.greaterThan(0)) && (_jsxs(SwapDetailsRow.Outer, { children: [_jsx(SwapDetailsRow.Label, { label: t('swap.details.feeOnTransfer.symbol', {
                            tokenSymbol: feeOnTransferProps.inputTokenInfo.tokenSymbol,
                        }), analyticsTitle: "Token fee (input)", tooltip: _jsx(SwapFeeOnTransferTooltip, { ...feeOnTransferProps, outputTokenInfo: {
                                ...feeOnTransferProps.outputTokenInfo,
                                fee: ZERO_PERCENT,
                            } }) }), _jsxs(Flex, { row: true, gap: "$spacing6", alignItems: "center", children: [_jsx(AlertTriangleFilled, { color: "$neutral2", size: "$icon.16" }), _jsx(SwapDetailsRow.ValueLabel, { value: formatPercent(feeOnTransferProps.inputTokenInfo.fee.toFixed(8)) })] })] })), (feeOnTransferProps === null || feeOnTransferProps === void 0 ? void 0 : feeOnTransferProps.outputTokenInfo.fee.greaterThan(0)) && (_jsxs(SwapDetailsRow.Outer, { children: [_jsx(SwapDetailsRow.Label, { analyticsTitle: "Token fee (output)", label: t('swap.details.feeOnTransfer.symbol', {
                            tokenSymbol: feeOnTransferProps.outputTokenInfo.tokenSymbol,
                        }), tooltip: _jsx(SwapFeeOnTransferTooltip, { ...feeOnTransferProps, inputTokenInfo: {
                                ...feeOnTransferProps.inputTokenInfo,
                                fee: ZERO_PERCENT,
                            } }) }), _jsxs(Flex, { row: true, gap: "$spacing6", alignItems: "center", children: [_jsx(AlertTriangleFilled, { color: "$neutral2", size: "$icon.16" }), _jsx(SwapDetailsRow.ValueLabel, { value: formatPercent(feeOnTransferProps.outputTokenInfo.fee.toFixed(8)) })] })] }))] }));
}
function PriceDifferenceDisplay({ priceDifference, }) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    if (!priceDifference.showPriceDifferenceWarning) {
        return null;
    }
    return (_jsxs(SwapDetailsRow.Outer, { children: [_jsx(SwapDetailsRow.Label, { label: t('large.price.difference'), analyticsTitle: "Large price difference", tooltip: _jsx(LargePriceDifferenceTooltip, {}) }), _jsxs(Flex, { row: true, gap: "$spacing4", alignItems: "center", children: [_jsx(AlertTriangleFilled, { color: priceDifference.priceDifferenceColor, size: "$icon.16" }), _jsx(SwapDetailsRow.ValueLabel, { value: formatPercent(priceDifference.priceDifferencePercentage), color: priceDifference.priceDifferenceColor })] })] }));
}
function MaxSlippageDisplay({ formattedPostFeesAmount, formattedMinimumAmount, formattedCurrentSlippageTolerance, autoSlippageEnabled, }) {
    const { t } = useTranslation();
    return (_jsxs(SwapDetailsRow.Outer, { children: [_jsx(SwapDetailsRow.Label, { label: t('settings.maxSlippage'), analyticsTitle: "Max slippage", tooltip: _jsx(MaxSlippageTooltip, { receivedAmount: formattedPostFeesAmount !== null && formattedPostFeesAmount !== void 0 ? formattedPostFeesAmount : '-', minimumAmount: formattedMinimumAmount, autoSlippageEnabled: autoSlippageEnabled, currentSlippageTolerance: formattedCurrentSlippageTolerance }) }), _jsxs(Flex, { row: true, gap: "$spacing6", alignItems: "center", children: [!autoSlippageEnabled && _jsx(AutoSlippageBadge, {}), _jsx(SwapDetailsRow.ValueLabel, { value: formattedCurrentSlippageTolerance })] })] }));
}
function RouteDisplay({ isBridge, isUniswapXContext }) {
    const { t } = useTranslation();
    const tooltip = isBridge ? (_jsx(AcrossRoutingInfoTooltip, {})) : isUniswapXContext ? (_jsx(BestRouteUniswapXTooltip, {})) : (_jsx(BestRouteTooltip, {}));
    return (_jsxs(SwapDetailsRow.Outer, { children: [_jsx(SwapDetailsRow.Label, { label: t('common.bestRoute'), analyticsTitle: "Route", tooltip: tooltip }), isBridge ? (_jsxs(Flex, { row: true, gap: "$spacing6", alignItems: "center", children: [_jsx(AcrossLogo, { size: "$icon.16" }), _jsx(SwapDetailsRow.ValueLabel, { value: "Across API" })] })) : isUniswapXContext ? (_jsxs(Flex, { row: true, gap: "$spacing1", children: [_jsx(UniswapX, { size: "$icon.16" }), _jsx(UniswapXText, { variant: "body3", children: "Uniswap X" })] })) : (_jsx(SwapDetailsRow.ValueLabel, { value: "Uniswap API" }))] }));
}
function InlineWarningDisplay({ warning }) {
    return (_jsx(SwapDetailsRow.Outer, { children: _jsxs(Flex, { row: true, gap: "$spacing6", alignItems: "center", children: [isWeb && (_jsx(InfoTooltip, { text: warning.warning.message, placement: "top", maxWidth: MAX_TOOLTIP_WIDTH, trigger: _jsx(AlertTriangleFilled, { color: "$neutral2", size: "$icon.16" }) })), _jsx(Text, { variant: "body3", color: "$neutral2", children: warning.warning.title })] }) }));
}
export function YouReceiveDetails({ isIndicative, isLoading, isLoadingIndicative, isBridge, }) {
    var _a;
    const account = useAccountMeta();
    const { value: isOpen, toggle } = useBooleanState(false);
    const { formatPercent } = useLocalizationContext();
    const { currentSlippageTolerance } = useSlippageSettings();
    const { customSlippageTolerance } = useTransactionSettingsContext();
    const { derivedSwapInfo } = useSwapFormContext();
    const priceDifference = usePriceDifference(derivedSwapInfo);
    const { isBlocked } = useIsBlocked(account === null || account === void 0 ? void 0 : account.address);
    const { formScreenWarning } = useParsedSwapWarnings();
    const inlineWarning = formScreenWarning && formScreenWarning.displayedInline && !isBlocked ? formScreenWarning : undefined;
    const isPriceImpactWarning = (inlineWarning === null || inlineWarning === void 0 ? void 0 : inlineWarning.warning.type) === WarningLabel.PriceImpactHigh ||
        (inlineWarning === null || inlineWarning === void 0 ? void 0 : inlineWarning.warning.type) === WarningLabel.PriceImpactMedium;
    const feeOnTransferProps = useFeeOnTransferAmounts(derivedSwapInfo);
    const swapTxContext = useSwapTxContext();
    const isUniswapXContext = isUniswapX(swapTxContext);
    const receivedAmountPostFees = derivedSwapInfo.outputAmountUserWillReceive
        ? formatCurrencyAmount({
            amount: derivedSwapInfo.outputAmountUserWillReceive,
            locale: 'en-US',
            type: NumberType.TokenTx,
            placeholder: '',
        })
        : undefined;
    const outputCurrency = derivedSwapInfo.currencies.output;
    const formattedPostFeesAmount = outputCurrency && receivedAmountPostFees ? `${receivedAmountPostFees} ${outputCurrency.currency.symbol}` : undefined;
    const minimumAmount = (_a = swapTxContext.trade) === null || _a === void 0 ? void 0 : _a.minimumAmountOut(slippageToleranceToPercent(currentSlippageTolerance));
    const formattedMinimumAmount = `${formatCurrencyAmount({
        amount: minimumAmount,
        locale: 'en-US',
        type: NumberType.TokenTx,
        placeholder: '-',
    })} ${outputCurrency === null || outputCurrency === void 0 ? void 0 : outputCurrency.currency.symbol}`;
    const formattedCurrentSlippageTolerance = formatPercent(currentSlippageTolerance);
    const showDropdown = derivedSwapInfo.wrapType === WrapType.NotApplicable &&
        !!derivedSwapInfo.currencies.output &&
        !!derivedSwapInfo.currencies.input &&
        derivedSwapInfo.exactCurrencyField &&
        derivedSwapInfo.currencyAmounts[derivedSwapInfo.exactCurrencyField];
    return (_jsx(TouchableArea, { transition: "all 0.3s ease-in-out", maxHeight: showDropdown ? 300 : 0, opacity: showDropdown ? 1 : 0, mb: showDropdown ? '$spacing4' : '$none', onPress: toggle, children: _jsxs(Flex, { borderRadius: "$rounded20", borderWidth: "$spacing1", borderColor: "$surface3", backgroundColor: "$surface1", p: "$spacing16", hoverStyle: {
                borderColor: '$surface3Hovered',
            }, children: [inlineWarning && !isPriceImpactWarning ? (_jsx(InlineWarningDisplay, { warning: inlineWarning })) : (_jsx(YouReceiveDisplay, { isBridge: isBridge, outputAmountUserWillReceive: derivedSwapInfo.outputAmountUserWillReceive, formattedPostFeesAmount: formattedPostFeesAmount, priceDifference: priceDifference, feeOnTransferProps: feeOnTransferProps, isIndicative: isIndicative, isLoading: isLoading, isLoadingIndicative: isLoadingIndicative, isOpen: isOpen })), _jsxs(HeightAnimator, { open: isOpen, children: [_jsx(Separator, { my: "$spacing16" }), _jsxs(Flex, { gap: "$spacing12", children: [_jsx(FeeOnTransferDisplay, { feeOnTransferProps: feeOnTransferProps }), _jsx(PriceDifferenceDisplay, { priceDifference: priceDifference }), !isBridge && (_jsx(MaxSlippageDisplay, { formattedPostFeesAmount: formattedPostFeesAmount, formattedMinimumAmount: formattedMinimumAmount, formattedCurrentSlippageTolerance: formattedCurrentSlippageTolerance, autoSlippageEnabled: !customSlippageTolerance })), swapTxContext.trade && _jsx(RouteDisplay, { isBridge: isBridge, isUniswapXContext: isUniswapXContext })] })] })] }) }));
}
//# sourceMappingURL=YouReceiveDetails.js.map