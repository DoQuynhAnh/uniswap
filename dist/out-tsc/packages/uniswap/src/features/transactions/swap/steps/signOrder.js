import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
export function createSignUniswapXOrderStep(permitData, quote) {
    return { type: TransactionStepType.UniswapXSignature, deadline: quote.orderInfo.deadline, quote, ...permitData };
}
//# sourceMappingURL=signOrder.js.map