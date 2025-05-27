import { fetchSwap } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { TransactionStepType, } from 'uniswap/src/features/transactions/steps/types';
import { validateTransactionRequest, } from 'uniswap/src/features/transactions/swap/utils/trade';
export function createSwapTransactionStep(txRequest) {
    return { type: TransactionStepType.SwapTransaction, txRequest };
}
export function createSwapTransactionAsyncStep(swapRequestArgs, v4Enabled) {
    return {
        type: TransactionStepType.SwapTransactionAsync,
        getTxRequest: async (signature) => {
            if (!swapRequestArgs) {
                return undefined;
            }
            const { swap } = await fetchSwap({
                ...swapRequestArgs,
                signature,
                /* simulating transaction provides a more accurate gas limit, and the simulation will succeed because async swap step will only occur after approval has been confirmed. */
                simulateTransaction: true,
                v4Enabled,
            });
            return validateTransactionRequest(swap);
        },
    };
}
export function createSwapTransactionStepBatched(txRequests) {
    return { type: TransactionStepType.SwapTransactionBatched, batchedTxRequests: txRequests };
}
//# sourceMappingURL=swap.js.map