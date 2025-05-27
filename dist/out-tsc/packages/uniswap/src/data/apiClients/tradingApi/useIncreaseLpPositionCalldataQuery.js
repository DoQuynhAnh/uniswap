import { useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { increaseLpPosition } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { getTradeSettingsDeadline } from 'uniswap/src/data/apiClients/tradingApi/utils/getTradeSettingsDeadline';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useIncreaseLpPositionCalldataQuery({ params, deadlineInMinutes, ...rest }) {
    const queryKey = [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.increaseLp, params];
    const deadline = getTradeSettingsDeadline(deadlineInMinutes);
    const paramsWithDeadline = { ...params, deadline };
    return useQuery({
        queryKey,
        queryFn: async () => {
            if (!params) {
                throw { name: 'Params are required' };
            }
            return await increaseLpPosition(paramsWithDeadline);
        },
        ...rest,
    });
}
//# sourceMappingURL=useIncreaseLpPositionCalldataQuery.js.map