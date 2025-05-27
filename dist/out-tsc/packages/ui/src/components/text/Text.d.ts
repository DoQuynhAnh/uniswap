import { PropsWithChildren } from 'react';
import { GetProps } from 'tamagui';
export declare const TextFrame: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
type TextFrameProps = GetProps<typeof TextFrame>;
export type TextProps = TextFrameProps & {
    maxFontSizeMultiplier?: number;
    allowFontScaling?: boolean;
    loading?: boolean | 'no-shimmer';
    loadingPlaceholderText?: string;
    title?: string;
};
export declare const TextPlaceholder: ({ children }: PropsWithChildren<unknown>) => JSX.Element;
export declare const TextLoaderWrapper: ({ children, loadingShimmer, }: {
    loadingShimmer?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
}) => JSX.Element;
/**
 * Use this component instead of the default React Native <Text> component anywhere text shows up throughout the app, so we can use the design system values for colors and sizes, and make sure all text looks and behaves the same way
 * @param loading Whether the text inside the component is still loading or not. Set this to true if whatever content goes inside the <Text> component is coming from a variable that might still be loading. This prop is optional and defaults to false. This prop can also be set to "no-shimmer" to enable a loading state without the shimmer effect.
 * @param loadingPlaceholderText - The text that the loader's size will be derived from. Pick something that's close to the same length as the final text is expected to be, e.g. if it's a ticker symbol, "XXX" might be a good placeholder text. This prop is optional and defaults to "000.00".
 */
export declare const Text: import("tamagui").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    unstyled?: boolean | undefined;
}>, "color" | "space" | "zIndex" | "background" | "mask" | "maxWidth" | "maxHeight" | "m" | "mb" | "ml" | "mr" | "mt" | "mx" | "my" | "p" | "pb" | "pl" | "pr" | "pt" | "px" | "py" | "borderColor" | "outlineColor" | "shadowColor" | "$xxxl" | "$xxl" | "$xl" | "$lg" | "$md" | "$sm" | "$xs" | "$xxs" | "$short" | "$midHeight" | import("@tamagui/web").GroupMediaKeys | "$theme-dark" | "$theme-light" | "$platform-native" | "$platform-web" | "$platform-android" | "$platform-ios" | "display" | "x" | "y" | "perspective" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "transition" | "textWrap" | "contain" | "touchAction" | "cursor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "userSelect" | "scrollbarWidth" | "pointerEvents" | "transformOrigin" | "filter" | "mixBlendMode" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "backgroundClip" | "backgroundBlendMode" | "backgroundAttachment" | "clipPath" | "caretColor" | "transformStyle" | "maskImage" | "textEmphasis" | "borderImage" | "float" | "content" | "overflowBlock" | "overflowInline" | "maskBorder" | "maskBorderMode" | "maskBorderOutset" | "maskBorderRepeat" | "maskBorderSlice" | "maskBorderSource" | "maskBorderWidth" | "maskClip" | "maskComposite" | "maskMode" | "maskOrigin" | "maskPosition" | "maskRepeat" | "maskSize" | "maskType" | "gridRow" | "gridRowEnd" | "gridRowGap" | "gridRowStart" | "gridColumn" | "gridColumnEnd" | "gridColumnGap" | "gridColumnStart" | "gridTemplateColumns" | "gridTemplateAreas" | "backdropFilter" | "containerType" | "blockSize" | "inlineSize" | "minBlockSize" | "maxBlockSize" | "objectFit" | "verticalAlign" | "minInlineSize" | "maxInlineSize" | "borderInlineColor" | "borderInlineStartColor" | "borderInlineEndColor" | "borderBlockWidth" | "borderBlockStartWidth" | "borderBlockEndWidth" | "borderInlineWidth" | "borderInlineStartWidth" | "borderInlineEndWidth" | "borderBlockStyle" | "borderBlockStartStyle" | "borderBlockEndStyle" | "borderInlineStyle" | "borderInlineStartStyle" | "borderInlineEndStyle" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "insetBlock" | "insetBlockStart" | "insetBlockEnd" | "insetInline" | "insetInlineStart" | "insetInlineEnd" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "animatePresence" | "elevation" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "isolation" | "boxShadow" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "marginEnd" | "marginStart" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "right" | "start" | "top" | "width" | "direction" | "inset" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "translateX" | "translateY" | "fontFamily" | "fontSize" | "textShadowColor" | "lineHeight" | "fontWeight" | "letterSpacing" | "fontStyle" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "fontVariant" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "ellipse" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "title" | "variant" | keyof import("@tamagui/core").RNTamaguiTextNonStyleProps | "unstyled" | "loading" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").TextStylePropsBase, import("tamagui").Longhands>> & {
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    unstyled?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>>> | "loadingPlaceholderText"> & Omit<import("@tamagui/core").RNTamaguiTextNonStyleProps, keyof import("@tamagui/web").TextStylePropsBase | "variant" | "unstyled"> & import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").TextStylePropsBase, import("tamagui").Longhands>> & {
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
}, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & Omit<import("@tamagui/core").RNTamaguiTextNonStyleProps, keyof import("@tamagui/web").TextStylePropsBase | "variant" | "unstyled"> & import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").TextStylePropsBase, import("tamagui").Longhands>> & {
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
    variant?: "monospace" | "heading1" | "heading2" | "heading3" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "buttonLabel1" | "buttonLabel2" | "buttonLabel3" | "buttonLabel4" | "body4" | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export {};
//# sourceMappingURL=Text.d.ts.map