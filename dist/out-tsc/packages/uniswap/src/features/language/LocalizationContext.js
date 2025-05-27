import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useFiatConverter } from 'uniswap/src/features/fiatCurrency/conversion';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useLocalizedFormatter } from 'uniswap/src/features/language/formatter';
export const LocalizationContext = createContext(undefined);
export function LocalizationContextProvider({ children }) {
    const { formatNumberOrString, formatCurrencyAmount, formatPercent, addFiatSymbolToNumber } = useLocalizedFormatter();
    const { convertFiatAmount, convertFiatAmountFormatted, conversionRate } = useFiatConverter({
        formatNumberOrString,
    });
    const state = useMemo(() => ({
        conversionRate,
        convertFiatAmount,
        convertFiatAmountFormatted,
        formatNumberOrString,
        formatCurrencyAmount,
        formatPercent,
        addFiatSymbolToNumber,
    }), [
        addFiatSymbolToNumber,
        conversionRate,
        convertFiatAmount,
        convertFiatAmountFormatted,
        formatCurrencyAmount,
        formatNumberOrString,
        formatPercent,
    ]);
    return _jsx(LocalizationContext.Provider, { value: state, children: children });
}
export const useLocalizationContext = () => {
    const localizationContext = useContext(LocalizationContext);
    if (localizationContext === undefined) {
        throw new Error('`useLocalizationContext` must be used inside of `LocalizationContextProvider`');
    }
    return localizationContext;
};
//# sourceMappingURL=LocalizationContext.js.map