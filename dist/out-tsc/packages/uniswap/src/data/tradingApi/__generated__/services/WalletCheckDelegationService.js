import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WalletCheckDelegationService {
    /**
     * Get wallet delegation info
     * Gets the current delegation status and message for a smart contract wallet across different chains. Returns delegation information for each chain ID in the request.
     * @returns WalletCheckDelegationResponseBody Wallet delegation info request successful.
     * @throws ApiError
     */
    static walletCheckDelegation({ requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/check_delegation',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `RequestValidationError, Bad Input`,
                401: `UnauthorizedError eg. Account is blocked.`,
                404: `ResourceNotFound eg. No quotes available or Gas fee/price not available`,
                419: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
}
//# sourceMappingURL=WalletCheckDelegationService.js.map