// make React Native font rendering more visually similar to the web and Figma
// Except for CJK languages (only Chinese and Japanese for now)
import { getDeviceLocales } from 'utilities/src/device/locales';
export const needsSmallFont = () => {
    var _a;
    const languageCode = (_a = getDeviceLocales()[0]) === null || _a === void 0 ? void 0 : _a.languageCode;
    return languageCode === 'zh' || languageCode === 'ja';
};
//# sourceMappingURL=needs-small-font.native.js.map