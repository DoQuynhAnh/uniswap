import { skipToken, useQuery } from '@tanstack/react-query';
import { fetchUsername } from 'uniswap/src/data/apiClients/unitagsApi/UnitagsApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
import { MAX_REACT_QUERY_CACHE_TIME_MS, ONE_MINUTE_MS } from 'utilities/src/time/time';
export function useUnitagsUsernameQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.UnitagsApi, 'username', params];
    return useQuery({
        queryKey,
        queryFn: params ? async () => await fetchUsername(params) : skipToken,
        staleTime: ONE_MINUTE_MS,
        gcTime: MAX_REACT_QUERY_CACHE_TIME_MS,
        ...rest,
    });
}
//# sourceMappingURL=useUnitagsUsernameQuery.js.map