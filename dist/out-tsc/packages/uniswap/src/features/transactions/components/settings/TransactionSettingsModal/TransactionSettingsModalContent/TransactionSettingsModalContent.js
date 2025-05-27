import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Flex, Text, TouchableArea, isWeb, useMedia } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { iconSizes } from 'ui/src/theme';
import { WarningMessage } from 'uniswap/src/components/WarningMessage/WarningMessage';
import { SLIPPAGE_CRITICAL_TOLERANCE, WARNING_DEADLINE_TOLERANCE } from 'uniswap/src/constants/transactions';
import { TransactionSettingRow } from 'uniswap/src/features/transactions/components/settings/TransactionSettingsModal/TransactionSettingsModalContent/TransactionSettingsRow';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { TransactionSettingId, } from 'uniswap/src/features/transactions/components/settings/types';
import { useSlippageSettings } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/useSlippageSettings';
import { isExtension, isInterfaceDesktop, isMobileApp, isMobileWeb } from 'utilities/src/platform';
function createRowWarningContent({ t, autoSlippageTolerance, customSlippageTolerance, customDeadline, }) {
    const isCriticalSlippage = Boolean(customSlippageTolerance && customSlippageTolerance >= SLIPPAGE_CRITICAL_TOLERANCE);
    return {
        [TransactionSettingId.SLIPPAGE]: {
            condition: !!customSlippageTolerance && customSlippageTolerance > autoSlippageTolerance,
            render: () => (_jsx(WarningMessage, { warningMessage: isCriticalSlippage ? t('swap.settings.slippage.warning') : t('swap.settings.slippage.alert'), tooltipText: isWeb && !isMobileWeb ? t('swap.settings.slippage.warning.hover') : undefined, color: isCriticalSlippage ? '$statusCritical' : '$statusWarning' })),
        },
        [TransactionSettingId.DEADLINE]: {
            condition: !!customDeadline && customDeadline >= WARNING_DEADLINE_TOLERANCE,
            render: () => _jsx(WarningMessage, { warningMessage: t('swap.settings.deadline.warning'), color: "$statusWarning" }),
        },
    };
}
const TopLevelSettings = ({ settings, setSelectedSetting, }) => {
    const { t } = useTranslation();
    const { customSlippageTolerance, customDeadline } = useTransactionSettingsContext();
    const { autoSlippageTolerance } = useSlippageSettings();
    const rowWarningContent = useMemo(() => createRowWarningContent({
        t,
        customSlippageTolerance,
        autoSlippageTolerance,
        customDeadline,
    }), [t, customSlippageTolerance, autoSlippageTolerance, customDeadline]);
    const getSettingsRowWarning = (settingId) => {
        const warning = rowWarningContent[settingId];
        return (warning === null || warning === void 0 ? void 0 : warning.condition) ? warning.render() : undefined;
    };
    return (_jsx(Flex, { gap: isWeb ? '$spacing4' : '$spacing8', py: isWeb ? '$spacing8' : '$spacing12', children: settings.map((setting, index) => {
            const warning = setting.settingId ? getSettingsRowWarning(setting.settingId) : undefined;
            return (_jsx(TransactionSettingRow, { setSelectedSetting: setSelectedSetting, setting: setting, warning: warning }, `swap-setting-${index}`));
        }) }));
};
export const TransactionSettingsModalContent = ({ settings, defaultTitle, initialSelectedSetting, onClose, }) => {
    const { t } = useTranslation();
    const media = useMedia();
    const [SelectedSetting, setSelectedSetting] = useState(initialSelectedSetting);
    const title = SelectedSetting ? SelectedSetting.renderTitle(t) : defaultTitle !== null && defaultTitle !== void 0 ? defaultTitle : t('swap.settings.title');
    const screen = (SelectedSetting === null || SelectedSetting === void 0 ? void 0 : SelectedSetting.Screen) ? (_jsx(SelectedSetting.Screen, {})) : (_jsx(TopLevelSettings, { settings: settings, setSelectedSetting: setSelectedSetting }));
    // For selected settings, show title on all platforms unless it is explicitly hidden via hideTitle.
    // For top level settings (not selected), show title on mobile + small screen web only.
    const isWebSmallScreen = media.sm && isWeb;
    const shouldShowTitle = SelectedSetting
        ? !SelectedSetting.hideTitle
        : isMobileApp || (isWebSmallScreen && !isExtension);
    // Hide close button on desktop web
    const shouldShowCloseButton = !isInterfaceDesktop;
    return (_jsxs(Flex, { gap: "$spacing16", px: isWeb ? '$spacing4' : '$spacing24', py: isWeb ? '$spacing4' : '$spacing12', width: "100%", children: [shouldShowTitle && (_jsxs(Flex, { row: true, justifyContent: "space-between", pt: isWeb ? '$spacing8' : 0, children: [_jsx(TouchableArea, { onPress: () => setSelectedSetting(undefined), children: _jsx(RotatableChevron, { color: SelectedSetting === undefined || SelectedSetting === initialSelectedSetting
                                ? '$transparent'
                                : '$neutral3', height: iconSizes.icon24, width: iconSizes.icon24 }) }), _jsx(Text, { textAlign: "center", variant: "body1", children: title }), _jsx(Flex, { width: iconSizes.icon24 })] })), screen, shouldShowCloseButton && (_jsx(Flex, { centered: true, row: true, pb: isWebSmallScreen ? '$spacing24' : '$spacing8', children: _jsx(Button, { testID: "swap-settings-close", emphasis: "secondary", onPress: onClose, children: t('common.button.save') }) }))] }));
};
//# sourceMappingURL=TransactionSettingsModalContent.js.map