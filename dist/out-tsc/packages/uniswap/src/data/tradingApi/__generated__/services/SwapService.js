import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SwapService {
    /**
     * Create swap calldata
     * Create the calldata for a swap transaction (including wrap/unwrap) against the Uniswap Protocols. If the `quote` parameter includes the fee parameters, then the calldata will include the fee disbursement. The gas estimates will be **more precise** when the the response calldata would be valid if submitted on-chain.
     * @returns CreateSwapResponse Create swap successful.
     * @throws ApiError
     */
    static createSwapTransaction({ xUniversalRouterVersion, requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/swap',
            headers: {
                'x-universal-router-version': xUniversalRouterVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `RequestValidationError, Bad Input`,
                401: `UnauthorizedError eg. Account is blocked or  Fee is not enabled.`,
                404: `ResourceNotFound eg. No quotes available or Gas fee/price not available`,
                419: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
    /**
     * Get swaps status
     * Get the status of a swap or bridge transactions.
     * @returns GetSwapsResponse Get swap successful.
     * @throws ApiError
     */
    static getSwaps({ txHashes, chainId, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/swaps',
            query: {
                'txHashes': txHashes,
                'chainId': chainId,
            },
            errors: {
                400: `RequestValidationError, Bad Input`,
                404: `ResourceNotFound eg. No quotes available or Gas fee/price not available`,
                419: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
    /**
     * Create swap EIP 5792 calldata
     * Create the EIP 5792 calldata for a swap transaction (including wrap/unwrap and bridging) against the Uniswap Protocols. If the `quote` parameter includes the fee parameters, then the calldata will include the fee disbursement. The gas estimates will be **more precise** when the response calldata would be valid if submitted on-chain.
     * @returns CreateSwap5792Response Create 5792 swap successful.
     * @throws ApiError
     */
    static createSwap5792Transaction({ xUniversalRouterVersion, requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/swap_5792',
            headers: {
                'x-universal-router-version': xUniversalRouterVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `RequestValidationError, Bad Input`,
                401: `UnauthorizedError eg. Account is blocked or  Fee is not enabled.`,
                404: `ResourceNotFound eg. No quotes available or Gas fee/price not available`,
                429: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
    /**
     * Create swap EIP 7702 calldata
     * Create the EIP 7702 calldata for a swap transaction (including wrap/unwrap and bridging) against the Uniswap Protocols. If the `quote` parameter includes the fee parameters, then the calldata will include the fee disbursement. The gas estimates will be **more precise** when the the response calldata would be valid if submitted on-chain.
     * @returns CreateSwap7702Response Create 7702 swap successful.
     * @throws ApiError
     */
    static createSwap7702Transaction({ xUniversalRouterVersion, requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/swap_7702',
            headers: {
                'x-universal-router-version': xUniversalRouterVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `RequestValidationError, Bad Input`,
                401: `UnauthorizedError eg. Account is blocked or  Fee is not enabled.`,
                404: `ResourceNotFound eg. No quotes available or Gas fee/price not available`,
                429: `Ratelimited`,
                500: `Unexpected error`,
                504: `Request duration limit reached.`,
            },
        });
    }
}
//# sourceMappingURL=SwapService.js.map