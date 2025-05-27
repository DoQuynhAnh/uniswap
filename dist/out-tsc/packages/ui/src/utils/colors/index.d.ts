import { ThemeKeys, type ColorTokens } from 'ui/src/index';
import { ColorStrategy, ExtractedColors } from 'ui/src/utils/colors/getExtractedColors';
export declare const SPECIAL_CASE_TOKEN_COLORS: {
    [key: string]: string;
};
type ExtractedColorsOptions = {
    fallback: ThemeKeys;
    cache?: boolean;
    colorStrategy?: ColorStrategy;
};
export declare function useExtractedColors(imageUrl: Maybe<string>, options?: ExtractedColorsOptions): {
    colors?: ExtractedColors;
    colorsLoading: boolean;
};
/**
 * Picks a contrast-passing color from a given token image URL and background color.
 * The color extracting library will return a few options, and this function will
 * try to pick the best of those given options.
 *
 * Usage:
 *
 * ```ts
 * const { tokenColor, tokenColorLoading } = useExtractedTokenColor(
 *    tokenImageUrl,
 *    theme.colors.surface1,
 *    theme.colors.neutral3
 * )
 * ```
 *
 * @param imageUrl The URL of the image to extract a color from
 * @param tokenName The ticker of the asset (used to derive a color when no logo is available)
 * @param backgroundColor The hex value of the background color to check contrast against
 * @param defaultColor The color that will be returned while the extraction is still loading
 * @returns The extracted color as a hex code string
 */
export declare function useExtractedTokenColor(imageUrl: Maybe<string>, tokenName: Maybe<string>, backgroundColor: string, defaultColor: string): {
    tokenColor: Nullable<string>;
    tokenColorLoading: boolean;
};
type TamaguiColor = ColorTokens | 'transparent' | `rgba(${string})` | `rgb(${string})` | `hsl(${string})` | `hsla(${string})` | `#${string}`;
/**
 * Wraps `useLogolessColorScheme`. This hook is used to generate a color scheme for any icon that doesn't have a logo,
 * accounting for dark mode as well.
 *
 * @param seed a string used to generate the color scheme
 * @returns the foreground and background colors for the color scheme
 */
export declare function useColorSchemeFromSeed(seed: string): {
    foreground: TamaguiColor;
    background: TamaguiColor;
};
export declare function passesContrast(color: string, backgroundColor: string, contrastThreshold: number): boolean;
export declare function getHoverCssFilter({ isDarkMode, differenceFrom1, }: {
    isDarkMode?: boolean;
    differenceFrom1?: number;
}): string;
export * from './getContrastPassingTextColor';
export * from './useColorsFromTokenColor';
//# sourceMappingURL=index.d.ts.map