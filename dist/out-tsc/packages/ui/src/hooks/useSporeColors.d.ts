import { ColorTokens, ThemeKeys, ThemeProps } from '@tamagui/core';
type OpaqueColorValue = symbol & {
    __TYPE__: 'Color';
};
export type DynamicColor = ColorTokens | string | OpaqueColorValue;
export type UseSporeColorsReturn = {
    [key in ThemeKeys]: {
        val: ColorTokens;
        get: () => DynamicColor;
        variable: string;
    };
};
/**
 * Wraps `useTheme` hook to provide spore color theme.
 * Do not pass a conditional value to `name` prop.
 *
 * @param name the theme name
 * @returns `useTheme` hook with the passed color theme
 */
export declare const useSporeColors: (name?: ThemeProps['name']) => UseSporeColorsReturn;
export declare const useSporeColorsForTheme: (name?: ThemeProps['name']) => UseSporeColorsReturn;
export {};
//# sourceMappingURL=useSporeColors.d.ts.map