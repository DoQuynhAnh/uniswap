import { LayoutAnimation, UIManager } from 'react-native';
import { isAndroid } from 'utilities/src/platform';
const DEFAULT_OPTIONS = {
    preset: 'easeInEaseOut',
    shouldSkip: false,
};
// Required for Android, at least as of RN 0.76.x
// https://reactnative.dev/docs/animations.html#layoutanimation-api
if (isAndroid) {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
export function easeInEaseOutLayoutAnimation(options) {
    const mergedOptions = options ? { ...DEFAULT_OPTIONS, ...options } : DEFAULT_OPTIONS;
    if (mergedOptions === null || mergedOptions === void 0 ? void 0 : mergedOptions.shouldSkip) {
        return;
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets[mergedOptions.preset]);
}
//# sourceMappingURL=layoutAnimation.native.js.map