import { Currency } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { FiatCurrency } from 'uniswap/src/features/fiatCurrency/constants';
import { LocalizationContextState } from 'uniswap/src/features/language/LocalizationContext';
import { FiatNumberType } from 'utilities/src/format/types';
type SupportedServerCurrency = Extract<Currency, Currency.Ars | Currency.Aud | Currency.Brl | Currency.Cad | Currency.Cny | Currency.Cop | Currency.Eur | Currency.Gbp | Currency.Hkd | Currency.Idr | Currency.Inr | Currency.Jpy | Currency.Krw | Currency.Mxn | Currency.Ngn | Currency.Pkr | Currency.Rub | Currency.Sgd | Currency.Thb | Currency.Try | Currency.Uah | Currency.Usd | Currency.Vnd>;
export declare const mapFiatCurrencyToServerCurrency: Record<FiatCurrency, SupportedServerCurrency>;
export interface FiatConverter {
    convertFiatAmount: (amount: number) => {
        amount: number;
        currency: FiatCurrency;
    };
    convertFiatAmountFormatted: (fromAmount: Maybe<number | string>, numberType: FiatNumberType, placeholder?: string) => string;
    conversionRate?: number;
}
/**
 * Hook used to return a converter with a set of all necessary conversion logic needed for
 * fiat currency. This is based off of the currently selected language and fiat currency
 * in settings, using a graphql endpoint to retrieve the conversion rate.
 * This ensures that the converted and formatted values are properly localized. If any additional
 * conversion logic is needed, please add them here.
 * @returns set of localized fiat currency conversion functions
 */
export declare function useFiatConverter({ formatNumberOrString, }: Pick<LocalizationContextState, 'formatNumberOrString'>): FiatConverter;
export {};
//# sourceMappingURL=conversion.d.ts.map