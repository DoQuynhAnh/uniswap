import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Keyboard, useWindowDimensions } from 'react-native';
import { isAndroid } from 'utilities/src/platform';
export function useKeyboardLayout() {
    const window = useWindowDimensions();
    const [keyboardPosition, setKeyboardPosition] = useState(window.height);
    useEffect(() => {
        const keyboardListeners = [];
        if (isAndroid) {
            // When `android:windowSoftInputMode` is set to `adjustResize` or `adjustNothing`,
            // only `keyboardDidShow` and `keyboardDidHide` events will be available on Android
            keyboardListeners.push(Keyboard.addListener('keyboardDidShow', (e) => {
                setKeyboardPosition(e.endCoordinates.screenY);
            }), Keyboard.addListener('keyboardDidHide', (e) => {
                setKeyboardPosition(e.endCoordinates.screenY);
            }));
        }
        else {
            keyboardListeners.push(Keyboard.addListener('keyboardWillChangeFrame', (e) => {
                setKeyboardPosition(e.endCoordinates.screenY);
            }));
        }
        return () => {
            keyboardListeners.forEach((listener) => listener.remove());
        };
    }, [window.height]);
    const keyboardHeight = window.height - keyboardPosition;
    return { isVisible: keyboardHeight > 0, containerHeight: window.height - keyboardHeight };
}
//# sourceMappingURL=useKeyboardLayout.native.js.map