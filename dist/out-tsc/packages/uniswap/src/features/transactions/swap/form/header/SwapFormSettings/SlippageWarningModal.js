import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Button, Flex, Text, TouchableArea } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { X } from 'ui/src/components/icons/X';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { isMobileApp, isMobileWeb } from 'utilities/src/platform';
export default function SlippageWarningModal({ isOpen, onClose }) {
    const { t } = useTranslation();
    return (_jsxs(Modal, { isDismissible: true, name: ModalName.SlippageWarningModal, gap: "$gap16", padding: isMobileApp ? '$spacing24' : '$spacing16', height: "max-content", isModalOpen: isOpen, maxWidth: 420, onClose: onClose, children: [!isMobileApp && !isMobileWeb && (_jsx(TouchableArea, { alignSelf: "flex-end", onPress: onClose, children: _jsx(X, { color: "$neutral2", size: "$icon.24" }) })), _jsxs(Flex, { flexDirection: "column", alignItems: "center", gap: "$gap24", children: [_jsx(Flex, { gap: "$gap16", backgroundColor: "$statusCritical2", borderRadius: "$rounded12", p: "$spacing12", children: _jsx(AlertTriangleFilled, { color: "$statusCritical", size: "$icon.24" }) }), _jsxs(Flex, { centered: true, rowGap: "$spacing8", children: [_jsx(Text, { variant: "subheading1", children: t('swap.settings.slippage.warning') }), _jsx(Text, { variant: "body2", color: "$neutral2", px: "$spacing8", textAlign: "center", children: t('swap.settings.slippage.warning.description') })] }), _jsx(Flex, { centered: true, row: true, width: "100%", px: isMobileApp ? '$spacing24' : '$spacing6', children: _jsx(Button, { emphasis: "secondary", onPress: onClose, children: t('common.close') }) })] })] }));
}
//# sourceMappingURL=SlippageWarningModal.js.map