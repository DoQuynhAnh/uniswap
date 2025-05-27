import { StandardCurrency, TYPE_TO_FORMATTER_RULES, TwoDecimalsCurrency, } from 'utilities/src/format/localeBasedFormats';
import { NumberType } from 'utilities/src/format/types';
import { logger } from 'utilities/src/logger/logger';
function getFormatterRule(input, type) {
    const { rules, defaultFormat } = TYPE_TO_FORMATTER_RULES[type];
    for (const rule of rules) {
        if ((rule.exact !== undefined && input === rule.exact) ||
            (rule.upperBound !== undefined && input < rule.upperBound)) {
            return rule;
        }
    }
    logger.error('Invalid input or misconfigured formatter rules for type', {
        tags: {
            file: 'localeBased',
            function: 'getFormatterRule',
        },
        extra: { type, input },
    });
    // Use default formatting if no applicable rules found (should never happen)
    return { formatter: defaultFormat };
}
export function formatNumber({ input, locale, currencyCode = 'USD', type = NumberType.TokenNonTx, placeholder = '-', }) {
    if (input === null || input === undefined) {
        return placeholder;
    }
    const { formatter, overrideValue, postFormatModifier } = getFormatterRule(input, type);
    if (typeof formatter === 'string') {
        return formatter;
    }
    const createdFormat = formatter.createFormat(locale, currencyCode);
    const formatted = createdFormat.format(overrideValue !== undefined ? overrideValue : input);
    return postFormatModifier ? postFormatModifier(formatted) : formatted;
}
export function formatCurrencyAmount({ amount, locale, type = NumberType.TokenNonTx, placeholder, }) {
    return formatNumber({
        input: amount ? parseFloat(amount.toFixed()) : undefined,
        locale,
        type,
        placeholder,
    });
}
export function formatNumberOrString({ price, locale, currencyCode, type, placeholder = '-', }) {
    if (price === null || price === undefined) {
        return placeholder;
    }
    if (typeof price === 'string') {
        return formatNumber({ input: parseFloat(price), locale, currencyCode, type, placeholder });
    }
    return formatNumber({ input: price, locale, currencyCode, type, placeholder });
}
export function formatPercent(rawPercentage, locale) {
    if (rawPercentage === null || rawPercentage === undefined) {
        return '-';
    }
    const percentage = typeof rawPercentage === 'string' ? parseFloat(rawPercentage) : parseFloat(rawPercentage.toString());
    return formatNumber({ input: percentage / 100, type: NumberType.Percentage, locale });
}
export function addFiatSymbolToNumber({ value, locale, currencyCode, currencySymbol, }) {
    var _a, _b, _c, _d, _e;
    const format = StandardCurrency.createFormat(locale, currencyCode);
    const parts = format.formatToParts(0);
    const isSymbolAtFront = ((_a = parts[0]) === null || _a === void 0 ? void 0 : _a.type) === 'currency';
    const extra = isSymbolAtFront // Some locales have something like an extra space after symbol
        ? ((_b = parts[1]) === null || _b === void 0 ? void 0 : _b.type) === 'literal'
            ? (_c = parts[1]) === null || _c === void 0 ? void 0 : _c.value
            : ''
        : ((_d = parts[parts.length - 2]) === null || _d === void 0 ? void 0 : _d.type) === 'literal'
            ? (_e = parts[parts.length - 2]) === null || _e === void 0 ? void 0 : _e.value
            : '';
    return isSymbolAtFront ? `${currencySymbol}${extra}${value}` : `${value}${extra}${currencySymbol}`;
}
/**
 * Helper function to return components of a currency value for a specific locale
 * E.g. comma, period, or space for separating thousands
 */
export function getFiatCurrencyComponents(locale, currencyCode) {
    const format = TwoDecimalsCurrency.createFormat(locale, currencyCode);
    // See MDN for official docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
    // Returns something like [{"type":"currency","value":"$"},{"type":"integer","value":"1"}]
    const parts = format.formatToParts(1000000.0); // This number should provide both types of separators
    let groupingSeparator = ',';
    let decimalSeparator = '.';
    let symbol = '';
    let fullSymbol = '';
    let symbolAtFront = true;
    parts.forEach((part, index) => {
        if (part.type === 'group') {
            groupingSeparator = part.value;
        }
        else if (part.type === 'decimal') {
            decimalSeparator = part.value;
        }
        else if (part.type === 'currency') {
            symbol = part.value;
            fullSymbol = symbol;
            symbolAtFront = index === 0;
            const nextPart = symbolAtFront ? parts[index + 1] : parts[index - 1];
            // Check for additional characters between symbol and number, like whitespace
            if ((nextPart === null || nextPart === void 0 ? void 0 : nextPart.type) === 'literal') {
                fullSymbol = symbolAtFront ? symbol + nextPart.value : nextPart.value + symbol;
            }
        }
    });
    return {
        groupingSeparator,
        decimalSeparator,
        symbol,
        fullSymbol,
        symbolAtFront,
    };
}
//# sourceMappingURL=localeBased.js.map