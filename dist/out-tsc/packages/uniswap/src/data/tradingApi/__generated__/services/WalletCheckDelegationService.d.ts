import type { WalletCheckDelegationRequestBody } from '../models/WalletCheckDelegationRequestBody';
import type { WalletCheckDelegationResponseBody } from '../models/WalletCheckDelegationResponseBody';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WalletCheckDelegationService {
    /**
     * Get wallet delegation info
     * Gets the current delegation status and message for a smart contract wallet across different chains. Returns delegation information for each chain ID in the request.
     * @returns WalletCheckDelegationResponseBody Wallet delegation info request successful.
     * @throws ApiError
     */
    static walletCheckDelegation({ requestBody, }: {
        requestBody?: WalletCheckDelegationRequestBody;
    }): CancelablePromise<WalletCheckDelegationResponseBody>;
}
//# sourceMappingURL=WalletCheckDelegationService.d.ts.map