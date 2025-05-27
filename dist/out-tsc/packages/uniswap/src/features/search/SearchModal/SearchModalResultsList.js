import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { isWeb } from 'ui/src';
import { useCurrencyInfosToTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/useCurrencyInfosToTokenOptions';
import { NoResultsFound } from 'uniswap/src/components/lists/NoResultsFound';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { useNftSearchResultsToNftCollectionOptions } from 'uniswap/src/components/lists/items/nfts/useNftSearchResultsToNftCollectionOptions';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { useOnchainItemListSection } from 'uniswap/src/components/lists/utils';
import { useCollectionSearchQuery } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { useSearchTokensRest } from 'uniswap/src/features/dataApi/searchTokensRest';
import { SearchModalList } from 'uniswap/src/features/search/SearchModal/SearchModalList';
import { NUMBER_OF_RESULTS_SHORT } from 'uniswap/src/features/search/SearchModal/constants';
import { useWalletSearchResults } from 'uniswap/src/features/search/SearchModal/hooks/useWalletSearchResults';
import { MOCK_POOL_OPTION_ITEM } from 'uniswap/src/features/search/SearchModal/mocks';
import { SearchTab } from 'uniswap/src/features/search/SearchModal/types';
import { SearchResultType } from 'uniswap/src/features/search/SearchResult';
import noop from 'utilities/src/react/noop';
export function useSectionsForSearchResults(chainFilter, searchFilter, activeTab) {
    const { data: searchResultCurrencies, error: searchTokensError, refetch: refetchSearchTokens, loading: searchTokensLoading, } = useSearchTokensRest({
        searchQuery: searchFilter,
        chainFilter,
        skip: !searchFilter || (activeTab !== SearchTab.Tokens && activeTab !== SearchTab.All),
    });
    const tokenSearchResults = useCurrencyInfosToTokenOptions({ currencyInfos: searchResultCurrencies });
    const tokenSearchResultsSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.Tokens,
        options: tokenSearchResults,
    });
    const poolSearchResultsSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.Pools,
        options: Array(isWeb ? 4 : 0).fill(MOCK_POOL_OPTION_ITEM),
    });
    const skipWalletSearchQuery = isWeb || (activeTab !== SearchTab.Wallets && activeTab !== SearchTab.All);
    const { wallets: walletSearchResults, loading: walletSearchResultsLoading } = useWalletSearchResults(skipWalletSearchQuery ? '' : searchFilter !== null && searchFilter !== void 0 ? searchFilter : '', // skip wallet search queries on web
    chainFilter);
    const walletSearchOptions = walletSearchResults.map((result) => {
        // For now, wallet's SearchResultTypes are 1:1 with WalletOption
        // Legacy mobile search uses SearchResultType so we keep SearchResultType return type from useWalletSearchResults
        // TODO(WEB-7595): After search revamp goes live, clean up here
        switch (result.type) {
            case SearchResultType.ENSAddress:
                return { ...result, type: OnchainItemListOptionType.ENSAddress };
            case SearchResultType.Unitag:
                return { ...result, type: OnchainItemListOptionType.Unitag };
            case SearchResultType.WalletByAddress:
            default:
                return { ...result, type: OnchainItemListOptionType.WalletByAddress };
        }
    });
    const walletSearchResultsSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.Wallets,
        options: walletSearchOptions,
    });
    const skipNftSearchQuery = isWeb || (activeTab !== SearchTab.NFTCollections && activeTab !== SearchTab.All);
    const { data: nftSearchResultsData, loading: searchNftResultsLoading, error: searchNftResultsError, refetch: refetchSearchNftResults, } = useCollectionSearchQuery({ variables: { query: searchFilter !== null && searchFilter !== void 0 ? searchFilter : '' }, skip: skipNftSearchQuery });
    const nftCollectionOptions = useNftSearchResultsToNftCollectionOptions(nftSearchResultsData, chainFilter);
    const nftCollectionSearchResultsSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.NFTCollections,
        options: activeTab === SearchTab.All ? nftCollectionOptions.slice(0, NUMBER_OF_RESULTS_SHORT) : nftCollectionOptions,
    });
    const refetchAll = useCallback(async () => {
        refetchSearchTokens === null || refetchSearchTokens === void 0 ? void 0 : refetchSearchTokens();
        await (refetchSearchNftResults === null || refetchSearchNftResults === void 0 ? void 0 : refetchSearchNftResults());
    }, [refetchSearchNftResults, refetchSearchTokens]);
    // eslint-disable-next-line complexity
    return useMemo(() => {
        let sections = [];
        switch (activeTab) {
            case SearchTab.All:
                if (isWeb) {
                    sections = [...(tokenSearchResultsSection !== null && tokenSearchResultsSection !== void 0 ? tokenSearchResultsSection : []), ...(poolSearchResultsSection !== null && poolSearchResultsSection !== void 0 ? poolSearchResultsSection : [])];
                }
                else {
                    sections = [
                        ...(tokenSearchResultsSection !== null && tokenSearchResultsSection !== void 0 ? tokenSearchResultsSection : []),
                        ...(walletSearchResultsSection !== null && walletSearchResultsSection !== void 0 ? walletSearchResultsSection : []),
                        ...(nftCollectionSearchResultsSection !== null && nftCollectionSearchResultsSection !== void 0 ? nftCollectionSearchResultsSection : []),
                    ];
                }
                return {
                    data: !searchTokensLoading ? sections : [],
                    loading: searchTokensLoading, // only show loading&error state for loading tokens
                    error: (!tokenSearchResults && searchTokensError) || undefined,
                    refetch: refetchAll,
                };
            case SearchTab.Tokens:
                return {
                    data: tokenSearchResultsSection !== null && tokenSearchResultsSection !== void 0 ? tokenSearchResultsSection : [],
                    loading: searchTokensLoading,
                    error: (!tokenSearchResults && searchTokensError) || undefined,
                    refetch: refetchSearchTokens,
                };
            case SearchTab.Pools:
                return {
                    data: poolSearchResultsSection !== null && poolSearchResultsSection !== void 0 ? poolSearchResultsSection : [],
                    loading: false,
                    error: undefined,
                    refetch: noop,
                };
            case SearchTab.Wallets:
                return {
                    data: walletSearchResultsSection !== null && walletSearchResultsSection !== void 0 ? walletSearchResultsSection : [],
                    loading: walletSearchResultsLoading,
                    refetch: noop,
                };
            default:
            case SearchTab.NFTCollections:
                return {
                    data: nftCollectionSearchResultsSection !== null && nftCollectionSearchResultsSection !== void 0 ? nftCollectionSearchResultsSection : [],
                    loading: searchNftResultsLoading,
                    error: searchNftResultsError || undefined,
                    refetch: refetchSearchNftResults,
                };
        }
    }, [
        activeTab,
        nftCollectionSearchResultsSection,
        poolSearchResultsSection,
        refetchAll,
        refetchSearchNftResults,
        refetchSearchTokens,
        searchNftResultsError,
        searchNftResultsLoading,
        searchTokensError,
        searchTokensLoading,
        tokenSearchResults,
        tokenSearchResultsSection,
        walletSearchResultsLoading,
        walletSearchResultsSection,
    ]);
}
function _SearchModalResultsList({ chainFilter, searchFilter, debouncedSearchFilter, debouncedParsedSearchFilter, activeTab, onSelect, }) {
    var _a;
    const { t } = useTranslation();
    const { data: sections, loading, error, refetch, } = useSectionsForSearchResults(chainFilter, debouncedParsedSearchFilter !== null && debouncedParsedSearchFilter !== void 0 ? debouncedParsedSearchFilter : debouncedSearchFilter, activeTab);
    const userIsTyping = Boolean(searchFilter && debouncedSearchFilter !== searchFilter);
    const emptyElement = useMemo(() => (debouncedSearchFilter ? _jsx(NoResultsFound, { searchFilter: debouncedSearchFilter }) : undefined), [debouncedSearchFilter]);
    return (_jsx(SearchModalList, { emptyElement: emptyElement, errorText: t('token.selector.search.error'), hasError: Boolean(error), loading: userIsTyping || loading, refetch: refetch, sections: sections, searchFilters: {
            query: (_a = debouncedParsedSearchFilter !== null && debouncedParsedSearchFilter !== void 0 ? debouncedParsedSearchFilter : debouncedSearchFilter) !== null && _a !== void 0 ? _a : undefined,
            searchChainFilter: chainFilter,
            searchTabFilter: activeTab,
        }, onSelect: onSelect }));
}
export const SearchModalResultsList = memo(_SearchModalResultsList);
//# sourceMappingURL=SearchModalResultsList.js.map