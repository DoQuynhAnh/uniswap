import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea } from 'ui/src';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { Trace } from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { CurrencyField } from 'uniswap/src/types/currency';
import { getSymbolDisplayText } from 'uniswap/src/utils/currency';
import { NumberType } from 'utilities/src/format/types';
function calculatePercentageDifference({ derivedSwapInfo, acceptedDerivedSwapInfo, }) {
    var _a, _b;
    const derivedCurrencyField = derivedSwapInfo.exactCurrencyField === CurrencyField.INPUT ? CurrencyField.OUTPUT : CurrencyField.INPUT;
    // It's important to convert these to fractions before doing math on them in order to preserve full precision on each step.
    const newAmount = (_a = derivedSwapInfo.currencyAmounts[derivedCurrencyField]) === null || _a === void 0 ? void 0 : _a.asFraction;
    const acceptedAmount = (_b = acceptedDerivedSwapInfo.currencyAmounts[derivedCurrencyField]) === null || _b === void 0 ? void 0 : _b.asFraction;
    if (!newAmount || !acceptedAmount) {
        return null;
    }
    const percentage = newAmount.subtract(acceptedAmount).divide(acceptedAmount).multiply(100);
    return `${percentage.greaterThan(0) ? '+' : ''}${percentage.toFixed(2)}`;
}
export function AcceptNewQuoteRow({ acceptedDerivedSwapInfo, derivedSwapInfo, onAcceptTrade, }) {
    var _a;
    const { t } = useTranslation();
    const { formatCurrencyAmount } = useLocalizationContext();
    const derivedCurrencyField = derivedSwapInfo.exactCurrencyField === CurrencyField.INPUT ? CurrencyField.OUTPUT : CurrencyField.INPUT;
    const derivedAmount = derivedSwapInfo.currencyAmounts[derivedCurrencyField];
    const derivedSymbol = getSymbolDisplayText((_a = derivedSwapInfo.currencies[derivedCurrencyField]) === null || _a === void 0 ? void 0 : _a.currency.symbol);
    const formattedDerivedAmount = formatCurrencyAmount({
        value: derivedAmount,
        type: NumberType.TokenTx,
    });
    const percentageDifference = calculatePercentageDifference({
        derivedSwapInfo,
        acceptedDerivedSwapInfo,
    });
    return (_jsxs(Flex, { row: true, shrink: true, alignItems: "center", borderColor: "$surface3", borderRadius: "$rounded16", borderWidth: "$spacing1", gap: "$spacing12", justifyContent: "space-between", pl: "$spacing12", pr: "$spacing8", py: "$spacing8", children: [_jsxs(Flex, { fill: true, children: [_jsx(Text, { color: "$neutral2", variant: "body3", children: derivedSwapInfo.exactCurrencyField === CurrencyField.INPUT
                            ? t('swap.details.newQuote.output')
                            : t('swap.details.newQuote.input') }), _jsx(Flex, { row: true, alignItems: "center", children: _jsxs(Text, { adjustsFontSizeToFit: true, color: "$neutral1", numberOfLines: 1, textAlign: "center", variant: "body3", children: [formattedDerivedAmount, " ", derivedSymbol, " ", _jsxs(Text, { color: "$neutral2", children: ["(", percentageDifference, "%)"] })] }) })] }), _jsx(Flex, { children: _jsx(Trace, { logPress: true, element: ElementName.AcceptNewRate, children: _jsx(TouchableArea, { backgroundColor: "$accent2", borderRadius: "$rounded12", px: "$spacing8", py: "$spacing4", onPress: onAcceptTrade, children: _jsx(Text, { color: "$accent1", variant: "buttonLabel2", children: t('common.button.accept') }) }) }) })] }));
}
//# sourceMappingURL=AcceptNewQuoteRow.js.map