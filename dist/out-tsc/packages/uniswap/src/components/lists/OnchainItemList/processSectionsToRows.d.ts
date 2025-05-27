import type { ItemRowInfo, SectionRowInfo } from 'uniswap/src/components/lists/OnchainItemList/OnchainItemList';
import { type OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { OnchainItemListOption } from 'uniswap/src/components/lists/items/types';
export declare enum ProcessedRowType {
    Header = "header",
    Item = "item"
}
export type ProcessedRow = {
    type: ProcessedRowType.Header;
    data: SectionRowInfo;
} | {
    type: ProcessedRowType.Item;
    data: ItemRowInfo<OnchainItemListOption>;
};
export declare function processSectionsToRows(sections: OnchainItemSection<OnchainItemListOption>[]): ProcessedRow[];
//# sourceMappingURL=processSectionsToRows.d.ts.map