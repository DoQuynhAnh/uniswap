import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Loader, Text, TouchableArea, UniversalImage, useIsDarkMode } from 'ui/src';
import { borderRadii, iconSizes } from 'ui/src/theme';
import { getOptionalServiceProviderLogo } from 'uniswap/src/features/fiatOnRamp/utils';
function LogoLoader() {
    return _jsx(Loader.Box, { borderRadius: "$roundedFull", height: iconSizes.icon40, width: iconSizes.icon40 });
}
export function FORQuoteItem({ serviceProvider, onPress, hoverIcon, isLoading, }) {
    const { t } = useTranslation();
    const isDarkMode = useIsDarkMode();
    const logoUrl = getOptionalServiceProviderLogo(serviceProvider === null || serviceProvider === void 0 ? void 0 : serviceProvider.logos, isDarkMode);
    const [hovered, setHovered] = useState(false);
    if (!serviceProvider) {
        return null;
    }
    const paymentMethods = serviceProvider.paymentMethods.length > 4
        ? t('fiatOnRamp.quote.type.list', { optionsList: serviceProvider.paymentMethods.slice(0, 3).join(', ') })
        : serviceProvider.paymentMethods.join(', ');
    return (_jsx(TouchableArea, { disabled: isLoading, disabledStyle: {
            cursor: 'wait',
        }, onMouseEnter: () => setHovered(!isLoading), onMouseLeave: () => setHovered(false), onPress: isLoading ? undefined : onPress, children: _jsx(Flex, { backgroundColor: "$surface1", borderColor: "$surface3", borderRadius: "$rounded20", borderWidth: "$spacing1", hoverStyle: { backgroundColor: '$surface1Hovered' }, pl: "$spacing16", pr: "$spacing8", py: "$spacing16", shadowColor: "$shadowColor", shadowOpacity: 0.03, shadowRadius: 4, shadowOffset: { height: 1, width: 0 }, style: { transition: 'background-color 0.2s ease-in-out' }, children: _jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing12", maxWidth: "calc(100% - 48px)", children: [_jsx(Flex, { children: logoUrl ? (_jsx(UniversalImage, { fallback: _jsx(LogoLoader, {}), size: {
                                        height: iconSizes.icon40,
                                        width: iconSizes.icon40,
                                    }, style: {
                                        image: { borderRadius: borderRadii.rounded8 },
                                    }, uri: logoUrl })) : (_jsx(LogoLoader, {})) }), _jsxs(Flex, { shrink: true, children: [_jsx(Text, { color: "$neutral1", variant: "subheading2", children: serviceProvider.name }), paymentMethods && (_jsx(Text, { color: "$neutral2", variant: "body4", children: paymentMethods }))] })] }), hovered && hoverIcon] }) }) }));
}
//# sourceMappingURL=FORQuoteItem.js.map