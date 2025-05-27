import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Button, Flex } from 'ui/src';
import { validColor } from 'ui/src/theme';
import { useUniswapContext } from 'uniswap/src/contexts/UniswapContext';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { useNetworkColors } from 'uniswap/src/utils/colors';
export function BridgeTokenButton({ inputToken, outputToken, outputNetworkName, onPress, }) {
    var _a, _b;
    const { t } = useTranslation();
    const { foreground, background } = useNetworkColors((_b = (_a = outputToken.currency) === null || _a === void 0 ? void 0 : _a.chainId) !== null && _b !== void 0 ? _b : UniverseChainId.Mainnet);
    const primaryColor = validColor(foreground);
    const backgroundColor = validColor(background);
    const { navigateToSwapFlow } = useUniswapContext();
    const onPressBridgeToken = () => {
        onPress === null || onPress === void 0 ? void 0 : onPress();
        navigateToSwapFlow({
            inputCurrencyId: inputToken.currencyId,
            outputCurrencyId: outputToken.currencyId,
        });
    };
    if (!outputToken.currency.symbol) {
        throw new Error('Unexpected render of `BridgeTokenButton` without a token symbol for currency ' + outputToken.currencyId);
    }
    return (_jsx(Trace, { logPress: true, element: ElementName.BuyNativeTokenButton, children: _jsx(Flex, { row: true, alignSelf: "stretch", children: _jsx(Button, { backgroundColor: backgroundColor, borderColor: "$transparent", hoverStyle: {
                    borderColor: primaryColor,
                }, size: "medium", emphasis: "text-only", "primary-color": primaryColor, onPress: onPressBridgeToken, children: _jsx(Button.Text, { color: primaryColor, children: t('swap.warning.insufficientGas.button.bridge', {
                        tokenSymbol: outputToken.currency.symbol,
                        networkName: outputNetworkName,
                    }) }) }) }) }));
}
//# sourceMappingURL=BridgeTokenButton.js.map