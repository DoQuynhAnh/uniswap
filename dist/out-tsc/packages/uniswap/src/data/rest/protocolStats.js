import { useQuery } from '@connectrpc/connect-query';
import { protocolStats } from '@uniswap/client-explore/dist/uniswap/explore/v1/service-ExploreStatsService_connectquery';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
/**
 * Wrapper around Tanstack useQuery for the Uniswap REST BE service ProtocolStats
 * This includes data for protocol TVL and volume graphs
 * @param input { chainId: string } - string representation of the chain to query or `ALL_NETWORKS` for aggregated data
 * @returns UseQueryResult<ProtocolStatsResponse, ConnectError>
 */
export function useProtocolStatsQuery(input) {
    return useQuery(protocolStats, input, { transport: uniswapGetTransport });
}
//# sourceMappingURL=protocolStats.js.map