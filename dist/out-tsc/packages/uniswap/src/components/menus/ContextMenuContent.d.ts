/// <reference types="react" />
import { DropdownMenuSheetItemProps } from 'ui/src';
import { MenuOptionItem } from 'uniswap/src/components/menus/ContextMenuV2';
type MenuContentProps = {
    items: MenuOptionItem[];
    handleCloseMenu?: DropdownMenuSheetItemProps['handleCloseMenu'];
};
export declare function MenuContent({ items, handleCloseMenu }: MenuContentProps): JSX.Element;
export {};
//# sourceMappingURL=ContextMenuContent.d.ts.map