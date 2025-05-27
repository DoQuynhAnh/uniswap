import { BigNumber } from '@ethersproject/bignumber';
import { PollingInterval } from 'uniswap/src/constants/misc';
import { Chain } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { GQL_MAINNET_CHAINS, GQL_TESTNET_CHAINS, 
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
UNIVERSE_CHAIN_INFO, getChainInfo, } from 'uniswap/src/features/chains/chainInfo';
import { ALL_CHAIN_IDS, NetworkLayer, SUPPORTED_CHAIN_IDS, SUPPORTED_TESTNET_CHAIN_IDS, UniverseChainId, } from 'uniswap/src/features/chains/types';
// Some code from the web app uses chainId types as numbers
// This validates them as coerces into SupportedChainId
export function toSupportedChainId(chainId) {
    if (!chainId || !ALL_CHAIN_IDS.map((c) => c.toString()).includes(chainId.toString())) {
        return null;
    }
    return parseInt(chainId.toString(), 10);
}
export function chainSupportsGasEstimates(chainId) {
    return getChainInfo(chainId).supportsGasEstimates;
}
export function getChainLabel(chainId) {
    return getChainInfo(chainId).label;
}
export function isTestnetChain(chainId) {
    var _a;
    return Boolean((_a = getChainInfo(chainId)) === null || _a === void 0 ? void 0 : _a.testnet);
}
export function getChainIdByInfuraPrefix(prefix) {
    var _a;
    return (_a = Object.values(UNIVERSE_CHAIN_INFO).find((i) => i.infuraPrefix === prefix)) === null || _a === void 0 ? void 0 : _a.id;
}
export function isBackendSupportedChainId(chainId) {
    const info = getChainInfo(chainId);
    return info.backendChain.backendSupported && !info.backendChain.isSecondaryChain;
}
export function isBackendSupportedChain(chain) {
    const chainId = fromGraphQLChain(chain);
    if (!chainId) {
        return false;
    }
    return chainId && isBackendSupportedChainId(chainId);
}
export function chainIdToHexadecimalString(chainId) {
    return BigNumber.from(chainId).toHexString();
}
export function hexadecimalStringToInt(hex) {
    return parseInt(hex, 16);
}
export function isL2ChainId(chainId) {
    return chainId !== undefined && getChainInfo(chainId).networkLayer === NetworkLayer.L2;
}
export function isMainnetChainId(chainId) {
    return chainId === UniverseChainId.Mainnet || chainId === UniverseChainId.Sepolia;
}
export function toGraphQLChain(chainId) {
    return getChainInfo(chainId).backendChain.chain;
}
export function fromGraphQLChain(chain) {
    switch (chain) {
        case Chain.Ethereum:
            return UniverseChainId.Mainnet;
        case Chain.Arbitrum:
            return UniverseChainId.ArbitrumOne;
        case Chain.Avalanche:
            return UniverseChainId.Avalanche;
        case Chain.Base:
            return UniverseChainId.Base;
        case Chain.Bnb:
            return UniverseChainId.Bnb;
        case Chain.Blast:
            return UniverseChainId.Blast;
        case Chain.Celo:
            return UniverseChainId.Celo;
        case Chain.MonadTestnet:
            return UniverseChainId.MonadTestnet;
        case Chain.Optimism:
            return UniverseChainId.Optimism;
        case Chain.Polygon:
            return UniverseChainId.Polygon;
        case Chain.EthereumSepolia:
            return UniverseChainId.Sepolia;
        case Chain.Unichain:
            return UniverseChainId.Unichain;
        case Chain.Soneium:
            return UniverseChainId.Soneium;
        case Chain.AstrochainSepolia:
            return UniverseChainId.UnichainSepolia;
        case Chain.Worldchain:
            return UniverseChainId.WorldChain;
        case Chain.Zksync:
            return UniverseChainId.Zksync;
        case Chain.Zora:
            return UniverseChainId.Zora;
    }
    return null;
}
export function getPollingIntervalByBlocktime(chainId) {
    return isMainnetChainId(chainId) ? PollingInterval.Fast : PollingInterval.LightningMcQueen;
}
export function fromUniswapWebAppLink(network) {
    switch (network) {
        case Chain.Ethereum.toLowerCase():
            return UniverseChainId.Mainnet;
        case Chain.Arbitrum.toLowerCase():
            return UniverseChainId.ArbitrumOne;
        case Chain.Avalanche.toLowerCase():
            return UniverseChainId.Avalanche;
        case Chain.Base.toLowerCase():
            return UniverseChainId.Base;
        case Chain.Blast.toLowerCase():
            return UniverseChainId.Blast;
        case Chain.Bnb.toLowerCase():
            return UniverseChainId.Bnb;
        case Chain.Celo.toLowerCase():
            return UniverseChainId.Celo;
        case Chain.MonadTestnet.toLowerCase():
            return UniverseChainId.MonadTestnet;
        case Chain.Optimism.toLowerCase():
            return UniverseChainId.Optimism;
        case Chain.Polygon.toLowerCase():
            return UniverseChainId.Polygon;
        case Chain.EthereumSepolia.toLowerCase():
            return UniverseChainId.Sepolia;
        case Chain.Unichain.toLowerCase():
            return UniverseChainId.Unichain;
        case Chain.Soneium.toLowerCase():
            return UniverseChainId.Soneium;
        case Chain.AstrochainSepolia.toLowerCase():
            return UniverseChainId.UnichainSepolia;
        case Chain.Worldchain.toLowerCase():
            return UniverseChainId.WorldChain;
        case Chain.Zksync.toLowerCase():
            return UniverseChainId.Zksync;
        case Chain.Zora.toLowerCase():
            return UniverseChainId.Zora;
        default:
            throw new Error(`Network "${network}" can not be mapped`);
    }
}
export function toUniswapWebAppLink(chainId) {
    switch (chainId) {
        case UniverseChainId.Mainnet:
            return Chain.Ethereum.toLowerCase();
        case UniverseChainId.ArbitrumOne:
            return Chain.Arbitrum.toLowerCase();
        case UniverseChainId.Avalanche:
            return Chain.Avalanche.toLowerCase();
        case UniverseChainId.Base:
            return Chain.Base.toLowerCase();
        case UniverseChainId.Blast:
            return Chain.Blast.toLowerCase();
        case UniverseChainId.Bnb:
            return Chain.Bnb.toLowerCase();
        case UniverseChainId.Celo:
            return Chain.Celo.toLowerCase();
        case UniverseChainId.MonadTestnet:
            return Chain.MonadTestnet.toLowerCase();
        case UniverseChainId.Optimism:
            return Chain.Optimism.toLowerCase();
        case UniverseChainId.Polygon:
            return Chain.Polygon.toLowerCase();
        case UniverseChainId.Sepolia:
            return Chain.EthereumSepolia.toLowerCase();
        case UniverseChainId.Unichain:
            return Chain.Unichain.toLowerCase();
        case UniverseChainId.Soneium:
            return Chain.Soneium.toLowerCase();
        case UniverseChainId.UnichainSepolia:
            return Chain.AstrochainSepolia.toLowerCase();
        case UniverseChainId.WorldChain:
            return Chain.Worldchain.toLowerCase();
        case UniverseChainId.Zksync:
            return Chain.Zksync.toLowerCase();
        case UniverseChainId.Zora:
            return Chain.Zora.toLowerCase();
        default:
            throw new Error(`ChainID "${chainId}" can not be mapped`);
    }
}
export function filterChainIdsByFeatureFlag(featureFlaggedChainIds) {
    return ALL_CHAIN_IDS.filter((chainId) => {
        var _a;
        return (_a = featureFlaggedChainIds[chainId]) !== null && _a !== void 0 ? _a : true;
    });
}
export function getEnabledChains({ isTestnetModeEnabled, featureFlaggedChainIds, connectedWalletChainIds, }) {
    if (isTestnetModeEnabled) {
        const supportedTestnetChainIds = SUPPORTED_TESTNET_CHAIN_IDS.filter((chainId) => featureFlaggedChainIds.includes(chainId) &&
            (connectedWalletChainIds ? connectedWalletChainIds.includes(chainId) : true));
        return {
            chains: supportedTestnetChainIds,
            gqlChains: GQL_TESTNET_CHAINS,
            defaultChainId: UniverseChainId.Sepolia,
            isTestnetModeEnabled,
        };
    }
    const supportedChainIds = SUPPORTED_CHAIN_IDS.filter((chainId) => featureFlaggedChainIds.includes(chainId) &&
        (connectedWalletChainIds ? connectedWalletChainIds.includes(chainId) : true));
    const supportedGqlChains = GQL_MAINNET_CHAINS.filter((chain) => {
        const chainId = fromGraphQLChain(chain);
        return chainId && supportedChainIds.includes(chainId);
    });
    return {
        chains: supportedChainIds,
        gqlChains: supportedGqlChains,
        defaultChainId: UniverseChainId.Mainnet,
        isTestnetModeEnabled,
    };
}
//# sourceMappingURL=utils.js.map