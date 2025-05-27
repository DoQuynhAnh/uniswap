import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseQueryResult } from '@tanstack/react-query';
import { GetRewardsRequest, GetRewardsResponse } from '@uniswap/client-pools/dist/pools/v1/api_pb';
export declare function useGetPoolsRewards(input?: PartialMessage<GetRewardsRequest>, enabled?: boolean): UseQueryResult<GetRewardsResponse, ConnectError>;
//# sourceMappingURL=getPoolsRewards.d.ts.map