import { getUniswapXSwapTxAndGasInfo, processUniswapXResponse, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/uniswapx/utils';
export function createUniswapXSwapTxAndGasInfoService() {
    const service = {
        async getSwapTxAndGasInfo(params) {
            var _a, _b;
            const permitData = (_b = (_a = params.trade) === null || _a === void 0 ? void 0 : _a.quote) === null || _b === void 0 ? void 0 : _b.permitData;
            const swapTxInfo = processUniswapXResponse({ permitData });
            return getUniswapXSwapTxAndGasInfo({ ...params, swapTxInfo });
        },
    };
    return service;
}
//# sourceMappingURL=uniswapXSwapTxAndGasInfoService.js.map