import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useUrlContext } from 'uniswap/src/contexts/UrlContext';
import { FiatCurrency, ORDERED_CURRENCIES } from 'uniswap/src/features/fiatCurrency/constants';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useCurrentLocale } from 'uniswap/src/features/language/hooks';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { getFiatCurrencyComponents } from 'utilities/src/format/localeBased';
/**
 * Helper function for getting the ISO currency code from our internal enum
 * @param currency target currency
 * @returns ISO currency code
 */
// ISO currency code is only in English and cannot be translated
export function getFiatCurrencyCode(currency) {
    return currency.toString();
}
/**
 * Hook to get the currency symbol based on the fiat currency in the current
 * language/locale, which is why it's a hook
 * @param currency target currency
 * @returns currency symbol
 */
export function useFiatCurrencyComponents(currency) {
    const locale = useCurrentLocale();
    const currencyCode = getFiatCurrencyCode(currency);
    const components = getFiatCurrencyComponents(locale, currencyCode);
    return components;
}
/**
 * Helper used to get the fiat currency name in the current app language
 * @param currency target currency
 * @returns currency name
 */
export function getFiatCurrencyName(t, currency) {
    const currencyToCurrencyName = {
        [FiatCurrency.AustralianDollar]: t('currency.aud'),
        [FiatCurrency.ArgentinePeso]: t('currency.ars'),
        [FiatCurrency.BrazilianReal]: t('currency.brl'),
        [FiatCurrency.CanadianDollar]: t('currency.cad'),
        [FiatCurrency.ChineseYuan]: t('currency.cny'),
        [FiatCurrency.ColombianPeso]: t('currency.cop'),
        [FiatCurrency.Euro]: t('currency.eur'),
        [FiatCurrency.BritishPound]: t('currency.gbp'),
        [FiatCurrency.HongKongDollar]: t('currency.hkd'),
        [FiatCurrency.IndonesianRupiah]: t('currency.idr'),
        [FiatCurrency.IndianRupee]: t('currency.inr'),
        [FiatCurrency.JapaneseYen]: t('currency.jpy'),
        [FiatCurrency.SouthKoreanWon]: t('currency.krw'),
        [FiatCurrency.MexicanPeso]: t('currency.mxn'),
        [FiatCurrency.NigerianNaira]: t('currency.ngn'),
        [FiatCurrency.PakistaniRupee]: t('currency.pkr'),
        [FiatCurrency.RussianRuble]: t('currency.rub'),
        [FiatCurrency.SingaporeDollar]: t('currency.sgd'),
        [FiatCurrency.ThaiBaht]: t('currency.thb'),
        [FiatCurrency.TurkishLira]: t('currency.try'),
        [FiatCurrency.UkrainianHryvnia]: t('currency.uah'),
        [FiatCurrency.UnitedStatesDollar]: t('currency.usd'),
        [FiatCurrency.VietnameseDong]: t('currency.vnd'),
    };
    const currencyToGlobalSymbol = {
        [FiatCurrency.AustralianDollar]: '$',
        [FiatCurrency.ArgentinePeso]: '$',
        [FiatCurrency.BrazilianReal]: 'R$',
        [FiatCurrency.CanadianDollar]: '$',
        [FiatCurrency.ChineseYuan]: '¥',
        [FiatCurrency.ColombianPeso]: '$',
        [FiatCurrency.Euro]: '€',
        [FiatCurrency.BritishPound]: '£',
        [FiatCurrency.HongKongDollar]: '$',
        [FiatCurrency.IndonesianRupiah]: 'Rp',
        [FiatCurrency.IndianRupee]: '₹',
        [FiatCurrency.JapaneseYen]: '¥',
        [FiatCurrency.SouthKoreanWon]: '₩',
        [FiatCurrency.MexicanPeso]: '$',
        [FiatCurrency.NigerianNaira]: '₦',
        [FiatCurrency.PakistaniRupee]: 'Rs',
        [FiatCurrency.RussianRuble]: '₽',
        [FiatCurrency.SingaporeDollar]: '$',
        [FiatCurrency.ThaiBaht]: '฿',
        [FiatCurrency.TurkishLira]: '₺',
        [FiatCurrency.UkrainianHryvnia]: '₴',
        [FiatCurrency.UnitedStatesDollar]: '$',
        [FiatCurrency.VietnameseDong]: '₫',
    };
    const code = getFiatCurrencyCode(currency);
    const symbol = currencyToGlobalSymbol[currency];
    return { name: currencyToCurrencyName[currency], shortName: `${code} (${symbol})` };
}
/**
 * Hook used to get fiat currency info (name, code, symbol, etc.) in the current app language
 * @param currency target currency
 * @returns all relevant currency info
 */
export function useFiatCurrencyInfo(currency) {
    const { t } = useTranslation();
    const components = useFiatCurrencyComponents(currency);
    const { name, shortName } = getFiatCurrencyName(t, currency);
    const code = getFiatCurrencyCode(currency);
    return {
        ...components,
        name,
        shortName,
        code,
    };
}
function useUrlLocalCurrency() {
    const { useParsedQueryString } = useUrlContext();
    const parsed = useParsedQueryString();
    const parsedLocalCurrency = parsed.cur;
    if (typeof parsedLocalCurrency !== 'string') {
        return undefined;
    }
    const lowerCaseSupportedLocalCurrency = parsedLocalCurrency.toLowerCase();
    return ORDERED_CURRENCIES.find((localCurrency) => localCurrency.toLowerCase() === lowerCaseSupportedLocalCurrency);
}
/**
 * Hook used to return the current selected fiat currency in the app
 * @returns currently selected fiat currency
 */
export function useAppFiatCurrency() {
    const storeFiatCurrency = useSelector((state) => state.userSettings.currentCurrency);
    const urlFiatCurrency = useUrlLocalCurrency();
    return useMemo(() => urlFiatCurrency !== null && urlFiatCurrency !== void 0 ? urlFiatCurrency : storeFiatCurrency, [storeFiatCurrency, urlFiatCurrency]);
}
/**
 * Hook used to return all relevant currency info (name, code, symbol, etc)
 * for the currently selected fiat currency in the app
 * @returns all relevant info for the currently selected fiat currency
 */
export function useAppFiatCurrencyInfo() {
    const currency = useAppFiatCurrency();
    return useFiatCurrencyInfo(currency);
}
/**
 * Hook to convert local fiat currency amount to USD amount
 * @returns USD amount
 */
export const useLocalFiatToUSDConverter = () => {
    const { convertFiatAmount } = useLocalizationContext();
    return useCallback((fiatAmount) => {
        const { amount: USDInLocalCurrency } = convertFiatAmount(1);
        return USDInLocalCurrency ? fiatAmount / USDInLocalCurrency : undefined;
    }, [convertFiatAmount]);
};
//# sourceMappingURL=hooks.js.map