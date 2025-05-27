import { NetworkStatus, QueryHookOptions, WatchQueryFetchPolicy } from '@apollo/client';
import { PollingInterval } from 'uniswap/src/constants/misc';
import { PortfolioBalancesQuery, PortfolioBalancesQueryVariables, PortfolioValueModifier } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { GqlResult } from 'uniswap/src/data/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { PortfolioBalance } from 'uniswap/src/features/dataApi/types';
import { CurrencyId } from 'uniswap/src/types/currency';
export type SortedPortfolioBalances = {
    balances: PortfolioBalance[];
    hiddenBalances: PortfolioBalance[];
};
export type PortfolioTotalValue = {
    balanceUSD: number | undefined;
    percentChange: number | undefined;
    absoluteChangeUSD: number | undefined;
};
export type PortfolioCacheUpdater = (hidden: boolean, portfolioBalance?: PortfolioBalance) => void;
/**
 * Returns all balances indexed by checksummed currencyId for a given address
 * @param address
 * @param queryOptions.pollInterval optional `PollingInterval` representing polling frequency.
 *  If undefined, will query once and not poll.
 * NOTE:
 *  on TokenDetails, useBalances relies rely on usePortfolioBalances but don't need polling versions of it.
 *  Including polling was causing multiple polling intervals to be kicked off with usePortfolioBalances.
 *  Same with on Token Selector's TokenSearchResultList, since the home screen has a usePortfolioBalances polling hook,
 *  we don't need to duplicate the polling interval when token selector is open
 * @param queryOptions - QueryHookOptions type for usePortfolioBalancesQuery to be set if not already set internally.
 */
export declare function usePortfolioBalances({ address, ...queryOptions }: {
    address?: Address;
} & QueryHookOptions<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>): GqlResult<Record<CurrencyId, PortfolioBalance>> & {
    networkStatus: NetworkStatus;
};
export declare function usePortfolioTotalValue({ address, pollInterval, onCompleted, fetchPolicy, }: {
    address?: Address;
    pollInterval?: PollingInterval;
    onCompleted?: () => void;
    fetchPolicy?: WatchQueryFetchPolicy;
}): GqlResult<PortfolioTotalValue> & {
    networkStatus: NetworkStatus;
};
export declare function usePortfolioValueModifiers(addresses?: Address | Address[]): PortfolioValueModifier[] | undefined;
/**
 * Returns NativeCurrency with highest balance.
 *
 * @param address to get portfolio balances for
 * @param chainId if present will only return the NativeCurrency with the highest balance for the given chainId
 * @returns CurrencyId of the NativeCurrency with highest balance, or the native address for the given chainId
 *          (or defaultChainId if no chainId is provided) when no highest balance is found
 *
 */
export declare function useHighestBalanceNativeCurrencyId(address: Address, chainId?: UniverseChainId): CurrencyId;
/**
 * Custom hook to group Token Balances fetched from API to shown and hidden.
 *
 * @param balancesById - An object where keys are token ids and values are the corresponding balances. May be undefined.
 *
 * @returns {object} An object containing two fields:
 *  - `shownTokens`: shown tokens.
 *  - `hiddenTokens`: hidden tokens.
 *
 * @example
 * const { shownTokens, hiddenTokens } = useTokenBalancesGroupedByVisibility({ balancesById });
 */
export declare function useTokenBalancesGroupedByVisibility({ balancesById, }: {
    balancesById?: Record<string, PortfolioBalance>;
}): {
    shownTokens: PortfolioBalance[] | undefined;
    hiddenTokens: PortfolioBalance[] | undefined;
};
/**
 * Returns portfolio balances for a given address sorted by USD value.
 *
 * @param address to get portfolio balances for
 * @param pollInterval optional polling interval for auto refresh.
 *    If undefined, query will run only once.
 * @param onCompleted callback
 * @returns SortedPortfolioBalances object with `balances` and `hiddenBalances`
 */
export declare function useSortedPortfolioBalances({ address, pollInterval, onCompleted, }: {
    address?: Address;
    pollInterval?: PollingInterval;
    onCompleted?: () => void;
}): GqlResult<SortedPortfolioBalances> & {
    networkStatus: NetworkStatus;
};
/**
 * Helper function to stable sort balances by descending balanceUSD – or native balance tokens in testnet mode –
 * followed by all other tokens sorted alphabetically
 * */
export declare function sortPortfolioBalances({ balances, isTestnetModeEnabled, }: {
    balances: PortfolioBalance[];
    isTestnetModeEnabled: boolean;
}): PortfolioBalance[];
/**
 * Creates a function to update the Apollo cache when a token is shown or hidden.
 * We manually modify the cache to avoid having to wait for the server's response,
 * so that the change is immediately reflected in the UI.
 *
 * @param address active wallet address
 * @returns a `PortfolioCacheUpdater` function that will update the Apollo cache
 */
export declare function usePortfolioCacheUpdater(address: string): PortfolioCacheUpdater;
//# sourceMappingURL=balances.d.ts.map