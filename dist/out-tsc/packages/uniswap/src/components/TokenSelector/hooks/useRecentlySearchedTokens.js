import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MAX_RECENT_SEARCH_RESULTS } from 'uniswap/src/components/TokenSelector/constants';
import { currencyInfosToTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/useCurrencyInfosToTokenOptions';
import { SearchResultType } from 'uniswap/src/features/search/SearchResult';
import { selectSearchHistory } from 'uniswap/src/features/search/selectSearchHistory';
import { useCurrencyInfos } from 'uniswap/src/features/tokens/useCurrencyInfo';
import { buildCurrencyId, buildNativeCurrencyId } from 'uniswap/src/utils/currencyId';
export function useRecentlySearchedTokens(chainFilter, numberOfResults = MAX_RECENT_SEARCH_RESULTS) {
    const searchHistory = useSelector(selectSearchHistory);
    const searchHistoryCurrencyInfos = useSearchHistoryToCurrencyInfos(searchHistory
        .filter((searchResult) => searchResult.type === SearchResultType.Token)
        .filter((searchResult) => (chainFilter ? searchResult.chainId === chainFilter : true))
        .slice(0, numberOfResults));
    return useMemo(() => {
        var _a;
        return (_a = currencyInfosToTokenOptions(searchHistoryCurrencyInfos)) !== null && _a !== void 0 ? _a : [];
    }, [searchHistoryCurrencyInfos]);
}
// TODO(WEB-5131): Clean up searchHistory slice so that we only save chainId & address to redux
function useSearchHistoryToCurrencyInfos(searchHistory) {
    const currencyIds = searchHistory.map((searchResult) => {
        return searchResult.address
            ? buildCurrencyId(searchResult.chainId, searchResult.address)
            : buildNativeCurrencyId(searchResult.chainId);
    });
    return useCurrencyInfos(currencyIds);
}
//# sourceMappingURL=useRecentlySearchedTokens.js.map