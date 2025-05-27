import { FiatCurrency } from 'uniswap/src/features/fiatCurrency/constants';
import { Locale } from 'uniswap/src/features/language/constants';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { addFiatSymbolToNumber, formatCurrencyAmount, formatNumberOrString, formatPercent, } from 'utilities/src/format/localeBased';
import { NumberType } from 'utilities/src/format/types';
export function mockLocalizedFormatter(locale) {
    return {
        conversionRate: 1,
        formatCurrencyAmount(input) {
            return formatCurrencyAmount({ ...input, amount: input.value, locale });
        },
        formatNumberOrString(input) {
            return formatNumberOrString({
                ...input,
                price: input.value,
                locale,
                type: input.type || NumberType.TokenNonTx,
            });
        },
        formatPercent(value) {
            return formatPercent(value, locale);
        },
        addFiatSymbolToNumber(input) {
            return addFiatSymbolToNumber({
                ...input,
                locale,
            });
        },
        convertFiatAmount(_) {
            throw new Error('Function not implemented.');
        },
        convertFiatAmountFormatted() {
            throw new Error('Function not implemented.');
        },
    };
}
export function mockFiatConverter({ locale, currency, }) {
    return {
        conversionRate: 1,
        convertFiatAmount(amount) {
            return { amount: amount !== null && amount !== void 0 ? amount : 1, currency };
        },
        convertFiatAmountFormatted(fromAmount, numberType, placeholder) {
            return mockLocalizedFormatter(locale).formatNumberOrString({
                value: fromAmount,
                type: numberType,
                placeholder,
            });
        },
        formatNumberOrString(_) {
            throw new Error('Function not implemented.');
        },
        formatCurrencyAmount(_) {
            throw new Error('Function not implemented.');
        },
        formatPercent(_) {
            throw new Error('Function not implemented.');
        },
        addFiatSymbolToNumber(_) {
            throw new Error('Function not implemented.');
        },
    };
}
export function mockLocalizationContext({ locale = Locale.EnglishUnitedStates, currency = FiatCurrency.UnitedStatesDollar, }) {
    const fiatMock = mockFiatConverter({ currency, locale });
    const formatterMock = mockLocalizedFormatter(locale);
    return {
        LocalizationContextProvider: ({ children }) => children,
        useLocalizationContext: () => ({
            conversionRate: 1,
            convertFiatAmount: fiatMock.convertFiatAmount,
            convertFiatAmountFormatted: fiatMock.convertFiatAmountFormatted,
            formatNumberOrString: formatterMock.formatNumberOrString,
            formatCurrencyAmount: formatterMock.formatCurrencyAmount,
            formatPercent: formatterMock.formatPercent,
            addFiatSymbolToNumber: formatterMock.addFiatSymbolToNumber,
        }),
    };
}
//# sourceMappingURL=locale.js.map