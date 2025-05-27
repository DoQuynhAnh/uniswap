import { AddressZero } from '@ethersproject/constants';
import { Contract } from '@ethersproject/contracts';
import { isAddress } from 'utilities/src/addresses';
export function getContract(address, ABI, provider, account) {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return new Contract(address, ABI, getProviderOrSigner(provider, account));
}
function getProviderOrSigner(provider, account) {
    return account ? provider.getSigner(account).connectUnchecked() : provider;
}
//# sourceMappingURL=getContract.js.map