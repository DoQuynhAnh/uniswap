/// <reference types="react" />
import { SharedValue } from 'react-native-reanimated';
import { FlexProps } from 'ui/src';
type ScrollbarProps = FlexProps & {
    visibleHeight: number;
    contentHeight: number;
    scrollOffset: SharedValue<number>;
};
export declare function Scrollbar({ visibleHeight, contentHeight, scrollOffset, ...rest }: ScrollbarProps): JSX.Element;
export {};
//# sourceMappingURL=Scrollbar.d.ts.map