import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';
import { CurrencyAmount } from '@uniswap/sdk-core';
import { convertScientificNotationToNumber } from 'utilities/src/format/convertScientificNotation';
import { logger } from 'utilities/src/logger/logger';
// Allow for digits and one of either period or comma
const ALL_NUMBERS_OR_SEPARATOR_REGEX = /^\d*\.?,?\d*$/;
export var ValueType;
(function (ValueType) {
    ValueType["Raw"] = "uint256";
    ValueType["Exact"] = "float";
})(ValueType || (ValueType = {}));
/**
 * Converts a token value to a currency CurrencyAmount.
 *
 * @param value - The quantity of a given token
 * @param valueType - The format of the token quantity `value`
 * @param currency - The currency which corresponds to the value
 *
 * @example
 * const tokenAmount = getCurrencyAmount({ value: 10000000000000000, valueType: ValueType.Raw, currency })
 */
export function getCurrencyAmount({ value, valueType = ValueType.Raw, currency, }) {
    if (!value || !currency) {
        return undefined;
    }
    try {
        let parsedValue = sanitizeTokenAmount({ value, valueType });
        if (valueType === ValueType.Exact) {
            parsedValue = parseUnits(parsedValue, currency.decimals).toString();
        }
        return CurrencyAmount.fromRawAmount(currency, parsedValue);
    }
    catch (error) {
        // will fail when currency decimal information is incorrect
        logger.error(error, {
            tags: {
                file: 'getCurrencyAmount',
                function: 'getCurrencyAmount',
            },
            extra: {
                value,
                valueType,
                symbol: currency.symbol,
                chain: currency.chainId,
                address: currency.wrapped.address,
                decimals: currency.decimals,
            },
        });
        return null;
    }
}
const sanitizeTokenAmount = ({ value, valueType }) => {
    let sanitizedValue = convertScientificNotationToNumber(value);
    if (sanitizedValue === '.') {
        // Prevents an error being thrown when calling `BigNumber.from('.')`
        sanitizedValue = '0.';
    }
    if (valueType === ValueType.Exact && !ALL_NUMBERS_OR_SEPARATOR_REGEX.test(sanitizedValue)) {
        throw new Error('Provided value is invalid');
    }
    if (valueType === ValueType.Raw) {
        // use BigNumber to do the sanitization of integers for us
        sanitizedValue = BigNumber.from(sanitizedValue).toString();
    }
    return sanitizedValue;
};
//# sourceMappingURL=getCurrencyAmount.js.map