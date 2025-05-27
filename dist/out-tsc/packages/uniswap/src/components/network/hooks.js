import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { NetworkOption } from 'uniswap/src/components/network/NetworkOption';
import { useNewChainIds } from 'uniswap/src/features/chains/hooks/useNewChainIds';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
export function useNetworkOptions({ onPress, selectedChain, includeAllNetworks, chainIds, }) {
    const newChains = useNewChainIds();
    return useMemo(() => 
    // null here is the "All networks" option
    [...(includeAllNetworks ? [null] : []), ...chainIds].map((chainId) => ({
        key: `${ElementName.NetworkButton}-${chainId !== null && chainId !== void 0 ? chainId : 'all'}`,
        render: () => (_jsx(NetworkOption, { chainId: chainId, currentlySelected: selectedChain === chainId, isNew: chainId !== null && newChains.includes(chainId) })),
        onPress: () => onPress(chainId),
    })), [includeAllNetworks, chainIds, selectedChain, newChains, onPress]);
}
//# sourceMappingURL=hooks.js.map