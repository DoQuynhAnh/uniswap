import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { Trade } from 'uniswap/src/features/transactions/swap/types/trade';
export declare function getSwapFeeUsd({ trade, outputAmount, outputAmountUsd, }: {
    trade: Trade;
    outputAmount: CurrencyAmount<Currency>;
    outputAmountUsd: CurrencyAmount<Currency>;
}): number | undefined;
export declare function getSwapFeeUsdFromDerivedSwapInfo(derivedSwapInfo: DerivedSwapInfo): number | undefined;
//# sourceMappingURL=getSwapFeeUsd.d.ts.map