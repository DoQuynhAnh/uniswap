import type { ChainId } from './ChainId';
import type { inputToken } from './inputToken';
import type { receiverWalletAddress } from './receiverWalletAddress';
import type { senderWalletAddress } from './senderWalletAddress';
import type { tokenAmount } from './tokenAmount';
import type { Urgency } from './Urgency';
import { GasStrategy } from "../../types";
export type CreateSendRequest = {
    sender: senderWalletAddress;
    recipient: receiverWalletAddress;
    token: inputToken;
    amount: tokenAmount;
    chainId: ChainId;
    urgency?: Urgency;
    gasStrategies?: GasStrategy[];
};
//# sourceMappingURL=CreateSendRequest.d.ts.map