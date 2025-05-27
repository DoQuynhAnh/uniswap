import { Routing } from 'uniswap/src/data/tradingApi/__generated__';
import { createLogSwapRequestErrors } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
const swapFlowTxIdToRecentRequestIdMap = new Map();
/** Decorates a SwapTxAndGasInfoService with necessary logging for EVM swap flow requests. */
export function createDecorateSwapTxInfoServiceWithEVMLogging(ctx) {
    const { trace, transactionSettings } = ctx;
    const logSwapRequestErrors = createLogSwapRequestErrors({ trace });
    return function decorateService(service) {
        const decoratedService = {
            async getSwapTxAndGasInfo(params) {
                var _a;
                const result = await service.getSwapTxAndGasInfo(params);
                if (result.routing === Routing.CLASSIC || result.routing === Routing.BRIDGE) {
                    const { derivedSwapInfo } = params;
                    const { txId } = derivedSwapInfo;
                    const previousRequestId = txId ? swapFlowTxIdToRecentRequestIdMap.get(txId) : undefined;
                    logSwapRequestErrors({
                        txRequest: (_a = result.txRequests) === null || _a === void 0 ? void 0 : _a[0],
                        gasFeeResult: result.gasFee,
                        derivedSwapInfo,
                        transactionSettings,
                        previousRequestId,
                    });
                    if (txId) {
                        swapFlowTxIdToRecentRequestIdMap.set(txId, params.trade.quote.requestId);
                    }
                }
                return result;
            },
        };
        return decoratedService;
    };
}
//# sourceMappingURL=logging.js.map