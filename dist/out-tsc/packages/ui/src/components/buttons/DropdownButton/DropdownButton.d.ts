/// <reference types="react" />
import { TamaguiElement } from 'tamagui';
import { IconProps } from 'ui/src/components/factories/createIcon';
/**
 * A dropdown button component that can be used to select an option from a dropdown menu.
 *
 * @param {DropdownButtonProps} props - The props for the `DropdownButton` component.
 * @param {ReactNode} props.children - The content of the button.
 * @param {ButtonEmphasis} props.emphasis - The `Button` emphasis.
 * @param {ReactNode} props.icon - The icon of the button.
 * @param {ElementPositioning} props.elementPositioning - When there are both `icon` and `children`, 'grouped' will group them together on the left side of the button's container.
 * @param {boolean} props.isExpanded - Whether the button is expanded.
 */
export declare const DropdownButton: import("react").ForwardRefExoticComponent<Omit<import("../Button/types").ButtonProps, "size" | "justifyContent" | "variant" | "iconPosition" | "loading" | "buttonType"> & {
    size?: "medium" | "small" | "large" | undefined;
    isExpanded: boolean;
} & Pick<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: "medium" | "small" | "large" | "xxsmall" | "xsmall" | undefined;
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | null | undefined;
    fill?: boolean | undefined;
    fullscreen?: boolean | undefined;
    variant?: string | undefined;
    emphasis?: "primary" | "secondary" | "tertiary" | "text-only" | undefined;
    isDisabled?: any;
    focusScaling?: "default" | "equal" | "equal:smaller-button" | "more-x" | undefined;
    iconPosition?: "before" | "after" | undefined;
    isExpanded?: boolean | undefined;
    elementPositioning?: "equal" | "grouped" | undefined;
}>, "elementPositioning"> & import("react").RefAttributes<TamaguiElement>> & {
    Text: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        unstyled?: boolean | undefined;
        isExpanded?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Icon: import("react").MemoExoticComponent<({ children, size, variant, isDisabled, emphasis, typeOfButton, "custom-background-color": customBackgroundColor, }: import("ui/src/components/buttons/Button/components/ThemedIcon").ThemedIconProps) => JSX.Element | null>;
    Chevron: import("react").MemoExoticComponent<({ color, width, height, direction, animation, "$group-item-hover": $groupItemHover, ...rest }: {
        width?: string | number | undefined;
        height?: string | number | undefined;
        direction?: "end" | "left" | "right" | "start" | "up" | "down" | undefined;
        color?: import("tamagui").ColorTokens | undefined;
    } & Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        inset?: (number | import("tamagui").SizeTokens) | import("react-native").Insets | undefined;
        animateEnter?: "fadeIn" | "fadeInDown" | undefined;
        animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
        animateEnterExit?: "fadeInDownOutUp" | "fadeInDownOutDown" | "fadeInOut" | undefined;
        row?: boolean | undefined;
        shrink?: boolean | undefined;
        grow?: boolean | undefined;
        fill?: boolean | undefined;
        centered?: boolean | undefined;
    }>, "$group-item-hover" | "direction"> & Pick<IconProps, "$group-item-hover">) => JSX.Element>;
};
//# sourceMappingURL=DropdownButton.d.ts.map