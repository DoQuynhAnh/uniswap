import { Token } from '@uniswap/sdk-core';
import { TokenApprovalTransactionStep } from 'uniswap/src/features/transactions/steps/approve';
import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface TokenRevocationTransactionStep extends Omit<TokenApprovalTransactionStep, 'type'> {
    type: TransactionStepType.TokenRevocationTransaction;
    amount: '0';
}
export declare function createRevocationTransactionStep(txRequest: ValidatedTransactionRequest | undefined, token: Token): TokenRevocationTransactionStep | undefined;
//# sourceMappingURL=revoke.d.ts.map