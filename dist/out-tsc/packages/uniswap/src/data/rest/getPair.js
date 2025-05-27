import { useQuery } from '@connectrpc/connect-query';
import { getPair } from '@uniswap/client-pools/dist/pools/v1/api-PoolsService_connectquery';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
/**
 * eslint-disable import/no-unused-modules -- this endpoint is returning stale data sometimes meaning
 * that the data we get (i.e. the dependent amount) is incorrect and the transaction does not complete on chain.
 * Use this endpoint again once the data is more up to date or the trading API handles the data discrepancy.
 */
export function useGetPair(input, enabled = true) {
    return useQuery(getPair, input, { transport: uniswapGetTransport, enabled, retry: false });
}
//# sourceMappingURL=getPair.js.map