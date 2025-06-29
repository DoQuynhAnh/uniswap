import type { ButtonProps } from 'ui/src/components/buttons/Button/types';
/**
 * Determines the icon position based on the current layout direction.
 * If the layout is Right-To-Left (RTL), the icon position is swapped.
 *
 * @param propIconPosition - The original icon position, which can be 'before' or 'after'.
 * @returns The adjusted icon position based on the layout direction.
 *          In RTL, 'before' becomes 'after' and 'after' becomes 'before'.
 */
export declare const getIconPosition: (propIconPosition: ButtonProps['iconPosition']) => ButtonProps['iconPosition'];
//# sourceMappingURL=getIconPosition.d.ts.map