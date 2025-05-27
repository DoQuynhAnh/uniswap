import type { DutchQuote } from './DutchQuote';
import type { NullablePermit } from './NullablePermit';
import type { RequestId } from './RequestId';
export type LimitOrderQuoteResponse = {
    requestId: RequestId;
    quote: DutchQuote;
    routing: LimitOrderQuoteResponse.routing;
    permitData: NullablePermit;
};
export declare namespace LimitOrderQuoteResponse {
    enum routing {
        LIMIT_ORDER = "LIMIT_ORDER"
    }
}
//# sourceMappingURL=LimitOrderQuoteResponse.d.ts.map