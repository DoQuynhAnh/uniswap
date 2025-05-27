import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { IndicativeLoadingWrapper } from 'uniswap/src/components/misc/IndicativeLoadingWrapper';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { SwapFeeWarning } from 'uniswap/src/features/transactions/TransactionDetails/modals/SwapFeeWarning';
import { getFormattedCurrencyAmount, getSymbolDisplayText } from 'uniswap/src/utils/currency';
import { NumberType } from 'utilities/src/format/types';
export function SwapFee({ currency, swapFee, swapFeeUsd, loading, }) {
    var _a;
    const { t } = useTranslation();
    const formatter = useLocalizationContext();
    const { convertFiatAmountFormatted, formatPercent, formatNumberOrString } = formatter;
    const formattedAmountFiat = swapFeeUsd && !isNaN(swapFeeUsd) ? convertFiatAmountFormatted(swapFeeUsd, NumberType.FiatGasPrice) : undefined;
    const swapFeeInfo = swapFee
        ? {
            noFeeCharged: swapFee.percent.equalTo(0),
            formattedPercent: formatPercent(swapFee.percent.toFixed()),
            formattedAmount: getFormattedCurrencyAmount(currency, swapFee.amount, formatter) + getSymbolDisplayText(currency.symbol),
            formattedAmountFiat,
        }
        : undefined;
    if (!swapFeeInfo && !loading) {
        return null;
    }
    const showFeePercentage = (swapFeeInfo === null || swapFeeInfo === void 0 ? void 0 : swapFeeInfo.formattedPercent) && !swapFeeInfo.noFeeCharged;
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsx(SwapFeeWarning, { noFee: Boolean(swapFeeInfo === null || swapFeeInfo === void 0 ? void 0 : swapFeeInfo.noFeeCharged), children: _jsx(Flex, { centered: true, row: true, gap: "$spacing4", children: _jsxs(Text, { color: "$neutral2", variant: "body3", children: [t('swap.details.uniswapFee'), showFeePercentage && ` (${swapFeeInfo.formattedPercent})`] }) }) }), _jsx(IndicativeLoadingWrapper, { loading: loading, children: swapFeeInfo && (_jsx(Flex, { row: true, alignItems: "center", gap: "$spacing8", children: _jsx(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: _jsx(Text, { color: "$neutral1", variant: "body3", children: (_a = swapFeeInfo.formattedAmountFiat) !== null && _a !== void 0 ? _a : (swapFeeInfo.noFeeCharged
                                ? formatNumberOrString({ value: 0, type: NumberType.FiatGasPrice })
                                : swapFeeInfo.formattedAmount) }) }) })) })] }));
}
//# sourceMappingURL=SwapFee.js.map