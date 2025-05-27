import { AppTFunction } from 'ui/src/i18n/types';
import { FiatCurrency } from 'uniswap/src/features/fiatCurrency/constants';
import { FiatCurrencyInfo } from 'uniswap/src/features/fiatOnRamp/types';
import { FiatCurrencyComponents } from 'utilities/src/format/localeBased';
/**
 * Helper function for getting the ISO currency code from our internal enum
 * @param currency target currency
 * @returns ISO currency code
 */
export declare function getFiatCurrencyCode(currency: FiatCurrency): string;
/**
 * Hook to get the currency symbol based on the fiat currency in the current
 * language/locale, which is why it's a hook
 * @param currency target currency
 * @returns currency symbol
 */
export declare function useFiatCurrencyComponents(currency: FiatCurrency): FiatCurrencyComponents;
/**
 * Helper used to get the fiat currency name in the current app language
 * @param currency target currency
 * @returns currency name
 */
export declare function getFiatCurrencyName(t: AppTFunction, currency: FiatCurrency): {
    name: string;
    shortName: string;
};
/**
 * Hook used to get fiat currency info (name, code, symbol, etc.) in the current app language
 * @param currency target currency
 * @returns all relevant currency info
 */
export declare function useFiatCurrencyInfo(currency: FiatCurrency): FiatCurrencyInfo;
/**
 * Hook used to return the current selected fiat currency in the app
 * @returns currently selected fiat currency
 */
export declare function useAppFiatCurrency(): FiatCurrency;
/**
 * Hook used to return all relevant currency info (name, code, symbol, etc)
 * for the currently selected fiat currency in the app
 * @returns all relevant info for the currently selected fiat currency
 */
export declare function useAppFiatCurrencyInfo(): FiatCurrencyInfo;
/**
 * Hook to convert local fiat currency amount to USD amount
 * @returns USD amount
 */
export declare const useLocalFiatToUSDConverter: () => (fiatAmount: number) => number | undefined;
//# sourceMappingURL=hooks.d.ts.map