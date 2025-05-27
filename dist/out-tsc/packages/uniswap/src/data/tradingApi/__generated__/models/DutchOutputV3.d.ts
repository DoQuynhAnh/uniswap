import type { Curve } from './Curve';
import type { minAmount } from './minAmount';
import type { outputToken } from './outputToken';
import type { receiverWalletAddress } from './receiverWalletAddress';
import type { startAmount } from './startAmount';
export type DutchOutputV3 = {
    startAmount: startAmount;
    minAmount?: minAmount;
    recipient: receiverWalletAddress;
    adjustmentPerGweiBaseFee: string;
    curve: Curve;
    token: outputToken;
};
//# sourceMappingURL=DutchOutputV3.d.ts.map