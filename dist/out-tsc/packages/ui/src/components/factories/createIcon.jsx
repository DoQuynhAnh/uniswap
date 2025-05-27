import { createElement, forwardRef, useState } from 'react';
import { Stack, View, isWeb, styled, usePropsAndStyle } from 'tamagui';
import { withAnimated } from 'ui/src/components/factories/animated';
const getSize = (val) => ({
    width: val,
    height: val,
});
// used by our usePropsAndStyle to resolve a variant
const IconFrame = styled(Stack, {
    variants: {
        size: {
            '...': getSize,
        },
    },
});
export function createIcon({ name, getIcon, defaultFill, }) {
    const Icon = forwardRef(({ color, hoverColor: hoverColorProp, ...propsIn }, ref) => {
        var _a;
        const [hover, setHover] = useState(false);
        const renderColor = (_a = color !== null && color !== void 0 ? color : defaultFill) !== null && _a !== void 0 ? _a : (isWeb ? 'currentColor' : undefined);
        const hoverColor = hoverColorProp !== null && hoverColorProp !== void 0 ? hoverColorProp : renderColor;
        const [props, style] = usePropsAndStyle({
            size: '$icon.8',
            strokeWidth: 8,
            ...propsIn,
            color: hover ? hoverColor : renderColor,
        }, {
            resolveValues: 'value',
            forComponent: IconFrame,
        });
        const svgProps = {
            ref,
            ...props,
            // @ts-expect-error this type is hard to map but its right
            style,
        };
        const comp = props.Component ? createElement(props.Component, svgProps) : getIcon(svgProps);
        // Only enabled on web because mobile doesn't support hover events
        // It is also optional because it breaks some layouts
        if (isWeb && hoverColorProp) {
            return (<View onHoverIn={() => setHover(true)} onHoverOut={() => setHover(false)}>
          {comp}
        </View>);
        }
        return comp;
    });
    Icon.displayName = name;
    const IconPlain = forwardRef((props, ref) => {
        return getIcon({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...props,
            ref,
        });
    });
    IconPlain.displayName = name;
    const AnimatedIconPlain = withAnimated(IconPlain);
    const AnimatedIcon = forwardRef((props, ref) => (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Icon ref={ref} {...props} Component={AnimatedIconPlain}/>));
    AnimatedIcon.displayName = `Animated${name}`;
    return [Icon, AnimatedIcon];
}
//# sourceMappingURL=createIcon.jsx.map