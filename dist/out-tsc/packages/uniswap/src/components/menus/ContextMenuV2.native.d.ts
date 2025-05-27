import { PropsWithChildren } from 'react';
import { ContextMenuProps } from 'uniswap/src/components/menus/ContextMenuV2';
/**
 * A controlled styled context menu component.
 * Accepts both a onPress prop for each action and a onPressAny prop that is called when any action is pressed.
 * TODO(WALL-3692): replace the native context menu once it covers all current use cases.
 * @param children the trigger element
 * @returns a fragment with a context menu and a trigger
 */
export declare function ContextMenu({ children, menuItems, isPlacementAbove, isPlacementRight, offsetX, offsetY, onPressAny, triggerMode, disabled, isOpen, closeMenu, openMenu, }: PropsWithChildren<ContextMenuProps>): JSX.Element;
//# sourceMappingURL=ContextMenuV2.native.d.ts.map