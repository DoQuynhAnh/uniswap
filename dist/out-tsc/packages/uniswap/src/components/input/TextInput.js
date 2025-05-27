import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect } from 'react';
import { Input, useSporeColors } from 'ui/src';
import { isInterface } from 'utilities/src/platform';
// TODO(MOB-1537): move this to ui/src and see if we can just use styled() or move entirely to Input
export const TextInput = forwardRef(function _TextInput({ onChangeText, onBlur, ...rest }, ref) {
    const colors = useSporeColors();
    useEffect(() => {
        // Ensure virtualkeyboardpolicy is set to "auto" on the DOM element
        // otherwise the virtual keyboard will not show on android mobile
        // TODO (WEB-5798): remove tamagui input hack
        if (ref && 'current' in ref && ref.current && isInterface) {
            const inputElement = ref.current;
            inputElement.setAttribute('virtualkeyboardpolicy', 'auto');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // only run on mount since we only need to set this once
    return (_jsx(Input, { ref: ref, autoComplete: "off", backgroundColor: "$surface1", borderRadius: "$rounded12", color: "$neutral1", height: "auto", placeholderTextColor: "$neutral3", px: "$spacing16", py: "$spacing12", selectionColor: colors.neutral3.val, onBlur: onBlur, onChangeText: onChangeText, ...rest }));
});
//# sourceMappingURL=TextInput.js.map