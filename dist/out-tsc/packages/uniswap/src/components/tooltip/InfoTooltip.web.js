import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text, Tooltip, isWeb, useMedia } from 'ui/src';
const TOOLTIP_REST_MS = 20;
const TOOLTIP_CLOSE_MS = 100;
export function InfoTooltip({ title, text, icon, button, trigger, triggerPlacement = 'end', children, maxWidth, placement, open, enabled = true, onOpenChange, }) {
    // On xsmall screens, if tooltip placement is right or left
    // Override b/c the tooltip will overflow off the screen
    const media = useMedia();
    const alignmentsToOverride = ['left', 'right'];
    if (placement && alignmentsToOverride.includes(placement) && media.xs) {
        placement = 'top';
    }
    return (_jsxs(Flex, { row: true, shrink: true, alignItems: "center", gap: "$spacing4", children: [triggerPlacement === 'end' && children, _jsxs(Tooltip, { onOpenChange: onOpenChange, ...(enabled && open !== undefined && { open }), delay: { close: TOOLTIP_CLOSE_MS, open: 0 }, placement: placement, restMs: TOOLTIP_REST_MS, children: [_jsx(Tooltip.Trigger, { children: trigger }), text && (_jsxs(Tooltip.Content, { pointerEvents: "auto", maxWidth: maxWidth !== null && maxWidth !== void 0 ? maxWidth : (isWeb ? 280 : '100%'), mx: "$spacing24", children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", children: [icon && _jsx(Flex, { grow: true, children: icon }), _jsxs(Flex, { shrink: true, gap: "$spacing4", children: [title && (_jsx(Text, { alignSelf: "flex-start", variant: "body4", children: title })), _jsx(Text, { color: "$neutral2", variant: "body4", children: text }), button && (_jsx(Flex, { alignSelf: "flex-start", width: "100%", children: button }))] })] }), _jsx(Tooltip.Arrow, {})] }))] }), triggerPlacement === 'start' && children] }));
}
//# sourceMappingURL=InfoTooltip.web.js.map