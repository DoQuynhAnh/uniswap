// Copied from https://github.com/Uniswap/interface/blob/main/src/hooks/useENS.ts
import { useAddressFromEns, useENSName } from 'uniswap/src/features/ens/api';
import { ENS_SUFFIX } from 'uniswap/src/features/ens/constants';
import { getValidAddress } from 'uniswap/src/utils/addresses';
import { useDebounce } from 'utilities/src/time/timing';
/**
 * Given a name or address, does a lookup to resolve to an address and name
 * @param nameOrAddress ENS name or address
 */
export function useENS({ nameOrAddress, autocompleteDomain = false }) {
    var _a, _b;
    const debouncedNameOrAddress = (_a = useDebounce(nameOrAddress)) !== null && _a !== void 0 ? _a : null;
    const validAddress = getValidAddress(debouncedNameOrAddress, false, false);
    const maybeName = validAddress ? null : debouncedNameOrAddress; // if it's a valid address then it's not a name
    const { data: name, isLoading: nameFetching } = useENSName(validAddress !== null && validAddress !== void 0 ? validAddress : undefined);
    const { data: address, isLoading: addressFetching } = useAddressFromEns(autocompleteDomain ? getCompletedENSName(maybeName) : maybeName);
    return {
        loading: nameFetching || addressFetching,
        address: validAddress !== null && validAddress !== void 0 ? validAddress : address,
        // if nameOrAddress is a name and there's a valid address resolution, it must be a valid ENS
        name: (_b = name !== null && name !== void 0 ? name : (address && nameOrAddress)) !== null && _b !== void 0 ? _b : null,
    };
}
export function getCompletedENSName(name) {
    if (!name) {
        return null;
    }
    // If this is the top level uni.eth, we should not query for it as this query will time out.
    // We don't fully understand why this times out but suspect it has to do with the top level ENS record.
    // Other subdomains may have this issue, which is accounted for in usage of the `useENS` hook
    if (name === 'uni') {
        return null;
    }
    // Append the .eth if does not already exist
    return name.endsWith(ENS_SUFFIX) ? name : name.concat(ENS_SUFFIX);
}
//# sourceMappingURL=useENS.js.map