import { ReactNode } from 'react';
import { useFiatConverter } from 'uniswap/src/features/fiatCurrency/conversion';
import { useLocalizedFormatter } from 'uniswap/src/features/language/formatter';
export type LocalizationContextState = {
    conversionRate: ReturnType<typeof useFiatConverter>['conversionRate'];
    convertFiatAmount: ReturnType<typeof useFiatConverter>['convertFiatAmount'];
    convertFiatAmountFormatted: ReturnType<typeof useFiatConverter>['convertFiatAmountFormatted'];
    formatNumberOrString: ReturnType<typeof useLocalizedFormatter>['formatNumberOrString'];
    formatCurrencyAmount: ReturnType<typeof useLocalizedFormatter>['formatCurrencyAmount'];
    formatPercent: ReturnType<typeof useLocalizedFormatter>['formatPercent'];
    addFiatSymbolToNumber: ReturnType<typeof useLocalizedFormatter>['addFiatSymbolToNumber'];
};
export declare const LocalizationContext: import("react").Context<LocalizationContextState | undefined>;
export declare function LocalizationContextProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export declare const useLocalizationContext: () => LocalizationContextState;
//# sourceMappingURL=LocalizationContext.d.ts.map