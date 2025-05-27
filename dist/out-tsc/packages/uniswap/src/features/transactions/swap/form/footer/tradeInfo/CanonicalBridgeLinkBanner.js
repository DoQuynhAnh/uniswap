import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text, TouchableArea } from 'ui/src';
import { Arrow } from 'ui/src/components/arrow/Arrow';
import { iconSizes, validColor } from 'ui/src/theme';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { getCanonicalBridgingDappUrls } from 'uniswap/src/features/bridging/constants';
import { getChainLabel } from 'uniswap/src/features/chains/utils';
import { useNetworkColors } from 'uniswap/src/utils/colors';
import { openUri } from 'uniswap/src/utils/linking';
export function CanonicalBridgeLinkBanner({ chainId }) {
    var _a;
    const { foreground } = useNetworkColors(chainId);
    const networkLabel = getChainLabel(chainId);
    const networkColor = validColor(foreground);
    const canonicalBridgeUrl = (_a = getCanonicalBridgingDappUrls([chainId])) === null || _a === void 0 ? void 0 : _a[0];
    return (_jsx(TouchableArea, { onPress: () => canonicalBridgeUrl && openUri(canonicalBridgeUrl), children: _jsxs(Flex, { row: true, gap: "$spacing8", alignItems: "center", children: [_jsx(NetworkLogo, { chainId: chainId, size: iconSizes.icon20 }), _jsxs(Text, { color: networkColor, variant: "buttonLabel3", children: [networkLabel, " Bridge"] }), _jsx(Arrow, { color: networkColor, direction: "ne", size: iconSizes.icon20 })] }) }));
}
//# sourceMappingURL=CanonicalBridgeLinkBanner.js.map