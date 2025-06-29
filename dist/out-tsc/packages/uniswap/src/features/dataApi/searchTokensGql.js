import { useCallback, useMemo } from 'react';
import { useSearchTokensQuery as useSearchTokensGqlQuery, } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { toGraphQLChain } from 'uniswap/src/features/chains/utils';
import { gqlTokenToCurrencyInfo, usePersistedError } from 'uniswap/src/features/dataApi/utils';
import { isAddress } from 'utilities/src/addresses';
export function useSearchTokensGql(searchQuery, chainFilter, skip) {
    const gqlChainFilter = chainFilter ? toGraphQLChain(chainFilter) : null;
    const { gqlChains } = useEnabledChains();
    const isSearchQueryAnAddress = isAddress(searchQuery);
    // Search across all networks when searching by address or there is no chainFilter, otherwise respect the chainFilter
    const shouldSearchAllNetworks = !gqlChainFilter || isSearchQueryAnAddress;
    const { data, loading, error, refetch } = useSearchTokensGqlQuery({
        variables: {
            searchQuery: searchQuery !== null && searchQuery !== void 0 ? searchQuery : '',
            chains: shouldSearchAllNetworks ? gqlChains : [gqlChainFilter],
            tokenSearchV2Enabled: true,
        },
        skip: skip || !searchQuery,
    });
    const persistedError = usePersistedError(loading, error);
    const formattedData = useMemo(() => {
        if (!data || !data.searchTokens) {
            return undefined;
        }
        const processTokens = (tokens, isOtherNetwork) => {
            return tokens
                .map((token) => {
                if (!token) {
                    return null;
                }
                const currencyInfo = gqlTokenToCurrencyInfo(token);
                return currencyInfo ? { ...currencyInfo, isFromOtherNetwork: isOtherNetwork } : null;
            })
                .filter((c) => Boolean(c));
        };
        // If no chain filter or not an address search, return all results normally
        if (!gqlChainFilter || !isSearchQueryAnAddress) {
            return processTokens(data.searchTokens, false);
        }
        // Otherwise segment into selected network and other networks
        const selectedNetworkResults = processTokens(data.searchTokens.filter((token) => token && token.chain === gqlChainFilter), false);
        const otherNetworksResults = processTokens(data.searchTokens.filter((token) => token && token.chain !== gqlChainFilter), true);
        // 3. Combine both sets of results
        return [...selectedNetworkResults, ...otherNetworksResults];
    }, [data, isSearchQueryAnAddress, gqlChainFilter]);
    const retry = useCallback(() => !skip && refetch({ searchQuery: searchQuery !== null && searchQuery !== void 0 ? searchQuery : '' }), [refetch, searchQuery, skip]);
    return useMemo(() => ({ data: formattedData, loading, error: persistedError, refetch: retry }), [formattedData, loading, persistedError, retry]);
}
//# sourceMappingURL=searchTokensGql.js.map