import { PropsWithChildren, ReactNode } from 'react';
import { FiatCurrency } from 'uniswap/src/features/fiatCurrency/constants';
import { LocalizationContextState } from 'uniswap/src/features/language/LocalizationContext';
import { Locale } from 'uniswap/src/features/language/constants';
export declare function mockLocalizedFormatter(locale: Locale): LocalizationContextState;
export declare function mockFiatConverter({ locale, currency, }: {
    locale: Locale;
    currency: FiatCurrency;
}): LocalizationContextState;
export declare function mockLocalizationContext({ locale, currency, }: {
    locale?: Locale;
    currency?: FiatCurrency;
}): {
    LocalizationContextProvider: ({ children }: PropsWithChildren) => ReactNode;
    useLocalizationContext: () => LocalizationContextState;
};
//# sourceMappingURL=locale.d.ts.map