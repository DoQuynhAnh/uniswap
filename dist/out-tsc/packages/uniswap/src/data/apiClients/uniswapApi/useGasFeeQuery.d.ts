import { TransactionRequest } from '@ethersproject/providers';
import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryWithImmediateGarbageCollectionApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { GasFeeResultWithoutState } from 'uniswap/src/data/apiClients/uniswapApi/UniswapApiClient';
export declare function useGasFeeQuery({ params, ...rest }: UseQueryWithImmediateGarbageCollectionApiHelperHookArgs<{
    tx: TransactionRequest;
    fallbackGasLimit?: number;
}, GasFeeResultWithoutState>): UseQueryResult<GasFeeResultWithoutState>;
//# sourceMappingURL=useGasFeeQuery.d.ts.map