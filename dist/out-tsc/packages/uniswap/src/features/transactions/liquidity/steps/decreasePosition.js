import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
export function createDecreasePositionStep(txRequest) {
    return {
        type: TransactionStepType.DecreasePositionTransaction,
        txRequest,
    };
}
//# sourceMappingURL=decreasePosition.js.map