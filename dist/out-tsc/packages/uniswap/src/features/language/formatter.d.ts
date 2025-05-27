import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { NumberType } from 'utilities/src/format/types';
export type FormatNumberOrStringInput = {
    value: Maybe<number | string>;
    type?: NumberType;
    currencyCode?: string;
    placeholder?: string;
};
type FormatCurrencyAmountInput = {
    value: CurrencyAmount<Currency> | null | undefined;
    type?: NumberType;
    placeholder?: string;
};
type AddFiatSymbolToNumberInput = {
    value: Maybe<number | string>;
    currencyCode: string;
    currencySymbol: string;
};
export interface LocalizedFormatter {
    formatNumberOrString: (input: FormatNumberOrStringInput) => string;
    formatCurrencyAmount: (input: FormatCurrencyAmountInput) => string;
    formatPercent: (value: Maybe<number | string>) => string;
    addFiatSymbolToNumber: (input: AddFiatSymbolToNumberInput) => string;
}
/**
 * Hook used to return a formatter with all necessary formatting functions needed in the app.
 * This is based off of the currently selected language in the app, so it will make sure that
 * the formatted values are localized. If any new formatting needs arise, add them here.
 * @returns set of formatting functions based off of current locale
 */
export declare function useLocalizedFormatter(): LocalizedFormatter;
export {};
//# sourceMappingURL=formatter.d.ts.map