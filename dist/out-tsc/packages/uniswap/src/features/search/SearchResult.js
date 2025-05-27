import { ENS_SUFFIX } from 'uniswap/src/features/ens/constants';
import { UNITAG_SUBDOMAIN, UNITAG_SUFFIX } from 'uniswap/src/features/unitags/constants';
export var SearchResultType;
(function (SearchResultType) {
    SearchResultType[SearchResultType["ENSAddress"] = 0] = "ENSAddress";
    SearchResultType[SearchResultType["Token"] = 1] = "Token";
    SearchResultType[SearchResultType["Etherscan"] = 2] = "Etherscan";
    SearchResultType[SearchResultType["NFTCollection"] = 3] = "NFTCollection";
    SearchResultType[SearchResultType["Unitag"] = 4] = "Unitag";
    SearchResultType[SearchResultType["WalletByAddress"] = 5] = "WalletByAddress";
    SearchResultType[SearchResultType["Pool"] = 6] = "Pool";
})(SearchResultType || (SearchResultType = {}));
export function isTokenSearchResult(x) {
    return x.type === SearchResultType.Token;
}
export function isPoolSearchResult(x) {
    return x.type === SearchResultType.Pool;
}
export function isNFTCollectionSearchResult(x) {
    return x.type === SearchResultType.NFTCollection;
}
export function isEtherscanSearchResult(x) {
    return x.type === SearchResultType.Etherscan;
}
export function isWalletSearchResult(x) {
    return (x.type === SearchResultType.WalletByAddress ||
        x.type === SearchResultType.ENSAddress ||
        x.type === SearchResultType.Unitag);
}
export function extractDomain(walletName, type) {
    const index = walletName.indexOf('.');
    if (index === -1 || index === walletName.length - 1) {
        return type === SearchResultType.Unitag ? UNITAG_SUFFIX : ENS_SUFFIX;
    }
    const domain = walletName.substring(index);
    return domain === UNITAG_SUBDOMAIN ? UNITAG_SUFFIX : domain;
}
//# sourceMappingURL=SearchResult.js.map