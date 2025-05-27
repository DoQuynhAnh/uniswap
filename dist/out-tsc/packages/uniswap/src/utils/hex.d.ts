export type HexString = `0x${string}`;
/**
 * Converts a number to a hex string
 */
export declare function numberToHex(number: number): HexString;
/**
 * Converts a hex string to a number
 */
export declare function hexToNumber(hex: string): number;
/**
 * Ensures that the input string is a valid hex string starting with 0x
 */
export declare function ensure0xHex(hex: string): `0x${string}`;
/**
 * Validates that the input string is a valid hex string starting with 0x
 */
export declare function isValidHexString(value: string): value is `0x${string}`;
//# sourceMappingURL=hex.d.ts.map