import { GasFeeResult } from 'uniswap/src/features/gas/types';
export declare function sumGasFees(gasFees: (string | undefined)[]): string | undefined;
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
export declare function mergeGasFeeResults(...gasFeeResults: GasFeeResult[]): GasFeeResult;
//# sourceMappingURL=gas.d.ts.map