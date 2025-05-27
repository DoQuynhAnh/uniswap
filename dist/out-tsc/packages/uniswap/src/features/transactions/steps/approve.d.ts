import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { OnChainTransactionFields, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface TokenApprovalTransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.TokenApprovalTransaction;
    token: Token;
    spender: string;
    pair?: [Currency, Currency];
    amount: string;
}
export declare function createApprovalTransactionStep(txRequest: ValidatedTransactionRequest | undefined, amountIn?: CurrencyAmount<Currency>, pair?: [Currency, Currency]): TokenApprovalTransactionStep | undefined;
//# sourceMappingURL=approve.d.ts.map