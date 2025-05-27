import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Trans } from 'react-i18next';
import { Flex, Text, isWeb } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { InfoCircle } from 'ui/src/components/icons/InfoCircle';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { INSUFFICIENT_NATIVE_TOKEN_TEXT_VARIANT } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/constants';
export function InsufficientNativeTokenBaseComponent({ parsedInsufficientNativeTokenWarning, }) {
    const { nativeCurrency, networkColors, networkName, flow } = parsedInsufficientNativeTokenWarning;
    const currencySymbol = nativeCurrency.symbol;
    const shouldShowNetworkName = nativeCurrency.symbol === 'ETH' && nativeCurrency.chainId !== UniverseChainId.Mainnet;
    const textComponentWithNetworkColor = (_jsx(Text, { style: { color: networkColors.foreground }, variant: INSUFFICIENT_NATIVE_TOKEN_TEXT_VARIANT }));
    return (_jsxs(Flex, { centered: true, row: true, backgroundColor: isWeb ? '$surface2' : undefined, borderRadius: "$rounded12", gap: "$spacing8", p: isWeb ? '$spacing16' : '$none', children: [isWeb && (_jsx(Flex, { children: _jsx(AlertTriangleFilled, { color: "$neutral2", size: "$icon.16" }) })), _jsx(Flex, { fill: isWeb, children: _jsx(Text, { color: "$neutral2", variant: INSUFFICIENT_NATIVE_TOKEN_TEXT_VARIANT, children: shouldShowNetworkName ? (flow === 'swap' ? (_jsx(Trans, { components: {
                            highlight: textComponentWithNetworkColor,
                        }, i18nKey: "swap.warning.insufficientGas.message.withNetwork", values: {
                            currencySymbol,
                            networkName,
                        } })) : (_jsx(Trans, { components: {
                            highlight: textComponentWithNetworkColor,
                        }, i18nKey: "send.warning.insufficientGas.message.withNetwork", values: {
                            currencySymbol,
                            networkName,
                        } }))) : flow === 'swap' ? (_jsx(Trans, { components: {
                            highlight: textComponentWithNetworkColor,
                        }, i18nKey: "swap.warning.insufficientGas.message.withoutNetwork", values: { currencySymbol } })) : (_jsx(Trans, { components: {
                            highlight: textComponentWithNetworkColor,
                        }, i18nKey: "send.warning.insufficientGas.message.withoutNetwork", values: { currencySymbol } })) }) }), !isWeb && (_jsx(Flex, { children: _jsx(InfoCircle, { color: "$neutral3", size: "$icon.16" }) }))] }));
}
//# sourceMappingURL=InsufficientNativeTokenBaseComponent.js.map