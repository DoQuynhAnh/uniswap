import type { TokenApprovalTransactionStep } from 'uniswap/src/features/transactions/steps/approve';
import type { Permit2SignatureStep } from 'uniswap/src/features/transactions/steps/permit2Signature';
import type { Permit2TransactionStep } from 'uniswap/src/features/transactions/steps/permit2Transaction';
import type { TokenRevocationTransactionStep } from 'uniswap/src/features/transactions/steps/revoke';
import type { SwapTransactionStep, SwapTransactionStepAsync, SwapTransactionStepBatched } from 'uniswap/src/features/transactions/swap/steps/swap';
export type ClassicSwapSteps = TokenApprovalTransactionStep | TokenRevocationTransactionStep | Permit2SignatureStep | Permit2TransactionStep | SwapTransactionStep | SwapTransactionStepAsync | SwapTransactionStepBatched;
export type ClassicSwapFlow = {
    revocation?: TokenRevocationTransactionStep;
    approval?: TokenApprovalTransactionStep;
    permit: Permit2TransactionStep | undefined;
    swap: SwapTransactionStep;
} | {
    revocation?: undefined;
    approval?: undefined;
    permit: undefined;
    swap: SwapTransactionStepBatched;
} | {
    revocation?: TokenRevocationTransactionStep;
    approval?: TokenApprovalTransactionStep;
    permit: Permit2SignatureStep;
    swap: SwapTransactionStepAsync;
};
export declare function orderClassicSwapSteps(flow: ClassicSwapFlow): ClassicSwapSteps[];
//# sourceMappingURL=classicSteps.d.ts.map