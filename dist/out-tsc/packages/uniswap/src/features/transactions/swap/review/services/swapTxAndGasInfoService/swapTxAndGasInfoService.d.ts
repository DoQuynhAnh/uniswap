import type { Routing } from 'uniswap/src/data/tradingApi/__generated__';
import type { AccountMeta } from 'uniswap/src/features/accounts/types';
import type { ApprovalTxInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo';
import type { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import type { SwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import type { Trade } from 'uniswap/src/features/transactions/swap/types/trade';
export type SwapTxAndGasInfoParameters<T extends Trade | undefined> = {
    account?: AccountMeta;
    derivedSwapInfo: DerivedSwapInfo;
    trade: T;
    approvalTxInfo: ApprovalTxInfo;
};
export interface SwapTxAndGasInfoService<T extends Trade | undefined> {
    getSwapTxAndGasInfo: (ctx: SwapTxAndGasInfoParameters<T>) => Promise<SwapTxAndGasInfo>;
}
export type RoutingServicesMap = {
    [K in Routing]: SwapTxAndGasInfoService<Trade & {
        routing: K;
    }>;
};
export declare function createSwapTxAndGasInfoService(ctx: {
    services: RoutingServicesMap;
    tradelessWrapService: SwapTxAndGasInfoService<undefined>;
}): SwapTxAndGasInfoService<Trade | undefined>;
//# sourceMappingURL=swapTxAndGasInfoService.d.ts.map