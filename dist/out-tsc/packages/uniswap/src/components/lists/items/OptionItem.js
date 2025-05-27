import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { Flex, Text, TouchableArea, isWeb } from 'ui/src';
import useIsKeyboardOpen from 'uniswap/src/hooks/useIsKeyboardOpen';
import { dismissNativeKeyboard } from 'utilities/src/device/keyboard/dismissNativeKeyboard';
import { KeyAction } from 'utilities/src/device/keyboard/types';
import { useKeyDown } from 'utilities/src/device/keyboard/useKeyDown';
import { isInterface } from 'utilities/src/platform';
import noop from 'utilities/src/react/noop';
function _OptionItem({ image, title, subtitle, rightElement, badge, titleProps, onPress, onLongPress, disabled, testID, modalInfo, focusedRowControl, }) {
    const isKeyboardOpen = useIsKeyboardOpen();
    const { modal, modalShouldShow, modalSetIsOpen } = modalInfo !== null && modalInfo !== void 0 ? modalInfo : {};
    const onPressOption = useCallback(() => {
        const handleShowModal = () => {
            dismissNativeKeyboard();
            modalSetIsOpen === null || modalSetIsOpen === void 0 ? void 0 : modalSetIsOpen(true);
        };
        if (modalShouldShow && modal) {
            // On mobile web we need to wait for the keyboard to hide
            // before showing the modal to avoid height issues
            if (isKeyboardOpen && isInterface) {
                const activeElement = document.activeElement;
                activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
                setTimeout(handleShowModal, 700);
            }
            else {
                handleShowModal();
            }
            return;
        }
        onPress();
    }, [modalShouldShow, modal, isKeyboardOpen, modalSetIsOpen, onPress]);
    // Custom keyboard list nav behavior using arrow + enter keys
    const { focusedRowIndex, rowIndex, setFocusedRowIndex } = focusedRowControl !== null && focusedRowControl !== void 0 ? focusedRowControl : {};
    const keyboardNavEnabled = isWeb && focusedRowControl && setFocusedRowIndex;
    const isFocused = focusedRowIndex !== undefined && focusedRowIndex === rowIndex;
    useKeyDown({
        keys: ['Enter'],
        keyAction: KeyAction.UP,
        disabled: !keyboardNavEnabled,
        callback: isFocused ? onPressOption : noop,
        shouldTriggerInInput: true,
    });
    const focusedStyleProps = keyboardNavEnabled
        ? {
            backgroundColor: isFocused ? '$surface1Hovered' : undefined,
            onMouseEnter: () => {
                setFocusedRowIndex === null || setFocusedRowIndex === void 0 ? void 0 : setFocusedRowIndex(rowIndex);
            },
            onMouseLeave: () => {
                setFocusedRowIndex === null || setFocusedRowIndex === void 0 ? void 0 : setFocusedRowIndex(undefined);
            },
        }
        : { hoverStyle: { backgroundColor: '$surface1Hovered' } };
    return (_jsxs(_Fragment, { children: [_jsx(TouchableArea, { animation: "300ms", opacity: disabled ? 0.5 : 1, width: "100%", px: "$spacing12", onPress: onPressOption, onLongPress: onLongPress, children: _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", justifyContent: "space-between", p: "$spacing8", style: {
                        pointerEvents: 'auto',
                    }, borderRadius: "$rounded16", ...focusedStyleProps, testID: testID, children: [_jsxs(Flex, { row: true, shrink: true, alignItems: "center", gap: "$spacing12", children: [image, _jsxs(Flex, { shrink: true, children: [_jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing8", children: [typeof title === 'string' ? (_jsx(Text, { color: "$neutral1", variant: "body1", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", numberOfLines: 1, ...titleProps, children: title })) : (title), badge] }), subtitle] })] }), rightElement && (_jsx(Flex, { grow: true, alignItems: "flex-end", justifyContent: "center", children: rightElement }))] }) }), modal] }));
}
export const OptionItem = memo(_OptionItem);
//# sourceMappingURL=OptionItem.js.map