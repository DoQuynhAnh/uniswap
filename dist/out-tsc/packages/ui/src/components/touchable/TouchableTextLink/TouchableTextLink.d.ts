/// <reference types="react" />
import { type ColorTokens, type TamaguiElement } from 'tamagui';
import { type TextProps } from 'ui/src/components/text';
import type { TouchableAreaProps } from 'ui/src/components/touchable/TouchableArea/types';
type PropsFromText = Pick<TextProps, 'textTransform' | 'allowFontScaling' | 'adjustsFontSizeToFit' | 'textAlign' | 'flex' | 'flexGrow' | 'flexShrink'>;
type PropsFromTouchableArea = Pick<TouchableAreaProps, 'onPress' | 'disabled' | 'disabledStyle' | 'forceStyle'>;
type OwnProps = {
    children: string;
    variant?: Extract<TextProps['variant'], 'buttonLabel1' | 'buttonLabel2' | 'buttonLabel3' | 'buttonLabel4'>;
    color?: Extract<ColorTokens, '$neutral1' | '$neutral2' | '$neutral3' | '$accent1' | '$statusSuccess' | '$statusWarning' | '$statusCritical'>;
    link: string;
    target?: TextProps['target'];
    onlyUseText?: boolean;
};
export type TouchableTextLinkProps = PropsFromText & PropsFromTouchableArea & OwnProps;
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
export declare const TouchableTextLink: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<PropsFromText & PropsFromTouchableArea & OwnProps & import("react").RefAttributes<TamaguiElement>>>;
export {};
//# sourceMappingURL=TouchableTextLink.d.ts.map