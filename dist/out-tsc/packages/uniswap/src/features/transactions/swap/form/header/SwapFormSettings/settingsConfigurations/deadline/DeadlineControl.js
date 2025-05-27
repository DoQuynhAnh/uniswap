import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Flex, Input, Text } from 'ui/src';
import { useDeadlineSettings } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/deadline/useDeadlineSettings';
const INPUT_MIN_WIDTH = 44;
export function DeadlineControl() {
    const [inputWidth] = useState(INPUT_MIN_WIDTH);
    const { isEditingDeadline, inputDeadline, onChangeDeadlineInput, onFocusDeadlineInput, onBlurDeadlineInput } = useDeadlineSettings();
    const inputRef = useRef(null);
    const backgroundColor = isEditingDeadline ? '$surface2' : '$surface1';
    const inputValue = inputDeadline;
    useEffect(() => {
        var _a;
        if (isEditingDeadline) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [isEditingDeadline]);
    return (_jsx(Flex, { row: true, group: true, alignItems: "center", justifyContent: "space-between", style: {
            containerType: 'normal',
        }, children: _jsx(Flex, { row: true, backgroundColor: backgroundColor, borderColor: isEditingDeadline ? '$DEP_accentSoft' : '$surface3', borderRadius: "$rounded16", "$group-hover": { borderColor: '$surface3Hovered', backgroundColor: '$surface1Hovered' }, borderWidth: "$spacing1", gap: "$spacing8", p: "$spacing4", onPress: onFocusDeadlineInput, children: _jsxs(Flex, { row: true, pr: "$spacing8", gap: "$spacing4", children: [_jsxs(Flex, { style: { position: 'relative' }, children: [_jsx(Input, { ref: inputRef, backgroundColor: backgroundColor, "$group-hover": { backgroundColor: '$surface1Hovered' }, color: "$neutral1", editable: true, fontFamily: "$subHeading", fontWeight: "normal", fontSize: "$small", height: "100%", keyboardType: "numeric", outlineColor: "$transparent", p: "$none", textAlign: "right", value: inputValue, width: inputWidth, onBlur: onBlurDeadlineInput, onChangeText: onChangeDeadlineInput, onFocus: onFocusDeadlineInput }), _jsx(Text, { minWidth: INPUT_MIN_WIDTH, opacity: 0, px: "$spacing4", style: { position: 'absolute' }, variant: "subheading2", zIndex: -1, children: inputValue })] }), _jsx(Text, { color: "$neutral2", variant: "subheading2", children: "minutes" })] }) }) }));
}
//# sourceMappingURL=DeadlineControl.js.map