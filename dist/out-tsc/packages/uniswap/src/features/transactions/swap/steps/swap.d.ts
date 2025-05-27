import type { CreateSwapRequest } from 'uniswap/src/data/tradingApi/__generated__';
import { OnChainTransactionFields, OnChainTransactionFieldsBatched, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface SwapTransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.SwapTransaction;
}
export interface SwapTransactionStepAsync {
    type: TransactionStepType.SwapTransactionAsync;
    getTxRequest(signature: string): Promise<ValidatedTransactionRequest | undefined>;
}
export interface SwapTransactionStepBatched extends OnChainTransactionFieldsBatched {
    type: TransactionStepType.SwapTransactionBatched;
}
export declare function createSwapTransactionStep(txRequest: ValidatedTransactionRequest): SwapTransactionStep;
export declare function createSwapTransactionAsyncStep(swapRequestArgs: CreateSwapRequest | undefined, v4Enabled: boolean): SwapTransactionStepAsync;
export declare function createSwapTransactionStepBatched(txRequests: ValidatedTransactionRequest[]): SwapTransactionStepBatched;
//# sourceMappingURL=swap.d.ts.map