import { skipToken, useQuery } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { checkWalletDelegation } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useWalletCheckDelegationQuery({ params, ...rest }) {
    const queryKey = walletCheckDelegationQueryKey(params);
    return useQuery({
        queryKey,
        queryFn: params ? walletCheckDelegationQueryFn(params) : skipToken,
        ...rest,
    });
}
const walletCheckDelegationQueryKey = (params) => {
    return [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.wallet.checkDelegation, params];
};
const walletCheckDelegationQueryFn = (params) => {
    return async () => await checkWalletDelegation(params);
};
//# sourceMappingURL=useWalletCheckDelegationQuery.js.map