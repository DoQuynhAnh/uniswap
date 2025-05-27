import type { GetProps } from 'tamagui';
import { TouchableAreaFrame } from 'ui/src/components/touchable/TouchableArea/TouchableAreaFrame';
type TouchableAreaFrameProps = GetProps<typeof TouchableAreaFrame>;
type Variant = TouchableAreaFrameProps['variant'];
type TouchableAreaExtraProps = {
    shouldConsiderMinimumDimensions?: boolean;
    scaleTo?: number;
    activeOpacity?: number;
    /**
     * If true, calls event.stopPropagation() on press events to prevent bubbling to parent touchables.
     * Works on both web and React Native (where supported).
     */
    shouldStopPropagation?: boolean;
};
type NonRaisedProps = TouchableAreaExtraProps & Omit<TouchableAreaFrameProps, 'variant' | 'backgroundColor'> & {
    variant?: Exclude<Variant, 'raised'>;
    backgroundColor?: TouchableAreaFrameProps['backgroundColor'];
};
type RaisedProps = TouchableAreaExtraProps & Omit<TouchableAreaFrameProps, 'variant' | 'backgroundColor'> & {
    variant: Extract<Variant, 'raised'>;
    backgroundColor: NonNullable<TouchableAreaFrameProps['backgroundColor']>;
};
export type TouchableAreaProps = NonRaisedProps | RaisedProps;
export {};
//# sourceMappingURL=types.d.ts.map