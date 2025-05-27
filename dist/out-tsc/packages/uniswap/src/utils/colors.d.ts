import { GlobalColorNames, GlobalPalette } from 'ui/src/theme';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export declare function getNetworkColorKey(chainId: UniverseChainId): `chain_${UniverseChainId}`;
/** Helper to retrieve foreground and background colors for a given chain */
export declare function useNetworkColors(chainId: UniverseChainId): {
    foreground: string;
    background: string;
};
/**
 * @param uri image uri
 * @returns Extracts background color from image uri and finds closest theme colors.
 * Returns colors as raw hex code strings.
 */
export declare function useNearestThemeColorFromImageUri(uri: string | undefined): {
    color: string | undefined;
    colorDark: string | undefined;
    colorLight: string | undefined;
};
export declare enum AdjustmentType {
    Darken = "darken",
    Lighten = "lighten"
}
/**
 * Replaces a GlobalPalette color variant with a dark or lighter version.
 * Example: blue200 -> blue900
 */
export declare function adjustColorVariant(colorName: GlobalColorNames | undefined, adjustmentType: AdjustmentType): keyof GlobalPalette | undefined;
export declare function findNearestThemeColor(hexString: string): keyof GlobalPalette | undefined;
/**
 * Returns a number representing the difference between two colors. Lower means more similar.
 */
export declare function getColorDiffScore(colorA: string | null, colorB: string | null): number | undefined;
//# sourceMappingURL=colors.d.ts.map