import { ApolloCache, NormalizedCacheObject } from '@apollo/client';
import { PortfolioBalancesQuery } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyId } from 'uniswap/src/types/currency';
type OnChainMap = Map<CurrencyId, {
    currencyAddress: Address;
    chainId: UniverseChainId;
    rawBalance?: string;
    quantity?: number;
    denominatedValue?: {
        value: number;
        currency: string;
    };
}>;
export declare function fetchOnChainBalances({ apolloCache, cachedPortfolio, accountAddress, currencyIds, }: {
    apolloCache: ApolloCache<NormalizedCacheObject>;
    cachedPortfolio: NonNullable<PortfolioBalancesQuery['portfolios']>[0];
    accountAddress: Address;
    currencyIds: Set<CurrencyId>;
}): Promise<OnChainMap>;
export {};
//# sourceMappingURL=fetchOnChainBalances.d.ts.map