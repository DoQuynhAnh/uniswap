import type { gasFee } from './gasFee';
import type { RequestId } from './RequestId';
import type { TransactionRequest } from './TransactionRequest';
import { GasEstimate } from "../../types";
export type ApprovalResponse = {
    requestId: RequestId;
    approval: TransactionRequest;
    cancel: TransactionRequest;
    gasFee?: gasFee;
    cancelGasFee?: gasFee;
    gasEstimates?: GasEstimate[];
};
//# sourceMappingURL=ApprovalResponse.d.ts.map