import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import Reanimated, { interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming, } from 'react-native-reanimated';
import { Flex } from 'ui/src/components/layout';
import { useSporeColors } from 'ui/src/hooks/useSporeColors';
import { opacify } from 'ui/src/theme';
import { useEvent } from 'utilities/src/react/hooks';
import { ONE_SECOND_MS } from 'utilities/src/time/time';
const SHIMMER_DURATION = ONE_SECOND_MS * 2;
const LINEAR_GRADIENT_END = { x: 1, y: 0 };
const LINEAR_GRADIENT_START = { x: 0, y: 0 };
const BLACK_HEX_COLOR = '#000000';
export function Shine({ children, disabled }) {
    const colors = useSporeColors();
    const [layout, setLayout] = useState();
    const xPosition = useSharedValue(0);
    useEffect(() => {
        xPosition.value = withRepeat(withTiming(1, { duration: SHIMMER_DURATION }), Infinity, false);
    }, [xPosition]);
    const animatedStyle = useAnimatedStyle(() => ({
        ...StyleSheet.absoluteFillObject,
        transform: [
            {
                translateX: interpolate(xPosition.value, [0, 1], [layout ? -layout.width : 0, layout ? layout.width : 0]),
            },
        ],
    }));
    const handleOnLayout = useEvent((event) => {
        setLayout(event.nativeEvent.layout);
    });
    const gradientColors = useMemo(() => {
        const hexColorForOpacifying = (() => {
            const maybeColor = colors.black.val;
            if (maybeColor.startsWith('#') && colors.black.val.length === 7) {
                return maybeColor;
            }
            return BLACK_HEX_COLOR;
        })();
        return [opacify(0, hexColorForOpacifying), opacify(44, hexColorForOpacifying), opacify(0, hexColorForOpacifying)];
    }, [colors.black.val]);
    const maskedViewStyle = useMemo(() => ({ width: layout === null || layout === void 0 ? void 0 : layout.width, height: layout === null || layout === void 0 ? void 0 : layout.height }), [layout]);
    if (disabled) {
        return children;
    }
    if (!layout) {
        return (<Flex opacity={0} onLayout={handleOnLayout}>
        {children}
      </Flex>);
    }
    return (<MaskedView maskElement={children} style={maskedViewStyle}>
      <Flex grow backgroundColor="$neutral2" height="100%" overflow="hidden"/>
      <Reanimated.View style={animatedStyle}>
        <LinearGradient colors={gradientColors} end={LINEAR_GRADIENT_END} start={LINEAR_GRADIENT_START} style={StyleSheet.absoluteFill}/>
      </Reanimated.View>
    </MaskedView>);
}
//# sourceMappingURL=Shine.native.jsx.map