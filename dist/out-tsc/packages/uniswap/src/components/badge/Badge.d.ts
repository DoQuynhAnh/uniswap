export declare enum BadgeVariant {
    WARNING = "WARNING",
    SOFT = "SOFT"
}
declare const Badge: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & Omit<import("@tamagui/core").RNTamaguiTextNonStyleProps, keyof import("@tamagui/web").TextStylePropsBase | "unstyled" | "variant"> & import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").TextStylePropsBase, import("tamagui").Longhands>> & {
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    unstyled?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").TextStylePropsBase, import("tamagui").Longhands>> & {
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    unstyled?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    unstyled?: boolean | undefined;
}>> & {
    maxFontSizeMultiplier?: number | undefined;
    allowFontScaling?: boolean | undefined;
    loading?: boolean | "no-shimmer" | undefined;
    loadingPlaceholderText?: string | undefined;
    title?: string | undefined;
}, import("@tamagui/web").TextStylePropsBase, {
    size?: "small" | undefined;
    unstyled?: boolean | undefined;
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    placement?: "end" | "start" | "middle" | "only" | undefined;
    badgeVariant?: BadgeVariant | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map