import { memo } from 'react';
import { withAnimated } from 'ui/src/components/factories/animated';
import { ArrowChange } from 'ui/src/components/icons/ArrowChange';
export function _Caret({ size = '$icon.24', color, direction = 'n' }) {
    let degree;
    switch (direction) {
        case 's':
            degree = '0deg';
            break;
        case 'n':
            degree = '180deg';
            break;
        default:
            throw new Error(`Invalid arrow direction ${direction}`);
    }
    return <ArrowChange color={color !== null && color !== void 0 ? color : '$black'} size={size} strokeWidth={2} rotate={degree}/>;
}
export const Caret = memo(_Caret);
export const AnimatedCaretChange = withAnimated(ArrowChange);
//# sourceMappingURL=Caret.jsx.map