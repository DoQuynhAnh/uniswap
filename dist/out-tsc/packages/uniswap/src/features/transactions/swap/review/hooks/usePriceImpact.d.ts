import { Percent } from '@uniswap/sdk-core';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
/** Returns the price impact of the current trade, including UniswapX trades. UniswapX trades do not have typical pool-based price impact; we use a frontend-calculated metric. */
export declare function usePriceImpact({ derivedSwapInfo }: {
    derivedSwapInfo: DerivedSwapInfo;
}): {
    priceImpact: Percent | undefined;
    formattedPriceImpact: string | undefined;
};
//# sourceMappingURL=usePriceImpact.d.ts.map