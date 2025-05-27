import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { ModalNameType } from 'uniswap/src/features/telemetry/constants';
export declare function useFilterCallbacks(chainId: UniverseChainId | null, modalName?: ModalNameType): {
    chainFilter: UniverseChainId | null;
    parsedChainFilter: UniverseChainId | null;
    searchFilter: string | null;
    parsedSearchFilter: string | null;
    onChangeChainFilter: (newChainFilter: UniverseChainId | null) => void;
    onClearSearchFilter: () => void;
    onChangeText: (newSearchFilter: string) => void;
};
//# sourceMappingURL=useFilterCallbacks.d.ts.map