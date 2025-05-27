import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useRef, useState } from 'react';
import { Popover } from 'ui/src';
import { MenuContent } from 'uniswap/src/components/menus/ContextMenuContent';
import { ContextMenuTriggerMode } from 'uniswap/src/components/menus/types';
import { isMobileWeb } from 'utilities/src/platform';
import { useOnClickOutside } from 'utilities/src/react/hooks';
export function ContextMenu({ menuItems, isPlacementAbove = false, isPlacementRight = false, offsetX = 0, offsetY = 0, triggerMode, disabled = false, children, isOpen, closeMenu, openMenu, }) {
    const containerRef = useRef(null);
    const triggerContainerRef = useRef(null);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const isLeftClick = triggerMode === ContextMenuTriggerMode.Primary;
    useOnClickOutside(containerRef, () => {
        closeMenu();
    });
    const onContextMenu = (e) => {
        if (disabled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        openMenu === null || openMenu === void 0 ? void 0 : openMenu();
        // Capture raw click coords
        const { clientX, clientY } = e;
        setMenuPosition({ x: clientX, y: clientY });
    };
    function getRelativeCoordinates() {
        if (isLeftClick || !triggerContainerRef.current) {
            return { x: 0, y: 0 };
        }
        const rect = triggerContainerRef.current.getBoundingClientRect();
        const relativeX = isPlacementRight ? menuPosition.x - rect.left : menuPosition.x - rect.right;
        const relativeY = menuPosition.y - rect.top - rect.height;
        return {
            x: relativeX,
            y: relativeY,
        };
    }
    const { x, y } = getRelativeCoordinates();
    if (disabled || isMobileWeb) {
        return _jsx(Fragment, { children: children });
    }
    return (_jsxs(Popover, { allowFlip: true, open: isOpen, strategy: "absolute", placement: isPlacementAbove
            ? isPlacementRight
                ? 'top-start' // above & to the right
                : 'top-end' // above & to the left
            : isPlacementRight
                ? 'bottom-start' // below & to the right
                : 'bottom-end' // below & to the left
        , offset: {
            mainAxis: y + (isPlacementAbove ? -offsetY : offsetY),
            crossAxis: x + (isPlacementRight ? offsetX : -offsetX),
        }, children: [_jsx(Popover.Trigger, { onMouseDown: isLeftClick ? onContextMenu : undefined, children: _jsx("div", { ref: triggerContainerRef, onContextMenu: isLeftClick ? undefined : onContextMenu, children: children }) }), _jsx(Popover.Content, { ref: containerRef, backgroundColor: "transparent", animation: "125ms", enterStyle: {
                    opacity: 0,
                    scale: 0.98,
                    transform: [{ translateY: -4 }],
                }, children: _jsx(MenuContent, { items: menuItems, handleCloseMenu: closeMenu }) }, `${menuPosition.x}-${menuPosition.y}`)] }));
}
//# sourceMappingURL=ContextMenuV2.web.js.map