import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text, getTokenValue, useMedia } from 'ui/src';
import { fonts } from 'ui/src/theme';
/**
 * Helper component to render an icon w/ padding, title, and subtitle
 */
export function GenericHeader({ title, titleVariant = 'subheading1', subtitle, subtitleVariant = 'subheading2', Icon, iconSize = '$icon.18', iconPaddingOverride, flexProps, }) {
    const media = useMedia();
    const showIcon = !media.short;
    const iconTotalSizeValue = getTokenValue(iconSize);
    const iconPadding = iconPaddingOverride !== null && iconPaddingOverride !== void 0 ? iconPaddingOverride : iconTotalSizeValue / 2;
    return (_jsxs(Flex, { centered: true, gap: "$spacing8", ...flexProps, children: [showIcon && Icon && (_jsx(Flex, { centered: true, mb: "$spacing4", children: _jsx(Flex, { centered: true, backgroundColor: "$surface3", borderRadius: "$rounded8", p: iconPadding, children: _jsx(Icon, { color: "$neutral1", size: iconSize }) }) })), title && (_jsx(Text, { textAlign: "center", variant: titleVariant, children: title })), subtitle && (_jsx(Text, { "$short": { variant: 'body3' }, color: "$neutral2", maxFontSizeMultiplier: media.short ? 1.1 : fonts.body2.maxFontSizeMultiplier, textAlign: "center", variant: subtitleVariant, children: subtitle }))] }));
}
//# sourceMappingURL=GenericHeader.js.map