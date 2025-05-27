import { EnabledChainsInfo, GqlChainId, UniverseChainId } from 'uniswap/src/features/chains/types';
import { Connector } from 'wagmi';
export declare function useIsModeMismatch(chainId?: UniverseChainId): boolean;
export declare function useEnabledChains(): EnabledChainsInfo;
export declare function useEnabledChainsWithConnector(connector?: Connector): {
    chains: UniverseChainId[];
    gqlChains: GqlChainId[];
    defaultChainId: UniverseChainId;
    isTestnetModeEnabled: boolean;
};
//# sourceMappingURL=useEnabledChains.d.ts.map