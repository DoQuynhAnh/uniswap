import { useIsChromeWindowFocusedWithTimeout } from 'uniswap/src/extension/useIsChromeWindowFocused';
import { isExtension } from 'utilities/src/platform';
import { ONE_SECOND_MS } from 'utilities/src/time/time';
export function usePlatformBasedValue({ defaultValue, web, extension }) {
    var _a, _b, _c;
    // We add a 30s delay before we trigger the `windowNotFocused` state to avoid unnecessary state changes when the user is quickly switching back-and-forth between windows.
    // Without this delay, we could end up triggering too many unnecessary API calls every time the window regains focus.
    const isChromeWindowFocused = useIsChromeWindowFocusedWithTimeout(30 * ONE_SECOND_MS);
    if (isExtension) {
        if (!isChromeWindowFocused) {
            return (_a = extension === null || extension === void 0 ? void 0 : extension.windowNotFocused) !== null && _a !== void 0 ? _a : defaultValue;
        }
        return (_b = extension === null || extension === void 0 ? void 0 : extension.defaultValue) !== null && _b !== void 0 ? _b : defaultValue;
    }
    return (_c = web === null || web === void 0 ? void 0 : web.defaultValue) !== null && _c !== void 0 ? _c : defaultValue;
}
//# sourceMappingURL=usePlatformBasedValue.js.map