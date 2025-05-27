import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { logger } from 'utilities/src/logger/logger';
export function FastImageWrapper({ uri, size, resizeMode, style, setError, }) {
    var _a, _b;
    const isLoaded = useSharedValue(false);
    const aspectRatio = (_a = size.aspectRatio) !== null && _a !== void 0 ? _a : (size.width !== undefined && size.height !== undefined ? size.width / size.height : undefined);
    // Ensure that the image is displayed together with styles applied
    // to the container only after it has been loaded (e.g. to prevent
    // displaying the background color of the container before the image
    // is visible)
    const animatedImageContainerStyle = useAnimatedStyle(() => ({
        opacity: +isLoaded.value,
        ...(isLoaded.value ? style : {}),
    }));
    useEffect(() => {
        isLoaded.value = false;
    }, [isLoaded, uri]);
    if (!aspectRatio) {
        logger.error(new Error('insufficient size information'), {
            tags: {
                file: 'FastImageWrapper',
                function: 'FastImageWrapper',
            },
        });
        return null;
    }
    return (<Animated.View style={[styles.fullWidth, animatedImageContainerStyle]}>
      <FastImage resizeMode={resizeMode !== null && resizeMode !== void 0 ? resizeMode : FastImage.resizeMode.contain} source={{
            uri,
            cache: FastImage.cacheControl.immutable,
        }} style={[styles.image, [styles.fullWidth, { maxHeight: (_b = size.height) !== null && _b !== void 0 ? _b : '100%' }, style], { aspectRatio }]} onError={setError} onLoad={() => {
            isLoaded.value = true;
        }}/>
    </Animated.View>);
}
const styles = StyleSheet.create({
    fullWidth: {
        height: undefined,
        width: '100%',
    },
    image: {
        alignSelf: 'center',
        // Fix for a tiny gap on the right side of the image container
        // resulting in the background color showing through when the image
        // has the same dimensions as the container
        transform: [{ scale: 1.01 }],
    },
});
//# sourceMappingURL=FastImageWrapper.native.jsx.map