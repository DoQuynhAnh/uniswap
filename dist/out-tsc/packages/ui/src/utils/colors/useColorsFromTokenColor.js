import { useMemo } from 'react';
import { opacify, validColor } from 'ui/src/theme';
export const useColorsFromTokenColor = (tokenColor) => {
    const { validTokenColor, lightTokenColor } = useMemo(() => {
        const validatedColor = validColor(tokenColor);
        return {
            validTokenColor: tokenColor ? validatedColor : undefined,
            lightTokenColor: tokenColor ? opacify(12, validatedColor) : undefined,
        };
    }, [tokenColor]);
    return { validTokenColor, lightTokenColor };
};
//# sourceMappingURL=useColorsFromTokenColor.js.map