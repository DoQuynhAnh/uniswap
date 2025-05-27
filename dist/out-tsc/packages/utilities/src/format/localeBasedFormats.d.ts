export declare const StandardCurrency: FormatCreator;
export declare const SmallestNumCurrency: FormatCreator;
export declare const FiveDecimalsMaxTwoDecimalsMin: FormatCreator;
export declare const FiveDecimalsMaxTwoDecimalsMinNoCommas: FormatCreator;
export declare const NoDecimals: FormatCreator;
export declare const ThreeDecimals: FormatCreator;
export declare const NoDecimalsCurrency: FormatCreator;
export declare const ThreeDecimalsCurrency: FormatCreator;
export declare const TwoDecimalsCurrency: FormatCreator;
export declare const ShorthandTwoDecimalsCurrency: FormatCreator;
export declare const ShorthandOneDecimalsCurrency: FormatCreator;
export declare const ThreeSigFigsCurrency: FormatCreator;
export declare const TwoDecimals: FormatCreator;
export declare const ShorthandOneDecimal: FormatCreator;
export declare const ShorthandTwoDecimals: FormatCreator;
export declare const SixSigFigsTwoDecimals: FormatCreator;
export declare const SixSigFigsNoCommas: FormatCreator;
export declare const SixSigFigsTwoDecimalsNoCommas: FormatCreator;
export declare const NoTrailingDecimalsPercentages: FormatCreator;
export declare const TwoDecimalsPercentages: FormatCreator;
export interface FormatCreator {
    /**
     * Creates a Intl.NumberFormat based off of locale and currency
     * @param locale comprised of a two letter ISO 639 language code combined with ISO 3166 country code e.g. "en-US"
     * @param currencyCode three letter ISO 4217 currency code e.g. "USD"
     * @returns created Intl.NumberFormat
     */
    createFormat: (locale: string, currencyCode: string) => Intl.NumberFormat;
}
export type Format = string | FormatCreator;
export type FormatterRule = {
    upperBound?: undefined;
    exact: number;
    formatter: Format;
    overrideValue?: number;
    postFormatModifier?: (formatted: string) => string;
} | {
    upperBound: number;
    exact?: undefined;
    formatter: Format;
    overrideValue?: number;
    postFormatModifier?: (formatted: string) => string;
} | {
    formatter: Format;
    overrideValue?: undefined;
    exact?: undefined;
    upperBound?: undefined;
    postFormatModifier?: undefined;
};
export type Formatter = {
    rules: FormatterRule[];
    defaultFormat: Format;
};
export declare const tokenNonTxFormatter: Formatter;
export declare const tokenTxFormatter: Formatter;
export declare const swapTradeAmountFormatter: Formatter;
export declare const swapPriceFormatter: Formatter;
export declare const fiatTokenDetailsFormatter: Formatter;
export declare const fiatTokenPricesFormatter: Formatter;
export declare const fiatTokenStatsFormatter: Formatter;
export declare const fiatGasPriceFormatter: Formatter;
export declare const fiatStandardFormatter: Formatter;
export declare const fiatTokenQuantityFormatter: {
    rules: FormatterRule[];
    defaultFormat: FormatCreator;
};
export declare const portfolioBalanceFormatter: Formatter;
export declare const ntfTokenFloorPriceFormatter: Formatter;
export declare const ntfCollectionStatsFormatter: Formatter;
export declare const percentagesFormatter: Formatter;
export declare const TYPE_TO_FORMATTER_RULES: {
    "token-non-tx": Formatter;
    "token-tx": Formatter;
    "swap-price": Formatter;
    "swap-trade-amount": Formatter;
    "fiat-standard": Formatter;
    "fiat-token-quantity": {
        rules: FormatterRule[];
        defaultFormat: FormatCreator;
    };
    "fiat-token-details": Formatter;
    "fiat-token-price": Formatter;
    "fiat-token-stats": Formatter;
    "fiat-gas-price": Formatter;
    "portfolio-balance": Formatter;
    "nft-token-floor-price": Formatter;
    "nft-collection-stats": Formatter;
    percentage: Formatter;
};
//# sourceMappingURL=localeBasedFormats.d.ts.map