import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text } from 'ui/src';
import { Unitag } from 'ui/src/components/icons/Unitag';
import { fonts, spacing } from 'ui/src/theme';
import { UNITAG_SUFFIX } from 'uniswap/src/features/unitags/constants';
export function UnitagName({ name, opacity = 1, animateText = false, animateIcon = false, displayIconInline = false, displayUnitagSuffix, textProps, }) {
    const iconContainerProps = displayIconInline
        ? {}
        : {
            position: 'absolute',
            right: -spacing.spacing24,
            top: -spacing.spacing4,
        };
    return (_jsxs(Flex, { row: true, alignSelf: "center", animation: "lazy", enterStyle: animateText ? { opacity: 0 } : undefined, exitStyle: animateText ? { opacity: 0 } : undefined, opacity: opacity, alignItems: "center", children: [_jsx(Text, { color: "$neutral1", fontFamily: "$heading", fontWeight: fonts.heading2.fontWeight, lineHeight: fonts.heading2.lineHeight, ...textProps, children: name }), displayUnitagSuffix && (_jsx(Text, { color: "$neutral2", fontFamily: "$heading", fontWeight: fonts.heading2.fontWeight, lineHeight: fonts.heading2.lineHeight, ...textProps, children: UNITAG_SUFFIX })), _jsx(Flex, { ...iconContainerProps, row: true, animation: "lazy", ml: "$spacing4", enterStyle: animateIcon ? { opacity: 0, scale: 0.8, x: 20 } : undefined, exitStyle: animateIcon ? { opacity: 0, scale: 0.8, x: -20 } : undefined, children: _jsx(Unitag, { size: "$icon.24" }) })] }));
}
//# sourceMappingURL=UnitagName.js.map