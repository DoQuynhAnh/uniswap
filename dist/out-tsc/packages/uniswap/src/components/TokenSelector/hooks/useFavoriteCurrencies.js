import { ApolloError } from '@apollo/client';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTokenProjects } from 'uniswap/src/features/dataApi/tokenProjects';
import { usePersistedError } from 'uniswap/src/features/dataApi/utils';
import { selectFavoriteTokens } from 'uniswap/src/features/favorites/selectors';
export function useFavoriteCurrencies() {
    const favoriteCurrencyIds = useSelector(selectFavoriteTokens);
    const { data: favoriteTokensOnAllChains, loading, error, refetch } = useTokenProjects(favoriteCurrencyIds);
    const persistedError = usePersistedError(loading, error instanceof ApolloError ? error : undefined);
    // useTokenProjects returns each token on Arbitrum, Optimism, Polygon,
    // so we need to filter out the tokens which user has actually favorited
    const favoriteTokens = useMemo(() => favoriteTokensOnAllChains &&
        favoriteCurrencyIds
            .map((_currencyId) => {
            return favoriteTokensOnAllChains.find((token) => token.currencyId === _currencyId);
        })
            .filter((token) => {
            return !!token;
        }), [favoriteCurrencyIds, favoriteTokensOnAllChains]);
    return { data: favoriteTokens, loading, error: persistedError, refetch };
}
//# sourceMappingURL=useFavoriteCurrencies.js.map