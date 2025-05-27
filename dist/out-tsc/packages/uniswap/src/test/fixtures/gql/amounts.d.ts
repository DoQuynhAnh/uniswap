import { Amount, Currency, TimestampedAmount } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare const amount: {
    <O extends Partial<Amount>>(overrides: O): Omit<{
        __typename: "Amount";
        id: string;
        value: number;
        currency: Currency;
    }, keyof O> & O;
    (): {
        __typename: "Amount";
        id: string;
        value: number;
        currency: Currency;
    };
};
export declare const amounts: {
    none: (currency?: Currency) => Amount;
    xs: (currency?: Currency) => Amount;
    sm: (currency?: Currency) => Amount;
    md: (currency?: Currency) => Amount;
    lg: (currency?: Currency) => Amount;
    xl: (currency?: Currency) => Amount;
};
export declare const timestampedAmount: {
    <O extends Partial<TimestampedAmount>>(overrides: O): Omit<{
        __typename: "TimestampedAmount";
        id: string;
        timestamp: number;
        value: number;
    }, keyof O> & O;
    (): {
        __typename: "TimestampedAmount";
        id: string;
        timestamp: number;
        value: number;
    };
};
//# sourceMappingURL=amounts.d.ts.map