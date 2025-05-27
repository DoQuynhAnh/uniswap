import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { DecreaseLPPositionRequest, DecreaseLPPositionResponse } from 'uniswap/src/data/tradingApi/__generated__';
export declare function useDecreaseLpPositionCalldataQuery({ params, deadlineInMinutes, ...rest }: UseQueryApiHelperHookArgs<DecreaseLPPositionRequest, DecreaseLPPositionResponse> & {
    deadlineInMinutes: number | undefined;
}): UseQueryResult<DecreaseLPPositionResponse>;
//# sourceMappingURL=useDecreaseLpPositionCalldataQuery.d.ts.map