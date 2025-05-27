import { skipToken, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { logger } from 'utilities/src/logger/logger';
/**
 * This is a wrapper around react-query's `useQuery` that immediately clears the cache if the data is older than `gcTime`,
 * even for active queries.
 *
 * react-query's garbage collection only runs once a query becomes inactive (the timer starts running the moment a query unmounts).
 * There are some endpoints (for example, swap quotes) where we want to be able to use a stale-while-revalidate approach (using `staleTime`)
 * for very short periods of time, while at the same time we want to make sure we never use stale data if it's older than the `gcTime`.
 */
export function useQueryWithImmediateGarbageCollection({ immediateGcTime, ...queryArgs }, customQueryClient) {
    const defaultQueryClient = useQueryClient();
    const queryClient = customQueryClient !== null && customQueryClient !== void 0 ? customQueryClient : defaultQueryClient;
    const { queryKey, queryFn } = queryArgs;
    const skip = queryFn === skipToken;
    const result = useQuery({ ...queryArgs, gcTime: immediateGcTime }, queryClient);
    const { dataUpdatedAt } = result;
    useEffect(() => {
        if (skip || !immediateGcTime) {
            return undefined;
        }
        const timeSinceLastUpdate = Date.now() - dataUpdatedAt;
        const timeout = setTimeout(() => {
            var _a;
            const state = (_a = queryClient.getQueryCache().find({ queryKey })) === null || _a === void 0 ? void 0 : _a.state;
            if (!state) {
                logger.debug('TradingApiClient.ts', 'useQueryWithImmediateGarbageCollection', 'Cache not found', { queryKey });
                return;
            }
            const { data, dataUpdatedAt: latestDataUpdatedAt, fetchStatus } = state;
            if (!data || fetchStatus === 'fetching') {
                // We do not want to clear the cache if the query is currently being fetched,
                // or else we could end up in an infite loop of clearing and refetching.
                return;
            }
            const latestTimeSinceLastUpdate = Date.now() - latestDataUpdatedAt;
            if (latestTimeSinceLastUpdate >= immediateGcTime) {
                logger.debug('TradingApiClient.ts', 'useQueryWithImmediateGarbageCollection', 'Clearing stale data', {
                    queryKey,
                    immediateGcTime,
                    latestDataUpdatedAt,
                    latestTimeSinceLastUpdate,
                    state,
                });
                queryClient.removeQueries({ queryKey, exact: true });
            }
        }, immediateGcTime - timeSinceLastUpdate);
        return () => clearTimeout(timeout);
    }, [dataUpdatedAt, immediateGcTime, queryClient, queryKey, skip]);
    return result;
}
//# sourceMappingURL=useQueryWithImmediateGarbageCollection.js.map