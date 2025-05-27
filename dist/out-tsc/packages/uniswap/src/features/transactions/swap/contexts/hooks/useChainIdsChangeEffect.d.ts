import type { UniverseChainId } from 'uniswap/src/features/chains/types';
/**
 * Hook that detects changes to chainIds and fires a callback when changes occur.
 * Can be used by components that need to respond to chain ID changes.
 */
export declare function useChainIdsChangeEffect({ inputChainId, outputChainId, onChainIdsChanged, skipInitialCallback, }: ChainIdsChangeParams): void;
export interface SwapChains {
    inputChainId?: UniverseChainId;
    outputChainId?: UniverseChainId;
}
export type ChainIdsChangeCallback = (params: {
    currentChains: SwapChains;
    prevChains: SwapChains;
    hasInputChanged: boolean;
    hasOutputChanged: boolean;
}) => void;
export interface ChainIdsChangeParams {
    inputChainId?: UniverseChainId;
    outputChainId?: UniverseChainId;
    /**
     * Callback fired when chain IDs change.
     * This callback should be stable (wrapped with useEvent) to prevent unnecessary re-renders.
     * It receives information about the current and previous chains, along with which chains changed.
     */
    onChainIdsChanged?: ChainIdsChangeCallback;
    /**
     * Whether to skip the initial callback invocation when the hook first mounts.
     * Defaults to true to prevent unwanted side effects during component initialization.
     */
    skipInitialCallback?: boolean;
}
//# sourceMappingURL=useChainIdsChangeEffect.d.ts.map