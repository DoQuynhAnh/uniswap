import { MutableRefObject, RefObject } from 'react';
import type { TextInputProps } from 'react-native';
import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { DecimalPadInputRef } from 'uniswap/src/features/transactions/components/DecimalPadInput/DecimalPadInput';
import { CurrencyField } from 'uniswap/src/types/currency';
type SwapFormDecimalPadProps = {
    decimalPadRef: RefObject<DecimalPadInputRef>;
    onSetPresetValue: (value: string, percentage: PresetPercentage) => void;
    resetSelection: ({ start, end, currencyField, }: {
        start: number;
        end?: number;
        currencyField?: CurrencyField;
    }) => void;
    inputSelectionRef: MutableRefObject<TextInputProps['selection']>;
    outputSelectionRef: MutableRefObject<TextInputProps['selection']>;
    decimalPadValueRef: MutableRefObject<string>;
    onDecimalPadTriggerInputShake: () => void;
};
export declare function SwapFormDecimalPad({ decimalPadRef, onSetPresetValue, resetSelection, inputSelectionRef, outputSelectionRef, decimalPadValueRef, onDecimalPadTriggerInputShake, }: SwapFormDecimalPadProps): JSX.Element;
export {};
//# sourceMappingURL=SwapFormDecimalPad.d.ts.map