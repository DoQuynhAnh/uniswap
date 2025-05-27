import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { AnimateInOrder } from 'ui/src/animations/components/AnimateInOrder';
import { Flex } from 'ui/src/components/layout/Flex';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { NewTag } from 'uniswap/src/components/pill/NewTag';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
const ANIMATION_DELAY = 1500;
export function AnimatedNetworkLogo({ promoChainId, size, selectedChain, includeAllNetworks, }) {
    const { defaultChainId } = useEnabledChains();
    const selectedChainLogo = useMemo(() => {
        return _jsx(NetworkLogo, { chainId: selectedChain !== null && selectedChain !== void 0 ? selectedChain : (includeAllNetworks ? null : defaultChainId), size: size });
    }, [defaultChainId, includeAllNetworks, selectedChain, size]);
    return (_jsxs(Flex, { children: [_jsx(Flex, { animation: "125ms", enterStyle: { opacity: 0 }, children: selectedChainLogo }), _jsx(AnimateInOrder, { index: 2, delayMs: ANIMATION_DELAY, position: "absolute", zIndex: 1, children: _jsx(Flex, { animation: "125ms", enterStyle: { opacity: 0 }, children: _jsx(NetworkLogo, { chainId: promoChainId, size: size }) }) }), _jsx(AnimateInOrder, { index: 3, delayMs: ANIMATION_DELAY, position: "absolute", zIndex: 1, children: _jsxs(Flex, { row: true, animation: "125ms", enterStyle: { opacity: 0 }, position: "relative", justifyContent: "center", backgroundColor: "$surface2", children: [_jsx(AnimateInOrder, { index: 1, delayMs: ANIMATION_DELAY, animation: "125ms", enterStyle: { width: 0 }, children: _jsx(Flex, { position: "absolute", right: 4, bottom: 0, children: _jsx(NewTag, {}) }) }), selectedChainLogo] }) })] }));
}
//# sourceMappingURL=AnimatedNetworkLogo.js.map