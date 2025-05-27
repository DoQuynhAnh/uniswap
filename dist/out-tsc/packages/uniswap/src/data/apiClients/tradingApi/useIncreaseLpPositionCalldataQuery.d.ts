import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { IncreaseLPPositionRequest, IncreaseLPPositionResponse } from 'uniswap/src/data/tradingApi/__generated__';
export declare function useIncreaseLpPositionCalldataQuery({ params, deadlineInMinutes, ...rest }: UseQueryApiHelperHookArgs<IncreaseLPPositionRequest, IncreaseLPPositionResponse> & {
    deadlineInMinutes?: number;
}): UseQueryResult<IncreaseLPPositionResponse>;
//# sourceMappingURL=useIncreaseLpPositionCalldataQuery.d.ts.map