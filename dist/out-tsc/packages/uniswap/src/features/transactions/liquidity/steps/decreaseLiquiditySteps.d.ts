import { DecreasePositionTransactionStep } from 'uniswap/src/features/transactions/liquidity/steps/decreasePosition';
import { TokenApprovalTransactionStep } from 'uniswap/src/features/transactions/steps/approve';
export type DecreaseLiquiditySteps = TokenApprovalTransactionStep | DecreasePositionTransactionStep;
export type DecreaseLiquidityFlow = {
    approvalPositionToken?: TokenApprovalTransactionStep;
    decreasePosition: DecreasePositionTransactionStep;
};
export declare function orderDecreaseLiquiditySteps(flow: DecreaseLiquidityFlow): DecreaseLiquiditySteps[];
//# sourceMappingURL=decreaseLiquiditySteps.d.ts.map