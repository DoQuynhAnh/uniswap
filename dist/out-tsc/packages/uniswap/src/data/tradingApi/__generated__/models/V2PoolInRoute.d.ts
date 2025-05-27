import type { contractAddress } from './contractAddress';
import type { tokenAmount } from './tokenAmount';
import type { TokenInRoute } from './TokenInRoute';
import type { V2Reserve } from './V2Reserve';
export type V2PoolInRoute = {
    type?: string;
    address?: contractAddress;
    tokenIn?: TokenInRoute;
    tokenOut?: TokenInRoute;
    reserve0?: V2Reserve;
    reserve1?: V2Reserve;
    amountIn?: tokenAmount;
    amountOut?: tokenAmount;
};
//# sourceMappingURL=V2PoolInRoute.d.ts.map