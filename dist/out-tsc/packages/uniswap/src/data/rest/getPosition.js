import { useQuery } from '@connectrpc/connect-query';
import { getPosition } from '@uniswap/client-pools/dist/pools/v1/api-PoolsService_connectquery';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
export function useGetPositionQuery(input) {
    return useQuery(getPosition, input, { transport: uniswapGetTransport, enabled: !!input });
}
//# sourceMappingURL=getPosition.js.map