import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
export declare function useCurrencyInfo(_currencyId?: string, options?: {
    refetch?: boolean;
    skip?: boolean;
}): Maybe<CurrencyInfo>;
export declare function useCurrencyInfos(_currencyIds: string[], options?: {
    refetch?: boolean;
    skip?: boolean;
}): Maybe<CurrencyInfo>[];
export declare function useNativeCurrencyInfo(chainId: UniverseChainId): Maybe<CurrencyInfo>;
export declare function useWrappedNativeCurrencyInfo(chainId: UniverseChainId): Maybe<CurrencyInfo>;
//# sourceMappingURL=useCurrencyInfo.d.ts.map