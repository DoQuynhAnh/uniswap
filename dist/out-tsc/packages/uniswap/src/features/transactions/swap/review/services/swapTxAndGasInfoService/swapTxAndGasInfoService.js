import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
export function createSwapTxAndGasInfoService(ctx) {
    function getServiceForTrade(trade) {
        const service = ctx.services[trade.routing];
        if (!service) {
            throw new Error(`Unsupported routing: ${trade.routing}`);
        }
        return service;
    }
    const service = {
        async getSwapTxAndGasInfo(params) {
            const { trade, derivedSwapInfo } = params;
            // TODO(WEB-7243): Remove special casing for wraps once we have a Trade variant for wraps
            if (!trade) {
                if (derivedSwapInfo.wrapType !== WrapType.NotApplicable) {
                    return ctx.tradelessWrapService.getSwapTxAndGasInfo({ ...params, trade });
                }
                throw new Error('Trade is undefined');
            }
            return getServiceForTrade(trade).getSwapTxAndGasInfo({ ...params, trade });
        },
    };
    return service;
}
//# sourceMappingURL=swapTxAndGasInfoService.js.map