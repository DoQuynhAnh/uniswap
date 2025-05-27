import { GqlResult } from 'uniswap/src/data/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
export declare function useSearchTokensRest({ searchQuery, chainFilter, skip, size, }: {
    searchQuery: string | null;
    chainFilter: UniverseChainId | null;
    skip: boolean;
    size?: number;
}): GqlResult<CurrencyInfo[]>;
//# sourceMappingURL=searchTokensRest.d.ts.map