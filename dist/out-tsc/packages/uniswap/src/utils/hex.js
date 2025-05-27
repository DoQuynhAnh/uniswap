/**
 * Converts a number to a hex string
 */
export function numberToHex(number) {
    return ensure0xHex(number.toString(16));
}
/**
 * Converts a hex string to a number
 */
export function hexToNumber(hex) {
    if (hex.startsWith('0x')) {
        return parseInt(hex.slice(2), 16);
    }
    return parseInt(hex, 16);
}
/**
 * Ensures that the input string is a valid hex string starting with 0x
 */
export function ensure0xHex(hex) {
    return hex.startsWith('0x') ? hex : `0x${hex}`;
}
/**
 * Validates that the input string is a valid hex string starting with 0x
 */
export function isValidHexString(value) {
    return /^0x[0-9a-fA-F]+$/.test(value);
}
//# sourceMappingURL=hex.js.map