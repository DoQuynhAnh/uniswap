import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Button, Flex } from 'ui/src';
import { validColor } from 'ui/src/theme';
import { useUniswapContext } from 'uniswap/src/contexts/UniswapContext';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { useIsSupportedFiatOnRampCurrency } from 'uniswap/src/features/fiatOnRamp/hooks';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { useNetworkColors } from 'uniswap/src/utils/colors';
export function BuyNativeTokenButton({ nativeCurrencyInfo, onPress, usesStaticText, usesStaticTheme, }) {
    var _a, _b, _c, _d;
    const { t } = useTranslation();
    const { defaultChainId } = useEnabledChains();
    const { foreground, background } = useNetworkColors((_b = (_a = nativeCurrencyInfo.currency) === null || _a === void 0 ? void 0 : _a.chainId) !== null && _b !== void 0 ? _b : defaultChainId);
    const textColorFromChain = validColor(foreground);
    const backgroundColorFromChain = validColor(background);
    const { navigateToFiatOnRamp } = useUniswapContext();
    const { currency: fiatOnRampCurrency, isLoading } = useIsSupportedFiatOnRampCurrency((_c = nativeCurrencyInfo === null || nativeCurrencyInfo === void 0 ? void 0 : nativeCurrencyInfo.currencyId) !== null && _c !== void 0 ? _c : '', !nativeCurrencyInfo);
    const onPressBuyFiatOnRamp = () => {
        onPress === null || onPress === void 0 ? void 0 : onPress();
        navigateToFiatOnRamp({ prefilledCurrency: fiatOnRampCurrency });
    };
    // prevent users from attempting to buy an unsupported token
    if (!fiatOnRampCurrency) {
        return null;
    }
    return (_jsx(Trace, { logPress: true, element: ElementName.BuyNativeTokenButton, children: _jsx(Flex, { row: true, alignSelf: "stretch", children: _jsx(Button, { isDisabled: isLoading, backgroundColor: usesStaticTheme ? undefined : backgroundColorFromChain, borderColor: "$transparent", size: "medium", emphasis: usesStaticTheme ? 'secondary' : 'primary', onPress: onPressBuyFiatOnRamp, children: _jsx(Button.Text, { color: usesStaticTheme ? undefined : textColorFromChain, children: usesStaticText
                        ? t('swap.warning.insufficientGas.button.buyWithCard')
                        : t('swap.warning.insufficientGas.button.buy', { tokenSymbol: (_d = nativeCurrencyInfo.currency.symbol) !== null && _d !== void 0 ? _d : '' }) }) }) }) }));
}
//# sourceMappingURL=BuyNativeTokenButton.js.map