import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Checkbox, Flex, Text, TouchableArea } from 'ui/src';
import { WarningModal } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { setHasDismissedLowNetworkTokenWarning } from 'uniswap/src/features/behaviorHistory/slice';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
export function LowNativeBalanceModal({ isOpen, onClose, onAcknowledge }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [doNotShowAgainSelected, setDoNotShowAgainSelected] = useState(false);
    const toggleDoNotShowAgain = useCallback(() => {
        setDoNotShowAgainSelected(!doNotShowAgainSelected);
    }, [doNotShowAgainSelected]);
    const handleOnAcknowledge = useCallback(() => {
        if (doNotShowAgainSelected) {
            dispatch(setHasDismissedLowNetworkTokenWarning(true));
        }
        onAcknowledge();
    }, [dispatch, doNotShowAgainSelected, onAcknowledge]);
    return (_jsx(WarningModal, { caption: t('transaction.warning.maxNative.message'), acknowledgeText: t('common.button.continue'), isOpen: isOpen, modalName: ModalName.LowNativeBalanceWarning, severity: WarningSeverity.Low, title: t('transaction.warning.maxNative.title'), rejectText: t('common.button.back'), onAcknowledge: handleOnAcknowledge, onClose: onClose, onReject: onClose, children: _jsx(TouchableArea, { children: _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", children: [_jsx(Checkbox, { size: "$icon.20", borderColor: "$neutral2", checked: doNotShowAgainSelected, onPress: toggleDoNotShowAgain }), _jsx(Text, { variant: "body3", color: "$neutral2", py: "$spacing8", onPress: toggleDoNotShowAgain, children: t('common.dontShowAgain') })] }) }) }));
}
//# sourceMappingURL=LowNativeBalanceModal.js.map