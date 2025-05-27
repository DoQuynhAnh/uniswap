/// <reference types="react" />
import { type GestureResponderEvent } from 'react-native';
import { type TamaguiElement } from 'tamagui';
import type { TouchableAreaProps } from 'ui/src/components/touchable/TouchableArea/types';
export type TouchableAreaEvent = GestureResponderEvent;
/**
 * `TouchableArea` is an interactive element in the UI that performs an action when clicked, tapped, pressed, or long pressed.
 * If you are trying to implement a standard button DO NOT USE this component. Use the Button component instead with the desired `variant`, `emphasis`, and `size`.
 * If you are trying to implement a clickable/tappable text, use `TouchableTextLink` instead.
 * It wraps its children within a styled `TouchableAreaFrame`, providing hover effects,
 * press state handling, and automatic dimension adjustments for minimum touch targets.
 * It also automatically calculates appropriate hitSlop for better touch accuracy on smaller elements.
 *
 * This component is the core building block for interactive elements and can be customized
 * via props passed down to `TouchableAreaFrame`.
 * @link [Notion Design Spec](https://www.notion.so/uniswaplabs/Touchable-Area-WIP-1a5c52b2548b80339885d819792cc085?pvs=4)
 * @param {React.ReactNode} children - The content to be rendered inside the touchable area.
 * @param {boolean} [hoverable=true] - Determines if hover styles should be applied. Defaults to true.
 * @param {function} onLayoutProp - Optional layout callback, invoked after the component measures its layout.
 * @param {string} backgroundColor - On Android, with `variant={'raised'}`, this must be explicitly set for the shadow to properly render.
 * This is wrapped by `useAutoHitSlop` and `useAutoDimensions`.
 * @param {boolean} [shouldConsiderMinimumDimensions=false] - If true, ensures the component meets minimum touch target dimensions. Defaults to false.
 * @param {DimensionValue | undefined} widthProp - Explicit width for the component. If not provided, dimensions might be inferred or auto-adjusted.
 * @param {DimensionValue | undefined} heightProp - Explicit height for the component. If not provided, dimensions might be inferred or auto-adjusted.
 * @param {number | undefined} scaleTo - If provided, the component will scale to the given value when pressed.
 * @param {number | undefined} activeOpacity - If provided, the component will have the given opacity when pressed. Defaults to 0.75.
 * @param {TouchableAreaProps} restProps - Additional props passed down to the underlying `TouchableAreaFrame`.
 * @param {boolean} [shouldStopPropagation=true] - If true (default), calls event.stopPropagation() on press events to prevent bubbling to parent touchables.
 * @param {React.Ref<TamaguiElement>} ref - Forwarded ref to the underlying `TouchableAreaFrame` element.
 * @returns {JSX.Element} The rendered TouchableArea component.
 * @see TouchableAreaFrame for styling and variant options.
 * @see useAutoHitSlop for automatic hitSlop calculation.
 * @see useAutoDimensions for minimum dimension handling.
 */
export declare const TouchableArea: import("react").NamedExoticComponent<(Omit<{
    shouldConsiderMinimumDimensions?: boolean | undefined;
    scaleTo?: number | undefined;
    activeOpacity?: number | undefined;
    shouldStopPropagation?: boolean | undefined;
} & Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | null | undefined;
    disabled?: boolean | undefined;
    row?: boolean | undefined;
    centered?: boolean | undefined;
    fullscreen?: boolean | undefined;
    variant?: NonNullable<"none" | "filled" | "unstyled" | "outlined" | "raised" | "floating"> | undefined;
    hoverable?: boolean | undefined;
}>, "backgroundColor" | "variant"> & {
    variant?: "none" | "filled" | "unstyled" | "outlined" | "floating" | undefined;
    backgroundColor?: import("react-native").OpaqueColorValue | import("tamagui").GetThemeValueForKey<"backgroundColor"> | undefined;
} & import("react").RefAttributes<TamaguiElement>, "ref"> & {
    ref?: ((instance: TamaguiElement | null) => void) | import("react").RefObject<TamaguiElement> | null | undefined;
}) | (Omit<{
    shouldConsiderMinimumDimensions?: boolean | undefined;
    scaleTo?: number | undefined;
    activeOpacity?: number | undefined;
    shouldStopPropagation?: boolean | undefined;
} & Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | null | undefined;
    disabled?: boolean | undefined;
    row?: boolean | undefined;
    centered?: boolean | undefined;
    fullscreen?: boolean | undefined;
    variant?: NonNullable<"none" | "filled" | "unstyled" | "outlined" | "raised" | "floating"> | undefined;
    hoverable?: boolean | undefined;
}>, "backgroundColor" | "variant"> & {
    variant: "raised";
    backgroundColor: NonNullable<import("react-native").OpaqueColorValue | import("tamagui").GetThemeValueForKey<"backgroundColor"> | undefined>;
} & import("react").RefAttributes<TamaguiElement>, "ref"> & {
    ref?: ((instance: TamaguiElement | null) => void) | import("react").RefObject<TamaguiElement> | null | undefined;
})> & {
    readonly type: import("react").ForwardRefExoticComponent<TouchableAreaProps & import("react").RefAttributes<TamaguiElement>>;
} & {
    Text: import("tamagui").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
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
    Icon: import("react").MemoExoticComponent<({ children, size, variant, isDisabled, emphasis, typeOfButton, "custom-background-color": customBackgroundColor, }: import("ui/src/components/buttons/Button/components/ThemedIcon").ThemedIconProps) => JSX.Element | null>;
};
export declare const AnimatedTouchableArea: import("react").ComponentClass<import("react-native-reanimated").AnimateProps<(Omit<{
    shouldConsiderMinimumDimensions?: boolean | undefined;
    scaleTo?: number | undefined;
    activeOpacity?: number | undefined;
    shouldStopPropagation?: boolean | undefined;
} & Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | null | undefined;
    disabled?: boolean | undefined;
    row?: boolean | undefined;
    centered?: boolean | undefined;
    fullscreen?: boolean | undefined;
    variant?: NonNullable<"none" | "filled" | "unstyled" | "outlined" | "raised" | "floating"> | undefined;
    hoverable?: boolean | undefined;
}>, "backgroundColor" | "variant"> & {
    variant?: "none" | "filled" | "unstyled" | "outlined" | "floating" | undefined;
    backgroundColor?: import("react-native").OpaqueColorValue | import("tamagui").GetThemeValueForKey<"backgroundColor"> | undefined;
} & import("react").RefAttributes<TamaguiElement>, "ref"> & {
    ref?: ((instance: TamaguiElement | null) => void) | import("react").RefObject<TamaguiElement> | null | undefined;
}) | (Omit<{
    shouldConsiderMinimumDimensions?: boolean | undefined;
    scaleTo?: number | undefined;
    activeOpacity?: number | undefined;
    shouldStopPropagation?: boolean | undefined;
} & Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | null | undefined;
    disabled?: boolean | undefined;
    row?: boolean | undefined;
    centered?: boolean | undefined;
    fullscreen?: boolean | undefined;
    variant?: NonNullable<"none" | "filled" | "unstyled" | "outlined" | "raised" | "floating"> | undefined;
    hoverable?: boolean | undefined;
}>, "backgroundColor" | "variant"> & {
    variant: "raised";
    backgroundColor: NonNullable<import("react-native").OpaqueColorValue | import("tamagui").GetThemeValueForKey<"backgroundColor"> | undefined>;
} & import("react").RefAttributes<TamaguiElement>, "ref"> & {
    ref?: ((instance: TamaguiElement | null) => void) | import("react").RefObject<TamaguiElement> | null | undefined;
})>, any>;
//# sourceMappingURL=TouchableArea.d.ts.map