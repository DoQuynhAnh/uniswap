import { useCallback, useMemo } from 'react';
import { useCurrentLocale } from 'uniswap/src/features/language/hooks';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { addFiatSymbolToNumber, formatCurrencyAmount, formatNumberOrString, formatPercent, } from 'utilities/src/format/localeBased';
import { NumberType } from 'utilities/src/format/types';
/**
 * Hook used to return a formatter with all necessary formatting functions needed in the app.
 * This is based off of the currently selected language in the app, so it will make sure that
 * the formatted values are localized. If any new formatting needs arise, add them here.
 * @returns set of formatting functions based off of current locale
 */
export function useLocalizedFormatter() {
    const locale = useCurrentLocale();
    const formatNumberOrStringInner = useCallback(({ value, type = NumberType.TokenNonTx, currencyCode, placeholder }) => formatNumberOrString({ price: value, locale, currencyCode, type, placeholder }), [locale]);
    const formatCurrencyAmountInner = useCallback(({ value, type, placeholder }) => formatCurrencyAmount({ amount: value, locale, type, placeholder }), [locale]);
    const formatPercentInner = useCallback((value) => formatPercent(value, locale), [locale]);
    const addFiatSymbolToNumberInner = useCallback(({ value, currencyCode, currencySymbol }) => addFiatSymbolToNumber({ value, currencyCode, currencySymbol, locale }), [locale]);
    return useMemo(() => ({
        formatNumberOrString: formatNumberOrStringInner,
        formatCurrencyAmount: formatCurrencyAmountInner,
        formatPercent: formatPercentInner,
        addFiatSymbolToNumber: addFiatSymbolToNumberInner,
    }), [formatNumberOrStringInner, formatCurrencyAmountInner, formatPercentInner, addFiatSymbolToNumberInner]);
}
//# sourceMappingURL=formatter.js.map