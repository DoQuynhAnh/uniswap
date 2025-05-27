import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WalletEncode7702Service {
    /**
     * Encode wallet transactions
     * Encodes a list of transactions into a single transaction for smart contract wallet execution. All transactions must have the same chainId.
     * @returns Encode7702ResponseBody Encode 7702 wallet transactions successful.
     * @throws ApiError
     */
    static walletEncode7702({ requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/encode_7702',
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
//# sourceMappingURL=WalletEncode7702Service.js.map