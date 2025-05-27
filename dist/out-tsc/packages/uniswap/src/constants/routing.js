import { WETH9 } from '@uniswap/sdk-core';
import { CELO_LOGO, ETH_LOGO } from 'ui/src/assets';
import { ARB, BUSD_BSC, DAI, DAI_ARBITRUM_ONE, DAI_AVALANCHE, DAI_BSC, DAI_OPTIMISM, DAI_POLYGON, ETH_BSC, OP, PORTAL_ETH_CELO, UNI, USDC_ARBITRUM, USDC_AVALANCHE, USDC_BASE, USDC_BSC, USDC_CELO, USDC_MAINNET, USDC_OPTIMISM, USDC_POLYGON, USDC_SEPOLIA, USDC_SONEIUM, USDC_UNICHAIN, USDC_WORLD_CHAIN, USDC_ZKSYNC, USDC_ZORA, USDT, USDT_ARBITRUM_ONE, USDT_AVALANCHE, USDT_BSC, USDT_MONAD_TESTNET, USDT_OPTIMISM, USDT_POLYGON, WBTC, WBTC_ARBITRUM_ONE, WBTC_OPTIMISM, WBTC_POLYGON, WETH_AVALANCHE, WETH_POLYGON, WRAPPED_NATIVE_CURRENCY, isCelo, nativeOnChain, } from 'uniswap/src/constants/tokens';
import { ProtectionResult } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { TokenList } from 'uniswap/src/features/dataApi/types';
import { buildCurrencyInfo } from 'uniswap/src/features/dataApi/utils';
import { isSameAddress } from 'utilities/src/addresses';
/**
 * @deprecated
 * Instead, see the list used in the token selector's quick-select common options section at useAllCommonBaseCurrencies.ts.
 * This list is currently used as fallback list when Token GQL query fails for above list + for hardcoded tokens on testnet chains.
 */
export const COMMON_BASES = {
    [UniverseChainId.Mainnet]: [
        nativeOnChain(UniverseChainId.Mainnet),
        DAI,
        USDC_MAINNET,
        USDT,
        WBTC,
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Mainnet],
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.ArbitrumOne]: [
        nativeOnChain(UniverseChainId.ArbitrumOne),
        ARB,
        DAI_ARBITRUM_ONE,
        USDC_ARBITRUM,
        USDT_ARBITRUM_ONE,
        WBTC_ARBITRUM_ONE,
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.ArbitrumOne],
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Avalanche]: [
        nativeOnChain(UniverseChainId.Avalanche),
        DAI_AVALANCHE,
        USDC_AVALANCHE,
        USDT_AVALANCHE,
        WETH_AVALANCHE,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Base]: [
        nativeOnChain(UniverseChainId.Base),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Base],
        USDC_BASE,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Blast]: [
        nativeOnChain(UniverseChainId.Blast),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Blast],
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Bnb]: [nativeOnChain(UniverseChainId.Bnb), DAI_BSC, USDC_BSC, USDT_BSC, ETH_BSC, BUSD_BSC].map(buildPartialCurrencyInfo),
    [UniverseChainId.Celo]: [nativeOnChain(UniverseChainId.Celo), USDC_CELO].map(buildPartialCurrencyInfo),
    [UniverseChainId.MonadTestnet]: [
        nativeOnChain(UniverseChainId.MonadTestnet),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.MonadTestnet],
        USDT_MONAD_TESTNET,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Optimism]: [
        nativeOnChain(UniverseChainId.Optimism),
        OP,
        DAI_OPTIMISM,
        USDC_OPTIMISM,
        USDT_OPTIMISM,
        WBTC_OPTIMISM,
        WETH9[UniverseChainId.Optimism],
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Polygon]: [
        nativeOnChain(UniverseChainId.Polygon),
        WETH_POLYGON,
        USDC_POLYGON,
        DAI_POLYGON,
        USDT_POLYGON,
        WBTC_POLYGON,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Sepolia]: [
        nativeOnChain(UniverseChainId.Sepolia),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Sepolia],
        USDC_SEPOLIA,
        UNI[UniverseChainId.Sepolia],
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Soneium]: [
        nativeOnChain(UniverseChainId.Soneium),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Soneium],
        USDC_SONEIUM,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Unichain]: [
        nativeOnChain(UniverseChainId.Unichain),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Unichain],
        USDC_UNICHAIN,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.UnichainSepolia]: [
        nativeOnChain(UniverseChainId.UnichainSepolia),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.UnichainSepolia],
        // TODO(WEB-5160): re-add usdc sepolia
        // USDC_UNICHAIN_SEPOLIA,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.WorldChain]: [
        nativeOnChain(UniverseChainId.WorldChain),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.WorldChain],
        USDC_WORLD_CHAIN,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Zksync]: [
        nativeOnChain(UniverseChainId.Zksync),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Zksync],
        USDC_ZKSYNC,
    ].map(buildPartialCurrencyInfo),
    [UniverseChainId.Zora]: [
        nativeOnChain(UniverseChainId.Zora),
        WRAPPED_NATIVE_CURRENCY[UniverseChainId.Zora],
        USDC_ZORA,
    ].map(buildPartialCurrencyInfo),
};
export function getCommonBase(chainId, isNative, address) {
    var _a;
    if (!address || !chainId) {
        return undefined;
    }
    return (_a = COMMON_BASES[chainId]) === null || _a === void 0 ? void 0 : _a.find((base) => (base.currency.isNative && isNative) || (base.currency.isToken && isSameAddress(base.currency.address, address)));
}
function getNativeLogoURI(chainId = UniverseChainId.Mainnet) {
    var _a;
    if (chainId === UniverseChainId.Mainnet) {
        return ETH_LOGO;
    }
    return (_a = getChainInfo(chainId).nativeCurrency.logo) !== null && _a !== void 0 ? _a : ETH_LOGO;
}
function getTokenLogoURI(chainId, address) {
    const chainInfo = getChainInfo(chainId);
    const networkName = chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.assetRepoNetworkName;
    if (isCelo(chainId) && isSameAddress(address, nativeOnChain(chainId).wrapped.address)) {
        return CELO_LOGO;
    }
    if (isCelo(chainId) && isSameAddress(address, PORTAL_ETH_CELO.address)) {
        return ETH_LOGO;
    }
    return networkName
        ? `https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/${networkName}/assets/${address}/logo.png`
        : undefined;
}
export function buildPartialCurrencyInfo(commonBase) {
    const logoUrl = commonBase.isNative
        ? getNativeLogoURI(commonBase.chainId)
        : getTokenLogoURI(commonBase.chainId, commonBase.address);
    return buildCurrencyInfo({
        currency: commonBase,
        logoUrl,
        safetyInfo: {
            tokenList: TokenList.Default,
            protectionResult: ProtectionResult.Benign,
        },
        isSpam: false,
    });
}
//# sourceMappingURL=routing.js.map