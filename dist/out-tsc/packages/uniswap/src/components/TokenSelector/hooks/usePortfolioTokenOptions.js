import { useMemo } from 'react';
import { filter } from 'uniswap/src/components/TokenSelector/filter';
import { usePortfolioBalancesForAddressById } from 'uniswap/src/components/TokenSelector/hooks/usePortfolioBalancesForAddressById';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { sortPortfolioBalances, useTokenBalancesGroupedByVisibility } from 'uniswap/src/features/dataApi/balances';
export function usePortfolioTokenOptions(address, chainFilter, searchFilter) {
    const { data: portfolioBalancesById, error, refetch, loading } = usePortfolioBalancesForAddressById(address);
    const { isTestnetModeEnabled } = useEnabledChains();
    const { shownTokens } = useTokenBalancesGroupedByVisibility({
        balancesById: portfolioBalancesById,
    });
    const portfolioBalances = useMemo(() => shownTokens
        ? sortPortfolioBalances({ balances: shownTokens, isTestnetModeEnabled }).map((balance) => ({
            ...balance,
            type: OnchainItemListOptionType.Token,
        }))
        : undefined, [shownTokens, isTestnetModeEnabled]);
    const filteredPortfolioBalances = useMemo(() => portfolioBalances && filter(portfolioBalances, chainFilter, searchFilter), [chainFilter, portfolioBalances, searchFilter]);
    return {
        data: filteredPortfolioBalances,
        error,
        refetch,
        loading,
    };
}
//# sourceMappingURL=usePortfolioTokenOptions.js.map