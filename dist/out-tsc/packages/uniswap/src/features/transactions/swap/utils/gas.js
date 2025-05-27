import { BigNumber } from '@ethersproject/bignumber';
export function sumGasFees(gasFees) {
    if (gasFees.length === 0) {
        return undefined;
    }
    return gasFees.reduce((acc, gasFee) => {
        return BigNumber.from(acc)
            .add(BigNumber.from(gasFee || '0'))
            .toString();
    }, '0');
}
/**
 * Merges multiple GasFeeResult objects into a single result by combining their values and preserving error/loading states
 *
 * @param gasFeeResults - Array of GasFeeResult objects to merge
 * @returns {GasFeeResult} A single merged GasFeeResult where:
 *   - error: First encountered error or null if no errors
 *   - isLoading: true if any result is loading
 *   - value: Sum of all values (undefined if any result has error or missing value)
 *   - displayValue: Sum of all display values (undefined if any result has error or missing value)
 */
export function mergeGasFeeResults(...gasFeeResults) {
    var _a;
    const error = (_a = gasFeeResults.map((g) => g.error).find((e) => !!e)) !== null && _a !== void 0 ? _a : null;
    const isLoading = gasFeeResults.some((r) => r.isLoading);
    const expectedValueMissing = gasFeeResults.some((r) => r.value === undefined);
    if (expectedValueMissing || error) {
        return { value: undefined, displayValue: undefined, error, isLoading };
    }
    const value = sumGasFees(gasFeeResults.map((r) => r.value));
    const displayValue = sumGasFees(gasFeeResults.map((r) => r.displayValue));
    return { value, displayValue, error, isLoading };
}
//# sourceMappingURL=gas.js.map