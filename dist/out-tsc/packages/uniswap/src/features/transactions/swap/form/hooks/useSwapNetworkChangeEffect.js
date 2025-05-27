import { useUniswapContext } from 'uniswap/src/contexts/UniswapContext';
import { useChainIdsChangeEffect, } from 'uniswap/src/features/transactions/swap/contexts/hooks/useChainIdsChangeEffect';
import { useEvent } from 'utilities/src/react/hooks';
export function useSwapNetworkChangeEffect({ inputChainId, outputChainId, }) {
    const { onSwapChainsChanged } = useUniswapContext();
    const onChainIdsChanged = useEvent(({ currentChains, prevChains, }) => {
        const { inputChainId: currentInputChainId, outputChainId: currentOutputChainId } = currentChains;
        const { inputChainId: lastInputChainId, outputChainId: lastOutputChainId } = prevChains;
        const prevChainId = lastInputChainId !== null && lastInputChainId !== void 0 ? lastInputChainId : lastOutputChainId;
        // Determine notification type and trigger
        if (currentInputChainId && currentOutputChainId && currentInputChainId !== currentOutputChainId) {
            onSwapChainsChanged({ chainId: currentInputChainId, outputChainId: currentOutputChainId }); // Bridging notification
        }
        else if (currentInputChainId || (currentOutputChainId && prevChainId)) {
            const chainId = currentInputChainId !== null && currentInputChainId !== void 0 ? currentInputChainId : currentOutputChainId;
            // User is swapping on the same chain, don't show notification
            if (!chainId || chainId === prevChainId) {
                return;
            }
            onSwapChainsChanged({ chainId, prevChainId }); // Non-bridging notification
        }
    });
    const skipInitialCallback = !!inputChainId && !!outputChainId && inputChainId === outputChainId;
    useChainIdsChangeEffect({
        inputChainId,
        outputChainId,
        onChainIdsChanged,
        skipInitialCallback,
    });
}
//# sourceMappingURL=useSwapNetworkChangeEffect.js.map