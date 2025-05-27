import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { Button, Flex, Text, useSporeColors } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { opacify } from 'ui/src/theme';
import { Modal } from 'uniswap/src/components/modals/Modal';
import { getAlertColor } from 'uniswap/src/components/modals/WarningModal/getAlertColor';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { SwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { isWeb } from 'utilities/src/platform';
export function WarningModalContent({ onClose, onReject, onAcknowledge, modalName, title, titleComponent, caption, captionComponent, rejectText: rejectText, acknowledgeText, severity = WarningSeverity.Medium, children, icon, hideIcon, maxWidth, hideHandlebar = false, backgroundIconColor, analyticsProperties, }) {
    const colors = useSporeColors();
    const { headerText: alertHeaderTextColor } = getAlertColor(severity);
    return (_jsxs(Flex, { centered: true, gap: "$spacing12", maxWidth: maxWidth, pb: isWeb ? '$none' : '$spacing12', pt: hideHandlebar ? '$spacing24' : '$spacing12', px: isWeb ? '$none' : '$spacing24', children: [!hideIcon && (_jsx(Flex, { centered: true, borderRadius: "$rounded12", mb: "$spacing8", p: backgroundIconColor === false ? '$none' : '$spacing12', style: backgroundIconColor === false
                    ? undefined
                    : {
                        backgroundColor: backgroundIconColor !== null && backgroundIconColor !== void 0 ? backgroundIconColor : opacify(12, colors[alertHeaderTextColor].val),
                    }, children: icon !== null && icon !== void 0 ? icon : _jsx(AlertTriangleFilled, { color: alertHeaderTextColor, size: "$icon.24" }) })), title && (_jsx(Text, { textAlign: "center", variant: isWeb ? 'subheading2' : 'body1', children: title })), titleComponent, caption && (_jsx(Text, { color: "$neutral2", textAlign: "center", variant: "body3", children: caption })), captionComponent, children, (rejectText || acknowledgeText) && (_jsxs(Flex, { row: true, alignSelf: "stretch", gap: "$spacing12", pt: children ? '$spacing12' : '$spacing24', children: [rejectText && (_jsx(Trace, { logPress: true, element: ElementName.BackButton, modal: modalName, properties: analyticsProperties, children: _jsx(Button, { emphasis: "secondary", onPress: onReject !== null && onReject !== void 0 ? onReject : onClose, children: rejectText }) })), acknowledgeText && (_jsx(Trace, { logPress: true, element: ElementName.Confirm, modal: modalName, properties: analyticsProperties, children: _jsx(Button, { testID: TestID.Confirm, onPress: onAcknowledge, children: acknowledgeText }) }))] }))] }));
}
export function WarningModal(props) {
    const { hideHandlebar, isDismissible = true, isOpen, maxWidth, modalName, onClose, zIndex } = props;
    const colors = useSporeColors();
    const swapFormContext = useContext(SwapFormContext);
    return (_jsx(Modal, { backgroundColor: colors.surface1.val, hideHandlebar: hideHandlebar, isDismissible: isDismissible, isModalOpen: isOpen, maxWidth: maxWidth, name: modalName, zIndex: zIndex, onClose: onClose, children: swapFormContext ? (
        // When we render this modal inside the swap flow, we want to forward the context so that it's available inside the modal's Portal.
        _jsx(SwapFormContext.Provider, { value: swapFormContext, children: _jsx(WarningModalContent, { ...props }) })) : (_jsx(WarningModalContent, { ...props })) }));
}
//# sourceMappingURL=WarningModal.js.map