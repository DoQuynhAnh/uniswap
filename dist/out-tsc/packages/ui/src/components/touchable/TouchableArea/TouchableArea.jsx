import { BlurView } from 'expo-blur';
import { Children, cloneElement, forwardRef, isValidElement, memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { withStaticProperties } from 'tamagui';
import { ThemedIcon } from 'ui/src/components/buttons/Button/components/ThemedIcon';
import { withAnimated } from 'ui/src/components/factories/animated';
import { Text } from 'ui/src/components/text';
import { TouchableAreaFrame } from 'ui/src/components/touchable/TouchableArea/TouchableAreaFrame';
import { useAutoDimensions } from 'ui/src/components/touchable/TouchableArea/useAutoDimensions';
import { useAutoHitSlop } from 'ui/src/components/touchable/TouchableArea/useAutoHitSlop';
import { getMaybeHoverColor, zIndexes } from 'ui/src/theme';
import { isTestEnv } from 'utilities/src/environment/env';
import { isIOS, isMobileApp } from 'utilities/src/platform';
import { useEvent } from 'utilities/src/react/hooks';
// TODO(MOB-2826): tests are picking up weird animationStyle on snapshots...
const DEFAULT_ANIMATION_PROPS = isTestEnv()
    ? {}
    : {
        animation: 'simple',
        animateOnly: ['transform', 'opacity'],
    };
const blurViewStyle = { ...StyleSheet.absoluteFillObject, zIndex: zIndexes.negative };
const WithInjectedColors = memo(({ children, disabled, variant, }) => {
    return Children.toArray(children).map((child) => {
        var _a;
        if (!isValidElement(child)) {
            return child;
        }
        // We don't want to override this if it's already set
        let groupHover = child.props['$group-hover'];
        // decide which color properties to use
        const maybeColor = (_a = child.props.color) !== null && _a !== void 0 ? _a : '$accent3';
        const maybeBackgroundColor = child.props.backgroundColor;
        // if we don't have a group hover, and we have a color or background color, we can get a hover color
        if (!groupHover && [maybeColor, maybeBackgroundColor].some((val) => typeof val === 'string')) {
            const maybeColorHover = getMaybeHoverColor(maybeColor);
            const maybeBackgroundColorHover = getMaybeHoverColor(maybeBackgroundColor);
            groupHover = {
                color: disabled ? undefined : maybeColorHover,
                backgroundColor: disabled ? undefined : maybeBackgroundColorHover,
            };
        }
        // `disabled` overrides `maybeBackgroundColor` if it's already set
        const backgroundColorConsideringDisabled = disabled && (variant === 'filled' || maybeBackgroundColor) ? '$surface2' : maybeBackgroundColor;
        // `disabled` overrides `maybeColor` if it's already set
        const colorConsideringDisabled = disabled ? '$neutral2' : maybeColor;
        return cloneElement(child, {
            // @ts-expect-error '$group-item-hover' is a tamagui type, not a React Native type
            color: colorConsideringDisabled,
            backgroundColor: backgroundColorConsideringDisabled,
            '$group-hover': groupHover,
        });
    });
});
const TouchableAreaComponentWithoutMemo = forwardRef(function TouchableArea({ children, hoverable = true, onLayout: onLayoutProp, shouldConsiderMinimumDimensions = false, width: widthProp, height: heightProp, scaleTo, pressStyle: pressStyleProp, activeOpacity = 0.75, animation: animationProp, animateOnly: animateOnlyProp, variant = 'unstyled', shouldStopPropagation = true, onPress, onPressIn, onPressOut, ...restProps }, ref) {
    const [hitSlop, onLayoutWithHitSlop] = useAutoHitSlop(onLayoutProp);
    const { onLayout, width, height } = useAutoDimensions({
        onLayout: onLayoutWithHitSlop,
        shouldConsiderMinimumDimensions,
        width: widthProp,
        height: heightProp,
    });
    const pressStyle = useMemo(() => {
        const maybeScaleStyle = scaleTo ? { scale: scaleTo } : undefined;
        const maybeActiveOpacityStyle = activeOpacity ? { opacity: activeOpacity } : undefined;
        return StyleSheet.flatten([maybeScaleStyle, maybeActiveOpacityStyle, pressStyleProp].filter(Boolean));
    }, [scaleTo, activeOpacity, pressStyleProp]);
    const animation = isTestEnv() ? undefined : animationProp !== null && animationProp !== void 0 ? animationProp : DEFAULT_ANIMATION_PROPS.animation;
    const animateOnly = isTestEnv() ? undefined : animateOnlyProp !== null && animateOnlyProp !== void 0 ? animateOnlyProp : DEFAULT_ANIMATION_PROPS.animateOnly;
    // Wrap onPress to stop propagation if needed
    const handlePress = useEvent((event) => {
        if (!shouldStopPropagation) {
            onPress === null || onPress === void 0 ? void 0 : onPress(event);
            return;
        }
        if (typeof (event === null || event === void 0 ? void 0 : event.stopPropagation) === 'function') {
            event.stopPropagation();
        }
        onPress === null || onPress === void 0 ? void 0 : onPress(event);
    });
    // Wrap onPress to stop propagation if needed
    const handlePressIn = useEvent((event) => {
        if (!shouldStopPropagation) {
            onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(event);
            return;
        }
        if (typeof (event === null || event === void 0 ? void 0 : event.stopPropagation) === 'function') {
            event.stopPropagation();
        }
        onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(event);
    });
    const handlePressOut = useEvent((event) => {
        if (!shouldStopPropagation) {
            onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(event);
            return;
        }
        if (typeof (event === null || event === void 0 ? void 0 : event.stopPropagation) === 'function') {
            event.stopPropagation();
        }
        onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(event);
    });
    if (variant === 'floating' && isMobileApp) {
        return (<TouchableAreaFrame ref={ref} hoverable={hoverable} hitSlop={hitSlop} animation={animation} animateOnly={animateOnly} variant={variant} pressStyle={pressStyle} onLayout={onLayout} onPress={onPress ? handlePress : undefined} onPressIn={handlePressIn} onPressOut={handlePressOut} {...restProps} width={width} height={height}>
        <WithInjectedColors variant={variant} disabled={restProps.disabled}>
          {children}
        </WithInjectedColors>
        <BlurView experimentalBlurMethod="dimezisBlurView" style={blurViewStyle} intensity={30} tint={isIOS ? 'light' : 'default'}/>
      </TouchableAreaFrame>);
    }
    // Web uses CSS for blur, so we don't need to use `expo-blur`'s `BlurView` for the `floating` variant
    return (<TouchableAreaFrame ref={ref} hoverable={hoverable} animation={animation} animateOnly={animateOnly} variant={variant} hitSlop={hitSlop} pressStyle={pressStyle} onLayout={onLayout} onPress={onPress ? handlePress : undefined} onPressIn={onPressIn ? handlePressIn : undefined} onPressOut={onPressOut ? handlePressOut : undefined} {...restProps} width={width} height={height}>
      <WithInjectedColors variant={variant} disabled={restProps.disabled}>
        {children}
      </WithInjectedColors>
    </TouchableAreaFrame>);
});
const TouchableAreaComponent = memo(TouchableAreaComponentWithoutMemo);
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
export const TouchableArea = withStaticProperties(TouchableAreaComponent, {
    Text,
    Icon: ThemedIcon,
});
export const AnimatedTouchableArea = withAnimated(TouchableArea);
//# sourceMappingURL=TouchableArea.jsx.map