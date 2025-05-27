import { WatchQueryFetchPolicy } from '@apollo/client';
import { PortfolioBalance } from 'uniswap/src/features/dataApi/types';
import { CurrencyId } from 'uniswap/src/types/currency';
export declare function useBalances({ address, currencies, fetchPolicy, }: {
    address: Address;
    currencies: CurrencyId[] | undefined;
    fetchPolicy?: WatchQueryFetchPolicy;
}): PortfolioBalance[] | null;
//# sourceMappingURL=useBalances.d.ts.map