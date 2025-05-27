import { CurrencyIdToVisibility, NFTKeyToVisibility, PositionKeyToVisibility } from 'uniswap/src/features/visibility/slice';
import { UniswapRootState } from 'uniswap/src/state';
export declare const selectPositionsVisibility: (state: UniswapRootState) => PositionKeyToVisibility;
export declare const selectTokensVisibility: (state: UniswapRootState) => CurrencyIdToVisibility;
export declare const selectNftsVisibility: (state: UniswapRootState) => NFTKeyToVisibility;
//# sourceMappingURL=selectors.d.ts.map