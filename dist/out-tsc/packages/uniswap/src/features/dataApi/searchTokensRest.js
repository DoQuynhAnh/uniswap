import { SearchType } from '@uniswap/client-search/dist/search/v1/api_pb';
import { useMemo } from 'react';
import { searchTokenToCurrencyInfo, useSearchTokensQuery as useSearchTokensRestQuery, } from 'uniswap/src/data/rest/searchTokens';
import { SUPPORTED_CHAIN_IDS } from 'uniswap/src/features/chains/types';
import { NUMBER_OF_RESULTS_LONG } from 'uniswap/src/features/search/SearchModal/constants';
export function useSearchTokensRest({ searchQuery, chainFilter, skip, size = NUMBER_OF_RESULTS_LONG, }) {
    const variables = useMemo(() => ({
        searchQuery: searchQuery !== null && searchQuery !== void 0 ? searchQuery : undefined,
        chainIds: chainFilter ? [chainFilter] : SUPPORTED_CHAIN_IDS,
        searchType: SearchType.TOKEN,
        page: 1,
        size,
    }), [searchQuery, chainFilter, size]);
    const { data, error, isPending, refetch } = useSearchTokensRestQuery({ input: variables, enabled: !skip });
    const formattedData = useMemo(() => {
        if (!data || !data.tokens) {
            return undefined;
        }
        return data.tokens
            .map((token) => {
            return searchTokenToCurrencyInfo(token);
        })
            .filter((c) => Boolean(c));
    }, [data]);
    return useMemo(() => ({ data: formattedData, loading: isPending, error: error !== null && error !== void 0 ? error : undefined, refetch }), [formattedData, isPending, error, refetch]);
}
//# sourceMappingURL=searchTokensRest.js.map