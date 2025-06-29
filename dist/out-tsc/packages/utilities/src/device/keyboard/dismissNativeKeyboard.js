import { PlatformSplitStubError } from 'utilities/src/errors';
/** Dismisses the keyboard on the mobile app. No-ops on other platforms. */
export function dismissNativeKeyboard() {
    throw new PlatformSplitStubError('dismissNativeKeyboard');
}
/** Dismisses the keyboard on the mobile app and calls the callback after a delay. No-ops on other platforms; No-ops if keyboard isn't visible. */
export function closeKeyboardBeforeCallback(_callback) {
    throw new PlatformSplitStubError('closeKeyboardBeforeCallback');
}
//# sourceMappingURL=dismissNativeKeyboard.js.map