import dayjs, { Dayjs } from 'dayjs';
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
export type DateFormat = 'l' | 'll' | 'LL';
export declare const FORMAT_DATE_SHORT: DateFormat;
export declare const FORMAT_DATE_MEDIUM: DateFormat;
export declare const FORMAT_DATE_LONG: DateFormat;
export declare const FORMAT_DATE_MONTH = "MMMM";
export declare const FORMAT_DATE_MONTH_YEAR = "MMMM YYYY";
export declare const FORMAT_DATE_MONTH_DAY = "MMM D";
export type TimeFormat = 'LT' | 'LTS';
export declare const FORMAT_TIME_SHORT: TimeFormat;
export declare const FORMAT_TIME_MEDIUM: TimeFormat;
export type DateTimeFormat = 'lll' | 'LLL' | 'llll' | 'LLLL';
export declare const FORMAT_DATE_TIME_SHORT = "lll";
export declare const FORMAT_DATE_TIME_MEDIUM = "LLL";
export declare const FORMAT_DATE_TIME_LONG = "llll";
export declare const FORMAT_DATE_TIME_FULL = "LLLL";
export type LocalizedDayjs = typeof dayjs;
/**
 * Utility hook to ensure that the date formatted by dayjs is up to date with the current locale.
 * Does not currently lead to rerender when language is changed, but this isn't needed when language is controlled
 * in system settings.s
 * @returns dayjs instance for ease of use, same as instance imported from library
 */
export declare function useLocalizedDayjs(): LocalizedDayjs;
export declare function useFormattedDate(date: Dayjs, format: DateFormat): string;
export declare function useFormattedTime(date: Dayjs, format: TimeFormat): string;
export declare function useFormattedDateTime(date: Dayjs, format: DateTimeFormat): string;
//# sourceMappingURL=localizedDayjs.d.ts.map