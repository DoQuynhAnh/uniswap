import { OpaqueColorValue } from 'react-native';
import { GetThemeValueForKey } from 'tamagui';
type HexColor = `#${string}${string}${string}` | `#${string}${string}${string}${string}${string}${string}`;
type RgbColor = `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;
type HexOrRgbColor = HexColor | RgbColor;
export declare const getMaybeHexOrRGBColor: (color?: string | GetThemeValueForKey<'backgroundColor'> | OpaqueColorValue) => HexOrRgbColor | undefined;
export {};
//# sourceMappingURL=getMaybeHexOrRGBColor.d.ts.map