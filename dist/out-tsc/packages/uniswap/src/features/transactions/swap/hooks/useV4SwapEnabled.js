import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { useSupportedChainId } from 'uniswap/src/features/chains/hooks/useSupportedChainId';
export function useV4SwapEnabled(chainId) {
    const supportedChainId = useSupportedChainId(chainId);
    if (!supportedChainId) {
        return false;
    }
    const chainInfo = getChainInfo(supportedChainId);
    return chainInfo.supportsV4;
}
//# sourceMappingURL=useV4SwapEnabled.js.map