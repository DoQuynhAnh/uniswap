import type { Address } from './Address';
import type { ChainId } from './ChainId';
export type WalletCheckDelegationRequestBody = {
    /**
     * Array of wallet addresses to check delegation status for.
     */
    walletAddresses?: Array<Address>;
    /**
     * Array of chain IDs to check delegation status for.
     */
    chainIds: Array<ChainId>;
};
//# sourceMappingURL=WalletCheckDelegationRequestBody.d.ts.map