import { Flex } from 'ui/src/components/layout/Flex';
/**
 * Spacing components that indents content on all four sides
 *
 * Inspired by https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62
 *
 * [internal]:
 *  API can be expanded to specific sides
 *  Debug options to color bg to debug spacing
 */
export function Inset({ all = '$spacing16', children }) {
    return <Flex p={all}>{children}</Flex>;
}
//# sourceMappingURL=Inset.jsx.map