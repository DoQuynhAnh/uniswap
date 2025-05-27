import type { gasFee } from './gasFee';
import type { gasFeeUSD } from './gasFeeUSD';
import type { RequestId } from './RequestId';
import type { TransactionRequest } from './TransactionRequest';
import { GasEstimate } from "../../types";
export type CreateSendResponse = {
    requestId: RequestId;
    send: TransactionRequest;
    gasFee?: gasFee;
    gasFeeUSD?: gasFeeUSD;
    gasEstimates?: GasEstimate[];
};
//# sourceMappingURL=CreateSendResponse.d.ts.map