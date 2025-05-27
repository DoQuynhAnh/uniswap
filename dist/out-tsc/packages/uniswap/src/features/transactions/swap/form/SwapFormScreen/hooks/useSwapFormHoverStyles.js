import { useMemo } from 'react';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { CurrencyField } from 'uniswap/src/types/currency';
export const useSwapFormHoverStyles = () => {
    const { focusOnCurrencyField } = useSwapFormContext();
    return useMemo(() => ({
        input: {
            borderColor: focusOnCurrencyField === CurrencyField.INPUT ? '$surface3Hovered' : '$transparent',
            backgroundColor: focusOnCurrencyField === CurrencyField.INPUT ? '$surface1' : '$surface2Hovered',
        },
        output: {
            borderColor: focusOnCurrencyField === CurrencyField.OUTPUT ? '$surface3Hovered' : '$transparent',
            backgroundColor: focusOnCurrencyField === CurrencyField.OUTPUT ? '$surface1' : '$surface2Hovered',
        },
    }), [focusOnCurrencyField]);
};
//# sourceMappingURL=useSwapFormHoverStyles.js.map