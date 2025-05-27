export function isBasicTokenInfo(x) {
    return Boolean(x && typeof x === 'object' && 'chainId' in x && 'address' in x);
}
export function isSerializedToken(t) {
    return 'decimals' in t;
}
//# sourceMappingURL=types.js.map