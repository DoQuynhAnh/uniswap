import { useEffect, useRef } from 'react';
/**
 * Hook that detects changes to chainIds and fires a callback when changes occur.
 * Can be used by components that need to respond to chain ID changes.
 */
export function useChainIdsChangeEffect({ inputChainId, outputChainId, onChainIdsChanged, skipInitialCallback = true, }) {
    const prevChainsRef = useRef({
        inputChainId: undefined,
        outputChainId: undefined,
    });
    const isFirstRunRef = useRef(true);
    useEffect(() => {
        if (!onChainIdsChanged) {
            return;
        }
        const currentChains = { inputChainId, outputChainId };
        const prevChains = prevChainsRef.current;
        // Skip first callback if requested (but still update the ref)
        if (isFirstRunRef.current && skipInitialCallback) {
            isFirstRunRef.current = false;
            prevChainsRef.current = currentChains;
            return;
        }
        // Check if chains have changed
        const hasInputChanged = inputChainId !== prevChains.inputChainId;
        const hasOutputChanged = outputChainId !== prevChains.outputChainId;
        // Only call callback if something changed
        if (hasInputChanged || hasOutputChanged) {
            onChainIdsChanged({
                currentChains,
                prevChains,
                hasInputChanged,
                hasOutputChanged,
            });
        }
        // Always update previous chains
        prevChainsRef.current = currentChains;
        isFirstRunRef.current = false;
    }, [inputChainId, outputChainId, onChainIdsChanged, skipInitialCallback]);
}
//# sourceMappingURL=useChainIdsChangeEffect.js.map