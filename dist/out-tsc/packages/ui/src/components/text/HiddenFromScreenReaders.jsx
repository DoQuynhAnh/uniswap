import { Flex } from 'ui/src/components/layout';
export function HiddenFromScreenReaders({ children, style }) {
    // TODO(MOB-1533) Make hidden from screen reader functionality work with web too
    return <Flex style={style}>{children}</Flex>;
}
//# sourceMappingURL=HiddenFromScreenReaders.jsx.map