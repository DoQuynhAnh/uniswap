import type { IndicativeQuoteToken } from './IndicativeQuoteToken';
import type { RequestId } from './RequestId';
import type { TradeType } from './TradeType';
export type IndicativeQuoteResponse = {
    requestId: RequestId;
    input: IndicativeQuoteToken;
    output: IndicativeQuoteToken;
    type: TradeType;
};
//# sourceMappingURL=IndicativeQuoteResponse.d.ts.map