import { useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { claimLpFees } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useClaimLpFeesCalldataQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.claimLpFees, params];
    return useQuery({
        queryKey,
        queryFn: async () => {
            if (!params) {
                throw { name: 'Params are required' };
            }
            return await claimLpFees(params);
        },
        ...rest,
    });
}
//# sourceMappingURL=useClaimLpFeesCalldataQuery.js.map