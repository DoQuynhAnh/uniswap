import { skipToken, useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { is404Error } from 'uniswap/src/data/apiClients/FetchError';
import { SharedQueryClient } from 'uniswap/src/data/apiClients/SharedQueryClient';
import { fetchIndicativeQuote } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { logSwapQuoteFetch } from 'uniswap/src/features/transactions/swap/analytics';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
function getTradingApiIndicativeQuoteQueryKey(params) {
    return [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.indicativeQuote, params];
}
export function useTradingApiIndicativeQuoteQuery({ params, ...rest }) {
    const queryKey = getTradingApiIndicativeQuoteQueryKey(params);
    return useQuery({
        queryKey,
        queryFn: params
            ? async () => {
                if (params.tokenInChainId) {
                    logSwapQuoteFetch({ chainId: params.tokenInChainId, isQuickRoute: true });
                }
                return await fetchIndicativeQuote(params);
            }
            : skipToken,
        ...rest,
    });
}
// To be used outside of React.
// 404 means there's no quote for the given token pair,
// which is something that we might want to safely ignore (and treat as `undefined`) in some cases.
export async function fetchTradingApiIndicativeQuoteIgnoring404({ queryClient = SharedQueryClient, params, }) {
    try {
        return await queryClient.fetchQuery({
            queryKey: getTradingApiIndicativeQuoteQueryKey(params),
            queryFn: async () => fetchIndicativeQuote(params),
        });
    }
    catch (error) {
        if (is404Error(error)) {
            return undefined;
        }
        throw error;
    }
}
//# sourceMappingURL=useTradingApiIndicativeQuoteQuery.js.map