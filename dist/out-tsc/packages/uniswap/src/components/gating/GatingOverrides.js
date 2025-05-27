import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Accordion, Flex, Separator, Switch, Text } from 'ui/src';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { DynamicConfigDropdown } from 'uniswap/src/components/gating/DynamicConfigDropdown';
import { GatingButton } from 'uniswap/src/components/gating/GatingButton';
import { ExperimentRow, LayerRow } from 'uniswap/src/components/gating/Rows';
import { EMBEDDED_WALLET_BASE_URL_OPTIONS, FORCE_UPGRADE_STATUS_OPTIONS, FORCE_UPGRADE_TRANSLATIONS_OPTIONS, } from 'uniswap/src/components/gating/dynamicConfigOverrides';
import { useForceUpgradeStatus } from 'uniswap/src/features/forceUpgrade/hooks/useForceUpgradeStatus';
import { useForceUpgradeTranslations } from 'uniswap/src/features/forceUpgrade/hooks/useForceUpgradeTranslations';
import { DynamicConfigs, EmbeddedWalletConfigKey, ForceUpgradeConfigKey } from 'uniswap/src/features/gating/configs';
import { Experiments, Layers } from 'uniswap/src/features/gating/experiments';
import { WALLET_FEATURE_FLAG_NAMES, getFeatureFlagName } from 'uniswap/src/features/gating/flags';
import { useFeatureFlagWithExposureLoggingDisabled } from 'uniswap/src/features/gating/hooks';
import { getOverrideAdapter } from 'uniswap/src/features/gating/sdk/statsig';
import { useEmbeddedWalletBaseUrl } from 'uniswap/src/features/passkey/hooks/useEmbeddedWalletBaseUrl';
import { isMobileApp } from 'utilities/src/platform';
import { useEvent } from 'utilities/src/react/hooks';
export function GatingOverrides() {
    const featureFlagRows = [];
    const sortedFlags = Array.from(WALLET_FEATURE_FLAG_NAMES.entries()).sort(([, nameA], [, nameB]) => nameA.localeCompare(nameB));
    for (const [flag, flagName] of sortedFlags) {
        featureFlagRows.push(_jsx(FeatureFlagRow, { flag: flag }, flagName));
    }
    const experimentRows = [];
    for (const experiment of Object.values(Experiments)) {
        experimentRows.push(_jsxs(Flex, { gap: "$gap8", children: [_jsx(Separator, {}), _jsx(ExperimentRow, { value: experiment }, experiment)] }, experiment));
    }
    const layerRows = [];
    for (const layer of Object.values(Layers)) {
        layerRows.push(_jsxs(Flex, { gap: "$gap8", children: [_jsx(Separator, {}), _jsx(LayerRow, { value: layer }, layer)] }, layer));
    }
    const onClearAllLocalFeatureGateOverrides = useEvent(() => {
        WALLET_FEATURE_FLAG_NAMES.forEach((flag) => {
            getOverrideAdapter().removeGateOverride(flag);
        });
    });
    const onClearAllLocalExperimentConfigOverrides = useEvent(() => {
        const experiments = Object.keys(Experiments);
        experiments.forEach((experiment) => {
            getOverrideAdapter().removeExperimentOverride(experiment);
        });
    });
    const onClearAllLocalLayerConfigOverrides = useEvent(() => {
        const layers = Object.values(Layers);
        layers.forEach((layer) => {
            getOverrideAdapter().removeLayerOverride(layer);
        });
    });
    const onClearAllLocalDynamicConfigOverrides = useEvent(() => {
        const dynamicConfigs = Object.values(DynamicConfigs);
        dynamicConfigs.forEach((config) => {
            getOverrideAdapter().removeDynamicConfigOverride(config);
        });
    });
    const onClearAllGatingOverrides = useEvent(() => {
        getOverrideAdapter().removeAllOverrides();
    });
    return (_jsxs(_Fragment, { children: [_jsx(Text, { variant: "heading3", children: "Gating" }), _jsxs(Flex, { flexDirection: "column", children: [_jsxs(Accordion.Item, { value: "feature-flags", children: [_jsx(AccordionHeader, { title: "\u26F3\uFE0F Feature Flags" }), _jsxs(Accordion.Content, { children: [_jsx(GatingButton, { onPress: onClearAllLocalFeatureGateOverrides, children: "Clear all local feature gate overrides" }), _jsx(Flex, { gap: "$spacing12", mt: "$spacing12", children: featureFlagRows })] })] }), _jsxs(Accordion.Item, { value: "experiments", children: [_jsx(AccordionHeader, { title: "\uD83D\uDD2C Experiments" }), _jsxs(Accordion.Content, { children: [_jsx(GatingButton, { onPress: onClearAllLocalExperimentConfigOverrides, children: "Clear all local experiment/config overrides" }), _jsx(Flex, { gap: "$spacing12", mt: "$spacing12", children: experimentRows })] })] }), _jsxs(Accordion.Item, { value: "layers", children: [_jsx(AccordionHeader, { title: " \uD83D\uDC87 Layers" }), _jsxs(Accordion.Content, { children: [_jsx(GatingButton, { onPress: onClearAllLocalLayerConfigOverrides, children: "Clear all local layer/config overrides" }), _jsx(Flex, { gap: "$spacing12", mt: "$spacing12", children: layerRows })] })] }), _jsxs(Accordion.Item, { value: "dynamic-configs", children: [_jsx(AccordionHeader, { title: "\uD83D\uDD7A Dynamic Configs" }), _jsxs(Accordion.Content, { children: [_jsx(GatingButton, { onPress: onClearAllLocalDynamicConfigOverrides, children: "Clear all local dynamic config overrides" }), _jsxs(Flex, { gap: "$spacing12", mt: "$spacing12", children: [_jsx(DynamicConfigDropdown, { config: DynamicConfigs.EmbeddedWalletConfig, configKey: EmbeddedWalletConfigKey.BaseUrl, label: "Embedded Wallet Base URL", options: EMBEDDED_WALLET_BASE_URL_OPTIONS, selected: useEmbeddedWalletBaseUrl() }), _jsx(DynamicConfigDropdown, { config: DynamicConfigs.ForceUpgrade, configKey: ForceUpgradeConfigKey.Status, label: "Force Upgrade Status", options: FORCE_UPGRADE_STATUS_OPTIONS, selected: useForceUpgradeStatus() }), _jsx(DynamicConfigDropdown, { config: DynamicConfigs.ForceUpgrade, configKey: ForceUpgradeConfigKey.Translations, label: "Force Upgrade Translations", options: FORCE_UPGRADE_TRANSLATIONS_OPTIONS, selected: JSON.stringify(useForceUpgradeTranslations()) })] })] })] })] }), _jsx(Flex, { row: true, children: _jsx(GatingButton, { mt: "$spacing12", onPress: onClearAllGatingOverrides, children: "Clear all gating overrides" }) })] }));
}
export function AccordionHeader({ title, testId }) {
    return (_jsx(Accordion.Header, { mt: "$spacing12", testID: testId, children: _jsx(Accordion.Trigger, { width: "100%", children: ({ open }) => (_jsx(_Fragment, { children: _jsxs(Flex, { row: true, justifyContent: "space-between", children: [_jsx(Text, { variant: "subheading1", children: title }), _jsx(RotatableChevron, { direction: open ? 'up' : 'down' })] }) })) }) }));
}
function FeatureFlagRow({ flag }) {
    const status = useFeatureFlagWithExposureLoggingDisabled(flag);
    const name = getFeatureFlagName(flag);
    const onChackedChange = useCallback((newValue) => {
        getOverrideAdapter().overrideGate(name, newValue);
    }, [name]);
    return (_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing16", width: "100%", children: [_jsx(Flex, { flex: 1, mr: "$spacing8", children: _jsx(Text, { adjustsFontSizeToFit: true, variant: "body1", numberOfLines: isMobileApp ? 1 : undefined, children: name }) }), _jsx(Flex, { minWidth: 52, children: _jsx(Switch, { checked: status, variant: "branded", onCheckedChange: onChackedChange }) })] }));
}
//# sourceMappingURL=GatingOverrides.js.map