import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/id';
import 'dayjs/locale/ja';
import 'dayjs/locale/ms-my';
import 'dayjs/locale/nl';
import 'dayjs/locale/pt';
import 'dayjs/locale/ru';
import 'dayjs/locale/th';
import 'dayjs/locale/tr';
import 'dayjs/locale/uk';
import 'dayjs/locale/ur';
import 'dayjs/locale/vi';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import { Locale } from 'uniswap/src/features/language/constants';
import { useCurrentLanguageInfo } from 'uniswap/src/features/language/hooks';
dayjs.extend(localizedFormat);
export const FORMAT_DATE_SHORT = 'l'; // M/D/YYYY e.g. 8/16/2018
export const FORMAT_DATE_MEDIUM = 'll'; // MMM D, YYYY	e.g. Aug 16, 2018
export const FORMAT_DATE_LONG = 'LL'; // MMMM D, YYYY	e.g. August 16, 2018
export const FORMAT_DATE_MONTH = 'MMMM'; // January-December
export const FORMAT_DATE_MONTH_YEAR = 'MMMM YYYY';
export const FORMAT_DATE_MONTH_DAY = 'MMM D'; // Jan-Dec 1-31
export const FORMAT_TIME_SHORT = 'LT'; // h:mm A	e.g. 8:02 PM
export const FORMAT_TIME_MEDIUM = 'LTS'; // h:mm:ss A e.g. 8:02:18 PM
export const FORMAT_DATE_TIME_SHORT = 'lll'; // MMM D, YYYY h:mm A	e.g. Aug 16, 2018 8:02 PM
export const FORMAT_DATE_TIME_MEDIUM = 'LLL'; // MMMM D, YYYY h:mm A	e.g. August 16, 2018 8:02 PM
export const FORMAT_DATE_TIME_LONG = 'llll'; // ddd, MMM D, YYYY h:mm A e.g. Thu, Aug 16, 2018 8:02 PM
export const FORMAT_DATE_TIME_FULL = 'LLLL'; // dddd, MMMM D, YYYY h:mm A e.g. Thursday, August 16, 2018 8:02 PM
// Supported ones found here https://github.com/iamkun/dayjs/tree/dev/src/locale
const mapLocaleToSupportedDayjsLocale = {
    [Locale.Afrikaans]: 'af',
    [Locale.ArabicSaudi]: 'ar-sa',
    [Locale.Catalan]: 'ca',
    [Locale.ChineseSimplified]: 'zh-cn',
    [Locale.ChineseTraditional]: 'zh-tw',
    [Locale.CzechCzechia]: 'cs',
    [Locale.DanishDenmark]: 'da',
    [Locale.DutchNetherlands]: 'nl',
    [Locale.EnglishUnitedStates]: 'en-us',
    [Locale.FinnishFinland]: 'fi',
    [Locale.FrenchFrance]: 'fr',
    [Locale.GreekGreece]: 'el',
    [Locale.HebrewIsrael]: 'he',
    [Locale.HindiIndia]: 'hi',
    [Locale.HungarianHungarian]: 'hu',
    [Locale.IndonesianIndonesia]: 'id',
    [Locale.ItalianItaly]: 'it',
    [Locale.JapaneseJapan]: 'ja',
    [Locale.KoreanKorea]: 'ko',
    [Locale.MalayMalaysia]: 'ms',
    [Locale.NorwegianNorway]: 'no',
    [Locale.PolishPoland]: 'pl',
    [Locale.PortugueseBrazil]: 'pt-br',
    [Locale.PortuguesePortugal]: 'pt',
    [Locale.RomanianRomania]: 'ro',
    [Locale.RussianRussia]: 'ru',
    [Locale.Serbian]: 'sr',
    [Locale.SpanishSpain]: 'es-es',
    [Locale.SpanishLatam]: 'es-mx',
    [Locale.SpanishArgentina]: 'es-mx',
    [Locale.SpanishBelize]: 'es-mx',
    [Locale.SpanishBolivia]: 'es-mx',
    [Locale.SpanishChile]: 'es-mx',
    [Locale.SpanishColombia]: 'es-mx',
    [Locale.SpanishCostaRica]: 'es-mx',
    [Locale.SpanishCuba]: 'es-mx',
    [Locale.SpanishDominicanRepublic]: 'es-mx',
    [Locale.SpanishEcuador]: 'es-mx',
    [Locale.SpanishElSalvador]: 'es-mx',
    [Locale.SpanishGuatemala]: 'es-mx',
    [Locale.SpanishHonduras]: 'es-mx',
    [Locale.SpanishMexico]: 'es-mx',
    [Locale.SpanishNicaragua]: 'es-mx',
    [Locale.SpanishPanama]: 'es-mx',
    [Locale.SpanishParaguay]: 'es-mx',
    [Locale.SpanishPeru]: 'es-mx',
    [Locale.SpanishPuertoRico]: 'es-mx',
    [Locale.SpanishUruguay]: 'es-mx',
    [Locale.SpanishVenezuela]: 'es-mx',
    [Locale.SpanishUnitedStates]: 'es-us',
    [Locale.SwahiliTanzania]: 'sw',
    [Locale.SwedishSweden]: 'sv',
    [Locale.TurkishTurkey]: 'tr',
    [Locale.UkrainianUkraine]: 'uk',
    [Locale.UrduPakistan]: 'ur',
    [Locale.VietnameseVietnam]: 'vi',
};
/**
 * Utility hook to ensure that the date formatted by dayjs is up to date with the current locale.
 * Does not currently lead to rerender when language is changed, but this isn't needed when language is controlled
 * in system settings.s
 * @returns dayjs instance for ease of use, same as instance imported from library
 */
export function useLocalizedDayjs() {
    const { locale } = useCurrentLanguageInfo();
    dayjs.locale(mapLocaleToSupportedDayjsLocale[locale]);
    return dayjs;
}
export function useFormattedDate(date, format) {
    const { locale } = useCurrentLanguageInfo();
    return date.locale(mapLocaleToSupportedDayjsLocale[locale]).format(format).toString();
}
export function useFormattedTime(date, format) {
    const { locale } = useCurrentLanguageInfo();
    return date.locale(mapLocaleToSupportedDayjsLocale[locale]).format(format).toString();
}
export function useFormattedDateTime(date, format) {
    const { locale } = useCurrentLanguageInfo();
    return date.locale(locale).format(format).toString();
}
//# sourceMappingURL=localizedDayjs.js.map