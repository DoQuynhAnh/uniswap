import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Text, TouchableArea } from 'ui/src';
import { MAX_DEFAULT_TRENDING_TOKEN_RESULTS_AMOUNT } from 'uniswap/src/components/TokenSelector/constants';
import { useRecentlySearchedTokens } from 'uniswap/src/components/TokenSelector/hooks/useRecentlySearchedTokens';
import { useTrendingTokensOptions } from 'uniswap/src/components/TokenSelector/hooks/useTrendingTokensOptions';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { useOnchainItemListSection } from 'uniswap/src/components/lists/utils';
import { clearSearchHistory } from 'uniswap/src/features/search/searchHistorySlice';
function ClearAll({ onPress }) {
    const { t } = useTranslation();
    return (_jsx(TouchableArea, { onPress: onPress, children: _jsx(Text, { color: "$accent1", variant: "buttonLabel3", children: t('tokens.selector.button.clear') }) }));
}
export function useTokenSectionsForEmptySearch({ activeAccountAddress, chainFilter, }) {
    const dispatch = useDispatch();
    const { data: trendingTokenOptions, loading } = useTrendingTokensOptions(activeAccountAddress, chainFilter);
    const recentlySearchedTokenOptions = useRecentlySearchedTokens(chainFilter);
    // it's a dependency of useMemo => useCallback
    const onPressClearSearchHistory = useCallback(() => {
        dispatch(clearSearchHistory());
    }, [dispatch]);
    const recentSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.RecentSearches,
        options: recentlySearchedTokenOptions,
        endElement: _jsx(ClearAll, { onPress: onPressClearSearchHistory }),
    });
    const trendingSection = useOnchainItemListSection({
        sectionKey: OnchainItemSectionName.TrendingTokens,
        options: trendingTokenOptions === null || trendingTokenOptions === void 0 ? void 0 : trendingTokenOptions.slice(0, MAX_DEFAULT_TRENDING_TOKEN_RESULTS_AMOUNT),
    });
    const sections = useMemo(() => [...(recentSection !== null && recentSection !== void 0 ? recentSection : []), ...(trendingSection !== null && trendingSection !== void 0 ? trendingSection : [])], [trendingSection, recentSection]);
    return useMemo(() => ({
        data: sections,
        loading,
    }), [loading, sections]);
}
//# sourceMappingURL=useTokenSectionsForEmptySearch.js.map