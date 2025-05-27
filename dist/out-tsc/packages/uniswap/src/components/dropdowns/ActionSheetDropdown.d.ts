import { PropsWithChildren } from 'react';
import { FlexProps } from 'ui/src';
import { MenuItemProp } from 'uniswap/src/components/modals/ActionSheetModal';
export type ActionSheetDropdownStyleProps = {
    alignment?: 'left' | 'right';
    sticky?: boolean;
    buttonPaddingX?: FlexProps['px'];
    buttonPaddingY?: FlexProps['py'];
    dropdownMaxHeight?: number;
    dropdownMinWidth?: number;
    dropdownZIndex?: FlexProps['zIndex'];
    dropdownGap?: FlexProps['gap'];
    width?: FlexProps['width'];
};
type ActionSheetDropdownProps = PropsWithChildren<{
    options: MenuItemProp[];
    styles?: ActionSheetDropdownStyleProps & {
        backdropOpacity?: number;
    };
    testID?: string;
    showArrow?: boolean;
    closeOnSelect?: boolean;
    onPress?: FlexProps['onPress'];
}>;
export declare function ActionSheetDropdown({ children, styles, testID, showArrow, closeOnSelect, onPress, ...contentProps }: ActionSheetDropdownProps): JSX.Element;
export {};
//# sourceMappingURL=ActionSheetDropdown.d.ts.map