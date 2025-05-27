import { skipToken } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { useQueryWithImmediateGarbageCollection } from 'uniswap/src/data/apiClients/hooks/useQueryWithImmediateGarbageCollection';
import { fetchCheckApproval } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useCheckApprovalQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.approval, params];
    return useQueryWithImmediateGarbageCollection({
        queryKey,
        queryFn: params ? async () => await fetchCheckApproval(params) : skipToken,
        ...rest,
    });
}
//# sourceMappingURL=useCheckApprovalQuery.js.map