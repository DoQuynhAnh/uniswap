import { useEffect, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { AnimatedFlex } from 'ui/src/components/layout/AnimatedFlex';
export const SWIPEABLE_CARD_Y_OFFSET = 8;
function getScale(stackIndex) {
    return 1 - stackIndex * 0.025;
}
export function BaseCard({ children, stackIndex, cardHeight, onLayout, panOffset }) {
    const initialYOffset = stackIndex * SWIPEABLE_CARD_Y_OFFSET;
    const initialScale = getScale(stackIndex);
    const yOffset = useSharedValue(initialYOffset);
    const scale = useSharedValue(initialScale);
    const [height, setHeight] = useState(0);
    const [targetYOffset, setTargetYOffset] = useState(initialYOffset);
    useEffect(() => {
        onLayout({ height, yOffset: targetYOffset });
    }, [height, onLayout, targetYOffset]);
    useEffect(() => {
        const nextYOffset = stackIndex * SWIPEABLE_CARD_Y_OFFSET;
        setTargetYOffset(nextYOffset);
        yOffset.value = withSpring(nextYOffset);
        scale.value = withSpring(getScale(stackIndex));
        if (panOffset) {
            panOffset.value = 0;
        }
    }, [panOffset, scale, stackIndex, yOffset]);
    const animatedStyle = useAnimatedStyle(() => {
        var _a;
        return {
            transform: [{ translateX: (_a = panOffset === null || panOffset === void 0 ? void 0 : panOffset.value) !== null && _a !== void 0 ? _a : 0 }, { translateY: yOffset.value }, { scale: scale.value }],
        };
    }, [panOffset, scale, yOffset]);
    return (<AnimatedFlex minHeight={cardHeight ? cardHeight : undefined} style={animatedStyle} onLayout={(event) => setHeight(event.nativeEvent.layout.height)}>
      {children}
    </AnimatedFlex>);
}
//# sourceMappingURL=BaseCard.jsx.map