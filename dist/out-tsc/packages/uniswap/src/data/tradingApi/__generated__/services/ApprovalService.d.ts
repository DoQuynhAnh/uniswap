import type { ApprovalRequest } from '../models/ApprovalRequest';
import type { ApprovalResponse } from '../models/ApprovalResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ApprovalService {
    /**
     * Check if token approval is required
     * Allows the requestor to check if the `walletAddress` has the required approval to transact the `token` up to the `amount` specified. If the `walletAddress` does not have the required approval, the response will include a transaction to approve the token spend. If the `walletAddress` has the required approval, the response will return the approval with a `null` value. If the parameter `includeGasInfo` is set to `true` and an approval is needed, then the response will include both the transaction and the gas fee for the approval transaction.
     *
     * Certain tokens may require that approval be reset before approving a new spend amount. If this condition is detected for the `walletAddress` and `token`, the response will include the necessary approval cancellation in the `cancel` paragraph. When `cancel` is not applicable, the paragraph will have a `null` value.
     * @returns ApprovalResponse Check approval successful.
     * @throws ApiError
     */
    static checkApproval({ requestBody, }: {
        requestBody?: ApprovalRequest;
    }): CancelablePromise<ApprovalResponse>;
}
//# sourceMappingURL=ApprovalService.d.ts.map