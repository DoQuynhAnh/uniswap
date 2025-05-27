import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea } from 'ui/src';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { iconSizes } from 'ui/src/theme';
import { InfoTooltip } from 'uniswap/src/components/tooltip/InfoTooltip';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
export function TransactionSettingRow({ setting, setSelectedSetting, warning, }) {
    const { renderTitle, renderTooltip, Control, Description, Screen, InfoModal, featureFlag } = setting;
    const { t } = useTranslation();
    const [showInfoModal, setShowInfoModal] = useState(false);
    const onPressControl = useCallback(() => {
        // If the setting has a screen, navigate to it, else inline control will handle the interaction.
        if (Screen) {
            setSelectedSetting(setting);
        }
    }, [Screen, setting, setSelectedSetting]);
    const InfoIcon = _jsx(InfoCircleFilled, { color: "$neutral3", size: "$icon.16" });
    const row = (_jsx(_Fragment, { children: _jsxs(Flex, { children: [_jsxs(Flex, { centered: true, row: true, columnGap: "$spacing16", justifyContent: "space-between", children: [_jsx(TouchableAreaWrapper, { isTouchable: !!InfoModal, onPress: () => setShowInfoModal(true), children: _jsxs(Flex, { gap: "$spacing2", justifyContent: "center", minHeight: 48, children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", children: [_jsx(Text, { color: "$neutral1", variant: "subheading2", children: renderTitle(t) }), InfoModal && InfoIcon, !!renderTooltip && _jsx(InfoTooltip, { trigger: InfoIcon, text: renderTooltip(t) })] }), Description && (_jsx(Text, { color: "$neutral2", variant: "body3", children: _jsx(Description, {}) })), warning] }) }), _jsxs(TouchableArea, { group: true, flexDirection: "row", alignItems: "center", gap: "$spacing4", justifyContent: "flex-end", flexShrink: 1, onPress: onPressControl, children: [_jsx(Control, {}), Screen && _jsx(RotatableChevron, { color: "$neutral3", direction: "right", height: iconSizes.icon24 })] })] }), InfoModal && _jsx(InfoModal, { isOpen: showInfoModal, onClose: () => setShowInfoModal(false) })] }) }));
    // Conditional wrapper logic is needed to follow rules of hooks due to optional feature flag
    if (featureFlag) {
        return _jsx(GateWrapper, { featureFlag: featureFlag, children: row });
    }
    else {
        return row;
    }
}
function GateWrapper({ featureFlag, children }) {
    const enabled = useFeatureFlag(featureFlag);
    if (!enabled) {
        return null;
    }
    return _jsx(_Fragment, { children: children });
}
function TouchableAreaWrapper({ isTouchable, onPress, children, }) {
    return isTouchable ? _jsx(TouchableArea, { onPress: onPress, children: children }) : children;
}
//# sourceMappingURL=TransactionSettingsRow.js.map