import { useCallback, useMemo } from 'react';
import { filter } from 'uniswap/src/components/TokenSelector/filter';
import { useCurrencyInfosToTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/useCurrencyInfosToTokenOptions';
import { useFavoriteCurrencies } from 'uniswap/src/components/TokenSelector/hooks/useFavoriteCurrencies';
import { usePortfolioBalancesForAddressById } from 'uniswap/src/components/TokenSelector/hooks/usePortfolioBalancesForAddressById';
export function useFavoriteTokensOptions(address, chainFilter) {
    const { data: portfolioBalancesById, error: portfolioBalancesByIdError, refetch: portfolioBalancesByIdRefetch, loading: loadingPorfolioBalancesById, } = usePortfolioBalancesForAddressById(address);
    const { data: favoriteCurrencies, error: favoriteCurrenciesError, refetch: refetchFavoriteCurrencies, loading: loadingFavoriteCurrencies, } = useFavoriteCurrencies();
    const favoriteTokenOptions = useCurrencyInfosToTokenOptions({
        currencyInfos: favoriteCurrencies,
        portfolioBalancesById,
        sortAlphabetically: true,
    });
    const refetch = useCallback(() => {
        portfolioBalancesByIdRefetch === null || portfolioBalancesByIdRefetch === void 0 ? void 0 : portfolioBalancesByIdRefetch();
        refetchFavoriteCurrencies === null || refetchFavoriteCurrencies === void 0 ? void 0 : refetchFavoriteCurrencies();
    }, [portfolioBalancesByIdRefetch, refetchFavoriteCurrencies]);
    const error = (!portfolioBalancesById && portfolioBalancesByIdError) || (!favoriteCurrencies && favoriteCurrenciesError);
    const filteredFavoriteTokenOptions = useMemo(() => favoriteTokenOptions && filter(favoriteTokenOptions, chainFilter), [chainFilter, favoriteTokenOptions]);
    return {
        data: filteredFavoriteTokenOptions,
        refetch,
        error: error || undefined,
        loading: loadingPorfolioBalancesById || loadingFavoriteCurrencies,
    };
}
//# sourceMappingURL=useFavoriteTokensOptions.js.map