import { useCurrencies } from 'uniswap/src/components/TokenSelector/hooks/useCurrencies';
import { USDC, USDT, WBTC } from 'uniswap/src/constants/tokens';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { buildNativeCurrencyId, buildWrappedNativeCurrencyId, currencyId } from 'uniswap/src/utils/currencyId';
// Use Mainnet base token addresses since TokenProjects query returns each token
// on each network
const baseCurrencyIds = [
    buildNativeCurrencyId(UniverseChainId.Mainnet),
    buildNativeCurrencyId(UniverseChainId.Polygon),
    buildNativeCurrencyId(UniverseChainId.Bnb),
    buildNativeCurrencyId(UniverseChainId.Celo),
    buildNativeCurrencyId(UniverseChainId.Avalanche),
    currencyId(USDC),
    currencyId(USDT),
    currencyId(WBTC),
    buildWrappedNativeCurrencyId(UniverseChainId.Mainnet),
];
export function useAllCommonBaseCurrencies() {
    const { isTestnetModeEnabled } = useEnabledChains();
    return useCurrencies(isTestnetModeEnabled ? [] : baseCurrencyIds);
}
//# sourceMappingURL=useAllCommonBaseCurrencies.js.map