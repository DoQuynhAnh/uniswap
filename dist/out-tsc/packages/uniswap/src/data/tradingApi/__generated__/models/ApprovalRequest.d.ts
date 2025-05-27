import type { ChainId } from './ChainId';
import type { includeGasInfo } from './includeGasInfo';
import type { inputToken } from './inputToken';
import type { outputToken } from './outputToken';
import type { senderWalletAddress } from './senderWalletAddress';
import type { tokenAmount } from './tokenAmount';
import type { Urgency } from './Urgency';
import { GasStrategy } from "../../types";
export type ApprovalRequest = {
    walletAddress: senderWalletAddress;
    token: inputToken;
    amount: tokenAmount;
    chainId: ChainId;
    urgency?: Urgency;
    includeGasInfo?: includeGasInfo;
    tokenOut?: outputToken;
    tokenOutChainId?: ChainId;
    gasStrategies?: GasStrategy[];
};
//# sourceMappingURL=ApprovalRequest.d.ts.map