/// <reference types="react" />
import { OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { SearchModalOption } from 'uniswap/src/components/lists/items/types';
import { GqlResult } from 'uniswap/src/data/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { SearchModalListProps } from 'uniswap/src/features/search/SearchModal/SearchModalList';
import { SearchTab } from 'uniswap/src/features/search/SearchModal/types';
export declare function useSectionsForSearchResults(chainFilter: UniverseChainId | null, searchFilter: string | null, activeTab: SearchTab): GqlResult<OnchainItemSection<SearchModalOption>[]>;
interface SearchModalResultsListProps {
    chainFilter: UniverseChainId | null;
    searchFilter: string;
    debouncedSearchFilter: string | null;
    debouncedParsedSearchFilter: string | null;
    activeTab: SearchTab;
    onSelect?: SearchModalListProps['onSelect'];
}
declare function _SearchModalResultsList({ chainFilter, searchFilter, debouncedSearchFilter, debouncedParsedSearchFilter, activeTab, onSelect, }: SearchModalResultsListProps): JSX.Element;
export declare const SearchModalResultsList: import("react").MemoExoticComponent<typeof _SearchModalResultsList>;
export {};
//# sourceMappingURL=SearchModalResultsList.d.ts.map