import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { AnimatePresence, Flex, Image, Text } from 'ui/src';
import { UNISWAP_LOGO_LARGE } from 'ui/src/assets';
import { iconSizes } from 'ui/src/theme';
import { ServiceProviderLogoStyles } from 'uniswap/src/features/fiatOnRamp/constants';
import { useAppInsets } from 'uniswap/src/hooks/useAppInsets';
export function FiatOnRampConnectingView({ isOffRamp, amount, quoteCurrencyCode, serviceProviderName, serviceProviderLogo, }) {
    const insets = useAppInsets();
    const { t } = useTranslation();
    return (_jsx(Flex, { justifyContent: "center", position: "relative", children: _jsx(AnimatePresence, { children: _jsxs(Flex, { centered: true, grow: true, style: { marginBottom: insets.bottom }, children: [_jsxs(Flex, { row: true, gap: "$spacing16", pb: "$spacing16", children: [_jsx(Flex, { alignItems: "center", justifyContent: "center", style: ServiceProviderLogoStyles.uniswapLogoWrapper, children: _jsx(Image, { height: iconSizes.icon64, source: UNISWAP_LOGO_LARGE, width: iconSizes.icon64 }) }), serviceProviderLogo] }), _jsxs(Flex, { centered: true, gap: "$spacing8", children: [_jsx(Text, { variant: "subheading1", children: t('fiatOnRamp.connection.message', { serviceProvider: serviceProviderName }) }), quoteCurrencyCode && amount && (_jsx(Text, { color: "$neutral2", variant: "body2", children: isOffRamp
                                    ? t('fiatOffRamp.connection.quote', {
                                        amount,
                                        currencySymbol: quoteCurrencyCode,
                                    })
                                    : t('fiatOnRamp.connection.quote', {
                                        amount,
                                        currencySymbol: quoteCurrencyCode,
                                    }) }))] })] }) }) }));
}
//# sourceMappingURL=FiatOnRampConnectingView.web.js.map