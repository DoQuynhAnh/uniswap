import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from 'ui/src';
import { Shuffle } from 'ui/src/components/icons/Shuffle';
import { zIndexes } from 'ui/src/theme';
import { CurrencyLogo, STATUS_RATIO } from 'uniswap/src/components/CurrencyLogo/CurrencyLogo';
import { TransactionSummaryNetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { TokenLogo } from 'uniswap/src/components/CurrencyLogo/TokenLogo';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
/*
 * Logo, where left 50% of width is taken from one icon (its left 50%)
 * and right side is taken from another icon (its right 50%)
 */
export function SplitLogo({ size, inputCurrencyInfo, outputCurrencyInfo, inputLogoUrl, outputLogoUrl, chainId, customIcon, }) {
    const iconSize = size / 2;
    const networkLogo = chainId && chainId !== UniverseChainId.Mainnet ? (_jsx(TransactionSummaryNetworkLogo, { chainId: chainId, size: size * STATUS_RATIO })) : undefined;
    return (_jsxs(Flex, { height: size, width: size, children: [_jsx(Flex, { left: 0, overflow: "hidden", position: "absolute", testID: "input-currency-logo-container", top: 0, width: iconSize - 1 /* -1 to allow for space between the icons */, children: inputLogoUrl ? (_jsx(TokenLogo, { hideNetworkLogo: true, url: inputLogoUrl, chainId: chainId !== null && chainId !== void 0 ? chainId : undefined, size: size })) : (_jsx(CurrencyLogo, { hideNetworkLogo: true, currencyInfo: inputCurrencyInfo, size: size })) }), _jsx(Flex, { flexDirection: "row-reverse", overflow: "hidden", position: "absolute", right: 0, testID: "output-currency-logo-container", top: 0, width: iconSize - 1 /* -1 to allow for space between the icons */, children: outputLogoUrl ? (_jsx(TokenLogo, { hideNetworkLogo: true, url: outputLogoUrl, chainId: chainId !== null && chainId !== void 0 ? chainId : undefined, size: size })) : (_jsx(CurrencyLogo, { hideNetworkLogo: true, currencyInfo: outputCurrencyInfo, size: size })) }), (customIcon || networkLogo) && (_jsx(Flex, { bottom: -4, position: "absolute", right: -4, zIndex: zIndexes.mask, children: customIcon !== null && customIcon !== void 0 ? customIcon : networkLogo }))] }));
}
export const BridgeIcon = (_jsx(Flex, { testID: "bridge-icon", borderColor: "$surface1", borderWidth: "$spacing2", borderRadius: "$roundedFull", overflow: "hidden", backgroundColor: "$statusSuccess", p: "$spacing1", children: _jsx(Shuffle, { size: "$icon.12", color: "$surface1", backgroundColor: "$statusSuccess" }) }));
//# sourceMappingURL=SplitLogo.js.map