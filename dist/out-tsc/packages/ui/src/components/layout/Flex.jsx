import { View, styled } from 'tamagui';
import { animationsEnter, animationsEnterExit, animationsExit } from 'ui/src/animations/presets';
export const flexStyles = {
    fill: { flex: 1 },
    grow: { flexGrow: 1 },
    shrink: { flexShrink: 1 },
};
const getInset = (val) => ({
    top: val,
    right: val,
    bottom: val,
    left: val,
});
export const Flex = styled(View, {
    flexDirection: 'column',
    variants: {
        inset: (size) => (size && typeof size === 'object' ? size : getInset(size)),
        row: {
            true: {
                flexDirection: 'row',
            },
            false: {
                flexDirection: 'column',
            },
        },
        shrink: {
            true: {
                flexShrink: 1,
            },
        },
        grow: {
            true: {
                flexGrow: 1,
            },
        },
        fill: {
            true: {
                flex: 1,
            },
        },
        centered: {
            true: {
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        animateEnter: animationsEnter,
        animateExit: animationsExit,
        animateEnterExit: animationsEnterExit,
    },
});
//# sourceMappingURL=Flex.jsx.map