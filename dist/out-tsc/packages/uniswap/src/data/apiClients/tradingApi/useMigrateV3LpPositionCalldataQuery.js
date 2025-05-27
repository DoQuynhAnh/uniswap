import { useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { migrateLpPosition } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useMigrateV3LpPositionCalldataQuery({ params, ...rest }) {
    const queryKey = [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.migrate, params];
    return useQuery({
        queryKey,
        queryFn: async () => {
            if (!params) {
                throw { name: 'Params are required' };
            }
            return await migrateLpPosition(params);
        },
        ...rest,
    });
}
//# sourceMappingURL=useMigrateV3LpPositionCalldataQuery.js.map