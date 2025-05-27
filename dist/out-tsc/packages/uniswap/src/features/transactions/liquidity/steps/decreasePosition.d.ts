import { OnChainTransactionFields, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface DecreasePositionTransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.DecreasePositionTransaction;
}
export declare function createDecreasePositionStep(txRequest: ValidatedTransactionRequest): DecreasePositionTransactionStep;
//# sourceMappingURL=decreasePosition.d.ts.map