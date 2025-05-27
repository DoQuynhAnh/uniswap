export declare function isAddress(value?: string | null | undefined): `0x${string}` | false;
export declare function isSameAddress(a?: string, b?: string): boolean;
/**
 * Shortens an Ethereum address. If the address is not valid, it returns an empty string.
 *
 * @param address - The address to shorten
 * @param chars - The number of characters to show at the beginning after the 0x and end.
 * @param charsEnd - (Optional) The number of characters to show at the end if different from chars.
 */
export declare function shortenAddress(address?: string, chars?: number, charsEnd?: number): string;
/**
 * Shorten a string with "..." in the middle
 * @param target
 * @param charsStart amount of character to shorten (from both ends / in the beginning)
 * @param charsEnd amount of characters to shorten in the end
 * @returns formatted string
 */
export declare function ellipseMiddle(target: string, charsStart?: number, charsEnd?: number): string;
//# sourceMappingURL=index.d.ts.map