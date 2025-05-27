import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Separator, Text, TouchableArea } from 'ui/src';
import { AnglesMaximize } from 'ui/src/components/icons/AnglesMaximize';
import { AnglesMinimize } from 'ui/src/components/icons/AnglesMinimize';
export function ListSeparatorToggle({ onPress, isOpen, openText, closedText, }) {
    return (_jsxs(Flex, { group: true, centered: true, row: true, gap: "$spacing16", mb: "$spacing16", px: "$spacing12", children: [_jsx(Separator, {}), _jsxs(TouchableArea, { flexGrow: 1, alignItems: "center", flexDirection: "row", justifyContent: "center", pb: "$spacing4", pt: "$spacing8", onPress: onPress, children: [_jsx(Text, { "$group-hover": { color: '$neutral2Hovered' }, color: "$neutral2", variant: "body3", children: isOpen ? openText : closedText }), isOpen ? (_jsx(AnglesMinimize, { color: "$neutral2", size: "$icon.20" })) : (_jsx(AnglesMaximize, { color: "$neutral2", size: "$icon.20" }))] }), _jsx(Separator, {})] }));
}
//# sourceMappingURL=ListSeparatorToggle.js.map