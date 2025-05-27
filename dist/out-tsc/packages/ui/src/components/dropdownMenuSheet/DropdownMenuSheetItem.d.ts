/// <reference types="react" />
import { type TextProps } from 'ui/src/components/text';
export type DropdownMenuSheetItemProps = {
    label: string;
    icon?: React.ReactNode;
    isSelected?: boolean;
    onPress: () => void;
    handleCloseMenu?: () => void;
    disabled?: boolean;
    closeDelay?: number;
    textColor?: TextProps['color'];
    variant: 'small' | 'medium';
    height?: number;
};
export declare const MAX_WIDTH = 250;
export declare const DropdownMenuSheetItem: ({ label, icon, isSelected, onPress, disabled, closeDelay, textColor, handleCloseMenu, variant, height, }: DropdownMenuSheetItemProps) => JSX.Element;
//# sourceMappingURL=DropdownMenuSheetItem.d.ts.map