import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { DutchQuoteV2 } from 'uniswap/src/data/tradingApi/__generated__';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { TokenApprovalInfo, TradeWithStatus, UniswapXV2Trade } from 'uniswap/src/features/transactions/swap/types/trade';
export declare const TWENTY_MINUTES_FROM_NOW: number;
export declare const createMockCurrencyAmount: (token: Token, amount: string) => CurrencyAmount<Token>;
export declare const createMockTradeWithStatus: (inputAmount: CurrencyAmount<Token>, outputAmount: CurrencyAmount<Token>) => TradeWithStatus;
export declare const createMockDerivedSwapInfo: (inputCurrency: Token, outputCurrency: Token, inputAmount: string, outputAmount: string, overrides?: Partial<DerivedSwapInfo>) => DerivedSwapInfo;
export declare const createMockUniswapXQuote: (token: string) => DutchQuoteV2;
export declare const createMockUniswapXTrade: (inputCurrency: Token, outputCurrency: Token) => UniswapXV2Trade;
export declare const createMockTokenApprovalInfo: (overrides?: {}) => TokenApprovalInfo;
//# sourceMappingURL=swap.d.ts.map