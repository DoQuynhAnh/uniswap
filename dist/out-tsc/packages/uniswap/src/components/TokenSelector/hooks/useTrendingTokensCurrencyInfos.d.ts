import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
export declare function useTrendingTokensCurrencyInfos(chainFilter: Maybe<UniverseChainId>, skip?: boolean): {
    data: CurrencyInfo[] | undefined;
    error: Error | undefined;
    refetch: () => void;
    loading: boolean;
};
//# sourceMappingURL=useTrendingTokensCurrencyInfos.d.ts.map