import { useCallback } from 'react';
import { useEnabledChains, useEnabledChainsWithConnector } from 'uniswap/src/features/chains/hooks/useEnabledChains';
export function useSupportedChainId(chainId) {
    const { chains } = useEnabledChains();
    return chains.includes(chainId) ? chainId : undefined;
}
export function useIsSupportedChainId(chainId) {
    const supportedChainId = useSupportedChainId(chainId);
    return supportedChainId !== undefined;
}
export function useIsSupportedChainIdCallback() {
    const { chains } = useEnabledChains();
    return useCallback((chainId) => {
        return chains.includes(chainId);
    }, [chains]);
}
export function useSupportedChainIdWithConnector(chainId, connector) {
    const { chains } = useEnabledChainsWithConnector(connector);
    return chains.includes(chainId) ? chainId : undefined;
}
//# sourceMappingURL=useSupportedChainId.js.map