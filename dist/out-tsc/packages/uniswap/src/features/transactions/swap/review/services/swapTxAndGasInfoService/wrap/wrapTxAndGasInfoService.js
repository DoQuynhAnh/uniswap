import { createFetchGasFee } from 'uniswap/src/data/apiClients/uniswapApi/UniswapApiClient';
import { getWrapTransactionRequest } from 'uniswap/src/features/transactions/swap/contexts/hooks/useWrapTransactionRequest';
import { getWrapTxAndGasInfo, processWrapResponse, } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { tryCatch } from 'utilities/src/errors';
export function createWrapTxAndGasInfoService(ctx) {
    const { activeGasStrategy, shadowGasStrategies, fallbackGasLimit } = ctx;
    const fetchGasFee = createFetchGasFee({ activeGasStrategy, shadowGasStrategies });
    const service = {
        async getSwapTxAndGasInfo({ account, derivedSwapInfo }) {
            const currencyAmountIn = derivedSwapInfo.currencyAmounts.input;
            const from = account === null || account === void 0 ? void 0 : account.address;
            if (!currencyAmountIn) {
                throw new Error('Currency amount in is required');
            }
            const wrapTxRequest = await getWrapTransactionRequest({ currencyAmountIn, from });
            // TODO(WALL-6421): Remove this handling once GasFeeResult shape is decoupled from state fields
            const { data: statelessGasFeeResult, error } = await tryCatch(fetchGasFee({ tx: wrapTxRequest, fallbackGasLimit }));
            const gasFeeResult = { ...statelessGasFeeResult, error, isLoading: false };
            const swapTxInfo = processWrapResponse({ gasFeeResult, wrapTxRequest });
            return getWrapTxAndGasInfo({ swapTxInfo });
        },
    };
    return service;
}
//# sourceMappingURL=wrapTxAndGasInfoService.js.map