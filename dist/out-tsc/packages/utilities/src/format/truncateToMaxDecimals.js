export function truncateToMaxDecimals({ value, maxDecimals, decimalSeparator = '.', }) {
    const [beforeDecimalSeparator, afterDecimalSeparator] = value.split(decimalSeparator);
    if (afterDecimalSeparator === undefined) {
        return value;
    }
    return `${beforeDecimalSeparator}.${afterDecimalSeparator.substring(0, maxDecimals)}`;
}
export function maxDecimalsReached({ value, maxDecimals, decimalSeparator = '.', }) {
    var _a, _b;
    const numberOfDecimals = (_b = (_a = value.split(decimalSeparator)[1]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    return numberOfDecimals >= maxDecimals;
}
//# sourceMappingURL=truncateToMaxDecimals.js.map