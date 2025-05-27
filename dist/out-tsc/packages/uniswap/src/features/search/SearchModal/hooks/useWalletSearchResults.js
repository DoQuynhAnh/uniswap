import { useMemo } from 'react';
import { useIsSmartContractAddress } from 'uniswap/src/features/address/useIsSmartContractAddress';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { ENS_SUFFIX } from 'uniswap/src/features/ens/constants';
import { useENS } from 'uniswap/src/features/ens/useENS';
import { SearchResultType } from 'uniswap/src/features/search/SearchResult';
import { UNITAG_SUFFIX } from 'uniswap/src/features/unitags/constants';
import { useUnitagByAddress, useUnitagByName } from 'uniswap/src/features/unitags/hooks';
import { getValidAddress } from 'uniswap/src/utils/addresses';
// eslint-disable-next-line complexity
export function useWalletSearchResults(query, selectedChain) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { defaultChainId } = useEnabledChains();
    const validAddress = useMemo(() => { var _a; return (_a = getValidAddress(query, true, false)) !== null && _a !== void 0 ? _a : undefined; }, [query]);
    const querySkippedIfValidAddress = validAddress ? null : query;
    // Search for matching .eth if not a valid address
    const { address: dotEthAddress, name: dotEthName, loading: dotEthLoading, } = useENS({ nameOrAddress: querySkippedIfValidAddress, autocompleteDomain: true });
    // Search for exact match for ENS if not a valid address
    const { address: ensAddress, name: ensName, loading: ensLoading, } = useENS({ nameOrAddress: querySkippedIfValidAddress, autocompleteDomain: false });
    // Search for matching Unitag by name
    const { unitag: unitagByName, loading: unitagLoading } = useUnitagByName(query);
    // Search for matching Unitag by address (try user input address, then resolved ENS address, then autocompleted ENS address)
    const { unitag: unitagByAddress, loading: unitagByAddressLoading } = useUnitagByAddress((_b = (_a = validAddress !== null && validAddress !== void 0 ? validAddress : ensAddress) !== null && _a !== void 0 ? _a : dotEthAddress) !== null && _b !== void 0 ? _b : undefined);
    // Search for matching EOA wallet address
    const { isSmartContractAddress, loading: loadingIsSmartContractAddress } = useIsSmartContractAddress(validAddress, selectedChain !== null && selectedChain !== void 0 ? selectedChain : defaultChainId);
    const hasENSResult = dotEthName && dotEthAddress;
    const hasEOAResult = validAddress && !isSmartContractAddress;
    // Consider when to show sections
    // Only consider queries with the .eth suffix as an exact ENS match
    const exactENSMatch = (dotEthName === null || dotEthName === void 0 ? void 0 : dotEthName.toLowerCase()) === query.toLowerCase() && query.includes(ENS_SUFFIX);
    const results = [];
    // Prioritize unitags
    if (((_c = unitagByName === null || unitagByName === void 0 ? void 0 : unitagByName.address) === null || _c === void 0 ? void 0 : _c.address) && (unitagByName === null || unitagByName === void 0 ? void 0 : unitagByName.username)) {
        results.push({
            type: SearchResultType.Unitag,
            address: unitagByName.address.address,
            unitag: unitagByName.username,
        });
    }
    // Add unitag by address in the following relevant cases
    // 1. query is an address that has a unitag
    // 2. the ENS/dotETH address found has a unitag
    //    a) AND the query starts with the unitag's username (otherwise the username isn't relevant to the search query)
    //    b) AND the query isn't an exact ENS match, excluding .uni.eth queries (don't show unitag if query explicitly searches for X.eth, EXCEPT if it's X.uni.eth)
    const showUnitagOverEns = !exactENSMatch || dotEthName.endsWith(UNITAG_SUFFIX);
    const addressMatch = (unitagByAddress === null || unitagByAddress === void 0 ? void 0 : unitagByAddress.address) === validAddress;
    const nameMatch = (unitagByAddress === null || unitagByAddress === void 0 ? void 0 : unitagByAddress.username) && query.startsWith(unitagByAddress.username);
    const addressOrNameMatch = addressMatch || (nameMatch && showUnitagOverEns);
    const showUnitagByAddress = !((_d = unitagByName === null || unitagByName === void 0 ? void 0 : unitagByName.address) === null || _d === void 0 ? void 0 : _d.address) && (unitagByAddress === null || unitagByAddress === void 0 ? void 0 : unitagByAddress.address) && (unitagByAddress === null || unitagByAddress === void 0 ? void 0 : unitagByAddress.username) && addressOrNameMatch;
    if (showUnitagByAddress) {
        results.push({
            type: SearchResultType.Unitag,
            // Already checked that these aren't undefined but linter doesn't recognize it
            address: (_e = unitagByAddress.address) !== null && _e !== void 0 ? _e : '',
            unitag: (_f = unitagByAddress.username) !== null && _f !== void 0 ? _f : '',
        });
    }
    // Add the raw ENS result if available and a unitag by address was not already added
    if (!validAddress && ensAddress && ensName && !showUnitagByAddress) {
        results.push({
            type: SearchResultType.ENSAddress,
            address: ensAddress,
            ensName,
            isRawName: !ensName.endsWith(ENS_SUFFIX), // Ensure raw name is used for subdomains only
        });
    }
    // Add ENS result if it's different than the unitag result and raw ENS result
    const differentFromUnitagByAddress = dotEthAddress !== (unitagByAddress === null || unitagByAddress === void 0 ? void 0 : unitagByAddress.address) || !showUnitagByAddress;
    if (!validAddress &&
        hasENSResult &&
        dotEthAddress !== ((_g = unitagByName === null || unitagByName === void 0 ? void 0 : unitagByName.address) === null || _g === void 0 ? void 0 : _g.address) &&
        differentFromUnitagByAddress &&
        dotEthAddress !== ensAddress) {
        results.push({
            type: SearchResultType.ENSAddress,
            address: dotEthAddress,
            ensName: dotEthName,
        });
    }
    // Do not show EOA address result if there is a Unitag result by address
    if (hasEOAResult && !showUnitagByAddress) {
        results.push({
            type: SearchResultType.WalletByAddress,
            address: validAddress,
        });
    }
    // Ensure loading is returned
    const walletsLoading = dotEthLoading || ensLoading || loadingIsSmartContractAddress || unitagLoading || unitagByAddressLoading;
    return {
        loading: walletsLoading,
        wallets: results,
        exactENSMatch,
        exactUnitagMatch: !!(unitagByName || unitagByAddress),
    };
}
//# sourceMappingURL=useWalletSearchResults.js.map