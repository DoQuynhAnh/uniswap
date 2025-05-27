import type { ChainDelegationMap } from './ChainDelegationMap';
import type { RequestId } from './RequestId';
export type WalletCheckDelegationResponseBody = {
    requestId: RequestId;
    /**
     * Map of wallet addresses to chain IDs to delegation details.
     */
    delegationDetails: Record<string, ChainDelegationMap>;
};
//# sourceMappingURL=WalletCheckDelegationResponseBody.d.ts.map