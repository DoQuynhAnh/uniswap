import { UseQueryResult } from '@tanstack/react-query';
import { UseQueryApiHelperHookArgs } from 'uniswap/src/data/apiClients/types';
import { WalletCheckDelegationRequestBody, WalletCheckDelegationResponseBody } from 'uniswap/src/data/tradingApi/__generated__';
export type WalletCheckDelegationParams = {
    walletAddresses: WalletCheckDelegationRequestBody['walletAddresses'];
    chainIds: WalletCheckDelegationRequestBody['chainIds'];
};
export declare function useWalletCheckDelegationQuery({ params, ...rest }: UseQueryApiHelperHookArgs<WalletCheckDelegationParams, WalletCheckDelegationResponseBody>): UseQueryResult<WalletCheckDelegationResponseBody>;
//# sourceMappingURL=useWalletCheckDelegationQuery.d.ts.map