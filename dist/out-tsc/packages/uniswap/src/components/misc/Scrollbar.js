import { jsx as _jsx } from "react/jsx-runtime";
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, } from 'react-native-reanimated';
import { Flex } from 'ui/src';
export function Scrollbar({ visibleHeight, contentHeight, scrollOffset, ...rest }) {
    const scrollbarHeight = useSharedValue(0);
    const animatedThumbStyle = useAnimatedStyle(() => {
        const thumbHeight = (visibleHeight / contentHeight) * scrollbarHeight.value;
        return {
            top: interpolate(scrollOffset.value, [0, contentHeight - visibleHeight], [0, scrollbarHeight.value - thumbHeight], Extrapolate.CLAMP),
            height: thumbHeight,
        };
    });
    return (_jsx(Flex, { animation: "quicker", enterStyle: {
            opacity: 0,
            width: 0,
        }, width: 6, ...rest, children: _jsx(Flex, { fill: true, onLayout: ({ nativeEvent: { layout: { height }, }, }) => {
                scrollbarHeight.value = height;
            }, children: _jsx(Animated.View, { style: animatedThumbStyle, children: _jsx(Flex, { fill: true, backgroundColor: "$neutral3", borderRadius: "$rounded12" }) }) }) }));
}
//# sourceMappingURL=Scrollbar.js.map