import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrencyInfosToTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/useCurrencyInfosToTokenOptions';
import { usePortfolioBalancesForAddressById } from 'uniswap/src/components/TokenSelector/hooks/usePortfolioBalancesForAddressById';
import { usePortfolioTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/usePortfolioTokenOptions';
import { mergeSearchResultsWithBridgingTokens } from 'uniswap/src/components/TokenSelector/utils';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { useOnchainItemListSection } from 'uniswap/src/components/lists/utils';
import { useBridgingTokensOptions } from 'uniswap/src/features/bridging/hooks/tokens';
import { getChainLabel } from 'uniswap/src/features/chains/utils';
import { useSearchTokensGql } from 'uniswap/src/features/dataApi/searchTokensGql';
import { useSearchTokensRest } from 'uniswap/src/features/dataApi/searchTokensRest';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
export function useTokenSectionsForSearchResults(address, chainFilter, searchFilter, isBalancesOnlySearch, input) {
    const { t } = useTranslation();
    const { data: portfolioBalancesById, error: portfolioBalancesByIdError, refetch: refetchPortfolioBalances, loading: portfolioBalancesByIdLoading, } = usePortfolioBalancesForAddressById(address);
    const { data: portfolioTokenOptions, error: portfolioTokenOptionsError, refetch: refetchPortfolioTokenOptions, loading: portfolioTokenOptionsLoading, } = usePortfolioTokenOptions(address, chainFilter, searchFilter !== null && searchFilter !== void 0 ? searchFilter : undefined);
    // Bridging tokens are only shown if input is provided
    const { data: bridgingTokenOptions, error: bridgingTokenOptionsError, refetch: refetchBridgingTokenOptions, loading: bridgingTokenOptionsLoading, } = useBridgingTokensOptions({ oppositeSelectedToken: input, walletAddress: address, chainFilter });
    // Only call search endpoint if isBalancesOnlySearch is false
    const searchRevampEnabled = useFeatureFlag(FeatureFlags.SearchRevamp);
    const { data: searchResultCurrenciesGql, error: searchTokensErrorGql, refetch: refetchSearchTokensGql, loading: searchTokensLoadingGql, } = useSearchTokensGql(searchFilter, chainFilter, /*skip*/ isBalancesOnlySearch || searchRevampEnabled);
    const { data: searchResultCurrenciesRest, error: searchTokensErrorRest, refetch: refetchSearchTokensRest, loading: searchTokensLoadingRest, } = useSearchTokensRest({
        searchQuery: searchFilter,
        chainFilter,
        skip: isBalancesOnlySearch || !searchRevampEnabled,
    });
    const { searchResultCurrencies, searchTokensError, refetchSearchTokens, searchTokensLoading } = searchRevampEnabled
        ? {
            searchResultCurrencies: searchResultCurrenciesRest,
            searchTokensError: searchTokensErrorRest,
            refetchSearchTokens: refetchSearchTokensRest,
            searchTokensLoading: searchTokensLoadingRest,
        }
        : {
            searchResultCurrencies: searchResultCurrenciesGql,
            searchTokensError: searchTokensErrorGql,
            refetchSearchTokens: refetchSearchTokensGql,
            searchTokensLoading: searchTokensLoadingGql,
        };
    const [selectedNetworkResults, otherNetworksSearchResults] = useMemo(() => {
        if (!searchResultCurrencies) {
            return [[], []];
        }
        const selected = searchResultCurrencies.filter((currency) => !currency.isFromOtherNetwork);
        const other = searchResultCurrencies.filter((currency) => currency.isFromOtherNetwork);
        return [selected, other];
    }, [searchResultCurrencies]);
    const searchResults = useCurrencyInfosToTokenOptions({
        currencyInfos: selectedNetworkResults,
        portfolioBalancesById,
    });
    // Format other networks search results if they exist
    const otherNetworksResults = useCurrencyInfosToTokenOptions({
        currencyInfos: otherNetworksSearchResults,
        portfolioBalancesById,
    });
    const loading = portfolioTokenOptionsLoading ||
        portfolioBalancesByIdLoading ||
        (!isBalancesOnlySearch && searchTokensLoading) ||
        bridgingTokenOptionsLoading;
    const searchResultsSections = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.SearchResults,
        // Use local search when only searching balances
        options: isBalancesOnlySearch ? portfolioTokenOptions : searchResults,
    });
    // Create section for other chains search results if they exist
    const otherNetworksSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.OtherChainsTokens,
        options: otherNetworksResults,
    });
    // If there are bridging options, we need to extract them from the search results and then prepend them as a new section above.
    // The remaining non-bridging search results will be shown in a section with a different name
    const networkName = chainFilter ? getChainLabel(chainFilter) : undefined;
    const searchResultsSectionHeader = networkName
        ? t('tokens.selector.section.otherSearchResults', { network: networkName })
        : undefined;
    const allSections = useMemo(() => {
        var _a;
        // Start with existing sections (bridging tokens + search results)
        let sections = (_a = mergeSearchResultsWithBridgingTokens(searchResultsSections, bridgingTokenOptions, searchResultsSectionHeader)) !== null && _a !== void 0 ? _a : [];
        // Add other networks section if it exists
        if (otherNetworksSection === null || otherNetworksSection === void 0 ? void 0 : otherNetworksSection.length) {
            sections = [...sections, ...otherNetworksSection];
        }
        return sections;
    }, [searchResultsSections, bridgingTokenOptions, searchResultsSectionHeader, otherNetworksSection]);
    const error = (!bridgingTokenOptions && bridgingTokenOptionsError) ||
        (!portfolioBalancesById && portfolioBalancesByIdError) ||
        (!portfolioTokenOptions && portfolioTokenOptionsError) ||
        (!isBalancesOnlySearch && !searchResults && searchTokensError);
    const refetchAll = useCallback(() => {
        refetchPortfolioBalances === null || refetchPortfolioBalances === void 0 ? void 0 : refetchPortfolioBalances();
        refetchSearchTokens === null || refetchSearchTokens === void 0 ? void 0 : refetchSearchTokens();
        refetchPortfolioTokenOptions === null || refetchPortfolioTokenOptions === void 0 ? void 0 : refetchPortfolioTokenOptions();
        refetchBridgingTokenOptions === null || refetchBridgingTokenOptions === void 0 ? void 0 : refetchBridgingTokenOptions();
    }, [refetchBridgingTokenOptions, refetchPortfolioBalances, refetchPortfolioTokenOptions, refetchSearchTokens]);
    return useMemo(() => ({
        data: allSections,
        loading,
        error: error || undefined,
        refetch: refetchAll,
    }), [error, loading, refetchAll, allSections]);
}
//# sourceMappingURL=useTokenSectionsForSearchResults.js.map