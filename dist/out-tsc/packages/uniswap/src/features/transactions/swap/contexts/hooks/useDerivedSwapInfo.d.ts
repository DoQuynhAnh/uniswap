import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { TransactionState } from 'uniswap/src/features/transactions/types/transactionState';
/** Returns information derived from the current swap state */
export declare function useDerivedSwapInfo({ isDebouncing, ...state }: TransactionState & {
    isDebouncing?: boolean;
}): DerivedSwapInfo;
//# sourceMappingURL=useDerivedSwapInfo.d.ts.map