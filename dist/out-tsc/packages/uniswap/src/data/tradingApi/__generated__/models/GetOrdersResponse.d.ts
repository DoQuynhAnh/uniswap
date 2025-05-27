import type { RequestId } from './RequestId';
import type { UniswapXOrder } from './UniswapXOrder';
export type GetOrdersResponse = {
    requestId: RequestId;
    orders: Array<UniswapXOrder>;
    cursor?: string;
};
//# sourceMappingURL=GetOrdersResponse.d.ts.map