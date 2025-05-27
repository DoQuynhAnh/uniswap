import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { parseERC20ApproveCalldata } from 'uniswap/src/utils/approvals';
export function createPermit2TransactionStep(txRequest, amountIn, pair) {
    if (!(txRequest === null || txRequest === void 0 ? void 0 : txRequest.data) || !amountIn) {
        return undefined;
    }
    const type = TransactionStepType.Permit2Transaction;
    const token = amountIn.currency.wrapped;
    const { spender } = parseERC20ApproveCalldata(txRequest.data.toString());
    const amount = amountIn.quotient.toString();
    return { type, txRequest, token, spender, amount, pair };
}
//# sourceMappingURL=permit2Transaction.js.map