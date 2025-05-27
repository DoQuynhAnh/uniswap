import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ElementAfterText, Flex } from 'ui/src';
import { Clock } from 'ui/src/components/icons/Clock';
import { Coins } from 'ui/src/components/icons/Coins';
import { Heart } from 'ui/src/components/icons/Heart';
import { Person } from 'ui/src/components/icons/Person';
import { PhotoStacked } from 'ui/src/components/icons/PhotoStacked';
import { Pools } from 'ui/src/components/icons/Pools';
import { Search } from 'ui/src/components/icons/Search';
import { Shuffle } from 'ui/src/components/icons/Shuffle';
import { TrendUp } from 'ui/src/components/icons/TrendUp';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { isAndroid } from 'utilities/src/platform';
export const SectionHeader = memo(function _SectionHeader({ sectionKey, rightElement, endElement, name, }) {
    const title = useSectionTitle(sectionKey);
    const icon = getSectionIcon(sectionKey);
    if (sectionKey === OnchainItemSectionName.SuggestedTokens) {
        return null;
    }
    return (_jsxs(Flex, { row: true, backgroundColor: "$surface1", width: "100%", justifyContent: "space-between", pb: "$spacing4", pt: "$spacing12", px: "$spacing20", alignItems: isAndroid ? 'flex-end' : 'center', testID: `${TestID.SectionHeaderPrefix}${sectionKey}`, children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", flex: 1, children: [icon, _jsx(ElementAfterText, { text: name !== null && name !== void 0 ? name : title, textProps: { color: '$neutral2', variant: 'subheading2' }, wrapperProps: { flex: 1 }, element: rightElement })] }), endElement] }));
});
function useSectionTitle(section) {
    const { t } = useTranslation();
    switch (section) {
        case OnchainItemSectionName.BridgingTokens:
            return t('tokens.selector.section.bridging');
        case OnchainItemSectionName.YourTokens:
            return t('tokens.selector.section.yours');
        case OnchainItemSectionName.OtherChainsTokens:
            return t('tokens.selector.section.otherNetworksSearchResults');
        case OnchainItemSectionName.TrendingTokens:
            return t('tokens.selector.section.trending');
        case OnchainItemSectionName.RecentSearches:
            return t('tokens.selector.section.recent');
        case OnchainItemSectionName.FavoriteTokens:
            return t('tokens.selector.section.favorite');
        case OnchainItemSectionName.SearchResults:
            return t('tokens.selector.section.search');
        case OnchainItemSectionName.Tokens:
            return t('common.tokens');
        case OnchainItemSectionName.Pools:
            return t('common.pools');
        case OnchainItemSectionName.TrendingPools:
            return t('pool.top.tvl');
        case OnchainItemSectionName.Wallets:
            return t('explore.search.section.wallets');
        case OnchainItemSectionName.NFTCollections:
            return t('explore.search.section.nft');
        case OnchainItemSectionName.PopularNFTCollections:
            return t('explore.search.section.popularNFT');
        case OnchainItemSectionName.FavoriteWallets:
            return t('explore.wallets.favorite.title.default');
        case OnchainItemSectionName.SuggestedTokens: // no suggested tokens header
            return '';
        default:
            return section;
    }
}
function getSectionIcon(section) {
    switch (section) {
        case OnchainItemSectionName.BridgingTokens:
            return _jsx(Shuffle, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.Tokens:
        case OnchainItemSectionName.YourTokens:
        case OnchainItemSectionName.OtherChainsTokens:
            return _jsx(Coins, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.TrendingPools:
        case OnchainItemSectionName.TrendingTokens:
        case OnchainItemSectionName.PopularNFTCollections:
            return _jsx(TrendUp, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.RecentSearches:
            return _jsx(Clock, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.SearchResults:
            return _jsx(Search, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.FavoriteTokens:
            return _jsx(Coins, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.Pools:
            return _jsx(Pools, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.Wallets:
            return _jsx(Person, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.FavoriteWallets:
            return _jsx(Heart, { color: "$neutral2", size: "$icon.16" });
        case OnchainItemSectionName.NFTCollections:
            return _jsx(PhotoStacked, { color: "$neutral2", size: "$icon.16" });
        default:
            return null;
    }
}
//# sourceMappingURL=SectionHeader.js.map