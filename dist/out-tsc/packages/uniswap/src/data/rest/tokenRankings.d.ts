import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseQueryResult } from '@tanstack/react-query';
import { TokenRankingsRequest, TokenRankingsResponse, TokenRankingsStat } from '@uniswap/client-explore/dist/uniswap/explore/v1/service_pb';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
/**
 * Wrapper around Tanstack useQuery for the Uniswap REST BE service TokenRankings
 * This includes the top tokens pre-sorted by various filters
 * @param input { chainId: string } - string representation of the chain to query or `ALL_NETWORKS` for aggregated data
 * @returns UseQueryResult<TokenRankingsResponse, ConnectError>
 */
export declare function useTokenRankingsQuery(input?: PartialMessage<TokenRankingsRequest>, enabled?: boolean): UseQueryResult<TokenRankingsResponse, ConnectError>;
export declare function tokenRankingsStatToCurrencyInfo(tokenRankingsStat: TokenRankingsStat): CurrencyInfo | null;
//# sourceMappingURL=tokenRankings.d.ts.map