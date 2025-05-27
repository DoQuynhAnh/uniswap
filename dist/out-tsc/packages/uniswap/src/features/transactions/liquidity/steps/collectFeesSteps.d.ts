import { CollectFeesTransactionStep } from 'uniswap/src/features/transactions/liquidity/steps/collectFees';
export type CollectFeesSteps = CollectFeesTransactionStep;
export type CollectFeesFlow = {
    collectFees: CollectFeesTransactionStep;
};
export declare function orderCollectFeesSteps(flow: CollectFeesFlow): CollectFeesSteps[];
//# sourceMappingURL=collectFeesSteps.d.ts.map