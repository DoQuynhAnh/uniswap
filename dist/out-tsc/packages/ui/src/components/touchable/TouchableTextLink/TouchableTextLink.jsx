import { forwardRef, memo, useMemo, useRef } from 'react';
import { Linking } from 'react-native';
import { styled } from 'tamagui';
import { Text } from 'ui/src/components/text';
import { TouchableAreaFrame } from 'ui/src/components/touchable/TouchableArea/TouchableAreaFrame';
import { getMaybeHoverColor } from 'ui/src/theme';
import { logger } from 'utilities/src/logger/logger';
import { isMobileApp } from 'utilities/src/platform';
import { useEvent } from 'utilities/src/react/hooks';
const PLATFORM_WEB_PROPS = {
    textUnderlinePosition: 'from-font',
};
const TouchableTextLinkFrame = styled(TouchableAreaFrame, {
    name: 'TouchableTextLink',
    group: 'item',
    // This is given to the frame to prevent it from being focusable, as we want the text to be focusable
    tabIndex: -1,
    outlineStyle: 'none',
    variant: 'unstyled',
    hoverStyle: undefined,
    focusVisibleStyle: undefined,
    borderRadius: '$none',
});
const TouchableTextLink_ = forwardRef(function TouchableTextLink({ children, variant = 'buttonLabel1', color = '$neutral1', link, onPress, target = '_blank', disabled, disabledStyle, forceStyle, onlyUseText, ...textProps }, ref) {
    const textRef = useRef();
    const hoveredColor = getMaybeHoverColor(color);
    const colorConsideringDisabled = disabled ? '$neutral2' : color;
    const hoverStyle = useMemo(() => ({ color: disabled ? undefined : hoveredColor }), [disabled, hoveredColor]);
    const focusVisibleStyle = useMemo(() => ({
        color: hoveredColor,
        textDecorationStyle: 'unset',
        textDecorationColor: hoveredColor,
        textDecorationLine: 'underline',
        textDecorationDistance: 1,
    }), [hoveredColor]);
    const handleOnPressWithLink = useEvent(async (event) => {
        onPress === null || onPress === void 0 ? void 0 : onPress(event);
        if (isMobileApp) {
            try {
                await Linking.openURL(link);
            }
            catch (error) {
                logger.error(error, {
                    tags: {
                        file: 'TouchableTextLink',
                        function: 'handleOnPressWithLink',
                    },
                });
            }
        }
        else {
            // Web
            // We need to blur it after the link is pressed so that it is not focused when the link is not focused
            setTimeout(() => {
                var _a, _b, _c, _d;
                if (ref && 'current' in ref) {
                    (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 ? void 0 : _b.call(_a);
                }
                if (textRef && 'current' in textRef) {
                    (_d = (_c = textRef.current) === null || _c === void 0 ? void 0 : _c.blur) === null || _d === void 0 ? void 0 : _d.call(_c);
                }
            }, 0);
        }
    });
    if (onlyUseText) {
        return (<Text ref={ref !== null && ref !== void 0 ? ref : textRef} aria-disabled={disabled} disabled={disabled} focusStyle={focusVisibleStyle} $group-item-focusVisible={focusVisibleStyle} textDecorationLine="none" hoverStyle={hoverStyle} $platform-web={PLATFORM_WEB_PROPS} variant={variant} color={colorConsideringDisabled} forceStyle={forceStyle} outlineStyle="none" href={disabled ? undefined : link} target={target} tag="a" role="link" onPress={handleOnPressWithLink} {...textProps}>
        {children}
      </Text>);
    }
    return (<TouchableTextLinkFrame disabled={disabled} disabledStyle={disabledStyle} forceStyle={forceStyle} aria-disabled={disabled} onPress={handleOnPressWithLink}>
      <Text ref={ref !== null && ref !== void 0 ? ref : textRef} aria-disabled={disabled} disabled={disabled} focusStyle={focusVisibleStyle} $group-item-focusVisible={focusVisibleStyle} textDecorationLine="none" $group-item-hover={hoverStyle} $platform-web={PLATFORM_WEB_PROPS} variant={variant} color={colorConsideringDisabled} forceStyle={forceStyle} outlineStyle="none" href={disabled ? undefined : link} target={target} tag="a" role="link" {...textProps}>
        {children}
      </Text>
    </TouchableTextLinkFrame>);
});
/**
 * `TouchableTextLink` is a specialized component for clickable/tappable pieces of text.
 * It wraps a `Text` component within a `TouchableAreaFrame` to provide touch/click interactivity.
 * It applies specific hover and focus styles, including text color changes and underlines, appropriate for links.
 *
 * Use this component when you need text that acts as a hyperlink or triggers an action on press.
 * For standard button interactions, use the `Button` component.
 * For general touchable areas containing elements in addition to just text, OR text that is not a `link` (i.e. `href`), use `TouchableArea`.
 *
 * @param {string} children - The text content of the link.
 * @param {'buttonLabel1' | 'buttonLabel2' | 'buttonLabel3' | 'buttonLabel4'} [variant='buttonLabel1'] - The text style variant to apply. Defaults to 'buttonLabel1'.
 * @param {'$neutral1' | '$neutral2' | '$neutral3' | '$accent1' | '$statusSuccess' | '$statusWarning' | '$statusCritical'} [color='$neutral1'] - The text color token. Defaults to '$neutral1'.
 * @param {boolean} [onlyUseText=false] - If true, the component will only use the text and not the TouchableAreaFrame. This is useful for when you want to render `TouchableTextLink` as a child of a `Text` component for inline links.
 * @param {string} [link] - The URL to navigate to when the text is pressed. On Web, it will render as an anchor (`<a>`) tag. On Native, it will open the link in the device's default browser.
 * @param {TouchableTextLinkProps} props - Additional props passed down to the underlying `TouchableTextLinkFrame`.
 * @param {React.Ref<TamaguiElement>} ref - Forwarded ref to the underlying `TouchableTextLinkFrame` element.
 * @returns {JSX.Element} The rendered TouchableTextLink component.
 * @see Text for text styling options.
 * @see TouchableAreaFrame for the underlying touchable wrapper.
 */
export const TouchableTextLink = memo(TouchableTextLink_);
//# sourceMappingURL=TouchableTextLink.jsx.map