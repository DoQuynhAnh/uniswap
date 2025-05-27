import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { NumberType } from 'utilities/src/format/types';
export declare function formatNumber({ input, locale, currencyCode, type, placeholder, }: {
    input: number | null | undefined;
    locale: string;
    currencyCode?: string;
    type?: NumberType;
    placeholder?: string;
}): string;
export declare function formatCurrencyAmount({ amount, locale, type, placeholder, }: {
    amount?: CurrencyAmount<Currency> | null | undefined;
    locale: string;
    type?: NumberType;
    placeholder?: string;
}): string;
export declare function formatNumberOrString({ price, locale, currencyCode, type, placeholder, }: {
    price: Maybe<number | string>;
    locale: string;
    currencyCode?: string;
    type: NumberType;
    placeholder?: string;
}): string;
export declare function formatPercent(rawPercentage: Maybe<number | string>, locale: string): string;
export declare function addFiatSymbolToNumber({ value, locale, currencyCode, currencySymbol, }: {
    value: Maybe<number | string>;
    locale: string;
    currencyCode: string;
    currencySymbol: string;
}): string;
export type FiatCurrencyComponents = {
    groupingSeparator: string;
    decimalSeparator: string;
    symbol: string;
    fullSymbol: string;
    symbolAtFront: boolean;
};
/**
 * Helper function to return components of a currency value for a specific locale
 * E.g. comma, period, or space for separating thousands
 */
export declare function getFiatCurrencyComponents(locale: string, currencyCode: string): FiatCurrencyComponents;
//# sourceMappingURL=localeBased.d.ts.map