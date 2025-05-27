import { useMemo } from 'react';
import { isTokenOptionArray } from 'uniswap/src/components/TokenSelector/utils';
export function useOnchainItemListSection({ sectionKey, options, rightElement, endElement, name, }) {
    return useMemo(() => {
        if (!options) {
            return undefined;
        }
        // If it is a 2D array, check if any of the inner arrays are not empty
        // Otherwise, check if the array is not empty
        const is2DArray = (options === null || options === void 0 ? void 0 : options.length) > 0 && Array.isArray(options[0]);
        const hasData = is2DArray ? options.some((item) => isTokenOptionArray(item) && item.length > 0) : options.length > 0;
        return hasData
            ? [
                {
                    sectionKey,
                    data: options,
                    name,
                    rightElement,
                    endElement,
                },
            ]
            : undefined;
    }, [name, rightElement, endElement, sectionKey, options]);
}
//# sourceMappingURL=utils.js.map