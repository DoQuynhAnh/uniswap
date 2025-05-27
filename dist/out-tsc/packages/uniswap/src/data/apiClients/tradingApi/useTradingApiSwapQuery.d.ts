import { UseQueryResult } from '@tanstack/react-query';
import { WithV4Flag } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { UseQueryWithImmediateGarbageCollectionApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { CreateSwapRequest } from 'uniswap/src/data/tradingApi/__generated__';
import { SwapData } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapRepository';
export declare function useTradingApiSwapQuery({ params, ...rest }: UseQueryWithImmediateGarbageCollectionApiHelperHookArgs<WithV4Flag<CreateSwapRequest>, SwapData>, config?: {
    canBatchTransactions?: boolean;
    swapDelegationAddress?: string;
}): UseQueryResult<SwapData>;
//# sourceMappingURL=useTradingApiSwapQuery.d.ts.map