// maintain alignment with `DelayAnimationKey`
const DELAY_VALUES = [1, 40, 80, 120, 160, 200, 240];
const DEFAULT_ANIMATION_DELAY = 1;
export const getDelayValue = (delay) => `200msDelayed${delay}ms`;
export const delayAnimations200ms = {
    // needs to be one-to-one with DelayAnimationKey
    ...DELAY_VALUES.reduce((acc, delay) => {
        acc[getDelayValue(delay)] = {
            type: 'spring',
            stiff: 150,
            damping: 30,
            delay,
            duration: 200,
        };
        return acc;
    }, {}),
};
export const get200MsAnimationDelayFromIndex = (index) => {
    return getDelayValue(DELAY_VALUES[index] || DEFAULT_ANIMATION_DELAY);
};
//# sourceMappingURL=delay200ms.js.map