import { skipToken, useQuery } from '@tanstack/react-query';
import { fetchAddress, fetchUnitagsByAddresses } from 'uniswap/src/data/apiClients/unitagsApi/UnitagsApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
import { MAX_REACT_QUERY_CACHE_TIME_MS, ONE_MINUTE_MS } from 'utilities/src/time/time';
export function useUnitagsAddressQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.UnitagsApi, 'address', params];
    return useQuery({
        queryKey,
        queryFn: params ? async () => await fetchAddress(params) : skipToken,
        staleTime: ONE_MINUTE_MS,
        gcTime: MAX_REACT_QUERY_CACHE_TIME_MS,
        ...rest,
    });
}
export function useUnitagsAddressesQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.UnitagsApi, 'addresses', params];
    return useQuery({
        queryKey,
        queryFn: params
            ? async () => await fetchUnitagsByAddresses(params)
            : skipToken,
        staleTime: ONE_MINUTE_MS,
        gcTime: MAX_REACT_QUERY_CACHE_TIME_MS,
        ...rest,
    });
}
//# sourceMappingURL=useUnitagsAddressQuery.js.map