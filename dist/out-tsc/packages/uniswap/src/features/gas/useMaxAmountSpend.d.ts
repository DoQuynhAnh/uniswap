import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import JSBI from 'jsbi';
import { SwapConfigKey } from 'uniswap/src/features/gating/configs';
import { TransactionType } from 'uniswap/src/features/transactions/types/transactionDetails';
/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 * @param transactionType to determine cost of transaction
 * @param isExtraTx adds a gas buffer to cover one additional transaction
 */
export declare function useMaxAmountSpend({ currencyAmount, txType, isExtraTx, }: {
    currencyAmount: Maybe<CurrencyAmount<Currency>>;
    txType?: TransactionType;
    isExtraTx?: boolean;
}): Maybe<CurrencyAmount<Currency>>;
export declare function useMinEthForGas(txType?: TransactionType): JSBI;
export declare function useMinPolygonForGas(txType?: TransactionType): JSBI;
export declare function useMinAvalancheForGas(txType?: TransactionType): JSBI;
export declare function useMinCeloForGas(txType?: TransactionType): JSBI;
export declare function useMinMonForGas(txType?: TransactionType): JSBI;
export declare function useMinGenericL2ForGas(txType?: TransactionType): JSBI;
export declare function useLowBalanceWarningGasPercentage(): number;
export declare function useCalculateMinForGas(amount: SwapConfigKey, defaultAmount: number): JSBI;
//# sourceMappingURL=useMaxAmountSpend.d.ts.map