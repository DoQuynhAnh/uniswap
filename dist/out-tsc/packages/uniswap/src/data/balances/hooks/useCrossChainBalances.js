import { useMemo } from 'react';
import { useBalances } from 'uniswap/src/data/balances/hooks/useBalances';
import { fromGraphQLChain } from 'uniswap/src/features/chains/utils';
import { buildCurrencyId, buildNativeCurrencyId, currencyIdToChain } from 'uniswap/src/utils/currencyId';
export function useCrossChainBalances({ address, currencyId, crossChainTokens, fetchPolicy = 'cache-and-network', }) {
    var _a, _b;
    const currentChainBalance = (_b = (_a = useBalances({
        address,
        currencies: [currencyId],
        fetchPolicy,
    })) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    const currentChainId = currencyIdToChain(currencyId);
    const bridgedCurrencyIds = useMemo(() => crossChainTokens === null || crossChainTokens === void 0 ? void 0 : crossChainTokens.map(({ chain, address: currencyAddress }) => {
        const chainId = fromGraphQLChain(chain);
        if (!chainId || chainId === currentChainId) {
            return null;
        }
        if (!currencyAddress) {
            return buildNativeCurrencyId(chainId);
        }
        return buildCurrencyId(chainId, currencyAddress);
    }).filter((b) => !!b), [crossChainTokens, currentChainId]);
    const otherChainBalances = useBalances({ address, currencies: bridgedCurrencyIds });
    return {
        currentChainBalance,
        otherChainBalances,
    };
}
//# sourceMappingURL=useCrossChainBalances.js.map