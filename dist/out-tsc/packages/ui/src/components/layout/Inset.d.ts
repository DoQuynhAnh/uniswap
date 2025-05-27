import { SpaceTokens } from '@tamagui/core';
import { PropsWithChildren } from 'react';
interface InsetProps {
    /** applies consistent padding to each side */
    all?: SpaceTokens;
}
/**
 * Spacing components that indents content on all four sides
 *
 * Inspired by https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62
 *
 * [internal]:
 *  API can be expanded to specific sides
 *  Debug options to color bg to debug spacing
 */
export declare function Inset({ all, children }: PropsWithChildren<InsetProps>): JSX.Element;
export {};
//# sourceMappingURL=Inset.d.ts.map