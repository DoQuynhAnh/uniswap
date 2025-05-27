import { useCallback } from 'react';
import { useSigner } from 'uniswap/src/contexts/UniswapContext';
import { signTypedData } from 'uniswap/src/features/transactions/signing';
import { isInterface } from 'utilities/src/platform';
async function getSignature(permitData, signer) {
    const { domain, types, values } = permitData || {};
    if (!domain || !types || !values) {
        return undefined;
    }
    return signTypedData(domain, types, values, signer);
}
/**
 * Returns a signing utility that can be used to sign permits needed for legacy /swap calldata fetching,
 * for applicable environments.
 */
export function usePresignPermit() {
    const signer = useSigner();
    const presignPermit = useCallback(async (permitData) => {
        if (!signer) {
            return undefined;
        }
        return getSignature(permitData, signer);
    }, [signer]);
    // In environments that can sign typed data without UI prompts (e.g., mobile / ext),
    // we can sign permits when preparing SwapTxAndGasInfo, which allows earlier access to
    // calldata / simulation results. In dapp environments (interface), if a permit is required,
    // signing and calldata fetching are deferred until the swap execution phase.
    return isInterface ? undefined : presignPermit;
}
//# sourceMappingURL=hooks.js.map