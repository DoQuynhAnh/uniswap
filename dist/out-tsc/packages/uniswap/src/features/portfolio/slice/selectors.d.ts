import { Selector } from '@reduxjs/toolkit';
import { PortfolioState, TokenBalanceOverride } from 'uniswap/src/features/portfolio/slice/slice';
import { UniswapState } from 'uniswap/src/state/uniswapReducer';
export declare const selectTokenBalanceOverrides: (state: UniswapState) => PortfolioState['tokenBalanceOverrides'];
export declare const makeSelectTokenBalanceOverridesForWalletAddress: () => Selector<UniswapState, undefined | TokenBalanceOverride, [
    Address
]>;
//# sourceMappingURL=selectors.d.ts.map