import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseQueryResult } from '@tanstack/react-query';
import { ProtocolStatsRequest, ProtocolStatsResponse } from '@uniswap/client-explore/dist/uniswap/explore/v1/service_pb';
/**
 * Wrapper around Tanstack useQuery for the Uniswap REST BE service ProtocolStats
 * This includes data for protocol TVL and volume graphs
 * @param input { chainId: string } - string representation of the chain to query or `ALL_NETWORKS` for aggregated data
 * @returns UseQueryResult<ProtocolStatsResponse, ConnectError>
 */
export declare function useProtocolStatsQuery(input?: PartialMessage<ProtocolStatsRequest>): UseQueryResult<ProtocolStatsResponse, ConnectError>;
//# sourceMappingURL=protocolStats.d.ts.map