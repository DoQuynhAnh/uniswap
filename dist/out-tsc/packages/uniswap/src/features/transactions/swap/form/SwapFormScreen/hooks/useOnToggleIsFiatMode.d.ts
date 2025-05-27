import type { MutableRefObject } from 'react';
import type { CurrencyField } from 'uniswap/src/types/currency';
export declare const useOnToggleIsFiatMode: ({ formattedDerivedValueRef, moveCursorToEnd, }: {
    formattedDerivedValueRef: MutableRefObject<string>;
    moveCursorToEnd: ({ targetInputRef }: {
        targetInputRef: MutableRefObject<string>;
    }) => void;
}) => (currencyField: CurrencyField) => void;
//# sourceMappingURL=useOnToggleIsFiatMode.d.ts.map