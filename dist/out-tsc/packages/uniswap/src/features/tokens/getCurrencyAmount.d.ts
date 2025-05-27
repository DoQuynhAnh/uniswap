import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
export declare enum ValueType {
    'Raw' = "uint256",// integer format (the "raw" uint256) - usually used in smart contracts / how data is stored on-chain
    'Exact' = "float"
}
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
export declare function getCurrencyAmount<T extends Currency>({ value, valueType, currency, }: {
    value?: string;
    valueType: ValueType;
    currency?: T | null;
}): CurrencyAmount<T> | null | undefined;
//# sourceMappingURL=getCurrencyAmount.d.ts.map