import { Gesture, GestureDetector } from 'react-native-gesture-handler';
export function ClickableWithinGesture({ onPress, children }) {
    const tap = Gesture.Tap()
        .enabled(!!onPress)
        .runOnJS(true)
        .onEnd(() => {
        onPress === null || onPress === void 0 ? void 0 : onPress();
    });
    return <GestureDetector gesture={tap}>{children}</GestureDetector>;
}
//# sourceMappingURL=ClickableWithinGesture.native.jsx.map