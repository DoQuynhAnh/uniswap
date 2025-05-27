import { useCallback, useEffect, useState } from 'react';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { isTestnetChain } from 'uniswap/src/features/chains/utils';
import { WalletEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
export function useFilterCallbacks(chainId, modalName) {
    const [chainFilter, setChainFilter] = useState(chainId);
    const [parsedChainFilter, setParsedChainFilter] = useState(null);
    const [searchFilter, setSearchFilter] = useState(null);
    const [parsedSearchFilter, setParsedSearchFilter] = useState(null);
    const { chains: enabledChains } = useEnabledChains();
    // Parses the user input to determine if the user is searching for a chain + token
    // i.e "eth dai"
    // parsedChainFilter: 1
    // parsedSearchFilter: "dai"
    useEffect(() => {
        var _a;
        const splitSearch = searchFilter === null || searchFilter === void 0 ? void 0 : searchFilter.split(' ');
        const maybeChainName = (_a = splitSearch === null || splitSearch === void 0 ? void 0 : splitSearch[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        const chainMatch = getNativeCurrencyNames(enabledChains).find((currency) => currency.name.startsWith(maybeChainName !== null && maybeChainName !== void 0 ? maybeChainName : ''));
        const search = splitSearch === null || splitSearch === void 0 ? void 0 : splitSearch.slice(1).join(' ');
        if (!chainFilter && chainMatch && search) {
            setParsedChainFilter(chainMatch.chainId);
            setParsedSearchFilter(search);
        }
        else {
            setParsedChainFilter(null);
            setParsedSearchFilter(null);
        }
    }, [searchFilter, chainFilter, enabledChains]);
    useEffect(() => {
        setChainFilter(chainId);
    }, [chainId]);
    const onChangeChainFilter = useCallback((newChainFilter) => {
        setChainFilter(newChainFilter);
        sendAnalyticsEvent(WalletEventName.NetworkFilterSelected, {
            chain: newChainFilter !== null && newChainFilter !== void 0 ? newChainFilter : 'All',
            modal: modalName,
        });
    }, [modalName]);
    const onClearSearchFilter = useCallback(() => {
        setSearchFilter(null);
    }, []);
    const onChangeText = useCallback((newSearchFilter) => setSearchFilter(newSearchFilter), [setSearchFilter]);
    return {
        chainFilter,
        parsedChainFilter,
        searchFilter,
        parsedSearchFilter,
        onChangeChainFilter,
        onClearSearchFilter,
        onChangeText,
    };
}
const getNativeCurrencyNames = (chains) => chains
    .map((chainId) => {
    return isTestnetChain(chainId)
        ? false
        : {
            chainId,
            name: getChainInfo(chainId).nativeCurrency.name.toLowerCase(),
        };
})
    .filter(Boolean);
//# sourceMappingURL=useFilterCallbacks.js.map