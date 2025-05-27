import { useEffect } from 'react';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { CurrencyField } from 'uniswap/src/types/currency';
export const useUpdateSwapFormOnMountIfExactOutputWillFail = (exactOutputWillFail) => {
    const { updateSwapForm } = useSwapFormContext();
    useEffect(() => {
        if (exactOutputWillFail) {
            updateSwapForm({
                exactCurrencyField: CurrencyField.INPUT,
                focusOnCurrencyField: CurrencyField.INPUT,
            });
        }
        // Since we only want to run this on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
//# sourceMappingURL=useUpdateSwapFormOnMountIfExactOutputWillFail.js.map