/// <reference types="react" />
import type { OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { SearchModalOption } from 'uniswap/src/components/lists/items/types';
import { SearchFilterContext } from 'uniswap/src/features/search/SearchModal/analytics/SearchContext';
export interface SearchModalListProps {
    sections?: OnchainItemSection<SearchModalOption>[];
    refetch?: () => void;
    loading?: boolean;
    hasError?: boolean;
    emptyElement?: JSX.Element;
    errorText?: string;
    onSelect?: () => void;
    searchFilters: SearchFilterContext;
}
export declare const SearchModalList: import("react").NamedExoticComponent<SearchModalListProps>;
//# sourceMappingURL=SearchModalList.d.ts.map