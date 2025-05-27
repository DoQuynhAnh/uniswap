import { UseQueryResult } from '@tanstack/react-query';
import { DiscriminatedQuoteResponse, WithV4Flag } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { UseQueryWithImmediateGarbageCollectionApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { QuoteRequest } from 'uniswap/src/data/tradingApi/__generated__';
export declare function useTradingApiQuoteQuery({ params, ...rest }: UseQueryWithImmediateGarbageCollectionApiHelperHookArgs<WithV4Flag<QuoteRequest & {
    isUSDQuote?: boolean;
}>, DiscriminatedQuoteResponse>): UseQueryResult<DiscriminatedQuoteResponse>;
//# sourceMappingURL=useTradingApiQuoteQuery.d.ts.map