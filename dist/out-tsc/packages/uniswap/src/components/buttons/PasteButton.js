import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text, TouchableArea } from 'ui/src';
import { ClipboardPaste } from 'ui/src/components/icons/ClipboardPaste';
import { StickyNoteSquare } from 'ui/src/components/icons/StickyNoteSquare';
import { getClipboard } from 'uniswap/src/utils/clipboard';
export default function PasteButton({ inline, onPress, beforePress, afterClipboardReceived, textVariant = 'buttonLabel2', }) {
    const { t } = useTranslation();
    const label = t('common.button.paste');
    const onPressButton = async () => {
        const clipboard = await getClipboard();
        // Since paste may trigger OS permission modal, the following callback is used to control other behavior such as blocking views that need to be shown/hidden.
        afterClipboardReceived === null || afterClipboardReceived === void 0 ? void 0 : afterClipboardReceived();
        if (clipboard) {
            onPress(clipboard);
        }
    };
    if (inline) {
        return (_jsx(TouchableArea, { p: "$spacing8", onPress: onPressButton, onPressIn: beforePress, children: _jsxs(Flex, { centered: true, row: true, gap: "$spacing4", children: [_jsx(ClipboardPaste, { color: "$neutral2", size: "$icon.16" }), _jsx(Text, { color: "$neutral2", variant: textVariant, children: label })] }) }));
    }
    return (_jsx(TouchableArea, { backgroundColor: "$accent2", borderRadius: "$rounded12", p: "$spacing8", onPress: onPressButton, onPressIn: beforePress, children: _jsxs(Flex, { centered: true, row: true, gap: "$spacing4", children: [_jsx(Text, { color: "$accent1", variant: "buttonLabel3", children: label }), _jsx(StickyNoteSquare, { color: "$accent1", size: "$icon.16" })] }) }));
}
//# sourceMappingURL=PasteButton.js.map