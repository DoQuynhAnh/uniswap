import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, isWeb, Popover, Text, Tooltip, TouchableArea } from 'ui/src';
import { Settings } from 'ui/src/components/icons/Settings';
import { SettingsWarning } from 'ui/src/components/icons/SettingsWarning';
import { SLIPPAGE_CRITICAL_TOLERANCE } from 'uniswap/src/constants/transactions';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useSlippageSettings } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/useSlippageSettings';
import { getSlippageWarningColor } from 'uniswap/src/features/transactions/swap/utils/styleHelpers';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { isInterface } from 'utilities/src/platform';
const getSettingsIconBackgroundColor = (autoSlippageTolerance, slippageTolerance) => {
    if (!slippageTolerance) {
        return '$transparent';
    }
    if (slippageTolerance >= SLIPPAGE_CRITICAL_TOLERANCE) {
        return '$statusCritical2';
    }
    if (slippageTolerance > autoSlippageTolerance) {
        return '$statusWarning2';
    }
    return '$surface3';
};
const Content = ({ customSlippageTolerance, iconColor, onPress, shouldShowCustomSlippage, iconSize: iconSizeProp, }) => {
    const { autoSlippageTolerance } = useSlippageSettings();
    const { formatPercent } = useLocalizationContext();
    const { backgroundColor, contentColor, IconComponent } = useMemo(() => {
        const iconBackgroundColor = getSettingsIconBackgroundColor(autoSlippageTolerance, customSlippageTolerance);
        const fillColor = getSlippageWarningColor(customSlippageTolerance !== null && customSlippageTolerance !== void 0 ? customSlippageTolerance : 0, autoSlippageTolerance, iconColor);
        const SettingsIconComponent = customSlippageTolerance && customSlippageTolerance > SLIPPAGE_CRITICAL_TOLERANCE ? SettingsWarning : Settings;
        return { backgroundColor: iconBackgroundColor, contentColor: fillColor, IconComponent: SettingsIconComponent };
    }, [customSlippageTolerance, iconColor, autoSlippageTolerance]);
    const iconSize = iconSizeProp !== null && iconSizeProp !== void 0 ? iconSizeProp : (isWeb ? 20 : 24);
    return (_jsx(Popover.Trigger, { children: _jsx(TouchableArea, { testID: TestID.SwapSettings, onPress: onPress, children: _jsxs(Flex, { centered: true, row: true, backgroundColor: backgroundColor, borderRadius: "$roundedFull", gap: "$spacing4", px: shouldShowCustomSlippage ? '$spacing8' : '$spacing4', py: "$spacing4", height: isInterface ? '$spacing32' : 'auto', children: [shouldShowCustomSlippage && (_jsx(Text, { color: contentColor, variant: "buttonLabel3", children: formatPercent(customSlippageTolerance) })), _jsx(IconComponent, { color: contentColor, size: iconSize })] }) }) }));
};
export function SwapFormSettingsButton({ shouldShowTooltip, ...rest }) {
    const { t } = useTranslation();
    if (shouldShowTooltip) {
        return (_jsxs(Tooltip, { children: [_jsx(Tooltip.Trigger, { children: _jsx(Content, { ...rest }) }), _jsx(Tooltip.Content, { children: _jsx(Text, { variant: "body4", children: t('swap.settings.slippage.warning.hover') }) })] }));
    }
    return _jsx(Content, { ...rest });
}
//# sourceMappingURL=SwapFormSettingsButton.js.map