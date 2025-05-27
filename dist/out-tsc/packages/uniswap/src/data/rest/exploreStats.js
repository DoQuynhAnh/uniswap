import { useQuery } from '@connectrpc/connect-query';
import { exploreStats } from '@uniswap/client-explore/dist/uniswap/explore/v1/service-ExploreStatsService_connectquery';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
/**
 * Wrapper around Tanstack useQuery for the Uniswap REST BE service ExploreStats
 * This included top tokens and top pools data
 * @param input { chainId: string } - string representation of the chain to query or `ALL_NETWORKS` for aggregated data
 * @returns UseQueryResult<ExploreStatsResponse, ConnectError>
 */
export function useExploreStatsQuery(input) {
    return useQuery(exploreStats, input, { transport: uniswapGetTransport });
}
//# sourceMappingURL=exploreStats.js.map