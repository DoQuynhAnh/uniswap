import { OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { SearchModalOption } from 'uniswap/src/components/lists/items/types';
import { SearchFilterContext } from 'uniswap/src/features/search/SearchModal/analytics/SearchContext';
export declare function sendSearchOptionItemClickedAnalytics({ item, section, rowIndex, searchFilters, }: {
    item: SearchModalOption;
    section: OnchainItemSection<SearchModalOption>;
    rowIndex: number;
    searchFilters: SearchFilterContext;
}): void;
//# sourceMappingURL=analytics.d.ts.map