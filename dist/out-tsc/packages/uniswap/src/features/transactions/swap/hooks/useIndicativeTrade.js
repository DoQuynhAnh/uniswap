import { useMemo } from 'react';
import { useTradingApiIndicativeQuoteQuery } from 'uniswap/src/data/apiClients/tradingApi/useTradingApiIndicativeQuoteQuery';
import { IndicativeTrade, validateIndicativeQuoteResponse } from 'uniswap/src/features/transactions/swap/types/trade';
import { logger } from 'utilities/src/logger/logger';
export function useIndicativeTrade({ quoteRequestArgs, currencyIn, currencyOut, skip }) {
    // Avoid passing unused fields to Indicative endpoint; IndicativeQuote request uses less fields than Quote request.
    const params = useMemo(() => {
        if (!(quoteRequestArgs === null || quoteRequestArgs === void 0 ? void 0 : quoteRequestArgs.type)) {
            return undefined;
        }
        return {
            type: quoteRequestArgs.type,
            amount: quoteRequestArgs.amount,
            tokenInChainId: quoteRequestArgs.tokenInChainId,
            tokenOutChainId: quoteRequestArgs.tokenOutChainId,
            tokenIn: quoteRequestArgs.tokenIn,
            tokenOut: quoteRequestArgs.tokenOut,
        };
    }, [
        quoteRequestArgs === null || quoteRequestArgs === void 0 ? void 0 : quoteRequestArgs.amount,
        quoteRequestArgs === null || quoteRequestArgs === void 0 ? void 0 : quoteRequestArgs.tokenInChainId,
        quoteRequestArgs === null || quoteRequestArgs === void 0 ? void 0 : quoteRequestArgs.tokenOutChainId,
        quoteRequestArgs === null || quoteRequestArgs === void 0 ? void 0 : quoteRequestArgs.tokenIn,
        quoteRequestArgs === null || quoteRequestArgs === void 0 ? void 0 : quoteRequestArgs.tokenOut,
        quoteRequestArgs === null || quoteRequestArgs === void 0 ? void 0 : quoteRequestArgs.type,
    ]);
    const { data, isLoading } = useTradingApiIndicativeQuoteQuery({
        params: currencyIn && currencyOut && !skip ? params : undefined,
    });
    return useMemo(() => {
        const validatedResponse = data ? validateIndicativeQuoteResponse(data) : undefined;
        if (!validatedResponse || !currencyIn || !currencyOut) {
            return { trade: undefined, isLoading };
        }
        try {
            const trade = new IndicativeTrade({ quote: validatedResponse, currencyIn, currencyOut });
            return { trade, isLoading };
        }
        catch (error) {
            logger.error(error, {
                tags: { file: 'useIndicativeTrade.ts', function: 'useIndicativeTrade' },
            });
            return { trade: undefined, isLoading: false };
        }
    }, [currencyIn, currencyOut, data, isLoading]);
}
//# sourceMappingURL=useIndicativeTrade.js.map