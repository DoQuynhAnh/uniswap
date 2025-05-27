import type { LayoutChangeEvent } from 'react-native';
import type { YStackProps } from 'tamagui';
type UseAutoDimensionsReturn = {
    onLayout: (event: LayoutChangeEvent) => void;
    width: YStackProps['width'];
    height: YStackProps['height'];
};
type UseAutoDimensionsParams = Partial<UseAutoDimensionsReturn> & {
    shouldConsiderMinimumDimensions?: boolean;
};
export declare const DEFAULT_MIN_WIDTH: number;
export declare const DEFAULT_MIN_HEIGHT: number;
/**
 * Measures the dimensions of a component using onLayout and returns a style object
 * to enforce minimum dimensions if provided.
 * @param onLayoutParam - Optional callback function that will be called along with the internal layout handler
 * @returns An object containing the onLayout handler and the calculated style.
 */
export declare function useAutoDimensions({ onLayout: onLayoutParam, width: widthParam, height: heightParam, shouldConsiderMinimumDimensions, }: UseAutoDimensionsParams): UseAutoDimensionsReturn;
export {};
//# sourceMappingURL=useAutoDimensions.d.ts.map