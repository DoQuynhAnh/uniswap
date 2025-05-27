import type { Insets, LayoutChangeEvent } from 'react-native';
type FrameSize = {
    width: number;
    height: number;
};
/**
 *
 * **Exported only for testing purposes.**
 *
 * Calculates hit slop based on the size of the element.
 *
 * @param frameSize - The size of the element.
 * @returns The hit slop insets.
 *
 */
export declare const getHitSlop: ({ width, height }: FrameSize) => Insets | undefined;
/**
 * A hook that automatically calculates and applies hit slop to touchable elements to meet minimum touch target size requirements.
 *
 * Hit slop extends the touchable area of an element without changing its visual appearance, ensuring that small
 * elements still meet accessibility guidelines for minimum touch target size.
 *
 * @remarks
 * - Follows platform-specific guidelines for minimum touch targets:
 *   - iOS: 44×44 points (per Apple's Human Interface Guidelines)
 *   - Android: 48×48 dp (per Material Design Guidelines)
 * - Only applies hit slop when necessary (when element dimensions are below minimums)
 * - Calculates hit slop evenly on all sides to maintain the element's center position
 *
 * @param onLayoutArg - Optional callback function that will be called along with the internal layout handler
 *
 * @returns A tuple containing:
 *   1. `hitSlop`: An Insets object with top, right, bottom, and left values, or undefined if no hit slop is needed
 *   2. `onLayout`: Layout event handler that must be attached to the component to measure its dimensions
 *
 * @example
 * ```tsx
 * const [hitSlop, onLayout] = useAutoHitSlop();
 *
 * return (
 *   <TouchableArea
 *     onLayout={onLayout}
 *     hitSlop={hitSlop}
 *     onPress={handlePress}
 *   >
 *     <SmallIcon size={16} />
 *   </TouchableArea>
 * );
 * ```
 */
export declare const useAutoHitSlop: (onLayoutArg?: ((e: LayoutChangeEvent) => void) | undefined) => [Insets | undefined, (e: LayoutChangeEvent) => void];
export {};
//# sourceMappingURL=useAutoHitSlop.d.ts.map