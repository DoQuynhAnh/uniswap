import { Amount, HistoryDuration, TimestampedAmount } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
/**
 * Constants
 */
export declare const weekMs: number;
export declare const monthMs: number;
export declare const yearMs: number;
export declare const historyDurationsMs: Record<HistoryDuration, number>;
/**
 * Base fixtures
 */
type PriceHistoryOptions = {
    duration: HistoryDuration;
    size: number;
};
export declare const priceHistory: {
    <O extends Partial<TimestampedAmount[] & PriceHistoryOptions>>(overrides: O): (Omit<TimestampedAmount, Exclude<keyof O, keyof TimestampedAmount[]>> & Omit<O, keyof PriceHistoryOptions>)[];
    (): TimestampedAmount[];
};
/**
 * Helper functions
 */
export declare const getLatestPrice: (history: Maybe<TimestampedAmount>[]) => Amount;
export declare const get24hPriceChange: (history: Maybe<TimestampedAmount>[]) => Amount;
export {};
//# sourceMappingURL=history.d.ts.map