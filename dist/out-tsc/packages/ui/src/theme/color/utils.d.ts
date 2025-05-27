import { ColorTokens } from 'tamagui';
/**
 * Adds opacity to the input color. Same as opacifyRaw but returns a ColorTokens object.
 *
 * @param opacity Opacity value to apply from 0-100
 * @param color Hex or RGB to apply the opacity to.
 * @returns
 */
export declare function opacify(opacity: number, color: string): ColorTokens;
/**
 * Adds opacity to the input color and returns a string. RGBA is intentionally not supported.
 *
 * @param opacity Opacity value to apply from 0-100
 * @param color Hex or RGB to apply the opacity to.
 * @returns
 */
export declare function opacifyRaw(opacity: number, color: string): string;
//# sourceMappingURL=utils.d.ts.map