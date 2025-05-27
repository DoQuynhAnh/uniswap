import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text, Tooltip } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
export function WarningMessage({ warningMessage, color, tooltipText }) {
    const warningContent = (_jsxs(Flex, { row: true, alignItems: "center", gap: "$gap4", children: [_jsx(AlertTriangleFilled, { color: color, size: "$icon.16" }), _jsx(Text, { variant: "body3", color: color, children: warningMessage })] }));
    if (tooltipText) {
        return (_jsxs(Tooltip, { children: [_jsx(Tooltip.Trigger, { children: warningContent }), _jsx(Tooltip.Content, { children: _jsx(Text, { variant: "body4", children: tooltipText }) })] }));
    }
    return warningContent;
}
//# sourceMappingURL=WarningMessage.js.map