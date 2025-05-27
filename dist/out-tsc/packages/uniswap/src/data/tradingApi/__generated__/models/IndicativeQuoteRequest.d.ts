import type { ChainId } from './ChainId';
import type { inputToken } from './inputToken';
import type { outputToken } from './outputToken';
import type { tokenAmount } from './tokenAmount';
import type { TradeType } from './TradeType';
export type IndicativeQuoteRequest = {
    type: TradeType;
    amount: tokenAmount;
    tokenInChainId: ChainId;
    tokenOutChainId: ChainId;
    tokenIn: inputToken;
    tokenOut: outputToken;
};
//# sourceMappingURL=IndicativeQuoteRequest.d.ts.map