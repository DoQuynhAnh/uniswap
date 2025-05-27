import { OnChainTransactionFields, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface CollectFeesTransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.CollectFeesTransactionStep;
}
export declare function createCollectFeesStep(txRequest: ValidatedTransactionRequest): CollectFeesTransactionStep;
//# sourceMappingURL=collectFees.d.ts.map