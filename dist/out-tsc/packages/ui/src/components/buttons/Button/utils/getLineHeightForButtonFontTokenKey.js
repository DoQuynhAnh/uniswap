import { getConfig } from 'tamagui';
import { lineHeightFallbacks } from 'ui/src/components/buttons/Button/constants';
export const getLineHeightForButtonFontTokenKey = (size) => {
    var _a, _b;
    try {
        const { fontsParsed } = getConfig();
        const maybeTamaguiVariable = (_b = (_a = fontsParsed === null || fontsParsed === void 0 ? void 0 : fontsParsed.$button) === null || _a === void 0 ? void 0 : _a.lineHeight) === null || _b === void 0 ? void 0 : _b[size];
        if (typeof maybeTamaguiVariable === 'number') {
            return maybeTamaguiVariable;
        }
        if (typeof (maybeTamaguiVariable === null || maybeTamaguiVariable === void 0 ? void 0 : maybeTamaguiVariable.val) === 'number') {
            return maybeTamaguiVariable.val;
        }
        throw new Error(`[getLineHeightForButtonFontTokenKey] Cannot get lineHeight for size: '${size}'`);
    }
    catch {
        return lineHeightFallbacks[size];
    }
};
//# sourceMappingURL=getLineHeightForButtonFontTokenKey.js.map