import { BigNumberish } from '@ethersproject/bignumber';
import { PollingInterval } from 'uniswap/src/constants/misc';
import { Chain } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { EnabledChainsInfo, GqlChainId, UniverseChainId } from 'uniswap/src/features/chains/types';
export declare function toSupportedChainId(chainId?: BigNumberish): UniverseChainId | null;
export declare function chainSupportsGasEstimates(chainId: UniverseChainId): boolean;
export declare function getChainLabel(chainId: UniverseChainId): string;
export declare function isTestnetChain(chainId: UniverseChainId): boolean;
export declare function getChainIdByInfuraPrefix(prefix: string): UniverseChainId | undefined;
export declare function isBackendSupportedChainId(chainId: UniverseChainId): boolean;
export declare function isBackendSupportedChain(chain: Chain): chain is GqlChainId;
export declare function chainIdToHexadecimalString(chainId: UniverseChainId): string;
export declare function hexadecimalStringToInt(hex: string): number;
export declare function isL2ChainId(chainId?: UniverseChainId): boolean;
export declare function isMainnetChainId(chainId?: UniverseChainId): boolean;
export declare function toGraphQLChain(chainId: UniverseChainId): GqlChainId;
export declare function fromGraphQLChain(chain: Chain | string | undefined): UniverseChainId | null;
export declare function getPollingIntervalByBlocktime(chainId?: UniverseChainId): PollingInterval;
export declare function fromUniswapWebAppLink(network: string | null): UniverseChainId | null;
export declare function toUniswapWebAppLink(chainId: UniverseChainId): string | null;
export declare function filterChainIdsByFeatureFlag(featureFlaggedChainIds: {
    [key in UniverseChainId]?: boolean;
}): UniverseChainId[];
export declare function getEnabledChains({ isTestnetModeEnabled, featureFlaggedChainIds, connectedWalletChainIds, }: {
    isTestnetModeEnabled: boolean;
    featureFlaggedChainIds: UniverseChainId[];
    connectedWalletChainIds?: UniverseChainId[];
}): EnabledChainsInfo;
//# sourceMappingURL=utils.d.ts.map