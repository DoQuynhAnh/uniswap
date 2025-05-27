const DEFAULT_OPTIONS = {
    preset: 'easeInEaseOut',
    shouldSkip: false,
};
export function easeInEaseOutLayoutAnimation(options) {
    const mergedOptions = options ? { ...DEFAULT_OPTIONS, ...options } : DEFAULT_OPTIONS;
    if (mergedOptions.shouldSkip) {
        return;
    }
    // Apply a global CSS class to trigger animations
    const animationClass = getCssClassForPreset(mergedOptions.preset);
    document.body.classList.add(animationClass);
    // Remove the class after the animation ends
    setTimeout(() => {
        document.body.classList.remove(animationClass);
    }, getAnimationDurationForPreset(mergedOptions.preset));
}
function getCssClassForPreset(preset) {
    // These are defined in apps/web/src/global.css
    switch (preset) {
        case 'easeInEaseOut':
            return 'layout-animation-ease-in-ease-out';
        case 'linear':
            return 'layout-animation-linear';
        default:
            return 'layout-animation-ease-in-ease-out';
    }
}
function getAnimationDurationForPreset(preset) {
    // Be sure these match up with the durations in apps/web/src/global.css
    switch (preset) {
        case 'easeInEaseOut':
            return 300;
        case 'linear':
            return 200;
        default:
            return 300;
    }
}
//# sourceMappingURL=layoutAnimation.web.js.map