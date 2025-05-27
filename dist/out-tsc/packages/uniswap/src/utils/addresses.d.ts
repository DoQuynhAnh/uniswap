export declare enum AddressStringFormat {
    Lowercase = 0,
    Uppercase = 1,
    Shortened = 2
}
/**
 * Validates an address and returns the normalized address: lowercased or checksummed depending on the checksum field.
 *
 * When withChecksum === true, this method performs a checksum on the address. Please, use only for validating user input.
 *
 * When withChecksum === false, it checks: length === 42 and startsWith('0x') and returns a lowercased address.
 *
 * Usage:
 * `if(getValidAddress(address, withChecksum))`: Works because strings are truthy and null is falsy
 *
 * @param address The address to validate and normalize
 * @param withChecksum Whether to perform a checksum on the address
 * @param log If logging is enabled in case of errors
 * @returns The normalized address or false if the address is invalid
 */
export declare function getValidAddress(address: Maybe<string>, withChecksum?: boolean, log?: boolean): Nullable<string>;
/**
 * Normalizes an address given a format
 *
 * **Note**: To get the checksum address please, use {@link getValidAddress(address, true)}
 *
 * @param address
 * @param format One of AddressStringFormat
 * @returns the normalized address
 */
export declare function normalizeAddress(address: Address, format: AddressStringFormat): Address;
/**
 * Replaces any instance of 'x' letter in address string with an added zero-width-space invisible character
 * this is done to solve an issue with the Inter font where an 'x' character between to numbers will be replaced as a muliplication sign
 *
 * @param address Address to sanitize
 * @returns Sanitized address string
 */
export declare function sanitizeAddressText(address?: string): Maybe<string>;
export declare function areAddressesEqual(a1: Maybe<Address>, a2: Maybe<Address>): boolean;
/**
 * Prepend '0x' if the input address does not start with '0x'/'0X'
 */
export declare function ensureLeading0x(input: Address): Address;
//# sourceMappingURL=addresses.d.ts.map