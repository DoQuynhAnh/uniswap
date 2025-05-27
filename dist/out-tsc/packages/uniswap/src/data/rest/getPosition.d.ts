import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseQueryResult } from '@tanstack/react-query';
import { GetPositionRequest, GetPositionResponse } from '@uniswap/client-pools/dist/pools/v1/api_pb';
export declare function useGetPositionQuery(input?: PartialMessage<GetPositionRequest>): UseQueryResult<GetPositionResponse, ConnectError>;
//# sourceMappingURL=getPosition.d.ts.map