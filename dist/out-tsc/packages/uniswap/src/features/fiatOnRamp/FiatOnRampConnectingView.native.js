import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { Flex, Text, useIsDarkMode } from 'ui/src';
import { FOR_CONNECTING_BACKGROUND_DARK, FOR_CONNECTING_BACKGROUND_LIGHT, UNISWAP_LOGO_LARGE } from 'ui/src/assets';
import { AnimatedFlex } from 'ui/src/components/layout/AnimatedFlex';
import { iconSizes } from 'ui/src/theme';
import { SERVICE_PROVIDER_ICON_BORDER_RADIUS, ServiceProviderLogoStyles, } from 'uniswap/src/features/fiatOnRamp/constants';
import { useAppInsets } from 'uniswap/src/hooks/useAppInsets';
export function FiatOnRampConnectingView({ isOffRamp, amount, quoteCurrencyCode, serviceProviderName, serviceProviderLogo, }) {
    const insets = useAppInsets();
    const { t } = useTranslation();
    const isDarkMode = useIsDarkMode();
    return (_jsx(ImageBackground, { resizeMode: "cover", source: isDarkMode ? FOR_CONNECTING_BACKGROUND_DARK : FOR_CONNECTING_BACKGROUND_LIGHT, style: styles.background, children: _jsxs(AnimatedFlex, { centered: true, grow: true, entering: FadeIn, exiting: FadeOut, style: { marginBottom: insets.bottom }, children: [_jsxs(Flex, { row: true, gap: "$spacing16", pb: "$spacing16", children: [_jsx(Flex, { alignItems: "center", justifyContent: "center", style: styles.uniswapLogoWrapper, children: _jsx(Image, { source: UNISWAP_LOGO_LARGE, style: styles.uniswapLogo }) }), serviceProviderLogo] }), _jsxs(Flex, { centered: true, gap: "$spacing8", children: [_jsx(Text, { variant: "subheading1", children: t('fiatOnRamp.connection.message', { serviceProvider: serviceProviderName }) }), quoteCurrencyCode && amount && (_jsx(Text, { color: "$neutral2", variant: "body2", children: isOffRamp
                                ? t('fiatOffRamp.connection.quote', {
                                    amount,
                                    currencySymbol: quoteCurrencyCode,
                                })
                                : t('fiatOnRamp.connection.quote', {
                                    amount,
                                    currencySymbol: quoteCurrencyCode,
                                }) }))] })] }) }));
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    uniswapLogo: {
        height: iconSizes.icon64,
        width: iconSizes.icon64,
    },
    uniswapLogoWrapper: {
        backgroundColor: '#FFEFF8', // #FFD8EF with 40% opacity on a white background
        borderRadius: SERVICE_PROVIDER_ICON_BORDER_RADIUS,
        height: ServiceProviderLogoStyles.icon.height,
        width: ServiceProviderLogoStyles.icon.width,
    },
});
//# sourceMappingURL=FiatOnRampConnectingView.native.js.map