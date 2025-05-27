import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { Connector } from 'wagmi';
export declare function useSupportedChainId(chainId?: number | UniverseChainId): UniverseChainId | undefined;
export declare function useIsSupportedChainId(chainId?: number | UniverseChainId): chainId is UniverseChainId;
export declare function useIsSupportedChainIdCallback(): (chainId?: number | UniverseChainId) => chainId is UniverseChainId;
export declare function useSupportedChainIdWithConnector(chainId?: number | UniverseChainId, connector?: Connector): UniverseChainId | undefined;
//# sourceMappingURL=useSupportedChainId.d.ts.map