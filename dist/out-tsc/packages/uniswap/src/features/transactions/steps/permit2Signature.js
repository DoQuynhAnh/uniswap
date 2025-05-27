import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
export function createPermit2SignatureStep(permitData, token) {
    return { type: TransactionStepType.Permit2Signature, token, ...permitData };
}
//# sourceMappingURL=permit2Signature.js.map