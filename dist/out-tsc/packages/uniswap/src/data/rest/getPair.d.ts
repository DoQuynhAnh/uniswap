import { PartialMessage } from '@bufbuild/protobuf';
import { ConnectError } from '@connectrpc/connect';
import { UseQueryResult } from '@tanstack/react-query';
import { GetPairRequest, GetPairResponse } from '@uniswap/client-pools/dist/pools/v1/api_pb';
/**
 * eslint-disable import/no-unused-modules -- this endpoint is returning stale data sometimes meaning
 * that the data we get (i.e. the dependent amount) is incorrect and the transaction does not complete on chain.
 * Use this endpoint again once the data is more up to date or the trading API handles the data discrepancy.
 */
export declare function useGetPair(input?: PartialMessage<GetPairRequest>, enabled?: boolean): UseQueryResult<GetPairResponse, ConnectError>;
//# sourceMappingURL=getPair.d.ts.map