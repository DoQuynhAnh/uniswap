import { RefObject, type MutableRefObject } from 'react';
import type { TextInputProps } from 'react-native';
import { CurrencyInputPanelRef } from 'uniswap/src/components/CurrencyInputPanel/CurrencyInputPanel';
import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { DecimalPadInputRef } from 'uniswap/src/features/transactions/components/DecimalPadInput/DecimalPadInput';
import { CurrencyField } from 'uniswap/src/types/currency';
export declare function useSwapFormScreenCallbacks({ exactOutputWouldFailIfCurrenciesSwitched, exactFieldIsInput, isBridge, formattedDerivedValueRef, inputRef, outputRef, decimalPadRef, inputSelectionRef, outputSelectionRef, }: {
    exactOutputWouldFailIfCurrenciesSwitched: boolean;
    exactFieldIsInput: boolean;
    isBridge: boolean;
    formattedDerivedValueRef: MutableRefObject<string>;
    inputRef: RefObject<CurrencyInputPanelRef>;
    outputRef: RefObject<CurrencyInputPanelRef>;
    decimalPadRef: RefObject<DecimalPadInputRef>;
    inputSelectionRef: MutableRefObject<TextInputProps['selection']>;
    outputSelectionRef: MutableRefObject<TextInputProps['selection']>;
}): {
    resetSelection: (args: {
        start: number;
        end?: number;
        currencyField?: CurrencyField;
    }) => void;
    moveCursorToEnd: (args: {
        targetInputRef: MutableRefObject<string>;
    }) => void;
    onDecimalPadTriggerInputShake: () => void;
    onInputSelectionChange: (start: number, end: number) => void;
    onOutputSelectionChange: (start: number, end: number) => void;
    onFocusInput: () => void;
    onFocusOutput: () => void;
    onShowTokenSelectorInput: () => void;
    onShowTokenSelectorOutput: () => void;
    onSetExactAmount: (currencyField: CurrencyField, amount: string) => void;
    onSetExactAmountInput: (amount: string) => void;
    onSetExactAmountOutput: (amount: string) => void;
    onSetPresetValue: (amount: string, percentage: PresetPercentage) => void;
    onToggleIsFiatMode: (currencyField: CurrencyField) => void;
    onSwitchCurrencies: () => void;
};
//# sourceMappingURL=useSwapFormScreenCallbacks.d.ts.map