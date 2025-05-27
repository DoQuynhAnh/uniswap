/// <reference types="react" />
export type { TooltipProps } from 'tamagui';
export declare const Tooltip: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").PopperProps & {
    open?: boolean | undefined;
    unstyled?: boolean | undefined;
    children?: import("react").ReactNode;
    onOpenChange?: ((open: boolean) => void) | undefined;
    focus?: {
        enabled?: boolean | undefined;
        visibleOnly?: boolean | undefined;
    } | undefined;
    groupId?: string | undefined;
    restMs?: number | undefined;
    delay?: number | {
        open?: number | undefined;
        close?: number | undefined;
    } | undefined;
    disableAutoCloseOnScroll?: boolean | undefined;
} & {
    __scopeTooltip?: string | undefined;
} & import("react").RefAttributes<unknown>, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, import("tamagui").Longhands>> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, import("tamagui").Longhands>> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<unknown>> & import("@tamagui/web").StaticComponentObject<import("@tamagui/web").TamaDefer, unknown, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").PopperProps & {
    open?: boolean | undefined;
    unstyled?: boolean | undefined;
    children?: import("react").ReactNode;
    onOpenChange?: ((open: boolean) => void) | undefined;
    focus?: {
        enabled?: boolean | undefined;
        visibleOnly?: boolean | undefined;
    } | undefined;
    groupId?: string | undefined;
    restMs?: number | undefined;
    delay?: number | {
        open?: number | undefined;
        close?: number | undefined;
    } | undefined;
    disableAutoCloseOnScroll?: boolean | undefined;
} & {
    __scopeTooltip?: string | undefined;
} & import("react").RefAttributes<unknown>, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [import("@tamagui/web").TamaDefer, unknown, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").PopperProps & {
        open?: boolean | undefined;
        unstyled?: boolean | undefined;
        children?: import("react").ReactNode;
        onOpenChange?: ((open: boolean) => void) | undefined;
        focus?: {
            enabled?: boolean | undefined;
            visibleOnly?: boolean | undefined;
        } | undefined;
        groupId?: string | undefined;
        restMs?: number | undefined;
        delay?: number | {
            open?: number | undefined;
            close?: number | undefined;
        } | undefined;
        disableAutoCloseOnScroll?: boolean | undefined;
    } & {
        __scopeTooltip?: string | undefined;
    } & import("react").RefAttributes<unknown>, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic];
} & {
    Trigger: import("react").ForwardRefExoticComponent<import("tamagui").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        __scopeTooltip?: string | undefined;
    } & import("react").RefAttributes<unknown>>;
    Content: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, unknown, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").PopoverContentTypeProps & {
        __scopeTooltip?: string | undefined;
    } & import("react").RefAttributes<unknown> & {
        animationDirection?: "bottom" | "left" | "right" | "top" | undefined;
    }, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
    Arrow: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, unknown, import("@tamagui/web").TamaguiComponentPropsBaseBase & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "elevation" | keyof import("@tamagui/web").StackStyleBase | "fullscreen"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        elevation?: number | import("tamagui").SizeTokens | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | null | undefined;
        fullscreen?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        elevation?: number | import("tamagui").SizeTokens | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | null | undefined;
        fullscreen?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        elevation?: number | import("tamagui").SizeTokens | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | null | undefined;
        fullscreen?: boolean | undefined;
    }>> & import("tamagui").PopperArrowExtraProps & {
        __scopeTooltip?: string | undefined;
    } & import("react").RefAttributes<unknown>, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
};
//# sourceMappingURL=Tooltip.web.d.ts.map