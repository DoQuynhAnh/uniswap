import { createGetEVMSwapTransactionRequestInfo } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/utils';
import { getBridgeSwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
export function createBridgeSwapTxAndGasInfoService(ctx) {
    const getEVMSwapTransactionRequestInfo = createGetEVMSwapTransactionRequestInfo(ctx);
    const service = {
        async getSwapTxAndGasInfo(params) {
            const swapTxInfo = await getEVMSwapTransactionRequestInfo(params);
            return getBridgeSwapTxAndGasInfo({ ...params, swapTxInfo });
        },
    };
    return service;
}
//# sourceMappingURL=bridgeSwapTxAndGasInfoService.js.map