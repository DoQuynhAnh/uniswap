/// <reference types="react" />
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export declare function useNetworkOptions({ onPress, selectedChain, includeAllNetworks, chainIds, }: {
    onPress: (chainId: UniverseChainId | null) => void;
    selectedChain: UniverseChainId | null;
    includeAllNetworks?: boolean;
    chainIds: UniverseChainId[];
}): {
    key: string;
    onPress: () => void;
    render: () => JSX.Element;
}[];
//# sourceMappingURL=hooks.d.ts.map