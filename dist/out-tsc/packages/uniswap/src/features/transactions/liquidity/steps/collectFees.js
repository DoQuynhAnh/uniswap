import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
export function createCollectFeesStep(txRequest) {
    return {
        type: TransactionStepType.CollectFeesTransactionStep,
        txRequest,
    };
}
//# sourceMappingURL=collectFees.js.map