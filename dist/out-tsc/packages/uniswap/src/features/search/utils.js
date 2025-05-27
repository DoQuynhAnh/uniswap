import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { buildCurrencyId, currencyIdToGraphQLAddress } from 'uniswap/src/utils/currencyId';
export const BACKEND_NATIVE_CHAIN_ADDRESS_STRING = 'NATIVE';
export function tokenAddressOrNativeAddress(address, chainId) {
    const nativeAddress = getNativeAddress(chainId);
    if (address !== BACKEND_NATIVE_CHAIN_ADDRESS_STRING && address !== nativeAddress) {
        return address;
    }
    return currencyIdToGraphQLAddress(buildCurrencyId(chainId, nativeAddress));
}
//# sourceMappingURL=utils.js.map