import { useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { checkLpApproval } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useCheckLpApprovalQuery({ params, headers, ...rest }) {
    const queryKey = [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.lpApproval, params];
    return useQuery({
        queryKey,
        queryFn: async () => {
            if (!params) {
                throw { name: 'Params are required' };
            }
            return await checkLpApproval(params, headers);
        },
        ...rest,
    });
}
//# sourceMappingURL=useCheckLpApprovalQuery.js.map