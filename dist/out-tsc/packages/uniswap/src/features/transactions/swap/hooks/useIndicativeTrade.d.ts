import { Currency } from '@uniswap/sdk-core';
import { QuoteRequest } from 'uniswap/src/data/tradingApi/__generated__/index';
import { IndicativeTrade } from 'uniswap/src/features/transactions/swap/types/trade';
interface UseIndicativeTradeParams {
    quoteRequestArgs?: QuoteRequest;
    currencyIn?: Currency | null;
    currencyOut?: Currency | null;
    skip?: boolean;
}
export declare function useIndicativeTrade({ quoteRequestArgs, currencyIn, currencyOut, skip }: UseIndicativeTradeParams): {
    trade: IndicativeTrade | undefined;
    isLoading: boolean;
};
export {};
//# sourceMappingURL=useIndicativeTrade.d.ts.map