import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, flexStyles, ScrollView, Text, TouchableArea } from 'ui/src';
import { useDeviceDimensions } from 'ui/src/hooks/useDeviceDimensions';
import { BottomSheetDetachedModal } from 'uniswap/src/components/modals/Modal';
/**
 * Sheet modal with rows of actionable options.
 */
export function ActionSheetModalContent(props) {
    const { t } = useTranslation();
    const { fullHeight } = useDeviceDimensions();
    const { header, closeButtonLabel = t('common.button.close'), options, onClose } = props;
    return (_jsxs(Flex, { gap: "$spacing12", justifyContent: "flex-end", children: [_jsxs(Flex, { centered: true, backgroundColor: "$surface2", borderRadius: "$rounded16", overflow: "hidden", children: [typeof header === 'string' ? (_jsx(Flex, { centered: true, gap: "$spacing4", py: "$spacing16", children: _jsx(Text, { variant: "buttonLabel2", children: header }) })) : (header), _jsx(Flex, { maxHeight: fullHeight * 0.5, width: "100%", children: _jsx(ScrollView, { bounces: false, style: flexStyles.grow, children: options.map(({ key, onPress, render }) => {
                                return (_jsx(TouchableArea, { testID: key, onPress: onPress, children: render() }, key));
                            }) }) })] }), _jsx(Flex, { backgroundColor: "$surface2", borderRadius: "$rounded12", children: _jsx(TouchableArea, { onPress: onClose, children: _jsx(Flex, { centered: true, backgroundColor: "$surface2", borderRadius: "$rounded12", py: "$spacing16", children: _jsx(Text, { color: "$neutral1", variant: "buttonLabel2", children: closeButtonLabel }) }) }) })] }));
}
export function ActionSheetModal({ isVisible, onClose, name, isDismissible = true, ...rest }) {
    if (!isVisible) {
        return null;
    }
    return (_jsx(BottomSheetDetachedModal, { hideHandlebar: true, backgroundColor: "$transparent", isDismissible: isDismissible, name: name, onClose: onClose, children: _jsx(ActionSheetModalContent, { onClose: onClose, ...rest }) }));
}
//# sourceMappingURL=ActionSheetModal.js.map