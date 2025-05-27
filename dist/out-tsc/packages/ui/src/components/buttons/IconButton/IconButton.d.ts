/// <reference types="react" />
import { type TamaguiElement } from 'tamagui';
import type { ButtonProps } from 'ui/src/components/buttons/Button/types';
type OmitIncludingToLowercase<T, Str extends string> = {
    [K in keyof T as K extends string ? Lowercase<K> extends `${string}${Lowercase<Str>}${string}` ? never : K : never]: T[K];
};
type OmittedButtonProps = OmitIncludingToLowercase<ButtonProps, 'flex' | 'icon' | 'size' | 'height' | 'width'>;
export type IconButtonProps = {
    icon: Required<ButtonProps['icon']>;
    size?: ButtonProps['size'];
} & OmittedButtonProps;
export declare const IconButton: import("react").ForwardRefExoticComponent<{
    icon: Required<ButtonProps['icon']>;
    size?: ButtonProps['size'];
} & OmitIncludingToLowercase<ButtonProps, "icon" | "size" | "flex" | "height" | "width"> & import("react").RefAttributes<TamaguiElement>>;
export {};
//# sourceMappingURL=IconButton.d.ts.map