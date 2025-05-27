import type { Address } from './Address';
import type { BridgeQuote } from './BridgeQuote';
import type { ClassicQuote } from './ClassicQuote';
import type { deadline } from './deadline';
import type { Urgency } from './Urgency';
import type { WrapUnwrapQuote } from './WrapUnwrapQuote';
export type CreateSwap7702Request = {
    quote: (ClassicQuote | WrapUnwrapQuote | BridgeQuote);
    smartContractDelegationAddress?: Address;
    includeGasInfo?: boolean;
    deadline?: deadline;
    urgency?: Urgency;
};
//# sourceMappingURL=CreateSwap7702Request.d.ts.map