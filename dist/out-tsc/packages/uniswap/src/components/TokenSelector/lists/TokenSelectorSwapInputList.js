import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useMemo } from 'react';
import { TokenSelectorList } from 'uniswap/src/components/TokenSelector/TokenSelectorList';
import { useCommonTokensOptionsWithFallback } from 'uniswap/src/components/TokenSelector/hooks/useCommonTokensOptionsWithFallback';
import { useFavoriteTokensOptions } from 'uniswap/src/components/TokenSelector/hooks/useFavoriteTokensOptions';
import { usePortfolioTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/usePortfolioTokenOptions';
import { useRecentlySearchedTokens } from 'uniswap/src/components/TokenSelector/hooks/useRecentlySearchedTokens';
import { useTrendingTokensOptions } from 'uniswap/src/components/TokenSelector/hooks/useTrendingTokensOptions';
import { isSwapListLoading } from 'uniswap/src/components/TokenSelector/utils';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { useOnchainItemListSection } from 'uniswap/src/components/lists/utils';
import { useBridgingTokensOptions } from 'uniswap/src/features/bridging/hooks/tokens';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { isMobileApp } from 'utilities/src/platform';
// eslint-disable-next-line complexity
function useTokenSectionsForSwapInput({ activeAccountAddress, chainFilter, oppositeSelectedToken: output, }) {
    var _a;
    const { defaultChainId, isTestnetModeEnabled } = useEnabledChains();
    const { data: portfolioTokenOptions, error: portfolioTokenOptionsError, refetch: refetchPortfolioTokenOptions, loading: portfolioTokenOptionsLoading, } = usePortfolioTokenOptions(activeAccountAddress, chainFilter);
    const { data: trendingTokenOptions, error: trendingTokenOptionsError, refetch: refetchTrendingTokenOptions, loading: trendingTokenOptionsLoading, } = useTrendingTokensOptions(activeAccountAddress, chainFilter);
    const { data: favoriteTokenOptions, error: favoriteTokenOptionsError, refetch: refetchFavoriteTokenOptions, loading: favoriteTokenOptionsLoading, } = useFavoriteTokensOptions(activeAccountAddress, chainFilter);
    const { data: commonTokenOptions, error: commonTokenOptionsError, refetch: refetchCommonTokenOptions, loading: commonTokenOptionsLoading, } = useCommonTokensOptionsWithFallback(activeAccountAddress, (_a = chainFilter !== null && chainFilter !== void 0 ? chainFilter : output === null || output === void 0 ? void 0 : output.chainId) !== null && _a !== void 0 ? _a : defaultChainId);
    const { data: bridgingTokenOptions, error: bridgingTokenOptionsError, refetch: refetchBridgingTokenOptions, loading: bridgingTokenOptionsLoading, shouldNest: shouldNestBridgingTokens, } = useBridgingTokensOptions({ oppositeSelectedToken: output, walletAddress: activeAccountAddress, chainFilter });
    const recentlySearchedTokenOptions = useRecentlySearchedTokens(chainFilter);
    const error = (!portfolioTokenOptions && portfolioTokenOptionsError) ||
        (!trendingTokenOptions && trendingTokenOptionsError) ||
        (!favoriteTokenOptions && favoriteTokenOptionsError) ||
        (!commonTokenOptions && commonTokenOptionsError) ||
        (!bridgingTokenOptions && bridgingTokenOptionsError);
    const loading = (!portfolioTokenOptions && portfolioTokenOptionsLoading) ||
        (!trendingTokenOptions && trendingTokenOptionsLoading) ||
        (!favoriteTokenOptions && favoriteTokenOptionsLoading) ||
        (!commonTokenOptions && commonTokenOptionsLoading) ||
        (!bridgingTokenOptions && bridgingTokenOptionsLoading);
    const refetchAll = useCallback(() => {
        refetchPortfolioTokenOptions === null || refetchPortfolioTokenOptions === void 0 ? void 0 : refetchPortfolioTokenOptions();
        refetchTrendingTokenOptions === null || refetchTrendingTokenOptions === void 0 ? void 0 : refetchTrendingTokenOptions();
        refetchFavoriteTokenOptions === null || refetchFavoriteTokenOptions === void 0 ? void 0 : refetchFavoriteTokenOptions();
        refetchCommonTokenOptions === null || refetchCommonTokenOptions === void 0 ? void 0 : refetchCommonTokenOptions();
        refetchBridgingTokenOptions === null || refetchBridgingTokenOptions === void 0 ? void 0 : refetchBridgingTokenOptions();
    }, [
        refetchTrendingTokenOptions,
        refetchPortfolioTokenOptions,
        refetchFavoriteTokenOptions,
        refetchCommonTokenOptions,
        refetchBridgingTokenOptions,
    ]);
    const suggestedSectionOptions = useMemo(() => [commonTokenOptions !== null && commonTokenOptions !== void 0 ? commonTokenOptions : []], [commonTokenOptions]);
    const suggestedSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.SuggestedTokens,
        options: suggestedSectionOptions,
    });
    const portfolioSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.YourTokens,
        options: portfolioTokenOptions,
    });
    const recentSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.RecentSearches,
        options: recentlySearchedTokenOptions,
    });
    const favoriteSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.FavoriteTokens,
        options: favoriteTokenOptions,
    });
    const trendingSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.TrendingTokens,
        options: trendingTokenOptions,
    });
    const bridgingSectionTokenOptions = useMemo(() => (shouldNestBridgingTokens ? [bridgingTokenOptions !== null && bridgingTokenOptions !== void 0 ? bridgingTokenOptions : []] : bridgingTokenOptions !== null && bridgingTokenOptions !== void 0 ? bridgingTokenOptions : []), [bridgingTokenOptions, shouldNestBridgingTokens]);
    const bridgingSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.BridgingTokens,
        options: bridgingSectionTokenOptions,
    });
    const sections = useMemo(() => {
        if (isSwapListLoading({ loading, portfolioSection, trendingSection, isTestnetModeEnabled })) {
            return undefined;
        }
        if (isTestnetModeEnabled) {
            return [...(suggestedSection !== null && suggestedSection !== void 0 ? suggestedSection : []), ...(portfolioSection !== null && portfolioSection !== void 0 ? portfolioSection : [])];
        }
        return [
            ...(suggestedSection !== null && suggestedSection !== void 0 ? suggestedSection : []),
            ...(bridgingSection !== null && bridgingSection !== void 0 ? bridgingSection : []),
            ...(portfolioSection !== null && portfolioSection !== void 0 ? portfolioSection : []),
            ...(recentSection !== null && recentSection !== void 0 ? recentSection : []),
            // TODO(WEB-3061): Favorited wallets/tokens
            // Extension & interface do not support favoriting but has a default list, so we can't rely on empty array check
            ...(isMobileApp ? favoriteSection !== null && favoriteSection !== void 0 ? favoriteSection : [] : []),
            ...(trendingSection !== null && trendingSection !== void 0 ? trendingSection : []),
        ];
    }, [
        suggestedSection,
        favoriteSection,
        loading,
        trendingSection,
        portfolioSection,
        recentSection,
        isTestnetModeEnabled,
        bridgingSection,
    ]);
    return useMemo(() => ({
        data: sections,
        loading,
        error: error || undefined,
        refetch: refetchAll,
    }), [error, loading, refetchAll, sections]);
}
function _TokenSelectorSwapInputList({ onSelectCurrency, activeAccountAddress, chainFilter, isKeyboardOpen, oppositeSelectedToken, }) {
    const { data: sections, loading, error, refetch, } = useTokenSectionsForSwapInput({
        activeAccountAddress,
        chainFilter,
        oppositeSelectedToken,
    });
    return (_jsx(TokenSelectorList, { showTokenAddress: true, chainFilter: chainFilter, hasError: Boolean(error), isKeyboardOpen: isKeyboardOpen, loading: loading, refetch: refetch, sections: sections, showTokenWarnings: true, onSelectCurrency: onSelectCurrency }));
}
export const TokenSelectorSwapInputList = memo(_TokenSelectorSwapInputList);
//# sourceMappingURL=TokenSelectorSwapInputList.js.map