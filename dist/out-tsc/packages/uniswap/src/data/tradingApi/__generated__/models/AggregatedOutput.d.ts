import type { bps } from './bps';
import type { minAmount } from './minAmount';
import type { outputToken } from './outputToken';
import type { receiverWalletAddress } from './receiverWalletAddress';
import type { tokenAmount } from './tokenAmount';
/**
 * An array of all outputs of the proposed transaction. This includes the swap as well as any fees collected by the API integrator. This does not include pool fees when routing is through a Uniswap Protocol pool.
 */
export type AggregatedOutput = {
    token?: outputToken;
    amount?: tokenAmount;
    recipient?: receiverWalletAddress;
    bps?: bps;
    minAmount?: minAmount;
};
//# sourceMappingURL=AggregatedOutput.d.ts.map