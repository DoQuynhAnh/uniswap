import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
type TradeAmounts = {
    inputCurrencyAmount: Maybe<CurrencyAmount<Currency>>;
    outputCurrencyAmount: Maybe<CurrencyAmount<Currency>>;
};
export declare function getTradeAmounts(acceptedDerivedSwapInfo?: DerivedSwapInfo<CurrencyInfo, CurrencyInfo>, priceUXEnabled?: boolean): TradeAmounts;
export {};
//# sourceMappingURL=getTradeAmounts.d.ts.map