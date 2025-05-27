import type { Address } from './Address';
import type { lpPoolFee } from './lpPoolFee';
import type { tickSpacing } from './tickSpacing';
export type Pool = {
    token0: Address;
    token1: Address;
    fee?: lpPoolFee;
    tickSpacing?: tickSpacing;
    hooks?: Address;
};
//# sourceMappingURL=Pool.d.ts.map