import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { CheckApprovalLPRequest, CheckApprovalLPResponse } from 'uniswap/src/data/tradingApi/__generated__';
export declare function useCheckLpApprovalQuery({ params, headers, ...rest }: UseQueryApiHelperHookArgs<CheckApprovalLPRequest, CheckApprovalLPResponse> & {
    headers?: Record<string, string>;
}): UseQueryResult<CheckApprovalLPResponse>;
//# sourceMappingURL=useCheckLpApprovalQuery.d.ts.map