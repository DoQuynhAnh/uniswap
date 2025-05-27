import { useCallback } from 'react';
import { useSigner } from 'uniswap/src/contexts/UniswapContext';
import { signTypedData } from 'uniswap/src/features/transactions/signing';
import { useAsyncData } from 'utilities/src/react/hooks';
// Used to sign permit messages where we already have the domain, types, and values.
export function usePermit2SignatureWithData({ permitData, skip }) {
    const signer = useSigner();
    const { domain, types, values } = permitData || {};
    const permitSignatureFetcher = useCallback(async () => {
        if (skip || !signer || !domain || !types || !values) {
            return undefined;
        }
        return await signTypedData(domain, types, values, signer);
    }, [domain, signer, skip, types, values]);
    const { data, isLoading } = useAsyncData(permitSignatureFetcher);
    return {
        isLoading,
        signature: data,
    };
}
//# sourceMappingURL=usePermit2Signature.js.map