import { Portfolio, Token, TokenBalance } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { PortfolioBalance } from 'uniswap/src/features/dataApi/types';
type PortfolioBalanceOptions = {
    fromBalance: RequireNonNullable<TokenBalance, 'quantity' | 'token'> | null;
    fromToken: Token | null;
};
export declare const portfolioBalance: {
    <O extends Partial<PortfolioBalance & PortfolioBalanceOptions>>(overrides: O): (Omit<{
        id: string;
        cacheId: string;
        quantity: number;
        balanceUSD: number;
        currencyInfo: {
            currencyId: string;
            currency: import("../../../features/tokens/NativeCurrency").NativeCurrency;
            logoUrl: string;
            safetyInfo: import("uniswap/src/features/dataApi/types").SafetyInfo;
        };
        relativeChange24: number;
        isHidden: boolean;
    }, Exclude<keyof O, keyof PortfolioBalance>> & Omit<O, keyof PortfolioBalanceOptions>) | (Omit<{
        id: string;
        cacheId: string;
        quantity: number;
        balanceUSD: number | undefined;
        isHidden: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<boolean>;
        relativeChange24: any;
        currencyInfo: {
            currency: import("@uniswap/sdk-core").Token | import("../../../features/tokens/NativeCurrency").NativeCurrency;
            currencyId: string;
            logoUrl: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<string>;
            isSpam: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<boolean>;
            spamCode: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<number>;
            safetyInfo: import("uniswap/src/features/dataApi/types").SafetyInfo;
        };
    }, Exclude<keyof O, keyof PortfolioBalance>> & Omit<O, keyof PortfolioBalanceOptions>);
    (): {
        id: string;
        cacheId: string;
        quantity: number;
        balanceUSD: number;
        currencyInfo: {
            currencyId: string;
            currency: import("../../../features/tokens/NativeCurrency").NativeCurrency;
            logoUrl: string;
            safetyInfo: import("uniswap/src/features/dataApi/types").SafetyInfo;
        };
        relativeChange24: number;
        isHidden: boolean;
    } | {
        id: string;
        cacheId: string;
        quantity: number;
        balanceUSD: number | undefined;
        isHidden: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<boolean>;
        relativeChange24: any;
        currencyInfo: {
            currency: import("@uniswap/sdk-core").Token | import("../../../features/tokens/NativeCurrency").NativeCurrency;
            currencyId: string;
            logoUrl: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<string>;
            isSpam: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<boolean>;
            spamCode: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<number>;
            safetyInfo: import("uniswap/src/features/dataApi/types").SafetyInfo;
        };
    };
};
type PortfolioBalancesOptions = {
    portfolio: Portfolio;
};
export declare const portfolioBalances: {
    <O extends Partial<PortfolioBalance[] & PortfolioBalancesOptions>>(overrides: O): (Omit<PortfolioBalance, Exclude<keyof O, keyof PortfolioBalance[]>> & Omit<O, "portfolio">)[];
    (): PortfolioBalance[];
};
export {};
//# sourceMappingURL=balances.d.ts.map