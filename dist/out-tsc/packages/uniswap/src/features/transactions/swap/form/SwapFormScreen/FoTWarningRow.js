import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { CurrencyField } from 'uniswap/src/types/currency';
export function FoTWarningRow({ currencies, outputTokenHasBuyTax }) {
    var _a, _b;
    const { t } = useTranslation();
    const fotCurrencySymbol = outputTokenHasBuyTax
        ? (_a = currencies[CurrencyField.OUTPUT]) === null || _a === void 0 ? void 0 : _a.currency.symbol
        : (_b = currencies[CurrencyField.INPUT]) === null || _b === void 0 ? void 0 : _b.currency.symbol;
    return (_jsx(Flex, { animation: "quick", enterStyle: { opacity: 0 }, exitStyle: { opacity: 0 }, children: _jsx(Text, { color: "$statusCritical", textAlign: "center", variant: "body3", children: fotCurrencySymbol
                ? t('swap.form.warning.output.fotFees', {
                    fotCurrencySymbol,
                })
                : t('swap.form.warning.output.fotFees.fallback') }) }));
}
//# sourceMappingURL=FoTWarningRow.js.map