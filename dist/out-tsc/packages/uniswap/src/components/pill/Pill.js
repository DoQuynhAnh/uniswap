import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text } from 'ui/src';
export function Pill({ borderRadius = '$roundedFull', children, customBackgroundColor, customBorderColor, flexDirection = 'row', foregroundColor, icon, label, px = '$spacing4', py = '$spacing8', textVariant = 'body2', ...rest }) {
    return (_jsxs(Flex, { alignItems: "center", borderColor: !customBorderColor ? '$transparent' : undefined, borderRadius: borderRadius, borderWidth: "$spacing1", flexDirection: flexDirection, gap: "$spacing8", justifyContent: "center", px: px, py: py, style: {
            ...(customBackgroundColor ? { backgroundColor: customBackgroundColor } : {}),
            ...(customBorderColor ? { borderColor: customBorderColor } : {}),
        }, ...rest, children: [icon !== null && icon !== void 0 ? icon : null, label ? (_jsx(Text, { style: { color: foregroundColor, paddingTop: 1 }, variant: textVariant, children: label })) : null, children] }));
}
//# sourceMappingURL=Pill.js.map