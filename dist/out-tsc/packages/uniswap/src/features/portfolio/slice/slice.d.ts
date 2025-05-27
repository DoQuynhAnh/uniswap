import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyId } from 'uniswap/src/types/currency';
export type TokenBalanceOverride = Record<CurrencyId, {
    updatedAt: number;
}>;
export type PortfolioState = {
    tokenBalanceOverrides: Record<Address, TokenBalanceOverride>;
};
export declare const initialPortfolioState: PortfolioState;
export declare const addTokensToBalanceOverride: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    ownerAddress: Address;
    currencyIds: string[];
}, "portfolio/addTokensToBalanceOverride">, removeTokenFromBalanceOverride: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    ownerAddress: Address;
    chainId: UniverseChainId;
    tokenAddress: Address;
}, "portfolio/removeTokenFromBalanceOverride">, removeExpiredBalanceOverrides: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"portfolio/removeExpiredBalanceOverrides">;
export declare const portfolioReducer: import("redux").Reducer<PortfolioState>;
//# sourceMappingURL=slice.d.ts.map