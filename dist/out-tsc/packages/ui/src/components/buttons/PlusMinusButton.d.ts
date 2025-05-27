/// <reference types="react" />
export declare enum PlusMinusButtonType {
    Plus = 0,
    Minus = 1
}
export declare function PlusMinusButton({ type, disabled, onPress, }: {
    type: PlusMinusButtonType;
    disabled: boolean;
    onPress: (type: PlusMinusButtonType) => void;
}): JSX.Element;
//# sourceMappingURL=PlusMinusButton.d.ts.map