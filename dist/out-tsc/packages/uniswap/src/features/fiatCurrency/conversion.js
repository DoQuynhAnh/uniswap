import { useCallback, useMemo } from 'react';
import { PollingInterval } from 'uniswap/src/constants/misc';
import { Currency, useConvertQuery } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { FiatCurrency } from 'uniswap/src/features/fiatCurrency/constants';
import { getFiatCurrencyCode, useAppFiatCurrency } from 'uniswap/src/features/fiatCurrency/hooks';
const mapServerCurrencyToFiatCurrency = {
    [Currency.Ars]: FiatCurrency.ArgentinePeso,
    [Currency.Aud]: FiatCurrency.AustralianDollar,
    [Currency.Brl]: FiatCurrency.BrazilianReal,
    [Currency.Cad]: FiatCurrency.CanadianDollar,
    [Currency.Cny]: FiatCurrency.ChineseYuan,
    [Currency.Cop]: FiatCurrency.ColombianPeso,
    [Currency.Eur]: FiatCurrency.Euro,
    [Currency.Gbp]: FiatCurrency.BritishPound,
    [Currency.Hkd]: FiatCurrency.HongKongDollar,
    [Currency.Idr]: FiatCurrency.IndonesianRupiah,
    [Currency.Inr]: FiatCurrency.IndianRupee,
    [Currency.Jpy]: FiatCurrency.JapaneseYen,
    [Currency.Krw]: FiatCurrency.SouthKoreanWon,
    [Currency.Mxn]: FiatCurrency.MexicanPeso,
    [Currency.Ngn]: FiatCurrency.NigerianNaira,
    [Currency.Pkr]: FiatCurrency.PakistaniRupee,
    [Currency.Rub]: FiatCurrency.RussianRuble,
    [Currency.Sgd]: FiatCurrency.SingaporeDollar,
    [Currency.Thb]: FiatCurrency.ThaiBaht,
    [Currency.Try]: FiatCurrency.TurkishLira,
    [Currency.Uah]: FiatCurrency.UkrainianHryvnia,
    [Currency.Usd]: FiatCurrency.UnitedStatesDollar,
    [Currency.Vnd]: FiatCurrency.VietnameseDong,
    [Currency.Eth]: undefined,
    [Currency.Matic]: undefined,
};
export const mapFiatCurrencyToServerCurrency = {
    [FiatCurrency.ArgentinePeso]: Currency.Ars,
    [FiatCurrency.AustralianDollar]: Currency.Aud,
    [FiatCurrency.BrazilianReal]: Currency.Brl,
    [FiatCurrency.CanadianDollar]: Currency.Cad,
    [FiatCurrency.ChineseYuan]: Currency.Cny,
    [FiatCurrency.ColombianPeso]: Currency.Cop,
    [FiatCurrency.Euro]: Currency.Eur,
    [FiatCurrency.BritishPound]: Currency.Gbp,
    [FiatCurrency.HongKongDollar]: Currency.Hkd,
    [FiatCurrency.IndonesianRupiah]: Currency.Idr,
    [FiatCurrency.IndianRupee]: Currency.Inr,
    [FiatCurrency.JapaneseYen]: Currency.Jpy,
    [FiatCurrency.MexicanPeso]: Currency.Mxn,
    [FiatCurrency.SouthKoreanWon]: Currency.Krw,
    [FiatCurrency.NigerianNaira]: Currency.Ngn,
    [FiatCurrency.PakistaniRupee]: Currency.Pkr,
    [FiatCurrency.RussianRuble]: Currency.Rub,
    [FiatCurrency.SingaporeDollar]: Currency.Sgd,
    [FiatCurrency.ThaiBaht]: Currency.Thb,
    [FiatCurrency.TurkishLira]: Currency.Try,
    [FiatCurrency.UkrainianHryvnia]: Currency.Uah,
    [FiatCurrency.UnitedStatesDollar]: Currency.Usd,
    [FiatCurrency.VietnameseDong]: Currency.Vnd,
};
const SOURCE_CURRENCY = Currency.Usd; // Assuming all currency data comes from USD
/**
 * Hook used to return a converter with a set of all necessary conversion logic needed for
 * fiat currency. This is based off of the currently selected language and fiat currency
 * in settings, using a graphql endpoint to retrieve the conversion rate.
 * This ensures that the converted and formatted values are properly localized. If any additional
 * conversion logic is needed, please add them here.
 * @returns set of localized fiat currency conversion functions
 */
export function useFiatConverter({ formatNumberOrString, }) {
    var _a, _b;
    const appCurrency = useAppFiatCurrency();
    const toCurrency = mapFiatCurrencyToServerCurrency[appCurrency];
    const { data: latestConversion, previousData: prevConversion } = useConvertQuery({
        variables: {
            fromCurrency: SOURCE_CURRENCY,
            toCurrency,
        },
        pollInterval: PollingInterval.Slow,
    });
    const conversion = latestConversion || prevConversion;
    const conversionRate = (_a = conversion === null || conversion === void 0 ? void 0 : conversion.convert) === null || _a === void 0 ? void 0 : _a.value;
    const conversionCurrency = (_b = conversion === null || conversion === void 0 ? void 0 : conversion.convert) === null || _b === void 0 ? void 0 : _b.currency;
    const outputCurrency = conversionCurrency ? mapServerCurrencyToFiatCurrency[conversionCurrency] : undefined;
    const convertFiatAmountInner = useCallback((amount) => {
        const defaultResult = { amount, currency: FiatCurrency.UnitedStatesDollar };
        if (SOURCE_CURRENCY === toCurrency || !conversionRate || !outputCurrency) {
            return defaultResult;
        }
        return {
            amount: amount * conversionRate,
            currency: outputCurrency,
        };
    }, [conversionRate, outputCurrency, toCurrency]);
    const convertFiatAmountFormattedInner = useCallback((fromAmount, numberType, placeholder = '-') => {
        if (fromAmount === undefined || fromAmount === null) {
            return placeholder;
        }
        const amountNumber = typeof fromAmount === 'string' ? parseFloat(fromAmount) : fromAmount;
        const converted = convertFiatAmountInner(amountNumber);
        const currencyCode = getFiatCurrencyCode(converted.currency);
        return formatNumberOrString({
            value: converted.amount,
            type: numberType,
            currencyCode,
            placeholder,
        });
    }, [convertFiatAmountInner, formatNumberOrString]);
    return useMemo(() => ({
        conversionRate,
        convertFiatAmount: convertFiatAmountInner,
        convertFiatAmountFormatted: convertFiatAmountFormattedInner,
    }), [conversionRate, convertFiatAmountFormattedInner, convertFiatAmountInner]);
}
//# sourceMappingURL=conversion.js.map