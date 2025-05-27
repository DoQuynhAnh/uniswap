import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseQueryResult } from '@tanstack/react-query';
import { ListPoolsRequest, ListPoolsResponse } from '@uniswap/client-pools/dist/pools/v1/api_pb';
export declare function useGetPoolsByTokens(input?: PartialMessage<ListPoolsRequest>, enabled?: boolean): UseQueryResult<ListPoolsResponse, ConnectError>;
//# sourceMappingURL=getPools.d.ts.map