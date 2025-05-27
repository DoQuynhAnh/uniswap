import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
/**
 * We want the `DecimalPad` to always control one of the 2 inputs even when no input is focused,
 * which can happen after the user hits `Max`.
 */
export const useDecimalPadControlledField = () => {
    const { focusOnCurrencyField, exactCurrencyField } = useSwapFormContext();
    return focusOnCurrencyField !== null && focusOnCurrencyField !== void 0 ? focusOnCurrencyField : exactCurrencyField;
};
//# sourceMappingURL=useDecimalPadControlledField.js.map