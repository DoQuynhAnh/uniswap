export function isUniverseChainId(chainId) {
    return !!chainId && ALL_CHAIN_IDS.includes(chainId);
}
export var UniverseChainId;
(function (UniverseChainId) {
    UniverseChainId[UniverseChainId["Mainnet"] = 1] = "Mainnet";
    UniverseChainId[UniverseChainId["ArbitrumOne"] = 42161] = "ArbitrumOne";
    UniverseChainId[UniverseChainId["Avalanche"] = 43114] = "Avalanche";
    UniverseChainId[UniverseChainId["Base"] = 8453] = "Base";
    UniverseChainId[UniverseChainId["Blast"] = 81457] = "Blast";
    UniverseChainId[UniverseChainId["Bnb"] = 56] = "Bnb";
    UniverseChainId[UniverseChainId["Celo"] = 42220] = "Celo";
    UniverseChainId[UniverseChainId["MonadTestnet"] = 10143] = "MonadTestnet";
    UniverseChainId[UniverseChainId["Optimism"] = 10] = "Optimism";
    UniverseChainId[UniverseChainId["Polygon"] = 137] = "Polygon";
    UniverseChainId[UniverseChainId["Sepolia"] = 11155111] = "Sepolia";
    UniverseChainId[UniverseChainId["Soneium"] = 1868] = "Soneium";
    UniverseChainId[UniverseChainId["Unichain"] = 130] = "Unichain";
    UniverseChainId[UniverseChainId["UnichainSepolia"] = 1301] = "UnichainSepolia";
    UniverseChainId[UniverseChainId["WorldChain"] = 480] = "WorldChain";
    UniverseChainId[UniverseChainId["Zksync"] = 324] = "Zksync";
    UniverseChainId[UniverseChainId["Zora"] = 7777777] = "Zora";
})(UniverseChainId || (UniverseChainId = {}));
export const SUPPORTED_CHAIN_IDS = [
    UniverseChainId.Mainnet,
    UniverseChainId.Unichain,
    UniverseChainId.Polygon,
    UniverseChainId.ArbitrumOne,
    UniverseChainId.Optimism,
    UniverseChainId.Base,
    UniverseChainId.Bnb,
    UniverseChainId.Blast,
    UniverseChainId.Avalanche,
    UniverseChainId.Celo,
    UniverseChainId.WorldChain,
    UniverseChainId.Soneium,
    UniverseChainId.Zora,
    UniverseChainId.Zksync,
];
export const SUPPORTED_TESTNET_CHAIN_IDS = [
    UniverseChainId.Sepolia,
    UniverseChainId.UnichainSepolia,
    UniverseChainId.MonadTestnet,
];
// This order is used as a fallback for chain ordering but will otherwise defer to useOrderedChainIds
export const ALL_CHAIN_IDS = [...SUPPORTED_CHAIN_IDS, ...SUPPORTED_TESTNET_CHAIN_IDS];
export var RPCType;
(function (RPCType) {
    RPCType["Public"] = "public";
    RPCType["Private"] = "private";
    RPCType["PublicAlt"] = "public_alternative";
    RPCType["Interface"] = "interface";
    RPCType["Fallback"] = "fallback";
    RPCType["Default"] = "default";
})(RPCType || (RPCType = {}));
export var NetworkLayer;
(function (NetworkLayer) {
    NetworkLayer[NetworkLayer["L1"] = 0] = "L1";
    NetworkLayer[NetworkLayer["L2"] = 1] = "L2";
})(NetworkLayer || (NetworkLayer = {}));
//# sourceMappingURL=types.js.map