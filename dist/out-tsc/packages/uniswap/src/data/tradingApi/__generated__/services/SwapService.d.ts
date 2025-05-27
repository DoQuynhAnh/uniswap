import type { ChainId } from '../models/ChainId';
import type { CreateSwap5792Request } from '../models/CreateSwap5792Request';
import type { CreateSwap5792Response } from '../models/CreateSwap5792Response';
import type { CreateSwap7702Request } from '../models/CreateSwap7702Request';
import type { CreateSwap7702Response } from '../models/CreateSwap7702Response';
import type { CreateSwapRequest } from '../models/CreateSwapRequest';
import type { CreateSwapResponse } from '../models/CreateSwapResponse';
import type { GetSwapsResponse } from '../models/GetSwapsResponse';
import type { TransactionHash } from '../models/TransactionHash';
import type { UniversalRouterVersion } from '../models/UniversalRouterVersion';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SwapService {
    /**
     * Create swap calldata
     * Create the calldata for a swap transaction (including wrap/unwrap) against the Uniswap Protocols. If the `quote` parameter includes the fee parameters, then the calldata will include the fee disbursement. The gas estimates will be **more precise** when the the response calldata would be valid if submitted on-chain.
     * @returns CreateSwapResponse Create swap successful.
     * @throws ApiError
     */
    static createSwapTransaction({ xUniversalRouterVersion, requestBody, }: {
        /**
         * The version of the Universal Router to use for the swap journey. *MUST* be consistent throughout the API calls.
         */
        xUniversalRouterVersion?: UniversalRouterVersion;
        requestBody?: CreateSwapRequest;
    }): CancelablePromise<CreateSwapResponse>;
    /**
     * Get swaps status
     * Get the status of a swap or bridge transactions.
     * @returns GetSwapsResponse Get swap successful.
     * @throws ApiError
     */
    static getSwaps({ txHashes, chainId, }: {
        /**
         * The transaction hashes.
         */
        txHashes: Array<TransactionHash>;
        chainId?: ChainId;
    }): CancelablePromise<GetSwapsResponse>;
    /**
     * Create swap EIP 5792 calldata
     * Create the EIP 5792 calldata for a swap transaction (including wrap/unwrap and bridging) against the Uniswap Protocols. If the `quote` parameter includes the fee parameters, then the calldata will include the fee disbursement. The gas estimates will be **more precise** when the response calldata would be valid if submitted on-chain.
     * @returns CreateSwap5792Response Create 5792 swap successful.
     * @throws ApiError
     */
    static createSwap5792Transaction({ xUniversalRouterVersion, requestBody, }: {
        /**
         * The version of the Universal Router to use for the swap journey. *MUST* be consistent throughout the API calls.
         */
        xUniversalRouterVersion?: UniversalRouterVersion;
        requestBody?: CreateSwap5792Request;
    }): CancelablePromise<CreateSwap5792Response>;
    /**
     * Create swap EIP 7702 calldata
     * Create the EIP 7702 calldata for a swap transaction (including wrap/unwrap and bridging) against the Uniswap Protocols. If the `quote` parameter includes the fee parameters, then the calldata will include the fee disbursement. The gas estimates will be **more precise** when the the response calldata would be valid if submitted on-chain.
     * @returns CreateSwap7702Response Create 7702 swap successful.
     * @throws ApiError
     */
    static createSwap7702Transaction({ xUniversalRouterVersion, requestBody, }: {
        /**
         * The version of the Universal Router to use for the swap journey. *MUST* be consistent throughout the API calls.
         */
        xUniversalRouterVersion?: UniversalRouterVersion;
        requestBody?: CreateSwap7702Request;
    }): CancelablePromise<CreateSwap7702Response>;
}
//# sourceMappingURL=SwapService.d.ts.map