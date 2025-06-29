import type { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { OnChainTransactionFields, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import type { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface WrapTransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.WrapTransaction;
    amount: CurrencyAmount<Currency>;
}
export declare function createWrapTransactionStep(txRequest: ValidatedTransactionRequest | undefined, inputAmount: CurrencyAmount<Currency> | undefined): WrapTransactionStep | undefined;
//# sourceMappingURL=wrap.d.ts.map