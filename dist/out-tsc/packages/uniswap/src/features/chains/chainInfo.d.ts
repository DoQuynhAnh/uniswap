import { GqlChainId, RetryOptions, UniverseChainId, UniverseChainInfo } from 'uniswap/src/features/chains/types';
/** Address that represents native currencies on ETH, Arbitrum, etc. */
export declare const DEFAULT_NATIVE_ADDRESS_LEGACY = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export declare const DEFAULT_NATIVE_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const DEFAULT_RETRY_OPTIONS: RetryOptions;
export declare const DEFAULT_MS_BEFORE_WARNING: number;
export declare function getChainInfo(chainId: UniverseChainId): UniverseChainInfo;
export declare function getQuicknodeChainId(chainId: UniverseChainId): string;
export declare function getQuicknodeChainIdPathSuffix(chainId: UniverseChainId): string;
export declare function getQuicknodeEndpointUrl(chainId: UniverseChainId): string;
export declare const UNIVERSE_CHAIN_INFO: Record<UniverseChainId, UniverseChainInfo>;
export declare const GQL_MAINNET_CHAINS: GqlChainId[];
export declare const GQL_TESTNET_CHAINS: GqlChainId[];
export declare const ALL_GQL_CHAINS: GqlChainId[];
//# sourceMappingURL=chainInfo.d.ts.map