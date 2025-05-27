import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { parseERC20ApproveCalldata } from 'uniswap/src/utils/approvals';
export function createRevocationTransactionStep(txRequest, token) {
    if (!(txRequest === null || txRequest === void 0 ? void 0 : txRequest.data)) {
        return undefined;
    }
    const type = TransactionStepType.TokenRevocationTransaction;
    const { spender, amount } = parseERC20ApproveCalldata(txRequest.data.toString());
    if (amount !== BigInt(0)) {
        return undefined;
    }
    return { type, txRequest, token, spender, amount: '0' };
}
//# sourceMappingURL=revoke.js.map