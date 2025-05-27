import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
interface FormattedDisplayAmountsProps {
    value: Maybe<string>;
    currencyInfo: Maybe<CurrencyInfo>;
    currencyAmount: Maybe<CurrencyAmount<Currency>>;
    usdValue: Maybe<CurrencyAmount<Currency>>;
    isFiatMode: boolean;
}
/**
 * Used to get sub-text display amounts for the non-active input mode.
 *
 * If fiat mode, returns the equivalent token amount string.
 *
 * If token mode, returns the equivalent fiat amount formatted based on app currency settings.
 *
 */
export declare function useTokenAndFiatDisplayAmounts({ value, currencyInfo, currencyAmount, usdValue, isFiatMode, }: FormattedDisplayAmountsProps): string;
export {};
//# sourceMappingURL=useTokenAndFiatDisplayAmounts.d.ts.map