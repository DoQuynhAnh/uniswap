import { WatchQueryFetchPolicy } from '@apollo/client';
import { Chain } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { PortfolioBalance } from 'uniswap/src/features/dataApi/types';
export declare function useCrossChainBalances({ address, currencyId, crossChainTokens, fetchPolicy, }: {
    address: Address;
    currencyId: string;
    crossChainTokens: Maybe<{
        chain: Chain;
        address?: Maybe<string>;
    }[]>;
    fetchPolicy?: WatchQueryFetchPolicy;
}): {
    currentChainBalance: PortfolioBalance | null;
    otherChainBalances: PortfolioBalance[] | null;
};
//# sourceMappingURL=useCrossChainBalances.d.ts.map