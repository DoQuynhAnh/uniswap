import { skipToken, useQuery, useQueryClient, } from '@tanstack/react-query';
import { useEffect } from 'react';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { fetchSwappableTokens } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { getTokenAddressFromChainForTradingApi, toTradingApiSupportedChainId, } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
import { logger } from 'utilities/src/logger/logger';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
import { MAX_REACT_QUERY_CACHE_TIME_MS } from 'utilities/src/time/time';
export function useTradingApiSwappableTokensQuery({ params, ...rest }) {
    const queryKey = swappableTokensQueryKey(params);
    return useQuery({
        queryKey,
        queryFn: params ? swappableTokensQueryFn(params) : skipToken,
        // In order for `getSwappableTokensQueryData` to be more likely to have cached data,
        // we set the `gcTime` to the longest possible time.
        gcTime: MAX_REACT_QUERY_CACHE_TIME_MS,
        ...rest,
    });
}
// Synchronous way of reading the cached data for this query.
// It will return `undefined` if the data is not cached.
export function getSwappableTokensQueryData({ queryClient, params, }) {
    return queryClient.getQueryData(swappableTokensQueryKey(params));
}
export function usePrefetchSwappableTokens(input) {
    const queryClient = useQueryClient();
    useEffect(() => {
        const prefetchSwappableTokens = async () => {
            const tokenIn = (input === null || input === void 0 ? void 0 : input.address) ? getTokenAddressFromChainForTradingApi(input.address, input.chainId) : undefined;
            const tokenInChainId = toTradingApiSupportedChainId(input === null || input === void 0 ? void 0 : input.chainId);
            if (!tokenIn || !tokenInChainId) {
                return;
            }
            await queryClient.prefetchQuery({
                queryKey: swappableTokensQueryKey({
                    tokenIn,
                    tokenInChainId,
                }),
                queryFn: swappableTokensQueryFn({
                    tokenIn,
                    tokenInChainId,
                }),
                // In order for `getSwappableTokensQueryData` to be more likely to have cached data,
                // we set the `gcTime` to the longest possible time.
                gcTime: MAX_REACT_QUERY_CACHE_TIME_MS,
            });
        };
        prefetchSwappableTokens().catch((e) => {
            logger.error(e, {
                tags: { file: 'useTradingApiSwappableTokensQuery', function: 'prefetchSwappableTokens' },
            });
        });
    }, [input, queryClient]);
}
const swappableTokensQueryKey = (params) => {
    return [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.swappableTokens, params];
};
const swappableTokensQueryFn = (params) => {
    return async () => await fetchSwappableTokens(params);
};
//# sourceMappingURL=useTradingApiSwappableTokensQuery.js.map