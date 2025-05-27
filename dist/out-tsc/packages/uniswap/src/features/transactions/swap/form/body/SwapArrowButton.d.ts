/// <reference types="react" />
import { TouchableAreaProps } from 'ui/src';
type SwapArrowButtonProps = Pick<TouchableAreaProps, 'disabled' | 'testID' | 'onPress' | 'backgroundColor'> & {
    iconSize?: number;
};
export declare function SwapArrowButton({ backgroundColor, iconSize, disabled, onPress, testID, }: SwapArrowButtonProps): JSX.Element;
export {};
//# sourceMappingURL=SwapArrowButton.d.ts.map