import { ensureLeading0x } from 'uniswap/src/utils/addresses';
function isTypedDataSigner(signer) {
    return '_signTypedData' in signer && typeof signer._signTypedData === 'function';
}
export async function signTypedData(domain, types, value, signer) {
    if (!isTypedDataSigner(signer)) {
        throw new Error('Incompatible account for signing typed data');
    }
    const signature = await signer._signTypedData(domain, types, value);
    return ensureLeading0x(signature);
}
//# sourceMappingURL=signing.js.map