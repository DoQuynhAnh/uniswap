import { useQuery } from '@connectrpc/connect-query';
import { listPools } from '@uniswap/client-pools/dist/pools/v1/api-PoolsService_connectquery';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
export function useGetPoolsByTokens(input, enabled = true) {
    return useQuery(listPools, input, { transport: uniswapGetTransport, enabled });
}
//# sourceMappingURL=getPools.js.map