import type { TextStyle, ViewStyle } from 'react-native';
export declare const BALANCE_CHANGE_INDICATION_DURATION: number;
export declare const NUMBER_ARRAY: string[];
export declare const NUMBER_WIDTH_ARRAY: number[];
export declare const DIGIT_HEIGHT = 40;
export declare const DIGIT_MAX_WIDTH = 29;
export declare const ADDITIONAL_WIDTH_FOR_ANIMATIONS = 8;
type AnimatedNumberProps = {
    loadingPlaceholderText: string;
    loading: boolean | 'no-shimmer';
    value?: string;
    balance?: number;
    colorIndicationDuration: number;
    shouldFadeDecimals: boolean;
    warmLoading: boolean;
    disableAnimations?: boolean;
    isRightToLeft: boolean;
};
declare const AnimatedNumber: (props: AnimatedNumberProps) => JSX.Element;
export default AnimatedNumber;
interface AnimatedFontStylesType {
    fontStyle: TextStyle;
    invisible: TextStyle;
}
interface AnimatedCharStylesType {
    wrapperStyle: ViewStyle;
}
export declare const AnimatedCharStyles: AnimatedCharStylesType;
export declare const AnimatedFontStyles: AnimatedFontStylesType;
//# sourceMappingURL=AnimatedNumber.d.ts.map