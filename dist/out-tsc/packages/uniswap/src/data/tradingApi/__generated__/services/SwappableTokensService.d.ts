import type { Address } from '../models/Address';
import type { ChainId } from '../models/ChainId';
import type { GetSwappableTokensResponse } from '../models/GetSwappableTokensResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SwappableTokensService {
    /**
     * Get bridgable tokens
     * Returns the list of destination bridge chains for a given token on a given chain.
     * @returns GetSwappableTokensResponse Get swappable tokens successful.
     * @throws ApiError
     */
    static getSwappableTokens({ tokenIn, tokenInChainId, }: {
        tokenIn?: Address;
        tokenInChainId?: ChainId;
    }): CancelablePromise<GetSwappableTokensResponse>;
}
//# sourceMappingURL=SwappableTokensService.d.ts.map