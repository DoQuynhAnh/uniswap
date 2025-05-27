import { TokenApprovalTransactionStep } from 'uniswap/src/features/transactions/steps/approve';
import { TokenRevocationTransactionStep } from 'uniswap/src/features/transactions/steps/revoke';
import { WrapTransactionStep } from 'uniswap/src/features/transactions/steps/wrap';
import type { UniswapXSignatureStep } from 'uniswap/src/features/transactions/swap/steps/signOrder';
export type UniswapXSwapSteps = WrapTransactionStep | TokenApprovalTransactionStep | TokenRevocationTransactionStep | UniswapXSignatureStep;
export type UniswapXSwapFlow = {
    wrap?: WrapTransactionStep;
    revocation?: TokenRevocationTransactionStep;
    approval?: TokenApprovalTransactionStep;
    signOrder: UniswapXSignatureStep;
};
export declare function orderUniswapXSteps(flow: UniswapXSwapFlow): UniswapXSwapSteps[];
//# sourceMappingURL=uniswapxSteps.d.ts.map