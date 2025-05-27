import { Currency, CurrencyAmount, NativeCurrency as NativeCurrencyClass } from '@uniswap/sdk-core';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export type BalanceLookupParams = {
    currencyAddress?: Address;
    chainId?: UniverseChainId;
    currencyIsNative?: boolean;
    accountAddress?: string;
};
/** Custom fetcher that uses an ethers provider to fetch. */
export declare function getOnChainBalancesFetch(params: BalanceLookupParams): Promise<{
    balance?: string;
}>;
export declare function useOnChainCurrencyBalance(currency?: Currency | null, accountAddress?: Address): {
    balance: CurrencyAmount<Currency> | undefined;
    isLoading: boolean;
    error: unknown;
};
export declare function useOnChainNativeCurrencyBalance(chain: UniverseChainId, accountAddress?: Address): {
    balance: CurrencyAmount<NativeCurrencyClass> | undefined;
    isLoading: boolean;
};
//# sourceMappingURL=api.d.ts.map