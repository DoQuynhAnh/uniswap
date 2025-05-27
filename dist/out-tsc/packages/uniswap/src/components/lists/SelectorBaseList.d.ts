/// <reference types="react" />
import { ItemRowInfo } from 'uniswap/src/components/lists/OnchainItemList/OnchainItemList';
import type { OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { FocusedRowControl } from 'uniswap/src/components/lists/items/OptionItem';
import { OnchainItemListOption } from 'uniswap/src/components/lists/items/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
interface SelectorBaseListProps<T extends OnchainItemListOption> {
    sections?: OnchainItemSection<T>[];
    chainFilter?: UniverseChainId | null;
    refetch?: () => void;
    loading?: boolean;
    hasError?: boolean;
    emptyElement?: JSX.Element;
    errorText?: string;
    renderItem: (info: ItemRowInfo<T>) => JSX.Element;
    keyExtractor: (item: T, index: number) => string;
    expandedItems?: string[];
    focusedRowControl?: Omit<FocusedRowControl, 'rowIndex'>;
}
declare function _SelectorBaseList<T extends OnchainItemListOption>({ renderItem, sections, chainFilter, refetch, loading, hasError, emptyElement, errorText, keyExtractor, expandedItems, focusedRowControl, }: SelectorBaseListProps<T>): JSX.Element;
export declare const SelectorBaseList: typeof _SelectorBaseList;
export {};
//# sourceMappingURL=SelectorBaseList.d.ts.map