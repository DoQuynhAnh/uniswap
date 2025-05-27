import type { Address } from './Address';
import type { ChainId } from './ChainId';
import type { claimerWalletAddress } from './claimerWalletAddress';
import type { Distributor } from './Distributor';
export type ClaimLPRewardsRequest = {
    walletAddress?: claimerWalletAddress;
    chainId?: ChainId;
    /**
     * The token addresses to claim rewards for.
     */
    tokens?: Array<Address>;
    distributor?: Distributor;
    simulateTransaction?: boolean;
};
//# sourceMappingURL=ClaimLPRewardsRequest.d.ts.map