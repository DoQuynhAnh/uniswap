import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Checkbox, Flex, Text, TouchableArea } from 'ui/src';
import { Shuffle } from 'ui/src/components/icons/Shuffle';
import { iconSizes } from 'ui/src/theme';
import { NetworkLogo } from 'uniswap/src/components/CurrencyLogo/NetworkLogo';
import { WarningModal } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { setHasDismissedBridgingWarning } from 'uniswap/src/features/behaviorHistory/slice';
import { getChainLabel, toSupportedChainId } from 'uniswap/src/features/chains/utils';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
export function BridgingModal({ isOpen, derivedSwapInfo, onContinue, onClose, }) {
    var _a, _b;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [doNotShowAgainSelected, setDoNotShowAgainSelected] = useState(true);
    const toggleDoNotShowAgain = useCallback(() => {
        setDoNotShowAgainSelected(!doNotShowAgainSelected);
    }, [doNotShowAgainSelected]);
    const onContinueWithDismiss = useCallback(() => {
        if (doNotShowAgainSelected) {
            dispatch(setHasDismissedBridgingWarning(true));
        }
        onContinue();
    }, [dispatch, doNotShowAgainSelected, onContinue]);
    const fromNetworkRaw = (_a = derivedSwapInfo.currencies.input) === null || _a === void 0 ? void 0 : _a.currency.chainId;
    const fromNetwork = fromNetworkRaw ? toSupportedChainId(fromNetworkRaw) : null;
    const toNetworkRaw = (_b = derivedSwapInfo.currencies.output) === null || _b === void 0 ? void 0 : _b.currency.chainId;
    const toNetwork = toNetworkRaw ? toSupportedChainId(toNetworkRaw) : null;
    const icon = (_jsxs(Flex, { row: true, gap: "$gap8", alignItems: "center", children: [_jsx(NetworkLogo, { chainId: fromNetwork, shape: "square", size: iconSizes.icon28 }), _jsx(Shuffle, { color: "$neutral2", size: "$icon.20" }), _jsx(NetworkLogo, { chainId: toNetwork, shape: "square", size: iconSizes.icon28 })] }));
    return (_jsx(WarningModal, { backgroundIconColor: false, caption: t('swap.bridging.warning.description', {
            fromNetwork: fromNetwork ? getChainLabel(fromNetwork) : '',
            toNetwork: toNetwork ? getChainLabel(toNetwork) : '',
        }), rejectText: t('common.button.back'), acknowledgeText: t('common.button.continue'), icon: icon, isOpen: isOpen, modalName: ModalName.BridgingWarning, severity: WarningSeverity.None, title: t('swap.bridging.title'), onClose: onClose, onAcknowledge: onContinueWithDismiss, children: _jsx(TouchableArea, { onPress: toggleDoNotShowAgain, children: _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", children: [_jsx(Checkbox, { size: "$icon.20", borderColor: "$neutral2", checked: doNotShowAgainSelected, onPress: toggleDoNotShowAgain }), _jsx(Text, { variant: "body3", color: "$neutral2", py: "$spacing8", children: t('common.dontShowAgain') })] }) }) }));
}
//# sourceMappingURL=BridgingModal.js.map