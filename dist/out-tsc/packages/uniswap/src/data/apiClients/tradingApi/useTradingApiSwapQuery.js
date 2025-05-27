import { skipToken } from '@tanstack/react-query';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { useQueryWithImmediateGarbageCollection } from 'uniswap/src/data/apiClients/hooks/useQueryWithImmediateGarbageCollection';
import { fetchSwap, fetchSwap5792, fetchSwap7702, } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { convertSwap5792ResponseToSwapData, convertSwap7702ResponseToSwapData, convertSwapResponseToSwapData, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapRepository';
import { ReactQueryCacheKey } from 'utilities/src/reactQuery/cache';
export function useTradingApiSwapQuery({ params, ...rest }, config) {
    const queryKey = [ReactQueryCacheKey.TradingApi, uniswapUrls.tradingApiPaths.swap, params];
    const fetch = getFetchFn(config);
    return useQueryWithImmediateGarbageCollection({
        queryKey,
        queryFn: params ? () => fetch(params) : skipToken,
        ...rest,
    });
}
function getFetchFn(config) {
    const { canBatchTransactions, swapDelegationAddress } = config !== null && config !== void 0 ? config : {};
    if (swapDelegationAddress) {
        return (params) => fetch7702(swapDelegationAddress, params);
    }
    if (canBatchTransactions) {
        return fetch5792;
    }
    return fetchLegacy;
}
async function fetch7702(swapDelegationAddress, params) {
    return convertSwap7702ResponseToSwapData(await fetchSwap7702({ ...params, smartContractDelegationAddress: swapDelegationAddress }));
}
async function fetchLegacy(params) {
    return convertSwapResponseToSwapData(await fetchSwap(params));
}
async function fetch5792(params) {
    return convertSwap5792ResponseToSwapData(await fetchSwap5792(params));
}
//# sourceMappingURL=useTradingApiSwapQuery.js.map