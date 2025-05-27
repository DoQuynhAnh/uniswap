import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { Encode7702ResponseBody, WalletEncode7702RequestBody } from 'uniswap/src/data/tradingApi/__generated__';
export type WalletEncode7702Params = {
    calls: WalletEncode7702RequestBody['calls'];
    smartContractDelegationAddress: WalletEncode7702RequestBody['smartContractDelegationAddress'];
};
export declare function useWalletEncode7702Query({ params, ...rest }: UseQueryApiHelperHookArgs<WalletEncode7702RequestBody, Encode7702ResponseBody>): UseQueryResult<Encode7702ResponseBody>;
//# sourceMappingURL=useWalletEncode7702Query.d.ts.map