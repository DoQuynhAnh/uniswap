import Fuse from 'fuse.js';
const searchOptions = {
    includeMatches: true,
    isCaseSensitive: false,
    keys: [
        'currencyInfo.currency.chainId',
        'currencyInfo.currency.symbol',
        'currencyInfo.currency.name',
        // prioritize other fields
        { name: 'currencyInfo.currency.address', weight: 0.2 },
    ],
    shouldSort: true,
    useExtendedSearch: true,
};
const getChainSearchPattern = (chain) => chain
    ? // exact match chain
        { 'currencyInfo.currency.chainId': `=${chain}` }
    : null;
const getAddressSearchPattern = (addressPrefix) => addressPrefix && addressPrefix.startsWith('0x') && addressPrefix.length > 5
    ? // prefix-exact match address
        { 'currencyInfo.currency.address': `^${addressPrefix}` }
    : null;
const getSymbolSearchPattern = (symbol) => symbol
    ? // include-match symbol
        { 'currencyInfo.currency.symbol': `'${symbol}` }
    : null;
const getNameSearchPattern = (name) => name
    ? // include-match name
        { 'currencyInfo.currency.name': `'${name}` }
    : null;
/**
 * Returns a flat list of `TokenOption`s filtered by chainFilter and searchFilter
 * @param tokenOptions list of `TokenOption`s to filter
 * @param chainFilter chain id to keep
 * @param searchFilter filter to apply to currency adddress, name, and symbol
 */
export function filter(tokenOptions, chainFilter, searchFilter) {
    if (!tokenOptions || !tokenOptions.length) {
        return [];
    }
    if (!chainFilter && !searchFilter) {
        return tokenOptions;
    }
    const andPatterns = [];
    const orPatterns = [];
    const chainSearchPattern = getChainSearchPattern(chainFilter);
    if (chainSearchPattern) {
        andPatterns.push(chainSearchPattern);
    }
    const addressSearchPattern = getAddressSearchPattern(searchFilter);
    if (addressSearchPattern) {
        orPatterns.push(addressSearchPattern);
    }
    const symbolSearchPattern = getSymbolSearchPattern(searchFilter);
    if (symbolSearchPattern) {
        orPatterns.push(symbolSearchPattern);
    }
    const nameSearchPattern = getNameSearchPattern(searchFilter);
    if (nameSearchPattern) {
        orPatterns.push(nameSearchPattern);
    }
    const searchPattern = {
        $and: [
            ...andPatterns,
            ...(orPatterns.length > 0
                ? [
                    {
                        $or: orPatterns,
                    },
                ]
                : []),
        ],
    };
    const fuse = new Fuse(tokenOptions, searchOptions);
    const r = fuse.search(searchPattern);
    return r.map((result) => result.item);
}
//# sourceMappingURL=filter.js.map