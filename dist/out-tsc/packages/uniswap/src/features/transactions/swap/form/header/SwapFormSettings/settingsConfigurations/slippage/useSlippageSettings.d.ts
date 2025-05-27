import type { StyleProp, ViewStyle } from 'react-native';
import { PlusMinusButtonType } from 'ui/src/components/buttons/PlusMinusButton';
export declare function useSlippageSettings(params?: {
    saveOnBlur?: boolean;
    isBridgeTrade?: boolean;
}): {
    isEditingSlippage: boolean;
    autoSlippageEnabled: boolean;
    showSlippageWarning: boolean;
    showSlippageCritical: boolean;
    inputSlippageTolerance: string;
    inputWarning: string | undefined;
    autoSlippageTolerance: number;
    currentSlippageTolerance: number;
    inputAnimatedStyle: StyleProp<ViewStyle>;
    onPressAutoSlippage: () => void;
    onChangeSlippageInput: (value: string) => void;
    onFocusSlippageInput: () => void;
    onBlurSlippageInput: () => void;
    onPressPlusMinusButton: (type: PlusMinusButtonType) => void;
};
//# sourceMappingURL=useSlippageSettings.d.ts.map