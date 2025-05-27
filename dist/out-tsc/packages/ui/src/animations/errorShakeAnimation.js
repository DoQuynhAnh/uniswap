import { Easing, withRepeat, withTiming } from 'react-native-reanimated';
export function errorShakeAnimation(input) {
    return withRepeat(withTiming(5, { duration: 50, easing: Easing.inOut(Easing.ease) }), 3, true, () => {
        input.value = 0;
    });
}
//# sourceMappingURL=errorShakeAnimation.js.map