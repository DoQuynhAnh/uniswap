import { RefObject } from 'react';
import { TextInputProps } from 'uniswap/src/components/input/TextInput';
type DecimalPadInputProps = {
    disabled?: boolean;
    hideDecimal?: boolean;
    onReady: () => void;
    resetSelection: (args: {
        start: number;
        end?: number;
    }) => void;
    selectionRef: React.MutableRefObject<TextInputProps['selection']>;
    setValue: (newValue: string) => void;
    valueRef: React.MutableRefObject<string>;
    maxDecimals: number;
    onTriggerInputShakeAnimation: () => void;
};
export type DecimalPadInputRef = {
    updateDisabledKeys(): void;
    setMaxHeight(height: number): void;
};
export declare enum DecimalPadCalculatedSpaceId {
    Swap = 0,
    Send = 1,
    FiatOnRamp = 2
}
export declare function DecimalPadCalculateSpace({ id, decimalPadRef, additionalElementsHeight, }: {
    id: DecimalPadCalculatedSpaceId;
    decimalPadRef: RefObject<DecimalPadInputRef>;
    additionalElementsHeight: null | number;
}): JSX.Element;
export declare const DecimalPadInput: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<DecimalPadInputProps & import("react").RefAttributes<DecimalPadInputRef>>>;
export {};
//# sourceMappingURL=DecimalPadInput.d.ts.map