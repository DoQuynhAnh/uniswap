import { PropsWithChildren } from 'react';
import { FlexProps } from 'ui/src/components/layout';
export declare const AnimateInOrder: ({ children, index, animation, enterStyle, exitStyle, delayMs, ...rest }: PropsWithChildren<{
    index: number;
    delayMs?: number | undefined;
} & Pick<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    inset?: (number | import("tamagui").SizeTokens) | import("react-native").Insets | undefined;
    animateEnter?: "fadeIn" | "fadeInDown" | undefined;
    animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
    animateEnterExit?: "fadeInDownOutUp" | "fadeInDownOutDown" | "fadeInOut" | undefined;
    row?: boolean | undefined;
    shrink?: boolean | undefined;
    grow?: boolean | undefined;
    fill?: boolean | undefined;
    centered?: boolean | undefined;
}>, "animation" | "enterStyle" | "exitStyle"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase | "animateEnter" | "animateExit" | "animateEnterExit" | "row" | "shrink" | "grow" | "fill" | "centered"> & import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, import("tamagui").Longhands>> & {
    inset?: (number | import("tamagui").SizeTokens) | import("react-native").Insets | undefined;
    animateEnter?: "fadeIn" | "fadeInDown" | undefined;
    animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
    animateEnterExit?: "fadeInDownOutUp" | "fadeInDownOutDown" | "fadeInOut" | undefined;
    row?: boolean | undefined;
    shrink?: boolean | undefined;
    grow?: boolean | undefined;
    fill?: boolean | undefined;
    centered?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, import("tamagui").Longhands>> & {
    inset?: (number | import("tamagui").SizeTokens) | import("react-native").Insets | undefined;
    animateEnter?: "fadeIn" | "fadeInDown" | undefined;
    animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
    animateEnterExit?: "fadeInDownOutUp" | "fadeInDownOutDown" | "fadeInOut" | undefined;
    row?: boolean | undefined;
    shrink?: boolean | undefined;
    grow?: boolean | undefined;
    fill?: boolean | undefined;
    centered?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    inset?: (number | import("tamagui").SizeTokens) | import("react-native").Insets | undefined;
    animateEnter?: "fadeIn" | "fadeInDown" | undefined;
    animateExit?: "fadeOut" | "fadeOutUp" | "fadeOutDown" | undefined;
    animateEnterExit?: "fadeInDownOutUp" | "fadeInDownOutDown" | "fadeInOut" | undefined;
    row?: boolean | undefined;
    shrink?: boolean | undefined;
    grow?: boolean | undefined;
    fill?: boolean | undefined;
    centered?: boolean | undefined;
}>>>) => JSX.Element;
//# sourceMappingURL=AnimateInOrder.d.ts.map