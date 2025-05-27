import { fetchSwap, fetchSwap5792, fetchSwap7702, } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { tradingApiToUniverseChainId } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
export function convertSwapResponseToSwapData(response) {
    return {
        requestId: response.requestId,
        transactions: [response.swap],
        gasFee: response.gasFee,
        gasEstimates: response.gasEstimates,
    };
}
export function createLegacyEVMSwapRepository() {
    return {
        fetchSwapData: async (params) => convertSwapResponseToSwapData(await fetchSwap(params)),
    };
}
export function convertSwap7702ResponseToSwapData(response) {
    return {
        requestId: response.requestId,
        transactions: [response.swap],
        gasFee: response.gasFee,
    };
}
export function create7702EVMSwapRepository(ctx) {
    const { getSwapDelegationAddress } = ctx;
    async function fetchSwapData(params) {
        const chainId = tradingApiToUniverseChainId(params.quote.chainId);
        const smartContractDelegationAddress = getSwapDelegationAddress(chainId);
        const response = await fetchSwap7702({ ...params, smartContractDelegationAddress });
        return convertSwap7702ResponseToSwapData(response);
    }
    return { fetchSwapData };
}
export function convertSwap5792ResponseToSwapData(response) {
    return {
        requestId: response.requestId,
        transactions: response.calls.map((c) => ({ ...c, chainId: response.chainId })),
        gasFee: response.gasFee,
    };
}
export function create5792EVMSwapRepository() {
    return {
        fetchSwapData: async (params) => convertSwap5792ResponseToSwapData(await fetchSwap5792(params)),
    };
}
//# sourceMappingURL=evmSwapRepository.js.map