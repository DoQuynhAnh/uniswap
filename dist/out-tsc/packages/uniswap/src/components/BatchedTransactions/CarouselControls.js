import { jsx as _jsx } from "react/jsx-runtime";
import { Flex, LinearGradient, TouchableArea, useSporeColors } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { iconSizes, opacify, spacing, zIndexes } from 'ui/src/theme';
import { isExtension } from 'utilities/src/platform';
export const ScrollArrow = ({ onPress, side }) => {
    const colors = useSporeColors();
    const iconSize = iconSizes.icon24;
    return (_jsx(Flex, { position: "absolute", top: "50%", [side]: spacing.spacing12, style: {
            transform: [{ translateY: -iconSize / 2 - spacing.spacing4 }],
            zIndex: 2,
        }, backgroundColor: "$surface1", borderRadius: "$rounded8", borderColor: "$surface3", borderWidth: "$spacing1", p: "$spacing4", alignItems: "center", justifyContent: "center", children: _jsx(TouchableArea, { onPress: onPress, children: _jsx(RotatableChevron, { color: colors.neutral2.val, direction: side, height: iconSize, width: iconSize }) }) }));
};
export const GradientOverlay = ({ position, show, width, colors, }) => {
    if (!show) {
        return null;
    }
    if (isExtension) {
        // For extension, use CSS gradient
        return (_jsx(Flex, { position: "absolute", top: 0, [position]: 0, bottom: 0, width: width, zIndex: zIndexes.mask, pointerEvents: "none", background: position === 'right'
                ? `linear-gradient(to right, ${opacify(0, colors.background.val)}, ${colors.background.val})`
                : `linear-gradient(to left, ${opacify(0, colors.background.val)}, ${colors.background.val})` }));
    }
    else {
        // For mobile, use the LinearGradient component
        return (_jsx(LinearGradient, { colors: [opacify(0, colors.background.val), colors.background.val], start: { x: position === 'right' ? 0 : 1, y: 0 }, end: { x: position === 'right' ? 1 : 0, y: 0 }, style: {
                position: 'absolute',
                top: 0,
                [position]: 0,
                bottom: 0,
                width,
                zIndex: 1,
                pointerEvents: 'none',
            } }));
    }
};
//# sourceMappingURL=CarouselControls.js.map