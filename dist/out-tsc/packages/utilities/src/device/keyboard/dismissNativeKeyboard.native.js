// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Keyboard } from 'react-native';
const KEYBOARD_DISMISS_POLLING_INTERVAL = 25;
const KEYBOARD_DISMISS_TIMEOUT = 500;
export function dismissNativeKeyboard() {
    Keyboard.dismiss();
}
export function closeKeyboardBeforeCallback(callback) {
    if (Keyboard.isVisible()) {
        dismissNativeKeyboard();
        const dismissRequestTime = Date.now();
        const intervalId = setInterval(() => {
            const timePassed = Date.now() - dismissRequestTime;
            // if keyboard is not visible or timeout has passed
            if (!Keyboard.isVisible() || timePassed > KEYBOARD_DISMISS_TIMEOUT) {
                clearInterval(intervalId);
                callback();
            }
        }, KEYBOARD_DISMISS_POLLING_INTERVAL);
    }
    else {
        callback();
    }
}
//# sourceMappingURL=dismissNativeKeyboard.native.js.map