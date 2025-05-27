import { Currency, CurrencyAmount, Price, Token } from '@uniswap/sdk-core';
import { PollingInterval } from 'uniswap/src/constants/misc';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export declare const STABLECOIN_AMOUNT_OUT: Record<UniverseChainId, CurrencyAmount<Token>>;
/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */
export declare function useUSDCPrice(currency?: Currency, pollInterval?: PollingInterval): {
    price: Price<Currency, Currency> | undefined;
    isLoading: boolean;
};
export declare function useUSDCValue(currencyAmount: CurrencyAmount<Currency> | undefined | null): CurrencyAmount<Currency> | null;
/**
 * @param currencyAmount
 * @returns Returns fiat value of the currency amount, and loading status of the currency<->stable quote
 */
export declare function useUSDCValueWithStatus(currencyAmount: CurrencyAmount<Currency> | undefined | null): {
    value: CurrencyAmount<Currency> | null;
    isLoading: boolean;
};
//# sourceMappingURL=useUSDCPrice.d.ts.map