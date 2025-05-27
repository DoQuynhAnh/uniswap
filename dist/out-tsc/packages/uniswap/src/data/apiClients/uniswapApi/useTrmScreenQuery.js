import { skipToken, useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { fetchTrmScreen } from 'uniswap/src/data/apiClients/uniswapApi/UniswapApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useTrmScreenQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.UniswapApi, uniswapUrls.trmPath, params];
    return useQuery({
        queryKey,
        queryFn: params ? async () => await fetchTrmScreen(params) : skipToken,
        ...rest,
    });
}
//# sourceMappingURL=useTrmScreenQuery.js.map