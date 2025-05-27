import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { WarningModal } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
export function SwapWarningModal({ isOpen, onClose, parsedWarning, }) {
    var _a;
    const { t } = useTranslation();
    const { warning, Icon, color } = parsedWarning;
    return (_jsx(WarningModal, { caption: warning.message, acknowledgeText: t('common.button.close'), icon: Icon && _jsx(Icon, { color: color.text, size: "$icon.24" }), isOpen: isOpen, modalName: ModalName.SwapWarning, severity: warning.severity, title: (_a = warning.title) !== null && _a !== void 0 ? _a : '', onClose: onClose, onAcknowledge: onClose }));
}
//# sourceMappingURL=SwapWarningModal.js.map