import { GradientText } from 'ui/src/components/text/GradientText';
import { colors } from 'ui/src/theme/color/colors';
export function UniswapXText({ children, ...props }) {
    return (<GradientText {...props} gradient={{
            colors: [colors.uniswapXViolet, colors.uniswapXPurple],
            start: { x: -1.07, y: 0 },
            end: { x: 1.07, y: 0 },
        }}>
      {children}
    </GradientText>);
}
//# sourceMappingURL=UniswapXText.native.jsx.map