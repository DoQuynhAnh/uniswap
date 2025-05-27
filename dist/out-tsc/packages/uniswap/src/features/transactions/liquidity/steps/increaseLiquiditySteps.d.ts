import { IncreasePositionTransactionStep, IncreasePositionTransactionStepAsync } from 'uniswap/src/features/transactions/liquidity/steps/increasePosition';
import { TokenApprovalTransactionStep } from 'uniswap/src/features/transactions/steps/approve';
import { Permit2SignatureStep } from 'uniswap/src/features/transactions/steps/permit2Signature';
import { Permit2TransactionStep } from 'uniswap/src/features/transactions/steps/permit2Transaction';
import { TokenRevocationTransactionStep } from 'uniswap/src/features/transactions/steps/revoke';
import { WrapTransactionStep } from 'uniswap/src/features/transactions/steps/wrap';
export type IncreaseLiquiditySteps = TokenApprovalTransactionStep | TokenRevocationTransactionStep | Permit2SignatureStep | Permit2TransactionStep | IncreasePositionTransactionStep | IncreasePositionTransactionStepAsync;
export type IncreaseLiquidityFlow = {
    wrap?: WrapTransactionStep;
    approvalToken0?: TokenApprovalTransactionStep;
    approvalToken1?: TokenApprovalTransactionStep;
    approvalPositionToken?: TokenApprovalTransactionStep;
    revokeToken0?: TokenRevocationTransactionStep;
    revokeToken1?: TokenRevocationTransactionStep;
    permit: undefined;
    token0PermitTransaction: undefined;
    token1PermitTransaction: undefined;
    increasePosition: IncreasePositionTransactionStep;
} | {
    wrap?: WrapTransactionStep;
    approvalToken0?: TokenApprovalTransactionStep;
    approvalToken1?: TokenApprovalTransactionStep;
    approvalPositionToken?: TokenApprovalTransactionStep;
    revokeToken0?: TokenRevocationTransactionStep;
    revokeToken1?: TokenRevocationTransactionStep;
    permit: Permit2SignatureStep;
    token0PermitTransaction: undefined;
    token1PermitTransaction: undefined;
    increasePosition: IncreasePositionTransactionStepAsync;
} | {
    wrap?: WrapTransactionStep;
    approvalToken0?: TokenApprovalTransactionStep;
    approvalToken1?: TokenApprovalTransactionStep;
    approvalPositionToken?: TokenApprovalTransactionStep;
    revokeToken0?: TokenRevocationTransactionStep;
    revokeToken1?: TokenRevocationTransactionStep;
    permit: undefined;
    token0PermitTransaction: Permit2TransactionStep | undefined;
    token1PermitTransaction: Permit2TransactionStep | undefined;
    increasePosition: IncreasePositionTransactionStep;
};
export declare function orderIncreaseLiquiditySteps(flow: IncreaseLiquidityFlow): IncreaseLiquiditySteps[];
//# sourceMappingURL=increaseLiquiditySteps.d.ts.map