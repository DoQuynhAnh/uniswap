import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { WalletSearchResult } from 'uniswap/src/features/search/SearchResult';
export declare function useWalletSearchResults(query: string, selectedChain: UniverseChainId | null): {
    wallets: WalletSearchResult[];
    loading: boolean;
    exactENSMatch: boolean;
    exactUnitagMatch: boolean;
};
//# sourceMappingURL=useWalletSearchResults.d.ts.map