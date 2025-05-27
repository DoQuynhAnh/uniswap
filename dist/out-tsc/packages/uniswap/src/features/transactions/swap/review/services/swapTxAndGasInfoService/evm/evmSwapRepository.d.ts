import { TransactionRequest } from '@ethersproject/providers';
import { WithV4Flag } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { CreateSwap5792Response, CreateSwap7702Response, CreateSwapRequest, CreateSwapResponse } from 'uniswap/src/data/tradingApi/__generated__';
import { GasEstimate } from 'uniswap/src/data/tradingApi/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
export type SwapData = {
    requestId: string;
    transactions: TransactionRequest[];
    gasFee?: string;
    gasEstimates?: GasEstimate[];
};
export interface EVMSwapRepository {
    fetchSwapData: (params: WithV4Flag<CreateSwapRequest>) => Promise<SwapData>;
}
export declare function convertSwapResponseToSwapData(response: CreateSwapResponse): SwapData;
export declare function createLegacyEVMSwapRepository(): EVMSwapRepository;
export declare function convertSwap7702ResponseToSwapData(response: CreateSwap7702Response): SwapData;
export declare function create7702EVMSwapRepository(ctx: {
    getSwapDelegationAddress: (chainId?: UniverseChainId) => string | undefined;
}): EVMSwapRepository;
export declare function convertSwap5792ResponseToSwapData(response: CreateSwap5792Response): SwapData;
export declare function create5792EVMSwapRepository(): EVMSwapRepository;
//# sourceMappingURL=evmSwapRepository.d.ts.map