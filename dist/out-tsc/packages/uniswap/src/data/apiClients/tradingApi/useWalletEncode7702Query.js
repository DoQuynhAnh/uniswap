import { skipToken, useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { fetchWalletEncoding7702 } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useWalletEncode7702Query({ params, ...rest }) {
    const queryKey = walletEncode7702QueryKey(params);
    return useQuery({
        queryKey,
        queryFn: params ? walletEncode7702QueryFn(params) : skipToken,
        ...rest,
    });
}
const walletEncode7702QueryKey = (params) => {
    return [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.wallet.encode7702, params];
};
const walletEncode7702QueryFn = (params) => {
    return async () => await fetchWalletEncoding7702(params);
};
//# sourceMappingURL=useWalletEncode7702Query.js.map