import MaskedView from '@react-native-masked-view/masked-view';
import { useLayoutEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Reanimated, { interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming, } from 'react-native-reanimated';
import { LinearGradient } from 'tamagui/linear-gradient';
import { Flex } from 'ui/src/components/layout/Flex';
const SHIMMER_DURATION = 2000; // 2 seconds
// inspired by tutorial found here: https://github.com/kadikraman/skeleton-loader
export function Skeleton({ children, contrast, disabled }) {
    const [layout, setLayout] = useState();
    const xPosition = useSharedValue(0);
    useLayoutEffect(() => {
        // TODO: [MOB-210] tweak animation to be smoother, right now sometimes looks kind of stuttery
        xPosition.value = withRepeat(withTiming(1, { duration: SHIMMER_DURATION }), Infinity, true);
        // only want to do this once on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: interpolate(xPosition.value, [0, 1], [layout ? -layout.width : 0, layout ? layout.width : 0]),
            },
        ],
    }));
    if (disabled) {
        return children;
    }
    if (!layout) {
        return (<Flex opacity={0} testID="shimmer-placeholder" onLayout={(event) => {
                setLayout(event.nativeEvent.layout);
            }}>
        {children}
      </Flex>);
    }
    return (<MaskedView maskElement={children} style={{
            width: layout.width,
            height: layout.height,
        }} testID="shimmer">
      <Flex grow backgroundColor={contrast ? '$neutral2' : '$surface3'} overflow="hidden"/>
      <Reanimated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
        <MaskedView maskElement={<LinearGradient fullscreen colors={['transparent', 'black', 'black', 'black', 'transparent']} end={{ x: 1, y: 0 }} start={{ x: 0, y: 0 }}/>} style={StyleSheet.absoluteFill}>
          <Flex backgroundColor="$surface2" style={StyleSheet.absoluteFill}/>
        </MaskedView>
      </Reanimated.View>
    </MaskedView>);
}
//# sourceMappingURL=Skeleton.native.jsx.map