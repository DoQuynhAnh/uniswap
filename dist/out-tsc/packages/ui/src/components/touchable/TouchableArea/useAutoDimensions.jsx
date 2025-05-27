import { useCallback, useState } from 'react';
import { isMobileApp } from 'utilities/src/platform';
// exporting for tests
export const DEFAULT_MIN_WIDTH = isMobileApp ? 40 : 24;
export const DEFAULT_MIN_HEIGHT = DEFAULT_MIN_WIDTH;
/**
 * Measures the dimensions of a component using onLayout and returns a style object
 * to enforce minimum dimensions if provided.
 * @param onLayoutParam - Optional callback function that will be called along with the internal layout handler
 * @returns An object containing the onLayout handler and the calculated style.
 */
export function useAutoDimensions({ onLayout: onLayoutParam, width: widthParam, height: heightParam, shouldConsiderMinimumDimensions = false, }) {
    const [dimensions, setDimensions] = useState({
        width: undefined,
        height: undefined,
    });
    const onLayout = useCallback((event) => {
        onLayoutParam === null || onLayoutParam === void 0 ? void 0 : onLayoutParam(event);
        // Get the dimensions of the component
        const { width: layoutWidth, height: layoutHeight } = event.nativeEvent.layout;
        const width = Math.round(layoutWidth);
        const height = Math.round(layoutHeight);
        if (!shouldConsiderMinimumDimensions) {
            return;
        }
        // Determine if dimensions need to be set or cleared
        const maybeNewWidth = width <= DEFAULT_MIN_WIDTH ? DEFAULT_MIN_WIDTH : undefined;
        const maybeNewHeight = height <= DEFAULT_MIN_HEIGHT ? DEFAULT_MIN_HEIGHT : undefined;
        setDimensions((prevDimensions) => {
            // Check if we need to update dimensions
            const shouldUpdateWidth = prevDimensions.width !== maybeNewWidth;
            const shouldUpdateHeight = prevDimensions.height !== maybeNewHeight;
            // If either dimension needs to be updated, set new dimensions
            if (shouldUpdateWidth || shouldUpdateHeight) {
                return {
                    width: maybeNewWidth,
                    height: maybeNewHeight,
                };
            }
            return prevDimensions;
        });
    }, [onLayoutParam, shouldConsiderMinimumDimensions]);
    const widthToReturn = shouldConsiderMinimumDimensions ? dimensions.width : widthParam;
    const heightToReturn = shouldConsiderMinimumDimensions ? dimensions.height : heightParam;
    return { onLayout, width: widthToReturn, height: heightToReturn };
}
//# sourceMappingURL=useAutoDimensions.jsx.map