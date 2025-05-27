import { useEffect } from 'react';
import { KeyAction } from 'utilities/src/device/keyboard/types';
export const useKeyDown = ({ callback, keys, keyAction, disabled, preventDefault, shouldTriggerInInput = false, }) => {
    useEffect(() => {
        if (!keys || !keys.length || disabled) {
            return undefined;
        }
        const onKeyDown = (event) => {
            var _a;
            const wasAnyKeyPressed = keys.some((key) => event.key === key);
            // Do not prevent default if the target element is an input
            const targetWasNotAnInput = event.target instanceof HTMLElement && !['input', 'textarea'].includes((_a = event.target) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase());
            const shouldTrigger = wasAnyKeyPressed && (targetWasNotAnInput || shouldTriggerInInput);
            if (shouldTrigger) {
                if (preventDefault) {
                    event.preventDefault();
                }
                callback(event);
            }
        };
        const keyActionType = keyAction || KeyAction.DOWN;
        document.addEventListener(keyActionType, onKeyDown);
        return () => {
            document.removeEventListener(keyActionType, onKeyDown);
        };
    }, [callback, keys, keyAction, disabled, preventDefault, shouldTriggerInInput]);
};
// Example usage:
// useKeyDown({
//   callback: someCallback,
//   keys: ['Escape'],
//   keyAction: KeyAction.UP,
// })
//# sourceMappingURL=useKeyDown.web.js.map