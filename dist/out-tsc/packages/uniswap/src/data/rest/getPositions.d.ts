import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { InfiniteData, UseInfiniteQueryResult, UseQueryResult } from '@tanstack/react-query';
import { GetPositionResponse, ListPositionsRequest, ListPositionsResponse } from '@uniswap/client-pools/dist/pools/v1/api_pb';
import { SerializedToken } from 'uniswap/src/features/tokens/slice/types';
export declare function useGetPositionsQuery(input?: PartialMessage<ListPositionsRequest>, disabled?: boolean): UseQueryResult<ListPositionsResponse, ConnectError>;
export declare function useGetPositionsInfiniteQuery(input: PartialMessage<ListPositionsRequest> & {
    pageToken: string;
}, disabled?: boolean): UseInfiniteQueryResult<InfiniteData<ListPositionsResponse>, ConnectError>;
export declare function useGetPositionsForPairs(serializedPairs: {
    [chainId: number]: {
        [key: string]: {
            token0: SerializedToken;
            token1: SerializedToken;
        };
    };
}, account?: Address): UseQueryResult<GetPositionResponse, ConnectError>[];
//# sourceMappingURL=getPositions.d.ts.map