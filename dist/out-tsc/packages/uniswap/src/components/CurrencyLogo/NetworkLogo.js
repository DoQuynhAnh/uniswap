import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Flex, Image, useSporeColors } from 'ui/src';
import { ALL_NETWORKS_LOGO } from 'ui/src/assets';
import { iconSizes, zIndexes } from 'ui/src/theme';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { isMobileWeb } from 'utilities/src/platform';
export const SQUIRCLE_BORDER_RADIUS_RATIO = 0.3;
export function TransactionSummaryNetworkLogo({ chainId, size = iconSizes.icon20, }) {
    return _jsx(NetworkLogo, { borderWidth: 1.5, chainId: chainId, shape: "square", size: size });
}
function _NetworkLogo({ chainId, shape, size: sizeWithoutBorder = iconSizes.icon20, borderWidth = 0, borderRadius, }) {
    const size = sizeWithoutBorder + 2 * borderWidth;
    const shapeBorderRadius = shape === 'circle' ? size / 2 : size * SQUIRCLE_BORDER_RADIUS_RATIO;
    const colors = useSporeColors();
    const imageStyle = {
        width: size,
        height: size,
        borderRadius: borderRadius !== null && borderRadius !== void 0 ? borderRadius : shapeBorderRadius,
        borderWidth,
        borderColor: colors.surface1.val,
    };
    if (chainId === null) {
        return (_jsx(Flex, { testID: "all-networks-logo", children: _jsx(NetworkImage, { logo: ALL_NETWORKS_LOGO, imageSize: size }) }));
    }
    const logo = getChainInfo(chainId).logo;
    const imageSize = size - borderWidth * 2; // this prevents the border from cutting off the logo
    return logo ? (_jsx(Flex, { testID: "network-logo", overflow: "hidden", style: imageStyle, zIndex: zIndexes.mask, children: _jsx(NetworkImage, { logo: logo, imageSize: imageSize }) })) : null;
}
function NetworkImage({ logo, imageSize }) {
    // As of iOS 18.3 network logos are no longer displaying because react-native-web-lite
    // adds z-index: -1 to the image. This is a workaround to display the logos on mobile web.
    return isMobileWeb && typeof logo === 'string' ? (_jsx("img", { src: logo, style: { width: imageSize, height: imageSize } })) : (_jsx(Image, { resizeMode: "contain", source: logo, width: imageSize, height: imageSize }));
}
export const NetworkLogo = React.memo(_NetworkLogo);
//# sourceMappingURL=NetworkLogo.js.map