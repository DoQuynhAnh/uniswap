import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSporeColors } from 'ui/src/hooks/useSporeColors';
import { DIGIT_HEIGHT } from 'uniswap/src/components/AnimatedNumber/AnimatedNumber';
export const TopAndBottomGradient = () => {
    const colors = useSporeColors();
    return (_jsxs("svg", { height: DIGIT_HEIGHT, style: { position: 'absolute', zIndex: 100 }, width: "100%", children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "backgroundTop", x1: "0%", x2: "0%", y1: "15%", y2: "0%", children: [_jsx("stop", { offset: "0", stopColor: colors.surface1.val, stopOpacity: "0" }), _jsx("stop", { offset: "1", stopColor: colors.surface1.val, stopOpacity: "1" })] }), _jsxs("linearGradient", { id: "background", x1: "0%", x2: "0%", y1: "85%", y2: "100%", children: [_jsx("stop", { offset: "0", stopColor: colors.surface1.val, stopOpacity: "0" }), _jsx("stop", { offset: "1", stopColor: colors.surface1.val, stopOpacity: "1" })] })] }), _jsx("rect", { fill: "url(#backgroundTop)", height: DIGIT_HEIGHT, opacity: 1, width: "100%", x: "0", y: "0" }), _jsx("rect", { fill: "url(#background)", height: DIGIT_HEIGHT, opacity: 1, width: "100%", x: "0", y: "0" })] }));
};
//# sourceMappingURL=TopAndBottomGradient.web.js.map