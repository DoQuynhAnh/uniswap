import { CurrencyInfo, SafetyInfo } from 'uniswap/src/features/dataApi/types';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
export declare const MAINNET_CURRENCY: NativeCurrency;
export declare const BASE_CURRENCY: NativeCurrency;
export declare const ARBITRUM_CURRENCY: NativeCurrency;
export declare const MONAD_TESTNET_CURRENCY: NativeCurrency;
export declare const OPTIMISM_CURRENCY: NativeCurrency;
export declare const POLYGON_CURRENCY: NativeCurrency;
export declare const CELO_CURRENCY: NativeCurrency;
export declare const AVALANCHE_CURRENCY: NativeCurrency;
export declare const WORLD_CHAIN_CURRENCY: NativeCurrency;
export declare const ZORA_CURRENCY: NativeCurrency;
export declare const ZKSYNC_CURRENCY: NativeCurrency;
type CurrencyInfoOptions = {
    nativeCurrency: NativeCurrency;
};
export declare const benignSafetyInfo: SafetyInfo;
export declare const currencyInfo: {
    <O extends Partial<CurrencyInfo & CurrencyInfoOptions>>(overrides: O): Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, Exclude<keyof O, keyof CurrencyInfo>> & Omit<O, "nativeCurrency">;
    (): {
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    };
};
export declare const ethCurrencyInfo: {
    <O extends Partial<CurrencyInfo>>(overrides: O): Omit<Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">, keyof O> & O;
    (): Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">;
};
export declare const uniCurrencyInfo: {
    <O extends Partial<CurrencyInfo>>(overrides: O): Omit<Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">, keyof O> & O;
    (): Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">;
};
export declare const daiCurrencyInfo: {
    <O extends Partial<CurrencyInfo>>(overrides: O): Omit<Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">, keyof O> & O;
    (): Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">;
};
export declare const arbitrumDaiCurrencyInfo: {
    <O extends Partial<CurrencyInfo>>(overrides: O): Omit<Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">, keyof O> & O;
    (): Omit<{
        currencyId: string;
        currency: NativeCurrency;
        logoUrl: string;
        safetyInfo: SafetyInfo;
    }, "nativeCurrency"> & Omit<{
        nativeCurrency: NativeCurrency;
        logoUrl: string;
    }, "nativeCurrency">;
};
export declare const usdcCurrencyInfo: {
    <O extends Partial<CurrencyInfo>>(overrides: O): (Omit<unknown, keyof O> & O)[];
    (): never;
};
export declare const ETH_CURRENCY_INFO: Omit<{
    currencyId: string;
    currency: NativeCurrency;
    logoUrl: string;
    safetyInfo: SafetyInfo;
}, "nativeCurrency"> & Omit<{
    nativeCurrency: NativeCurrency;
    logoUrl: string;
}, "nativeCurrency">;
export declare const UNI_CURRENCY_INFO: Omit<{
    currencyId: string;
    currency: NativeCurrency;
    logoUrl: string;
    safetyInfo: SafetyInfo;
}, "nativeCurrency"> & Omit<{
    nativeCurrency: NativeCurrency;
    logoUrl: string;
}, "nativeCurrency">;
export declare const DAI_CURRENCY_INFO: Omit<{
    currencyId: string;
    currency: NativeCurrency;
    logoUrl: string;
    safetyInfo: SafetyInfo;
}, "nativeCurrency"> & Omit<{
    nativeCurrency: NativeCurrency;
    logoUrl: string;
}, "nativeCurrency">;
export declare const ARBITRUM_DAI_CURRENCY_INFO: Omit<{
    currencyId: string;
    currency: NativeCurrency;
    logoUrl: string;
    safetyInfo: SafetyInfo;
}, "nativeCurrency"> & Omit<{
    nativeCurrency: NativeCurrency;
    logoUrl: string;
}, "nativeCurrency">;
export declare const USDC_CURRENCY_INFO: never;
export declare const removeSafetyInfo: (item: Maybe<CurrencyInfo>) => Maybe<CurrencyInfo>;
export {};
//# sourceMappingURL=currencies.d.ts.map