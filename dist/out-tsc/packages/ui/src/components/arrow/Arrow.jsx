import { memo } from 'react';
import { ArrowDown } from 'ui/src/components/icons/ArrowDown';
const DIRECTION_TO_DEGREE = {
    s: '0deg',
    w: '90deg',
    n: '180deg',
    ne: '225deg',
    e: '270deg',
    se: '315deg',
};
export function _Arrow({ size = 24, color = '#000000', direction = 'e' }) {
    return <ArrowDown color={color} rotateZ={DIRECTION_TO_DEGREE[direction]} size={size} strokeWidth={2}/>;
}
export const Arrow = memo(_Arrow);
//# sourceMappingURL=Arrow.jsx.map