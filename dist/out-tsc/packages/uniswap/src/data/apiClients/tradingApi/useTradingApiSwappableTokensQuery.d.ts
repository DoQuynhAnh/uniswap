import { QueryClient, UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { ChainId, GetSwappableTokensResponse } from 'uniswap/src/data/tradingApi/__generated__';
import { TradeableAsset } from 'uniswap/src/entities/assets';
export type SwappableTokensParams = {
    tokenIn: Address;
    tokenInChainId: ChainId;
};
export declare function useTradingApiSwappableTokensQuery({ params, ...rest }: UseQueryApiHelperHookArgs<SwappableTokensParams, GetSwappableTokensResponse>): UseQueryResult<GetSwappableTokensResponse>;
export declare function getSwappableTokensQueryData({ queryClient, params, }: {
    queryClient: QueryClient;
    params: SwappableTokensParams;
}): GetSwappableTokensResponse | undefined;
export declare function usePrefetchSwappableTokens(input: Maybe<TradeableAsset>): void;
//# sourceMappingURL=useTradingApiSwappableTokensQuery.d.ts.map