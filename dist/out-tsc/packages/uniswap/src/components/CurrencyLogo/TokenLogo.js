import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState } from 'react';
import { Flex, Loader, Text, UniversalImage, useColorSchemeFromSeed, useSporeColors } from 'ui/src';
import { iconSizes, validColor, zIndexes } from 'ui/src/theme';
import { STATUS_RATIO } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { isTestnetChain } from 'uniswap/src/features/chains/utils';
import { isMobileApp } from 'utilities/src/platform';
const TESTNET_BORDER_DIVISOR = 15;
const BORDER_OFFSET = 4;
export const TokenLogo = memo(function _TokenLogo({ url, symbol, name, chainId, size = iconSizes.icon40, hideNetworkLogo, networkLogoBorderWidth = isMobileApp ? 2 : 1.5, loading, }) {
    var _a;
    const [showBackground, setShowBackground] = useState(false);
    const colors = useSporeColors();
    const { foreground, background } = useColorSchemeFromSeed((_a = name !== null && name !== void 0 ? name : symbol) !== null && _a !== void 0 ? _a : '');
    const isTestnetToken = chainId && isTestnetChain(chainId);
    const borderWidth = isTestnetToken ? size / TESTNET_BORDER_DIVISOR : 0;
    const showNetworkLogo = !hideNetworkLogo && chainId && chainId !== UniverseChainId.Mainnet;
    const networkLogoSize = Math.round(size * STATUS_RATIO);
    const borderOffset = isTestnetToken ? BORDER_OFFSET : 0;
    const tokenSize = size - borderWidth - borderOffset;
    if (loading) {
        return _jsx(Loader.Box, { borderRadius: "$roundedFull", height: size, width: size });
    }
    const fallback = (_jsx(Flex, { alignItems: "center", borderRadius: "$roundedFull", height: tokenSize, justifyContent: "center", px: "$spacing8", style: { backgroundColor: background }, width: tokenSize, children: _jsx(Text, { adjustsFontSizeToFit: true, "$platform-web": {
                // adjustFontSizeToFit is a react-native-only prop
                fontSize: 10,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'clip',
            }, allowFontScaling: false, color: validColor(foreground), fontFamily: "$button", fontSize: 17, fontWeight: "500", lineHeight: 14, minimumFontScale: 0.5, numberOfLines: 1, children: symbol === null || symbol === void 0 ? void 0 : symbol.slice(0, 3) }) }));
    const tokenImage = (_jsx(UniversalImage, { allowLocalUri: true, fallback: fallback, size: { height: tokenSize, width: tokenSize }, style: {
            image: {
                borderRadius: size / 2,
                zIndex: zIndexes.default,
            },
        }, testID: "token-image", uri: url !== null && url !== void 0 ? url : undefined, onLoad: () => setShowBackground(true) }));
    return (_jsxs(Flex, { alignItems: "center", height: size, justifyContent: "center", testID: "token-logo", pointerEvents: "auto", width: size, position: "relative", children: [isTestnetToken ? null : (_jsx(Flex, { opacity: showBackground ? 1 : 0, height: "96%", width: "96%", zIndex: zIndexes.background, backgroundColor: colors.white.val, position: "absolute", top: "2%", left: "2%", borderRadius: size / 2 })), tokenImage, isTestnetToken && (_jsx(Flex, { borderRadius: size / 2, borderStyle: "dashed", borderColor: "$neutral3", borderWidth: borderWidth, height: size, width: size, style: { boxSizing: 'border-box' }, position: "absolute" })), showNetworkLogo && (_jsx(Flex, { bottom: -2, position: "absolute", right: -3, zIndex: zIndexes.mask, children: _jsx(NetworkLogo, { borderWidth: networkLogoBorderWidth, chainId: chainId, size: networkLogoSize }) }))] }));
});
//# sourceMappingURL=TokenLogo.js.map