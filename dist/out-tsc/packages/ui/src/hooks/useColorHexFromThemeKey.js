import { useSporeColors } from 'ui/src/hooks/useSporeColors';
/**
 * Hook that returns a color value from the theme string such as neutral1
 * @param color - Theme key for the desired color
 * @returns Color object with:
 * - val: raw color value
 * - get(): returns CSS var on Web (avoids re-renders) and raw value on native
 */
export function useColorHexFromThemeKey(color) {
    const colors = useSporeColors();
    const colorFromTheme = colors[color];
    return colorFromTheme;
}
//# sourceMappingURL=useColorHexFromThemeKey.js.map