import type { gasFee } from './gasFee';
import type { RequestId } from './RequestId';
import type { TransactionRequest } from './TransactionRequest';
import { GasEstimate } from "../../types";
export type CreateSwapResponse = {
    requestId: RequestId;
    swap: TransactionRequest;
    gasFee?: gasFee;
    gasEstimates?: GasEstimate[];
};
//# sourceMappingURL=CreateSwapResponse.d.ts.map