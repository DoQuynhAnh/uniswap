/* eslint-disable max-lines */
// Number formatting in our app should follow the guide in this doc:
// https://www.notion.so/uniswaplabs/Number-standards-fbb9f533f10e4e22820722c2f66d23c0
import { NumberType } from 'utilities/src/format/types';
const numberFormatCache = {};
function getNumberFormat({ name, locale, props, }) {
    var _a;
    const key = `${locale}--${(_a = props === null || props === void 0 ? void 0 : props.currency) !== null && _a !== void 0 ? _a : 'NONE'}--${name}}`;
    let format = numberFormatCache[key];
    if (format) {
        return format;
    }
    format = new Intl.NumberFormat(locale, props);
    numberFormatCache[key] = format;
    return format;
}
export const StandardCurrency = {
    createFormat(locale, currencyCode) {
        return getNumberFormat({
            name: 'StandardCurrency',
            locale,
            props: {
                notation: 'standard',
                style: 'currency',
                currency: currencyCode,
            },
        });
    },
};
export const SmallestNumCurrency = {
    createFormat(locale, currencyCode) {
        return getNumberFormat({
            name: 'SmallestNumCurrency',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 20, // max allowed digits
                currency: currencyCode,
                style: 'currency',
            },
        });
    },
};
export const FiveDecimalsMaxTwoDecimalsMin = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'FiveDecimalsMaxTwoDecimalsMin',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 5,
                minimumFractionDigits: 2,
            },
        });
    },
};
export const FiveDecimalsMaxTwoDecimalsMinNoCommas = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'FiveDecimalsMaxTwoDecimalsMinNoCommas',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 5,
                minimumFractionDigits: 2,
                useGrouping: false,
            },
        });
    },
};
export const NoDecimals = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'NoDecimals',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            },
        });
    },
};
export const ThreeDecimals = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'ThreeDecimals',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 3,
                minimumFractionDigits: 3,
            },
        });
    },
};
export const NoDecimalsCurrency = {
    createFormat: (locale, currencyCode) => {
        return getNumberFormat({
            name: 'NoDecimalsCurrency',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
                currency: currencyCode,
                style: 'currency',
            },
        });
    },
};
export const ThreeDecimalsCurrency = {
    createFormat: (locale, currencyCode) => {
        return getNumberFormat({
            name: 'ThreeDecimalsCurrency',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 3,
                minimumFractionDigits: 3,
                currency: currencyCode,
                style: 'currency',
            },
        });
    },
};
export const TwoDecimalsCurrency = {
    createFormat: (locale, currencyCode) => {
        return getNumberFormat({
            name: 'TwoDecimalsCurrency',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                currency: currencyCode,
                style: 'currency',
            },
        });
    },
};
export const ShorthandTwoDecimalsCurrency = {
    createFormat: (locale, currencyCode) => {
        return getNumberFormat({
            name: 'ShorthandTwoDecimalsCurrency',
            locale,
            props: {
                notation: 'compact',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                currency: currencyCode,
                style: 'currency',
            },
        });
    },
};
export const ShorthandOneDecimalsCurrency = {
    createFormat: (locale, currencyCode) => {
        return getNumberFormat({
            name: 'ShorthandOneDecimalsCurrency',
            locale,
            props: {
                notation: 'compact',
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
                currency: currencyCode,
                style: 'currency',
            },
        });
    },
};
export const ThreeSigFigsCurrency = {
    createFormat: (locale, currencyCode) => {
        return getNumberFormat({
            name: 'ThreeSigFigsCurrency',
            locale,
            props: {
                notation: 'standard',
                minimumSignificantDigits: 3,
                maximumSignificantDigits: 3,
                currency: currencyCode,
                style: 'currency',
            },
        });
    },
};
export const TwoDecimals = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'TwoDecimals',
            locale,
            props: {
                notation: 'standard',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            },
        });
    },
};
export const ShorthandOneDecimal = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'ShorthandOneDecimal',
            locale,
            props: {
                notation: 'compact',
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
            },
        });
    },
};
export const ShorthandTwoDecimals = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'ShorthandTwoDecimals',
            locale,
            props: {
                notation: 'compact',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        });
    },
};
export const SixSigFigsTwoDecimals = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'SixSigFigsTwoDecimals',
            locale,
            props: {
                notation: 'standard',
                maximumSignificantDigits: 6,
                minimumSignificantDigits: 3,
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            },
        });
    },
};
export const SixSigFigsNoCommas = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'SixSigFigsNoCommas',
            locale,
            props: {
                notation: 'standard',
                maximumSignificantDigits: 6,
                useGrouping: false,
            },
        });
    },
};
export const SixSigFigsTwoDecimalsNoCommas = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'SixSigFigsTwoDecimalsNoCommas',
            locale,
            props: {
                notation: 'standard',
                maximumSignificantDigits: 6,
                minimumSignificantDigits: 3,
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
                useGrouping: false,
            },
        });
    },
};
export const NoTrailingDecimalsPercentages = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'NoTrailingDecimalsPercentages',
            locale,
            props: {
                notation: 'standard',
                style: 'percent',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            },
        });
    },
};
export const TwoDecimalsPercentages = {
    createFormat: (locale, _currencyCode) => {
        return getNumberFormat({
            name: 'TwoDecimalsPercentages',
            locale,
            props: {
                notation: 'standard',
                style: 'percent',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        });
    },
};
// these formatter objects dictate which formatter rule to use based on the interval that
// the number falls into. for example, based on the rule set below, if your number
// falls between 1 and 1e6, you'd use TwoDecimals as the formatter.
export const tokenNonTxFormatter = {
    rules: [
        { exact: 0, formatter: '0' },
        { upperBound: 0.001, formatter: '<0.001' },
        { upperBound: 1, formatter: ThreeDecimals },
        { upperBound: 1e6, formatter: TwoDecimals },
        { upperBound: 1e15, formatter: ShorthandTwoDecimals },
        { upperBound: Infinity, formatter: '>999T' },
    ],
    defaultFormat: TwoDecimals,
};
export const tokenTxFormatter = {
    rules: [
        { exact: 0, formatter: '0' },
        { upperBound: 0.00001, formatter: '<0.00001' },
        { upperBound: 1, formatter: FiveDecimalsMaxTwoDecimalsMin },
        { upperBound: 10000, formatter: SixSigFigsTwoDecimals },
        { upperBound: Infinity, formatter: TwoDecimals },
    ],
    defaultFormat: SixSigFigsTwoDecimals,
};
export const swapTradeAmountFormatter = {
    rules: [
        { exact: 0, formatter: '0' },
        { upperBound: 0.1, formatter: SixSigFigsNoCommas },
        { upperBound: 1, formatter: FiveDecimalsMaxTwoDecimalsMinNoCommas },
        { upperBound: Infinity, formatter: SixSigFigsTwoDecimalsNoCommas },
    ],
    defaultFormat: SixSigFigsTwoDecimalsNoCommas,
};
export const swapPriceFormatter = {
    rules: [
        { exact: 0, formatter: '0' },
        { upperBound: 0.00001, formatter: '<0.00001' },
        ...swapTradeAmountFormatter.rules,
    ],
    defaultFormat: SixSigFigsTwoDecimalsNoCommas,
};
export const fiatTokenDetailsFormatter = {
    rules: [
        {
            upperBound: 0.00000001,
            overrideValue: 0.00000001,
            formatter: SmallestNumCurrency,
            postFormatModifier: (formatted) => `<${formatted}`,
        },
        { upperBound: 0.1, formatter: ThreeSigFigsCurrency },
        { upperBound: 1.05, formatter: ThreeDecimalsCurrency },
        { upperBound: 1e6, formatter: TwoDecimalsCurrency },
        { upperBound: Infinity, formatter: ShorthandTwoDecimalsCurrency },
    ],
    defaultFormat: TwoDecimalsCurrency,
};
export const fiatTokenPricesFormatter = {
    rules: [
        {
            upperBound: 0.00000001,
            overrideValue: 0.00000001,
            formatter: SmallestNumCurrency,
            postFormatModifier: (formatted) => `<${formatted}`,
        },
        { upperBound: 1, formatter: ThreeSigFigsCurrency },
        { upperBound: 1e6, formatter: TwoDecimalsCurrency },
        { upperBound: Infinity, formatter: ShorthandTwoDecimalsCurrency },
    ],
    defaultFormat: TwoDecimalsCurrency,
};
export const fiatTokenStatsFormatter = {
    rules: [
        // if token stat value is 0, we probably don't have the data for it, so show '-' as a placeholder
        { exact: 0, formatter: '-' },
        {
            upperBound: 0.01,
            overrideValue: 0.01,
            formatter: SmallestNumCurrency,
            postFormatModifier: (formatted) => `<${formatted}`,
        },
        { upperBound: 1000, formatter: TwoDecimalsCurrency },
        { upperBound: Infinity, formatter: ShorthandOneDecimalsCurrency },
    ],
    defaultFormat: ShorthandOneDecimalsCurrency,
};
export const fiatGasPriceFormatter = {
    rules: [
        { exact: 0, formatter: NoDecimalsCurrency },
        {
            upperBound: 0.01,
            overrideValue: 0.01,
            formatter: SmallestNumCurrency,
            postFormatModifier: (formatted) => `<${formatted}`,
        },
        { upperBound: 1e6, formatter: TwoDecimalsCurrency },
        { upperBound: Infinity, formatter: ShorthandTwoDecimalsCurrency },
    ],
    defaultFormat: TwoDecimalsCurrency,
};
export const fiatStandardFormatter = {
    rules: [
        {
            upperBound: Infinity,
            formatter: StandardCurrency,
        },
    ],
    defaultFormat: StandardCurrency,
};
export const fiatTokenQuantityFormatter = {
    rules: [
        {
            exact: 0,
            formatter: StandardCurrency,
        },
        ...fiatGasPriceFormatter.rules,
    ],
    defaultFormat: TwoDecimalsCurrency,
};
export const portfolioBalanceFormatter = {
    rules: [
        { exact: 0, formatter: StandardCurrency },
        { upperBound: Infinity, formatter: TwoDecimalsCurrency },
    ],
    defaultFormat: TwoDecimalsCurrency,
};
export const ntfTokenFloorPriceFormatter = {
    rules: [
        { exact: 0, formatter: '0' },
        { upperBound: 0.001, formatter: '<0.001' },
        { upperBound: 1, formatter: ThreeDecimals },
        { upperBound: 1000, formatter: TwoDecimals },
        { upperBound: 1e15, formatter: ShorthandTwoDecimals },
        { upperBound: Infinity, formatter: '>999T' },
    ],
    defaultFormat: TwoDecimals,
};
export const ntfCollectionStatsFormatter = {
    rules: [
        { upperBound: 1000, formatter: NoDecimals },
        { upperBound: Infinity, formatter: ShorthandOneDecimal },
    ],
    defaultFormat: ShorthandOneDecimal,
};
export const percentagesFormatter = {
    rules: [
        { upperBound: 0.01, formatter: TwoDecimalsPercentages },
        { upperBound: Infinity, formatter: NoTrailingDecimalsPercentages },
    ],
    defaultFormat: NoTrailingDecimalsPercentages,
};
export const TYPE_TO_FORMATTER_RULES = {
    [NumberType.TokenNonTx]: tokenNonTxFormatter,
    [NumberType.TokenTx]: tokenTxFormatter,
    [NumberType.SwapPrice]: swapPriceFormatter,
    [NumberType.SwapTradeAmount]: swapTradeAmountFormatter,
    [NumberType.FiatStandard]: fiatStandardFormatter,
    [NumberType.FiatTokenQuantity]: fiatTokenQuantityFormatter,
    [NumberType.FiatTokenDetails]: fiatTokenDetailsFormatter,
    [NumberType.FiatTokenPrice]: fiatTokenPricesFormatter,
    [NumberType.FiatTokenStats]: fiatTokenStatsFormatter,
    [NumberType.FiatGasPrice]: fiatGasPriceFormatter,
    [NumberType.PortfolioBalance]: portfolioBalanceFormatter,
    [NumberType.NFTTokenFloorPrice]: ntfTokenFloorPriceFormatter,
    [NumberType.NFTCollectionStats]: ntfCollectionStatsFormatter,
    [NumberType.Percentage]: percentagesFormatter,
};
//# sourceMappingURL=localeBasedFormats.js.map