import type { CheckApprovalLPRequest } from '../models/CheckApprovalLPRequest';
import type { CheckApprovalLPResponse } from '../models/CheckApprovalLPResponse';
import type { ClaimLPFeesRequest } from '../models/ClaimLPFeesRequest';
import type { ClaimLPFeesResponse } from '../models/ClaimLPFeesResponse';
import type { ClaimLPRewardsRequest } from '../models/ClaimLPRewardsRequest';
import type { ClaimLPRewardsResponse } from '../models/ClaimLPRewardsResponse';
import type { CreateLPPositionRequest } from '../models/CreateLPPositionRequest';
import type { CreateLPPositionResponse } from '../models/CreateLPPositionResponse';
import type { DecreaseLPPositionRequest } from '../models/DecreaseLPPositionRequest';
import type { DecreaseLPPositionResponse } from '../models/DecreaseLPPositionResponse';
import type { IncreaseLPPositionRequest } from '../models/IncreaseLPPositionRequest';
import type { IncreaseLPPositionResponse } from '../models/IncreaseLPPositionResponse';
import type { MigrateLPPositionRequest } from '../models/MigrateLPPositionRequest';
import type { MigrateLPPositionResponse } from '../models/MigrateLPPositionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LiquidityService {
    /**
     * Check if tokens and permits need to be approved to add liquidity
     * Checks if the wallet address has the required approvals. If the wallet address does not have the required approval, then the response will include the transactions to approve the tokens. If the wallet address has the required approval, then the response will be empty for the corresponding tokens. If the parameter `simulateTransaction` is set to `true`, then the response will include the gas fees for the approval transactions.
     *
     * Note that approval is required for both creating and removing positions in V2 pools. Approval is only required for creating positions in V3 and V4 pools.
     * @returns CheckApprovalLPResponse Approve LP successful.
     * @throws ApiError
     */
    static checkApprovalLp({ requestBody, }: {
        requestBody?: CheckApprovalLPRequest;
    }): CancelablePromise<CheckApprovalLPResponse>;
    /**
     * Create pool and position calldata
     * This request allows the caller to create a position in a pool or, if the pool does not yet exist, to create a new pool. If a new pool must be created, a transaction is returned for the pool creation. In either case, a transaction is returned to create the new position in the pool. If the parameter `simulateTransaction` is set to true, then the response will include the gas fee for the creation transaction(s).
     *
     * Different fields are required depending on the pool version (V2, V3, or V4) into which a new position will be created, in addition to the fields which are always required. When creating a position in a V2 pool, the `position` object must contain token0 and token1 addresses. When creating a position in a V3 pool, the `position` object must contain all fields except for `hooks` which are not supported in V3 pools. When creating a position in a V4 pool, all fields within the `position` object are required except for `hooks` which is optional. Note that both V3 and V4 pools require the population of `tickLower` and `tickUpper` fields. Furthermore, `poolLiquidity`, `currentTick`, and `sqrtRatioX96` are always required when creating a position in a V3 or V4 pool. All pool versions require the population of `amount0` and `amount1`, which specify the quantity of tokens being entered into the pool.
     *
     * When creating a pool, additional fields are required depending on the pool version being created, in addition to the fields which are always required. When creating a V3 or V4 pool, either `initialPrice` or `poolLiquidity`, `currentTick`, and `sqrtRatioX96` are required. When creating a V2 pool, only `initialPrice` is required. V3 and V4 pools require `amount0` and `amount1` fields to be populated, as the creation of the pool must include seeding of liquidity. V2 pools may optionally have `amount0` and `amount1` populated; V2 pools do not require liquidity to be seeded when creating the pool.
     * @returns CreateLPPositionResponse Create LP Position successful.
     * @throws ApiError
     */
    static createLpPosition({ requestBody, }: {
        requestBody?: CreateLPPositionRequest;
    }): CancelablePromise<CreateLPPositionResponse>;
    /**
     * Increase LP position calldata
     * The response will also have the transaction to increase the position for the corresponding pool. If the parameter `simulateTransaction` is set to `true`, then the response will include the gas fees for the increase transaction.
     * @returns IncreaseLPPositionResponse Create LP Position successful.
     * @throws ApiError
     */
    static increaseLpPosition({ requestBody, }: {
        requestBody?: IncreaseLPPositionRequest;
    }): CancelablePromise<IncreaseLPPositionResponse>;
    /**
     * Decrease LP position calldata
     * The response will also have the transaction to decrease the position for the corresponding pool. If the parameter `simulateTransaction` is set to `true`, then the response will include the gas fees for the decrease transaction.
     * @returns DecreaseLPPositionResponse Decrease LP Position successful.
     * @throws ApiError
     */
    static decreaseLpPosition({ requestBody, }: {
        requestBody?: DecreaseLPPositionRequest;
    }): CancelablePromise<DecreaseLPPositionResponse>;
    /**
     * Claim LP fees calldata
     * The response will also have the transaction to claim the fees for an LP position for the corresponding pool. If the parameter `simulateTransaction` is set to `true`, then the response will include the gas fees for the claim transaction.
     * @returns ClaimLPFeesResponse Claim LP Fees successful.
     * @throws ApiError
     */
    static claimLpFees({ requestBody, }: {
        requestBody?: ClaimLPFeesRequest;
    }): CancelablePromise<ClaimLPFeesResponse>;
    /**
     * Migrate LP position calldata
     * The response will also have the transaction to migrate the position for the corresponding pool. If the parameter `simulateTransaction` is set to `true`, then the response will include the gas fees for the migrate transaction.
     * @returns MigrateLPPositionResponse Migrate LP Position successful.
     * @throws ApiError
     */
    static migrateLpPosition({ requestBody, }: {
        requestBody?: MigrateLPPositionRequest;
    }): CancelablePromise<MigrateLPPositionResponse>;
    /**
     * Claim LP rewards calldata
     * The response will have the transaction to claim the rewards. If the parameter `simulateTransaction` is set to `true`, then the response will include the gas fees for the claim transaction.
     * @returns ClaimLPRewardsResponse Claim LP Rewards successful.
     * @throws ApiError
     */
    static claimLpRewards({ requestBody, }: {
        requestBody?: ClaimLPRewardsRequest;
    }): CancelablePromise<ClaimLPRewardsResponse>;
}
//# sourceMappingURL=LiquidityService.d.ts.map