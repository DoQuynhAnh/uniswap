import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Text, isWeb } from 'ui/src';
import { WarningModal } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { InfoTooltip } from 'uniswap/src/components/tooltip/InfoTooltip';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
// similar to `WarningInfo` but it's a controlled modal
export function MaxBalanceInfoModal({ isMax, children, isModalOpen, isTooltipEnabled, currencySymbol, onClose, }) {
    const { t } = useTranslation();
    if (isWeb) {
        if (!isTooltipEnabled) {
            return _jsx(_Fragment, { children: children });
        }
        return (_jsx(InfoTooltip, { text: _jsx(Text, { variant: "body4", textAlign: "left", color: "$neutral2", children: isMax
                    ? t('transaction.networkCost.maxNativeBalance.description')
                    : t('swap.warning.insufficientGas.button', {
                        currencySymbol: currencySymbol || '',
                    }) }), placement: "top", trigger: children }));
    }
    return (_jsxs(_Fragment, { children: [children, _jsx(WarningModal, { caption: t('transaction.networkCost.maxNativeBalance.description'), isOpen: isModalOpen, modalName: ModalName.NativeBalanceInfo, severity: WarningSeverity.Low, title: t('transaction.networkCost.maxNativeBalance.title'), rejectText: t('common.button.close'), onClose: onClose, onReject: onClose })] }));
}
//# sourceMappingURL=MaxBalanceInfoModal.js.map