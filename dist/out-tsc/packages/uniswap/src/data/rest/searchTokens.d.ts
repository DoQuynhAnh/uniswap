import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseQueryResult } from '@tanstack/react-query';
import { SearchTokensRequest, SearchTokensResponse, type Token as SearchToken } from '@uniswap/client-search/dist/search/v1/api_pb';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
/**
 * Wrapper around Tanstack useQuery for the Uniswap REST BE service SearchTokens
 * This includes data for token search
 * @param input - The search request parameters including search query, chain IDs, search type, page and size
 * @returns data, error, isPending, and refetch
 */
export declare function useSearchTokensQuery({ input, enabled, }: {
    input?: PartialMessage<SearchTokensRequest>;
    enabled?: boolean;
}): UseQueryResult<SearchTokensResponse, ConnectError>;
export declare function searchTokenToCurrencyInfo(token: SearchToken): CurrencyInfo | null;
//# sourceMappingURL=searchTokens.d.ts.map