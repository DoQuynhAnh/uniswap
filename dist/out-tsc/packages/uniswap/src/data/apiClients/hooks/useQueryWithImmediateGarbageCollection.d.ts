import { useQuery } from '@tanstack/react-query';
/**
 * This is a wrapper around react-query's `useQuery` that immediately clears the cache if the data is older than `gcTime`,
 * even for active queries.
 *
 * react-query's garbage collection only runs once a query becomes inactive (the timer starts running the moment a query unmounts).
 * There are some endpoints (for example, swap quotes) where we want to be able to use a stale-while-revalidate approach (using `staleTime`)
 * for very short periods of time, while at the same time we want to make sure we never use stale data if it's older than the `gcTime`.
 */
export declare function useQueryWithImmediateGarbageCollection<T>({ immediateGcTime, ...queryArgs }: Omit<Parameters<typeof useQuery<T>>[0], 'gcTime'> & {
    immediateGcTime?: number;
}, customQueryClient?: Parameters<typeof useQuery<T>>[1]): ReturnType<typeof useQuery<T>>;
//# sourceMappingURL=useQueryWithImmediateGarbageCollection.d.ts.map