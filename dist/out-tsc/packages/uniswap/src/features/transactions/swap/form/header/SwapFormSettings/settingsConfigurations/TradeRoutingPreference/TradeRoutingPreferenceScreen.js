import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Flex, Switch, Text, TouchableArea, UniswapXText, isWeb, useSporeColors } from 'ui/src';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { Lightning } from 'ui/src/components/icons/Lightning';
import { UniswapX } from 'ui/src/components/icons/UniswapX';
import { spacing, zIndexes } from 'ui/src/theme';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { WarningModal } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { LearnMoreLink } from 'uniswap/src/components/text/LearnMoreLink';
import { InfoTooltip } from 'uniswap/src/components/tooltip/InfoTooltip';
import WarningIcon from 'uniswap/src/components/warnings/WarningIcon';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { useUniswapContextSelector } from 'uniswap/src/contexts/UniswapContext';
import { ProtocolItems } from 'uniswap/src/data/tradingApi/__generated__';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName, ModalName } from 'uniswap/src/features/telemetry/constants';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSwapFormSettingsContext } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/SwapFormSettings';
import { UniswapXInfo } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/TradeRoutingPreference/UniswapXInfo';
import { V4HooksInfo } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/TradeRoutingPreference/V4HooksInfo';
import { isDefaultTradeRouteOptions } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/TradeRoutingPreference/isDefaultTradeRouteOptions';
import { useV4SwapEnabled } from 'uniswap/src/features/transactions/swap/hooks/useV4SwapEnabled';
import { DEFAULT_PROTOCOL_OPTIONS, } from 'uniswap/src/features/transactions/swap/utils/protocols';
import { openUri } from 'uniswap/src/utils/linking';
import { isExtension, isInterface } from 'utilities/src/platform';
import { useEvent } from 'utilities/src/react/hooks';
export function TradeRoutingPreferenceScreen() {
    const { t } = useTranslation();
    const getIsUniswapXSupported = useUniswapContextSelector((state) => state.getIsUniswapXSupported);
    const { selectedProtocols, isV4HookPoolsEnabled, updateTransactionSettings } = useTransactionSettingsContext();
    const isV4HooksToggleFFEnabled = useFeatureFlag(FeatureFlags.SwapSettingsV4HooksToggle);
    const [isDefault, setIsDefault] = useState(isDefaultTradeRouteOptions(selectedProtocols, isV4HookPoolsEnabled, isV4HooksToggleFFEnabled));
    const uniswapXEnabledFlag = useFeatureFlag(FeatureFlags.UniswapX);
    const { chainId } = useSwapFormContext().derivedSwapInfo;
    const isUniswapXSupported = getIsUniswapXSupported === null || getIsUniswapXSupported === void 0 ? void 0 : getIsUniswapXSupported(chainId);
    const uniswapXEnabled = uniswapXEnabledFlag && chainId !== UniverseChainId.MonadTestnet;
    const v4SwapEnabled = useV4SwapEnabled(chainId);
    const chainName = getChainInfo(chainId).name;
    const restrictionDescription = t('swap.settings.protection.subtitle.unavailable', { chainName });
    // We prevent the user from deselecting all options
    const onlyOneProtocolSelected = selectedProtocols.length === 1 && !isV4HookPoolsEnabled;
    const classicProtocolsCount = selectedProtocols.filter((p) => {
        if (!v4SwapEnabled && p === ProtocolItems.V4) {
            return false;
        }
        return p !== ProtocolItems.UNISWAPX_V2;
    }).length;
    // Prevent the user from deselecting all on-chain protocols (AKA only selecting UniswapX)
    const onlyOneClassicProtocolSelected = (classicProtocolsCount === 1 && !isV4HookPoolsEnabled) || (classicProtocolsCount === 0 && isV4HookPoolsEnabled);
    const toggleProtocol = useCallback((protocol) => {
        if (selectedProtocols.includes(protocol)) {
            updateTransactionSettings({ selectedProtocols: selectedProtocols.filter((p) => p !== protocol) });
        }
        else {
            updateTransactionSettings({ selectedProtocols: [...selectedProtocols, protocol] });
        }
    }, [updateTransactionSettings, selectedProtocols]);
    const toggleV4Hooks = useCallback(() => {
        updateTransactionSettings({ isV4HookPoolsEnabled: !isV4HookPoolsEnabled });
    }, [updateTransactionSettings, isV4HookPoolsEnabled]);
    const toggleDefault = useCallback(() => {
        setIsDefault(!isDefault);
        if (!isDefault) {
            updateTransactionSettings({ selectedProtocols: DEFAULT_PROTOCOL_OPTIONS, isV4HookPoolsEnabled: true });
        }
    }, [updateTransactionSettings, isDefault]);
    const getProtocolTitle = createGetProtocolTitle({
        isUniswapXSupported,
        t,
    });
    return (_jsxs(Flex, { gap: "$spacing16", my: "$spacing16", children: [_jsx(OptionRow, { alignItems: "flex-start", active: isDefault, description: _jsx(DefaultOptionDescription, { v4SwapEnabled: v4SwapEnabled }), elementName: ElementName.SwapRoutingPreferenceDefault, title: _jsx(DefaultOptionTitle, { v4SwapEnabled: v4SwapEnabled }), cantDisable: false, footerContent: _jsx(DefaultOptionFooterContent, { isUniswapXSupported: isUniswapXSupported, isUniswapXEnabled: uniswapXEnabled, isDefault: isDefault }), onSelect: toggleDefault }), !isDefault && (_jsxs(_Fragment, { children: [uniswapXEnabledFlag && (_jsx(OptionRow, { active: isUniswapXSupported === false
                            ? false
                            : uniswapXEnabled && selectedProtocols.includes(ProtocolItems.UNISWAPX_V2), elementName: ElementName.SwapRoutingPreferenceUniswapX, title: getProtocolTitle(ProtocolItems.UNISWAPX_V2), cantDisable: onlyOneProtocolSelected, disabled: isUniswapXSupported === false || !uniswapXEnabled, description: !uniswapXEnabled ? restrictionDescription : undefined, onSelect: () => toggleProtocol(ProtocolItems.UNISWAPX_V2) })), _jsx(OptionRow, { active: v4SwapEnabled && selectedProtocols.includes(ProtocolItems.V4), elementName: ElementName.SwapRoutingPreferenceV4, title: getProtocolTitle(ProtocolItems.V4), cantDisable: onlyOneClassicProtocolSelected, disabled: !v4SwapEnabled, description: !v4SwapEnabled ? restrictionDescription : undefined, onSelect: () => toggleProtocol(ProtocolItems.V4) }), isV4HooksToggleFFEnabled && (_jsx(OptionRow, { active: isV4HookPoolsEnabled, elementName: ElementName.SwapRoutingPreferenceV4Hooks, title: _jsx(V4HooksInfo, {}), cantDisable: onlyOneClassicProtocolSelected, disabled: !v4SwapEnabled, onSelect: toggleV4Hooks })), _jsx(OptionRow, { active: selectedProtocols.includes(ProtocolItems.V3), elementName: ElementName.SwapRoutingPreferenceV3, title: getProtocolTitle(ProtocolItems.V3), cantDisable: onlyOneClassicProtocolSelected, onSelect: () => toggleProtocol(ProtocolItems.V3) }), _jsx(OptionRow, { active: selectedProtocols.includes(ProtocolItems.V2), elementName: ElementName.SwapRoutingPreferenceV3, title: getProtocolTitle(ProtocolItems.V2), cantDisable: onlyOneClassicProtocolSelected, onSelect: () => toggleProtocol(ProtocolItems.V2) })] }))] }));
}
function createGetProtocolTitle(ctx) {
    const { isUniswapXSupported, t } = ctx;
    return (preference) => {
        switch (preference) {
            case ProtocolItems.UNISWAPX_V2: {
                if (isUniswapXSupported === false) {
                    return _jsx(UniswapXTitleInfoTooltip, {});
                }
                return _jsx(UniswapXInfo, { tooltipTrigger: _jsx(UniswapXInfoTooltipTrigger, {}) });
            }
            case ProtocolItems.V2:
                return t('swap.settings.routingPreference.option.v2.title');
            case ProtocolItems.V3:
                return t('swap.settings.routingPreference.option.v3.title');
            case ProtocolItems.V4:
                return t('swap.settings.routingPreference.option.v4.title');
            default:
                return _jsx(_Fragment, {});
        }
    };
}
function UniswapXTitleInfoTooltip() {
    const [forceCloseTooltip, setForceCloseTooltip] = useState(undefined);
    const [showModal, setShowModal] = useState(false);
    if (isWeb) {
        return (_jsx(InfoTooltip, { text: _jsx(UniswapXInfoTooltipText, { onPress: () => setForceCloseTooltip(true) }), trigger: _jsx(UniswapXInfoTooltipTrigger, {}), placement: "top", open: forceCloseTooltip === undefined ? undefined : !forceCloseTooltip }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(TouchableArea, { onPress: () => setShowModal(true), children: _jsx(UniswapXInfoTooltipTrigger, {}) }), _jsx(UniswapXInfoModal, { isOpen: showModal, onClose: () => setShowModal(false) })] }));
}
function UniswapXInfoTooltipTrigger() {
    return (_jsx(Text, { alignItems: "center", color: "$neutral2", variant: "subheading2", flexDirection: "row", flexShrink: 0, display: "inline-flex", gap: "$gap4", 
        // This is to offset the left padding built-into the UniswapX icon
        left: -spacing.spacing2, children: _jsx(Trans, { components: {
                icon: _jsx(UniswapX, { size: "$icon.16" }),
                gradient: _jsx(UniswapXText, { height: 18, variant: "subheading2" }),
                info: _jsx(InfoCircleFilled, { color: "$neutral3", size: "$icon.16" }),
            }, i18nKey: "uniswapx.item" }) }));
}
function OptionRow({ title, description, active, elementName, cantDisable, onSelect, disabled, alignItems = 'center', footerContent, }) {
    return (_jsxs(Flex, { flexDirection: "column", gap: "$spacing12", children: [_jsxs(Flex, { row: true, py: "$spacing2", alignItems: alignItems, gap: "$spacing16", justifyContent: "space-between", children: [_jsxs(Flex, { shrink: true, gap: "$spacing4", children: [typeof title === 'string' ? (_jsx(Text, { color: "$neutral1", variant: "subheading2", children: title })) : (title), typeof description === 'string' ? (_jsx(Text, { color: "$neutral2", variant: "body3", children: description })) : (description)] }), _jsx(Trace, { element: elementName, logPress: !active, children: _jsx(Switch, { disabled: (active && cantDisable) || disabled, checked: active, variant: "branded", onCheckedChange: onSelect }) })] }), footerContent] }));
}
function DefaultOptionDescription({ v4SwapEnabled }) {
    const { t } = useTranslation();
    const cheapestRouteText = t('swap.settings.routingPreference.option.default.description.preV4');
    const cheapestRouteTextV4 = t('swap.settings.routingPreference.option.default.description');
    return (_jsx(Text, { color: "$neutral2", variant: "body3", textWrap: "pretty", children: v4SwapEnabled ? cheapestRouteTextV4 : cheapestRouteText }));
}
function DefaultOptionFooterContent(props) {
    const { isUniswapXSupported, isUniswapXEnabled, isDefault } = props;
    const showIncludesUniswapX = isUniswapXEnabled && isUniswapXSupported && isDefault;
    const showUniswapXNotSupported = isUniswapXSupported === false && isUniswapXEnabled && isDefault;
    if (showIncludesUniswapX) {
        return (_jsx(UniswapXInfo, { tooltipTrigger: _jsx(Text, { alignItems: "center", color: "$neutral2", variant: "body3", flexDirection: "row", gap: "$gap4", display: "inline-flex", children: _jsx(Trans, { components: {
                        icon: _jsx(UniswapX, { size: "$icon.16" }),
                        gradient: _jsx(UniswapXText, { height: 18, variant: "body3" }),
                    }, i18nKey: "uniswapx.included" }) }) }));
    }
    if (showUniswapXNotSupported) {
        return _jsx(UniswapXNotSupportedDescription, {});
    }
    return null;
}
const UniswapXNotSupportedDescription = () => {
    const { t } = useTranslation();
    const [forceCloseTooltip, setForceCloseTooltip] = useState(undefined);
    const [showModal, setShowModal] = useState(false);
    const trigger = (_jsxs(Flex, { cursor: "default", gap: "$spacing4", alignItems: "flex-start", flexDirection: "row", children: [_jsx(WarningIcon, { color: "$neutral2", size: "$icon.16" }), _jsx(Text, { color: "$neutral2", variant: "body3", children: t('swap.settings.routingPreference.option.default.description.uniswapXUnavailable') })] }));
    if (isWeb) {
        return (_jsx(InfoTooltip, { open: forceCloseTooltip === undefined ? undefined : !forceCloseTooltip, text: _jsx(UniswapXInfoTooltipText, { onPress: () => {
                    setForceCloseTooltip(true);
                } }), placement: "top", trigger: trigger }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(TouchableArea, { onPress: () => setShowModal(true), children: trigger }), _jsx(UniswapXInfoModal, { isOpen: showModal, onClose: () => setShowModal(false) })] }));
};
function UniswapXInfoTooltipText(props) {
    const { t } = useTranslation();
    const handleOnPressUniswapXUnsupported = useUniswapContextSelector((state) => state.handleOnPressUniswapXUnsupported);
    const { handleHideTransactionSettingsModal } = useSwapFormSettingsContext();
    const onPress = useEvent(() => {
        var _a;
        if (isExtension) {
            openUri(uniswapUrls.helpArticleUrls.multichainDelegation).catch(() => { });
        }
        else {
            handleOnPressUniswapXUnsupported === null || handleOnPressUniswapXUnsupported === void 0 ? void 0 : handleOnPressUniswapXUnsupported();
            handleHideTransactionSettingsModal();
        }
        (_a = props === null || props === void 0 ? void 0 : props.onPress) === null || _a === void 0 ? void 0 : _a.call(props);
    });
    const body = isExtension ? t('uniswapx.description.unsupported') : t('wallet.mismatch.popup.description');
    return (_jsx(TouchableArea, { onPress: onPress, children: _jsxs(Flex, { gap: "$spacing4", children: [_jsx(Text, { color: "$neutral2", variant: "body3", children: body }), _jsx(Text, { color: "$accent1", variant: "body3", children: isInterface ? t('common.button.viewDetails') : t('common.button.learn') })] }) }));
}
function DefaultOptionTitle({ v4SwapEnabled }) {
    const { t } = useTranslation();
    if (!v4SwapEnabled) {
        return (_jsx(Text, { color: "$neutral1", variant: "subheading2", children: t('common.default') }));
    }
    return (_jsxs(Flex, { row: true, gap: "$spacing4", alignItems: "center", children: [_jsx(Text, { color: "$neutral1", variant: "subheading2", children: t('common.default') }), _jsx(WarningInfo, { modalProps: {
                    caption: t('swap.settings.routingPreference.option.default.tooltip'),
                    rejectText: t('common.button.close'),
                    modalName: ModalName.SwapSettingsDefaultRoutingInfo,
                }, tooltipProps: {
                    text: t('swap.settings.routingPreference.option.default.tooltip'),
                    placement: 'bottom',
                } })] }));
}
function UniswapXInfoModal({ isOpen, onClose }) {
    const { t } = useTranslation();
    const colors = useSporeColors();
    return (_jsx(WarningModal, { isOpen: isOpen, onClose: onClose, caption: t('uniswapx.description.unsupported'),
        rejectText: t('common.button.close'),
        icon: _jsx(Lightning, { size: "$icon.24", fill: colors.neutral1.val }),
        modalName: ModalName.UniswapXInfo,
        severity: WarningSeverity.None,
        title: t('uniswapx.unavailable.title'),
        zIndex: zIndexes.popover, children: _jsx(LearnMoreLink, { textVariant: isWeb ? 'body4' : 'buttonLabel3', url: uniswapUrls.helpArticleUrls.multichainDelegation }) }));
}
//# sourceMappingURL=TradeRoutingPreferenceScreen.js.map