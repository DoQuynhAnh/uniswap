import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { CreateLPPositionRequest, CreateLPPositionResponse } from 'uniswap/src/data/tradingApi/__generated__';
export declare function useCreateLpPositionCalldataQuery({ params, deadlineInMinutes, ...rest }: UseQueryApiHelperHookArgs<CreateLPPositionRequest, CreateLPPositionResponse> & {
    deadlineInMinutes?: number;
}): UseQueryResult<CreateLPPositionResponse>;
//# sourceMappingURL=useCreateLpPositionCalldataQuery.d.ts.map