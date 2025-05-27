import type { DutchQuote } from './DutchQuote';
import type { DutchQuoteV2 } from './DutchQuoteV2';
import type { DutchQuoteV3 } from './DutchQuoteV3';
import type { PriorityQuote } from './PriorityQuote';
import type { Routing } from './Routing';
export type OrderRequest = {
    /**
     * The signed permit.
     */
    signature: string;
    quote: (DutchQuote | DutchQuoteV2 | DutchQuoteV3 | PriorityQuote);
    routing?: Routing;
};
//# sourceMappingURL=OrderRequest.d.ts.map