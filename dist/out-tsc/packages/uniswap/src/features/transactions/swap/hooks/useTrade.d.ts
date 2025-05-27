import { TradeWithStatus, UseTradeArgs } from 'uniswap/src/features/transactions/swap/types/trade';
export declare const SWAP_QUOTE_ERROR = "QUOTE_ERROR";
export declare const API_RATE_LIMIT_ERROR = "TOO_MANY_REQUESTS";
export declare function useTrade({ account, amountSpecified: amount, otherCurrency, tradeType, pollInterval, customSlippageTolerance, isUSDQuote, skip, selectedProtocols, isDebouncing, generatePermitAsTransaction, isV4HookPoolsEnabled, }: UseTradeArgs): TradeWithStatus;
//# sourceMappingURL=useTrade.d.ts.map