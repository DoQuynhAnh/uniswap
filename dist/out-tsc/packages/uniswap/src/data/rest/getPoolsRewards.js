import { useQuery } from '@connectrpc/connect-query';
import { getRewards } from '@uniswap/client-pools/dist/pools/v1/api-PoolsService_connectquery';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
export function useGetPoolsRewards(input, enabled = true) {
    return useQuery(getRewards, input, { transport: uniswapGetTransport, enabled });
}
//# sourceMappingURL=getPoolsRewards.js.map