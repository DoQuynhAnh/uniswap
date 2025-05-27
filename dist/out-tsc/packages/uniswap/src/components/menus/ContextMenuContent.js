import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { DropdownMenuSheetItem, Flex, Separator, isWeb } from 'ui/src';
export function MenuContent({ items, handleCloseMenu }) {
    return (_jsx(Flex, { asChild: true, flexDirection: "column", gap: "$spacing4", p: "$spacing8", backgroundColor: "$surface1", borderRadius: "$rounded20", borderWidth: "$spacing1", borderColor: "$surface3", minWidth: 200, children: _jsx("div", { 
            // Prevent any right-click from bubbling up or showing default context menu
            onContextMenu: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, children: items.map(({ label, onPress, Icon, showDivider, disabled, iconColor, closeDelay }, index) => (_jsxs(Fragment, { children: [showDivider && _jsx(Separator, { my: "$spacing6" }), _jsx(DropdownMenuSheetItem, { variant: isWeb ? 'small' : 'medium', label: label, icon: Icon && _jsx(Icon, { size: "$icon.16", color: iconColor !== null && iconColor !== void 0 ? iconColor : '$neutral2' }), disabled: disabled, closeDelay: closeDelay, handleCloseMenu: handleCloseMenu, onPress: onPress })] }, index))) }) }));
}
//# sourceMappingURL=ContextMenuContent.js.map