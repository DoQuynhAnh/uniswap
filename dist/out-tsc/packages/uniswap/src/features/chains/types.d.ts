import { CurrencyAmount, Token, ChainId as UniswapSDKChainId } from '@uniswap/sdk-core';
import type { ImageSourcePropType } from 'react-native';
import { Chain as BackendChainId } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { ElementNameType } from 'uniswap/src/features/telemetry/constants';
import { Chain as WagmiChain } from 'wagmi/chains';
export declare function isUniverseChainId(chainId?: number | UniverseChainId | null): chainId is UniverseChainId;
export declare enum UniverseChainId {
    Mainnet = 1,
    ArbitrumOne = 42161,
    Avalanche = 43114,
    Base = 8453,
    Blast = 81457,
    Bnb = 56,
    Celo = 42220,
    MonadTestnet = 10143,
    Optimism = 10,
    Polygon = 137,
    Sepolia = 11155111,
    Soneium = 1868,
    Unichain = 130,
    UnichainSepolia = 1301,
    WorldChain = 480,
    Zksync = 324,
    Zora = 7777777
}
export declare const SUPPORTED_CHAIN_IDS: UniverseChainId[];
export declare const SUPPORTED_TESTNET_CHAIN_IDS: UniverseChainId[];
export declare const ALL_CHAIN_IDS: UniverseChainId[];
export interface EnabledChainsInfo {
    chains: UniverseChainId[];
    gqlChains: GqlChainId[];
    defaultChainId: UniverseChainId;
    isTestnetModeEnabled: boolean;
}
export declare enum RPCType {
    Public = "public",
    Private = "private",
    PublicAlt = "public_alternative",
    Interface = "interface",
    Fallback = "fallback",
    Default = "default"
}
export declare enum NetworkLayer {
    L1 = 0,
    L2 = 1
}
export interface RetryOptions {
    n: number;
    minWait: number;
    maxWait: number;
}
export type GqlChainId = Exclude<BackendChainId, BackendChainId.UnknownChain | BackendChainId.EthereumGoerli>;
export interface BackendChain {
    chain: GqlChainId;
    /**
     * Set to false if the chain is not available on Explore.
     */
    backendSupported: boolean;
    /**
     * Set to true if the chain does not have a specific GQLChain. Eg: Optimism-Goerli.
     */
    isSecondaryChain: boolean;
    /**
     * Used for spot token prices
     */
    nativeTokenBackendAddress: string | undefined;
}
type ChainRPCUrls = {
    http: string[];
};
export interface UniverseChainInfo extends WagmiChain {
    readonly id: UniverseChainId;
    readonly sdkId: UniswapSDKChainId;
    readonly assetRepoNetworkName: string | undefined;
    readonly backendChain: BackendChain;
    readonly blockPerMainnetEpochForChainId: number;
    readonly blockWaitMsBeforeWarning: number | undefined;
    readonly bridge?: string;
    readonly docs: string;
    readonly elementName: ElementNameType;
    readonly explorer: {
        name: string;
        url: `${string}/`;
        apiURL?: string;
    };
    readonly rpcUrls: {
        [RPCType.Default]: ChainRPCUrls;
        [RPCType.Private]?: ChainRPCUrls;
        [RPCType.Public]?: ChainRPCUrls;
        [RPCType.PublicAlt]?: ChainRPCUrls;
        [RPCType.Interface]: ChainRPCUrls;
        [RPCType.Fallback]?: ChainRPCUrls;
    };
    readonly helpCenterUrl: string | undefined;
    readonly infoLink: string;
    readonly infuraPrefix: string | undefined;
    readonly interfaceName: string;
    readonly label: string;
    readonly logo: ImageSourcePropType;
    readonly nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
        address: string;
        explorerLink?: string;
        logo: ImageSourcePropType;
    };
    readonly networkLayer: NetworkLayer;
    readonly pendingTransactionsRetryOptions: RetryOptions | undefined;
    readonly spotPriceStablecoinAmount: CurrencyAmount<Token>;
    readonly stablecoins: Token[];
    readonly statusPage?: string;
    readonly supportsInterfaceClientSideRouting: boolean;
    readonly supportsGasEstimates: boolean;
    readonly supportsV4: boolean;
    readonly urlParam: string;
    readonly wrappedNativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
        address: string;
    };
}
export {};
//# sourceMappingURL=types.d.ts.map