import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet } from 'react-native';
import { Defs, LinearGradient, Rect, Stop, Svg } from 'react-native-svg';
import { useSporeColors } from 'ui/src/hooks/useSporeColors';
import { DIGIT_HEIGHT } from 'uniswap/src/components/AnimatedNumber/AnimatedNumber';
const AnimatedNumberStyles = StyleSheet.create({
    gradientStyle: {
        position: 'absolute',
        zIndex: 100,
    },
});
export const TopAndBottomGradient = () => {
    const colors = useSporeColors();
    return (_jsxs(Svg, { height: DIGIT_HEIGHT, style: AnimatedNumberStyles.gradientStyle, width: "100%", children: [_jsxs(Defs, { children: [_jsxs(LinearGradient, { id: "backgroundTop", x1: "0%", x2: "0%", y1: "15%", y2: "0%", children: [_jsx(Stop, { offset: "0", stopColor: colors.surface1.val, stopOpacity: "0" }), _jsx(Stop, { offset: "1", stopColor: colors.surface1.val, stopOpacity: "1" })] }), _jsxs(LinearGradient, { id: "background", x1: "0%", x2: "0%", y1: "85%", y2: "100%", children: [_jsx(Stop, { offset: "0", stopColor: colors.surface1.val, stopOpacity: "0" }), _jsx(Stop, { offset: "1", stopColor: colors.surface1.val, stopOpacity: "1" })] })] }), _jsx(Rect, { fill: "url(#backgroundTop)", height: DIGIT_HEIGHT, opacity: 1, width: "100%", x: "0", y: "0" }), _jsx(Rect, { fill: "url(#background)", height: DIGIT_HEIGHT, opacity: 1, width: "100%", x: "0", y: "0" })] }));
};
//# sourceMappingURL=TopAndBottomGradient.native.js.map