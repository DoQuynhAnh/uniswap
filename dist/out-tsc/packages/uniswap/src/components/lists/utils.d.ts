/// <reference types="react" />
import { OnchainItemSectionName, type OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { OnchainItemListOption } from 'uniswap/src/components/lists/items/types';
export declare function useOnchainItemListSection<T extends OnchainItemListOption>({ sectionKey, options, rightElement, endElement, name, }: {
    sectionKey: OnchainItemSectionName;
    options?: T[];
    rightElement?: JSX.Element;
    endElement?: JSX.Element;
    name?: string;
}): OnchainItemSection<T>[] | undefined;
//# sourceMappingURL=utils.d.ts.map