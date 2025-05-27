import { useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { decreaseLpPosition } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { getTradeSettingsDeadline } from 'uniswap/src/data/apiClients/tradingApi/utils/getTradeSettingsDeadline';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useDecreaseLpPositionCalldataQuery({ params, deadlineInMinutes, ...rest }) {
    const queryKey = [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.decreaseLp, params];
    const deadline = getTradeSettingsDeadline(deadlineInMinutes);
    const paramsWithDeadline = { ...params, deadline };
    return useQuery({
        queryKey,
        queryFn: async () => {
            if (!params) {
                throw { name: 'Params are required' };
            }
            return await decreaseLpPosition(paramsWithDeadline);
        },
        ...rest,
    });
}
//# sourceMappingURL=useDecreaseLpPositionCalldataQuery.js.map