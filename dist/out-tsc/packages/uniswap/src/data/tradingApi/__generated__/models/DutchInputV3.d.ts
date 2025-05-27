import type { Curve } from './Curve';
import type { inputToken } from './inputToken';
import type { startAmount } from './startAmount';
export type DutchInputV3 = {
    startAmount: startAmount;
    maxAmount: string;
    adjustmentPerGweiBaseFee: string;
    curve: Curve;
    token: inputToken;
};
//# sourceMappingURL=DutchInputV3.d.ts.map