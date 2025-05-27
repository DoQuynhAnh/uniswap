/// <reference types="react" />
import { type TamaguiElement } from 'tamagui';
/**
 * Button component
 *
 * This component renders a customizable button with various styles and behaviors.
 *
 * @param {object} props - The properties for the Button component.
 * @param {boolean} [props.fill=true] - Whether the button should fill its container.
 * @param {string} [props.focusScaling='default'] - The scaling behavior when the button is focused.
 * @param {string} [props.emphasis='primary'] - The emphasis style of the button.
 * @param {string} [props.variant='default'] - The variant style of the button.
 * @param {string} [props.size='medium'] - The size of the button. This is also used to automatically set the size of the Icon, Text, and SpinningLoader within the button.
 * @param {JSX.Element} [props.icon] - The icon to be displayed in the button; it is automatically themed based on the button's emphasis and variant.
 * @param {boolean} [props.loading=false] - Whether the button is in a loading state. A `SpinningLoader` themed with the button's emphasis and variant will be displayed aside of the children.
 * @param {boolean} [props.shouldAnimateBetweenLoadingStates=true] - Whether to apply a LayoutAnimation when the loading state changes.
 * @param {boolean} [props.isDisabled=false] - Whether the button is disabled.
 * @param {string} [props.backgroundColor] - Custom background color for the button. This overrides the button's emphasis and variant. It also automatically sets, for different states, the `Button`'s default text and/or icon colors to the color that most contrasts with the `backgroundColor`.
 * @param {React.ReactNode} props.children - The content of the button. If a string, it will be automatically themed based on the button's emphasis and variant. Otherwise, to achieve the same effect, use `Button.Text` as a `child` (direct or otherwise) of `Button`
 * @param {string} [props.iconPosition] - The position of the icon in the button.
 * @param {React.Ref} [ref] - The ref to be passed to the CustomButtonFrame component.
 *
 * Props with hyphens:
 * @param {string} dd-action-name - The Datadog action name for the button.
 * @param {string} primary-color - The primary color for the button.
 *
 * @returns {JSX.Element} The rendered Button component.
 */
export declare const Button: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
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
}>, "disabled" | "variant"> & import("ui/src/components/buttons/Button/types").ButtonVariantProps & {
    icon?: JSX.Element | undefined;
    loading?: boolean | undefined;
    shouldAnimateBetweenLoadingStates?: boolean | undefined;
    'dd-action-name'?: string | undefined;
    onDisabledPress?: (() => void) | undefined;
} & import("react").RefAttributes<TamaguiElement>> & {
    Text: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Icon: import("react").MemoExoticComponent<({ children, size, variant, isDisabled, emphasis, typeOfButton, "custom-background-color": customBackgroundColor, }: import("ui/src/components/buttons/Button/components/ThemedIcon").ThemedIconProps) => JSX.Element | null>;
};
//# sourceMappingURL=Button.d.ts.map