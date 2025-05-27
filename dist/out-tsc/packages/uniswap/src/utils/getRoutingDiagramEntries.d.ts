import { Protocol } from '@uniswap/router-sdk';
import { Currency, Percent } from '@uniswap/sdk-core';
import { FeeAmount } from '@uniswap/v3-sdk';
import { ClassicTrade } from 'uniswap/src/features/transactions/swap/types/trade';
export interface RoutingDiagramEntry {
    percent: Percent;
    path: [Currency, Currency, FeeAmount, Protocol][];
    protocol: Protocol;
}
/**
 * Loops through all routes on a trade and returns an array of diagram entries.
 */
export default function getRoutingDiagramEntries(trade: ClassicTrade): RoutingDiagramEntry[];
//# sourceMappingURL=getRoutingDiagramEntries.d.ts.map