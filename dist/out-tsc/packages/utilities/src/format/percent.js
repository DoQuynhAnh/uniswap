import { Percent } from '@uniswap/sdk-core';
const PERCENT_PRECISION = 100000;
export function percentFromFloat(value) {
    // Rounding addresses JS floating point imprecision
    return new Percent(Math.round(value * PERCENT_PRECISION), PERCENT_PRECISION);
}
//# sourceMappingURL=percent.js.map