import { AppTFunction } from 'ui/src/i18n/types';
import { ForceUpgradeTranslations } from 'uniswap/src/features/gating/configs';
import { Language, Locale } from 'uniswap/src/features/language/constants';
export type LanguageInfo = {
    displayName: string;
    originName: string;
    loggingName: string;
    locale: Locale;
};
/**
 * Helper function used get the locale from the language. They're strongly associated,
 * but they have different ISO values and are used differently. Locale is what's mainly
 * used for integrations with other libraries, while language is more internal
 * @param language target language
 * @returns associated locale
 */
export declare function getLocale(language: Language): Locale;
/**
 * Returns all relevant info for the target language, including the translated name of
 * that language in that language (not a typo).
 * @param language target language
 * @returns all relevant language info
 */
export declare function getLanguageInfo(t: AppTFunction, language: Language): LanguageInfo;
/**
 * Hook used to get the currently selected language for the app
 * @returns currently selected language enum
 */
export declare function useCurrentLanguage(): Language;
export declare function useLanguageInfo(language: Language): LanguageInfo;
/**
 * Hook used to get all relevant info for the currently selected language in the app
 * @returns all relevant language info
 */
export declare function useCurrentLanguageInfo(): LanguageInfo;
type SupportedLocale = keyof ForceUpgradeTranslations;
/**
 * Retrieves the Statsig key for a given locale from the i18n resources.
 * @returns The Statsig key if available, otherwise null.
 */
export declare function useLocalizedStatsigLanguage(): SupportedLocale | null;
/**
 * Returns the supported locale read from the user agent (navigator)
 */
export declare function navigatorLocale(): Locale | undefined;
/**
 * Given a locale string (e.g. from user agent), return the best match for corresponding Locale enum object
 * @param maybeSupportedLocale the fuzzy locale identifier
 */
export declare function parseLocale(maybeSupportedLocale: unknown): Locale | undefined;
/**
 * Hook used to get the locale for the currently selected language in the app
 * @returns locale for the currently selected language
 */
export declare function useCurrentLocale(): Locale;
export {};
//# sourceMappingURL=hooks.d.ts.map