// until the web app needs all of tamagui, avoid heavy imports there
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useTheme } from '@tamagui/core';
import { useMemo } from 'react';
/**
 * Wraps `useTheme` hook to provide spore color theme.
 * Do not pass a conditional value to `name` prop.
 *
 * @param name the theme name
 * @returns `useTheme` hook with the passed color theme
 */
export const useSporeColors = (name) => {
    const config = useMemo(() => ({ name }), [name]);
    return useTheme(config);
};
export const useSporeColorsForTheme = (name) => {
    const darkColors = useSporeColors('dark');
    const themeColors = useSporeColors();
    return name === 'dark' ? darkColors : themeColors;
};
//# sourceMappingURL=useSporeColors.js.map