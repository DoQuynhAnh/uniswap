/// <reference types="react" />
import { GetProps } from 'tamagui';
declare const CustomButtonFrameWithoutCustomProps: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
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
}, import("@tamagui/web").StaticConfigPublic>;
type CustomProps = {
    'primary-color'?: string;
    onDisabledPress?: () => void;
};
type CustomButtonWithExtraProps = typeof CustomButtonFrameWithoutCustomProps & {
    (props: CustomProps & GetProps<typeof CustomButtonFrameWithoutCustomProps>): JSX.Element | null;
};
export declare const CustomButtonFrame: CustomButtonWithExtraProps;
export {};
//# sourceMappingURL=CustomButtonFrame.d.ts.map