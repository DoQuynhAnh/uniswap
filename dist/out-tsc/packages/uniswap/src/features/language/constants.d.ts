/**
 * List of supported languages in app, represented by ISO 639 language code.
 * If you add a new locale here, be sure to add polyfills for it in intl.js,
 * resource strings in i18n.ts, and supported localizations in the Uniswap Xcode project.
 */
export declare enum Language {
    Afrikaans = "af",
    Arabic = "ar",
    Catalan = "ca-ES",
    ChineseSimplified = "zh",// Defaulting overarching Chinese language code to Simplified
    ChineseTraditional = "zh-Hant",
    Czech = "cs",
    Danish = "da",
    Dutch = "nl",
    English = "en",
    Finnish = "fi",
    French = "fr",
    Greek = "el",
    Hebrew = "he",
    Hindi = "hi",
    Hungarian = "hu",
    Indonesian = "id",
    Italian = "it",
    Japanese = "ja",
    Korean = "ko",
    Malay = "ms",
    Norwegian = "no",
    Polish = "pl",
    Portuguese = "pt",
    Romanian = "ro",
    Russian = "ru",
    Serbian = "sr",
    SpanishSpain = "es",
    SpanishLatam = "es-419",
    SpanishBelize = "es-BZ",
    SpanishCuba = "es-CU",
    SpanishDominicanRepublic = "es-DO",
    SpanishGuatemala = "es-GT",
    SpanishHonduras = "es-HN",
    SpanishMexico = "es-MX",
    SpanishNicaragua = "es-NI",
    SpanishPanama = "es-PA",
    SpanishPeru = "es-PE",
    SpanishPuertoRico = "es-PR",
    SpanishElSalvador = "es-SV",
    SpanishUnitedStates = "es-US",
    SpanishArgentina = "es-AR",
    SpanishBolivia = "es-BO",
    SpanishChile = "es-CL",
    SpanishColombia = "es-CO",
    SpanishCostaRica = "es-CR",
    SpanishEcuador = "es-EC",
    SpanishParaguay = "es-PY",
    SpanishUruguay = "es-UY",
    SpanishVenezuela = "es-VE",
    Swahili = "sw",
    Swedish = "sv",
    Turkish = "tr",
    Ukrainian = "uk",
    Urdu = "ur",
    Vietnamese = "vi"
}
export declare const WALLET_SUPPORTED_LANGUAGES: Language[];
export declare const WEB_SUPPORTED_LANGUAGES: Language[];
export declare const PLATFORM_SUPPORTED_LANGUAGES: Language[];
/**
 * External mapping to be used with system locale strings trying to resolve to specific language
 * Included different Spanish variations availabled on Android/iOS as of 11/17/23
 */
export declare const mapDeviceLanguageToLanguage: Record<string, Language>;
/**
 * List of supported locales in app, comprised of two letter language code (ISO 639) combined with two letter country code (ISO 3166).
 * Matches to locale codes for languages provided by Crowdin
 */
export declare enum Locale {
    Afrikaans = "af-ZA",
    ArabicSaudi = "ar-SA",
    Catalan = "ca-ES",
    ChineseSimplified = "zh-Hans",
    ChineseTraditional = "zh-Hant",
    CzechCzechia = "cs-CZ",
    DanishDenmark = "da-DK",
    DutchNetherlands = "nl-NL",
    EnglishUnitedStates = "en-US",
    FinnishFinland = "fi-FI",
    FrenchFrance = "fr-FR",
    GreekGreece = "el-GR",
    HebrewIsrael = "he-IL",
    HindiIndia = "hi-IN",
    HungarianHungarian = "hu-HU",
    IndonesianIndonesia = "id-ID",
    ItalianItaly = "it-IT",
    JapaneseJapan = "ja-JP",
    KoreanKorea = "ko-KR",
    MalayMalaysia = "ms-MY",
    NorwegianNorway = "no-NO",
    PolishPoland = "pl-PL",
    PortugueseBrazil = "pt-BR",
    PortuguesePortugal = "pt-PT",
    RomanianRomania = "ro-RO",
    RussianRussia = "ru-RU",
    Serbian = "sr-SP",
    SpanishLatam = "es-419",
    SpanishBelize = "es-BZ",
    SpanishCuba = "es-CU",
    SpanishDominicanRepublic = "es-DO",
    SpanishGuatemala = "es-GT",
    SpanishHonduras = "es-HN",
    SpanishMexico = "es-MX",
    SpanishNicaragua = "es-NI",
    SpanishPanama = "es-PA",
    SpanishPeru = "es-PE",
    SpanishPuertoRico = "es-PR",
    SpanishElSalvador = "es-SV",
    SpanishUnitedStates = "es-US",
    SpanishArgentina = "es-AR",
    SpanishBolivia = "es-BO",
    SpanishChile = "es-CL",
    SpanishColombia = "es-CO",
    SpanishCostaRica = "es-CR",
    SpanishEcuador = "es-EC",
    SpanishSpain = "es-ES",
    SpanishParaguay = "es-PY",
    SpanishUruguay = "es-UY",
    SpanishVenezuela = "es-VE",
    SwahiliTanzania = "sw-TZ",
    SwedishSweden = "sv-SE",
    TurkishTurkey = "tr-TR",
    UkrainianUkraine = "uk-UA",
    UrduPakistan = "ur-PK",
    VietnameseVietnam = "vi-VN"
}
export declare const DEFAULT_LOCALE: Locale;
/**
 * Internal app mapping between language and locale enums
 * This is needed because we not support all locales and default languages to specific locales
 */
export declare const mapLanguageToLocale: Record<Language, Locale>;
/**
 * Internal app mapping between language and locale enums
 * This is needed because we not support all locales and default languages to specific locales
 */
export declare const mapLocaleToLanguage: Record<Locale, Language>;
//# sourceMappingURL=constants.d.ts.map