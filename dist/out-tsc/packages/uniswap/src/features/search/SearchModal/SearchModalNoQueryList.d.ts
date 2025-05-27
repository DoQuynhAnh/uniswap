/// <reference types="react" />
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { SearchModalListProps } from 'uniswap/src/features/search/SearchModal/SearchModalList';
import { SearchTab } from 'uniswap/src/features/search/SearchModal/types';
interface SearchModalNoQueryListProps {
    chainFilter: UniverseChainId | null;
    activeTab: SearchTab;
    onSelect?: SearchModalListProps['onSelect'];
}
export declare const SearchModalNoQueryList: import("react").NamedExoticComponent<SearchModalNoQueryListProps>;
export {};
//# sourceMappingURL=SearchModalNoQueryList.d.ts.map