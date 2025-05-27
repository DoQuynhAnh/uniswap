import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { OnChainTransactionFields, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface Permit2TransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.Permit2Transaction;
    token: Token;
    spender: string;
    pair?: [Currency, Currency];
    amount: string;
}
export declare function createPermit2TransactionStep(txRequest: ValidatedTransactionRequest | undefined, amountIn?: CurrencyAmount<Currency>, pair?: [Currency, Currency]): Permit2TransactionStep | undefined;
//# sourceMappingURL=permit2Transaction.d.ts.map