import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
export function createWrapTransactionStep(txRequest, inputAmount) {
    return txRequest && inputAmount
        ? { txRequest, type: TransactionStepType.WrapTransaction, amount: inputAmount }
        : undefined;
}
//# sourceMappingURL=wrap.js.map