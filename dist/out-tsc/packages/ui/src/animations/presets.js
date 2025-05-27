export const animationsEnter = {
    fadeIn: {
        enterStyle: {
            opacity: 0,
        },
    },
    fadeInDown: {
        enterStyle: {
            y: -10,
            opacity: 0,
        },
    },
};
export const animationsExit = {
    fadeOut: {
        exitStyle: {
            opacity: 0,
        },
    },
    fadeOutUp: {
        exitStyle: {
            y: -10,
            opacity: 0,
        },
    },
    fadeOutDown: {
        exitStyle: {
            y: 10,
            opacity: 0,
        },
    },
};
export const animationsEnterExit = {
    fadeInDownOutUp: {
        ...animationsEnter.fadeInDown,
        ...animationsExit.fadeOutUp,
    },
    fadeInDownOutDown: {
        ...animationsEnter.fadeInDown,
        ...animationsExit.fadeOutDown,
    },
    fadeInOut: {
        ...animationsEnter.fadeIn,
        ...animationsExit.fadeOut,
    },
};
export const animationPresets = {
    ...animationsEnter,
    ...animationsExit,
    ...animationsEnterExit,
};
//# sourceMappingURL=presets.js.map