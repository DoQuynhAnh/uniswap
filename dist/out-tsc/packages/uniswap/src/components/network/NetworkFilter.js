import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Flex } from 'ui/src';
import { easeInEaseOutLayoutAnimation } from 'ui/src/animations/layout/layoutAnimation';
import { AlertTriangle } from 'ui/src/components/icons/AlertTriangle';
import { Ellipsis } from 'ui/src/components/icons/Ellipsis';
import { iconSizes } from 'ui/src/theme';
import { NetworkLogo, SQUIRCLE_BORDER_RADIUS_RATIO } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { ActionSheetDropdown, } from 'uniswap/src/components/dropdowns/ActionSheetDropdown';
import { useNetworkOptions } from 'uniswap/src/components/network/hooks';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { isMobileApp } from 'utilities/src/platform';
const ELLIPSIS = 'ellipsis';
const NETWORK_ICON_SIZE = iconSizes.icon20;
const NETWORK_ICON_SHIFT = 8;
export function NetworksInSeries({ networks, ellipsisPosition, networkIconSize = NETWORK_ICON_SIZE, }) {
    const items = [
        ...(ellipsisPosition === 'start' ? [ELLIPSIS] : []),
        ...networks,
        ...(ellipsisPosition === 'end' ? [ELLIPSIS] : []),
    ];
    const renderItem = useCallback(({ item: chainId }) => (_jsx(Flex, { borderColor: "$surface2", borderRadius: "$rounded8", borderWidth: "$spacing2", ml: -NETWORK_ICON_SHIFT, children: chainId === ELLIPSIS ? (_jsx(Flex, { centered: true, backgroundColor: "$neutral3", borderRadius: networkIconSize * SQUIRCLE_BORDER_RADIUS_RATIO, height: networkIconSize, width: networkIconSize, children: _jsx(Ellipsis, { color: "$white", size: "$icon.12" }) })) : (_jsx(NetworkLogo, { chainId: chainId, shape: "square", size: networkIconSize })) }, chainId)), [networkIconSize]);
    return (_jsx(Flex, { row: true, pl: NETWORK_ICON_SHIFT, children: items.map((chainId) => renderItem({ item: chainId })) }));
}
export function NetworkFilter({ chainIds, selectedChain, onPressChain, onDismiss, includeAllNetworks, showUnsupportedConnectedChainWarning, styles, hideArrow = false, }) {
    const { defaultChainId } = useEnabledChains();
    const onPress = useCallback(async (chainId) => {
        // Ensures smooth animation on mobile
        if (isMobileApp) {
            easeInEaseOutLayoutAnimation();
        }
        onPressChain(chainId);
    }, [onPressChain]);
    const networkOptions = useNetworkOptions({
        selectedChain,
        onPress,
        includeAllNetworks,
        chainIds,
    });
    return (_jsx(ActionSheetDropdown, { options: networkOptions, showArrow: !hideArrow, styles: {
            alignment: 'right',
            buttonPaddingY: '$none',
            ...styles,
        }, testID: "chain-selector", onPress: onDismiss, children: showUnsupportedConnectedChainWarning ? (_jsx(AlertTriangle, { color: "$neutral2", size: 20 })) : (_jsx(NetworkLogo, { chainId: selectedChain !== null && selectedChain !== void 0 ? selectedChain : (includeAllNetworks ? null : defaultChainId), size: NETWORK_ICON_SIZE })) }));
}
//# sourceMappingURL=NetworkFilter.js.map