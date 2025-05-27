import { QueryClient, UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { IndicativeQuoteRequest, IndicativeQuoteResponse } from 'uniswap/src/data/tradingApi/__generated__';
export declare function useTradingApiIndicativeQuoteQuery({ params, ...rest }: UseQueryApiHelperHookArgs<IndicativeQuoteRequest, IndicativeQuoteResponse>): UseQueryResult<IndicativeQuoteResponse>;
export declare function fetchTradingApiIndicativeQuoteIgnoring404({ queryClient, params, }: {
    queryClient?: QueryClient;
    params: IndicativeQuoteRequest;
}): Promise<IndicativeQuoteResponse | undefined>;
//# sourceMappingURL=useTradingApiIndicativeQuoteQuery.d.ts.map