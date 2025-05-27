import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { SwapFormState } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { TransactionState } from 'uniswap/src/features/transactions/types/transactionState';
import { CurrencyField } from 'uniswap/src/types/currency';
export declare function useSwapPrefilledState(initialState: TransactionState | undefined): SwapFormState | undefined;
export declare function getFocusOnCurrencyFieldFromInitialState({ focusOnCurrencyField, skipFocusOnCurrencyField, input, output, exactCurrencyField, }: TransactionState): CurrencyField | undefined;
export declare function getSwapPrefilledState({ currencyAddress, currencyChainId, currencyField, }: {
    currencyAddress: Address;
    currencyChainId: UniverseChainId;
    currencyField: CurrencyField;
}): TransactionState;
//# sourceMappingURL=useSwapPrefilledState.d.ts.map