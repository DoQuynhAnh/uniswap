import { createGetEVMSwapTransactionRequestInfo } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/utils';
import { createGetPermitTxInfo, getClassicSwapTxAndGasInfo, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
export function createClassicSwapTxAndGasInfoService(ctx) {
    const getEVMSwapTransactionRequestInfo = createGetEVMSwapTransactionRequestInfo(ctx);
    const getPermitTxInfo = createGetPermitTxInfo(ctx);
    const service = {
        async getSwapTxAndGasInfo(params) {
            const swapTxInfo = await getEVMSwapTransactionRequestInfo(params);
            const permitTxInfo = getPermitTxInfo(params.trade);
            return getClassicSwapTxAndGasInfo({ ...params, swapTxInfo, permitTxInfo });
        },
    };
    return service;
}
//# sourceMappingURL=classicSwapTxAndGasInfoService.js.map