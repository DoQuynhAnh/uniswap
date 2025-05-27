/// <reference types="react" />
import { TextProps } from 'ui/src';
export interface FocusedRowControl {
    rowIndex: number;
    focusedRowIndex: number | undefined;
    setFocusedRowIndex: (index: number | undefined) => void;
}
export interface OptionItemProps {
    image: JSX.Element;
    title: string | JSX.Element;
    subtitle?: JSX.Element;
    rightElement?: JSX.Element;
    badge?: JSX.Element;
    titleProps?: TextProps;
    onPress: () => void;
    onLongPress?: () => void;
    disabled?: boolean;
    testID?: string;
    modalInfo?: {
        modal: JSX.Element;
        modalShouldShow: boolean;
        modalSetIsOpen: (isOpen: boolean) => void;
    };
    focusedRowControl?: FocusedRowControl;
}
declare function _OptionItem({ image, title, subtitle, rightElement, badge, titleProps, onPress, onLongPress, disabled, testID, modalInfo, focusedRowControl, }: OptionItemProps): JSX.Element;
export declare const OptionItem: import("react").MemoExoticComponent<typeof _OptionItem>;
export {};
//# sourceMappingURL=OptionItem.d.ts.map