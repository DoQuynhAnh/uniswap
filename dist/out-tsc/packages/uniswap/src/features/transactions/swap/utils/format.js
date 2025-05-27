import { Percent } from '@uniswap/sdk-core';
// rounds to nearest basis point
export const slippageToleranceToPercent = (slippage) => {
    const basisPoints = Math.round(slippage * 100);
    return new Percent(basisPoints, 10000);
};
//# sourceMappingURL=format.js.map