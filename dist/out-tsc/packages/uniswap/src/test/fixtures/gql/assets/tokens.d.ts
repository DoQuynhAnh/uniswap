import { Token as SDKToken } from '@uniswap/sdk-core';
import { Currency, PriceSource, ProtectionInfo, SafetyLevel, TimestampedAmount, Token, TokenBalance, TokenMarket, TokenProject, TokenProjectMarket, TokenStandard } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
/**
 * Base fixtures
 */
type TokenOptions = {
    sdkToken: SDKToken | null;
    market: TokenMarket | undefined;
    protectionInfo: ProtectionInfo | undefined;
};
export declare const token: {
    <O extends Partial<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").IContract & {
        __typename?: "Token" | undefined;
        address?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<string>;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        decimals?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<number>;
        feeData?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").FeeData>;
        id: string;
        market?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<TokenMarket>;
        name?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<string>;
        project?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<TokenProject>;
        protectionInfo?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<ProtectionInfo>;
        standard?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<TokenStandard>;
        symbol?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<string>;
        v2Transactions?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").PoolTransaction>[]>;
        v3Transactions?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").PoolTransaction>[]>;
        v4Transactions?: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Maybe<import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").PoolTransaction>[]>;
    } & TokenOptions>>(overrides: O): Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, Exclude<keyof O, "symbol" | "name" | "id" | "decimals" | "market" | "__typename" | "standard" | "feeData" | "protectionInfo" | "project" | "v2Transactions" | "v3Transactions" | "v4Transactions" | keyof import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").IContract>> & Omit<O, keyof TokenOptions>;
    (): {
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    };
};
export declare const tokenBalance: {
    <O extends Partial<TokenBalance>>(overrides: O): Omit<{
        __typename: "TokenBalance";
        id: string;
        blockNumber: number;
        blockTimestamp: number;
        denominatedValue: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        isHidden: boolean;
        ownerAddress: string;
        quantity: number;
        token: {
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
            market: TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
            feeData: {
                buyFeeBps: string;
                sellFeeBps: string;
            };
            protectionInfo: ProtectionInfo | undefined;
        };
        tokenProjectMarket: {
            __typename: "TokenProjectMarket";
            id: string;
            priceHistory: (TimestampedAmount | undefined)[];
            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            currency: Currency;
            tokenProject: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
        };
    }, keyof O> & O;
    (): {
        __typename: "TokenBalance";
        id: string;
        blockNumber: number;
        blockTimestamp: number;
        denominatedValue: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        isHidden: boolean;
        ownerAddress: string;
        quantity: number;
        token: {
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
            market: TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
            feeData: {
                buyFeeBps: string;
                sellFeeBps: string;
            };
            protectionInfo: ProtectionInfo | undefined;
        };
        tokenProjectMarket: {
            __typename: "TokenProjectMarket";
            id: string;
            priceHistory: (TimestampedAmount | undefined)[];
            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            currency: Currency;
            tokenProject: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
        };
    };
};
type TokenMarketOptions = {
    priceHistory: (TimestampedAmount | undefined)[];
};
export declare const tokenMarket: {
    <O extends Partial<TokenMarket & TokenMarketOptions>>(overrides: O): Omit<{
        __typename: "TokenMarket";
        id: string;
        token: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
            market: TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
            feeData: {
                buyFeeBps: string;
                sellFeeBps: string;
            };
            protectionInfo: ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: SDKToken;
            project: Omit<{
                name: string;
                id: string;
                tokens: Token[];
                __typename: "TokenProject";
                spamCode: number;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                markets: (Omit<{
                    __typename: "TokenProjectMarket";
                    id: string;
                    priceHistory: (TimestampedAmount | undefined)[];
                    price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: Token[];
                        safetyLevel: SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image";
                            id: string;
                            url: string;
                        }, "url"> & {
                            url: string;
                        };
                        spamCode: number;
                    };
                }, never> & Omit<{
                    priceHistory: (TimestampedAmount | undefined)[];
                }, "priceHistory">)[];
                safetyLevel: SafetyLevel | undefined;
            }, never> & Omit<{
                name: string;
                safetyLevel: SafetyLevel.Verified;
                isSpam: false;
            }, keyof TokenProjectOptions>;
        }, keyof TokenOptions>;
        priceSource: PriceSource;
        priceHistory: (TimestampedAmount | undefined)[];
        price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
        pricePercentChange: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
    }, Exclude<keyof O, keyof TokenMarket>> & Omit<O, "priceHistory">;
    (): {
        __typename: "TokenMarket";
        id: string;
        token: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
            market: TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
            feeData: {
                buyFeeBps: string;
                sellFeeBps: string;
            };
            protectionInfo: ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: SDKToken;
            project: Omit<{
                name: string;
                id: string;
                tokens: Token[];
                __typename: "TokenProject";
                spamCode: number;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                markets: (Omit<{
                    __typename: "TokenProjectMarket";
                    id: string;
                    priceHistory: (TimestampedAmount | undefined)[];
                    price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: Token[];
                        safetyLevel: SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image";
                            id: string;
                            url: string;
                        }, "url"> & {
                            url: string;
                        };
                        spamCode: number;
                    };
                }, never> & Omit<{
                    priceHistory: (TimestampedAmount | undefined)[];
                }, "priceHistory">)[];
                safetyLevel: SafetyLevel | undefined;
            }, never> & Omit<{
                name: string;
                safetyLevel: SafetyLevel.Verified;
                isSpam: false;
            }, keyof TokenProjectOptions>;
        }, keyof TokenOptions>;
        priceSource: PriceSource;
        priceHistory: (TimestampedAmount | undefined)[];
        price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
        pricePercentChange: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
    };
};
type TokenProjectMarketOptions = {
    priceHistory: (TimestampedAmount | undefined)[];
};
export declare const tokenProjectMarket: {
    <O extends Partial<TokenProjectMarket & TokenProjectMarketOptions>>(overrides: O): Omit<{
        __typename: "TokenProjectMarket";
        id: string;
        priceHistory: (TimestampedAmount | undefined)[];
        price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        currency: Currency;
        tokenProject: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
    }, Exclude<keyof O, keyof TokenProjectMarket>> & Omit<O, "priceHistory">;
    (): {
        __typename: "TokenProjectMarket";
        id: string;
        priceHistory: (TimestampedAmount | undefined)[];
        price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
        currency: Currency;
        tokenProject: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
    };
};
type TokenProjectOptions = {
    priceHistory: (TimestampedAmount | undefined)[];
    safetyLevel: SafetyLevel | undefined;
};
export declare const tokenProject: {
    <O extends Partial<TokenProject & TokenProjectOptions>>(overrides: O): Omit<{
        name: string;
        id: string;
        tokens: Token[];
        __typename: "TokenProject";
        spamCode: number;
        logoUrl: string;
        isSpam: boolean;
        logo: Omit<{
            __typename: "Image";
            id: string;
            url: string;
        }, "url"> & {
            url: string;
        };
        markets: (Omit<{
            __typename: "TokenProjectMarket";
            id: string;
            priceHistory: (TimestampedAmount | undefined)[];
            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            currency: Currency;
            tokenProject: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
        }, never> & Omit<{
            priceHistory: (TimestampedAmount | undefined)[];
        }, "priceHistory">)[];
        safetyLevel: SafetyLevel | undefined;
    }, Exclude<keyof O, keyof TokenProject>> & Omit<O, keyof TokenProjectOptions>;
    (): {
        name: string;
        id: string;
        tokens: Token[];
        __typename: "TokenProject";
        spamCode: number;
        logoUrl: string;
        isSpam: boolean;
        logo: Omit<{
            __typename: "Image";
            id: string;
            url: string;
        }, "url"> & {
            url: string;
        };
        markets: (Omit<{
            __typename: "TokenProjectMarket";
            id: string;
            priceHistory: (TimestampedAmount | undefined)[];
            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            currency: Currency;
            tokenProject: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
        }, never> & Omit<{
            priceHistory: (TimestampedAmount | undefined)[];
        }, "priceHistory">)[];
        safetyLevel: SafetyLevel | undefined;
    };
};
export declare const usdcTokenProject: {
    <O extends Partial<TokenProject & TokenProjectOptions>>(overrides: O): Omit<Omit<{
        name: string;
        id: string;
        tokens: Token[];
        __typename: "TokenProject";
        spamCode: number;
        logoUrl: string;
        isSpam: boolean;
        logo: Omit<{
            __typename: "Image";
            id: string;
            url: string;
        }, "url"> & {
            url: string;
        };
        markets: (Omit<{
            __typename: "TokenProjectMarket";
            id: string;
            priceHistory: (TimestampedAmount | undefined)[];
            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            currency: Currency;
            tokenProject: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
        }, never> & Omit<{
            priceHistory: (TimestampedAmount | undefined)[];
        }, "priceHistory">)[];
        safetyLevel: SafetyLevel | undefined;
    }, "priceHistory"> & Omit<{
        priceHistory: (TimestampedAmount | undefined)[];
        tokens: (Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
            market: TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
            feeData: {
                buyFeeBps: string;
                sellFeeBps: string;
            };
            protectionInfo: ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: SDKToken;
            market: {
                __typename: "TokenMarket";
                id: string;
                token: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
                    address: string;
                    standard: TokenStandard;
                    market: TokenMarket | undefined;
                    project: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: Token[];
                        safetyLevel: SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image";
                            id: string;
                            url: string;
                        }, "url"> & {
                            url: string;
                        };
                        spamCode: number;
                    };
                    feeData: {
                        buyFeeBps: string;
                        sellFeeBps: string;
                    };
                    protectionInfo: ProtectionInfo | undefined;
                }, "sdkToken"> & Omit<{
                    sdkToken: SDKToken;
                    project: Omit<{
                        name: string;
                        id: string;
                        tokens: Token[];
                        __typename: "TokenProject";
                        spamCode: number;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image";
                            id: string;
                            url: string;
                        }, "url"> & {
                            url: string;
                        };
                        markets: (Omit<{
                            __typename: "TokenProjectMarket";
                            id: string;
                            priceHistory: (TimestampedAmount | undefined)[];
                            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                            currency: Currency;
                            tokenProject: {
                                __typename: "TokenProject";
                                id: string;
                                name: string;
                                tokens: Token[];
                                safetyLevel: SafetyLevel.Verified;
                                logoUrl: string;
                                isSpam: boolean;
                                logo: Omit<{
                                    __typename: "Image";
                                    id: string;
                                    url: string;
                                }, "url"> & {
                                    url: string;
                                };
                                spamCode: number;
                            };
                        }, never> & Omit<{
                            priceHistory: (TimestampedAmount | undefined)[];
                        }, "priceHistory">)[];
                        safetyLevel: SafetyLevel | undefined;
                    }, never> & Omit<{
                        name: string;
                        safetyLevel: SafetyLevel.Verified;
                        isSpam: false;
                    }, keyof TokenProjectOptions>;
                }, keyof TokenOptions>;
                priceSource: PriceSource;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
                pricePercentChange: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
            };
        }, keyof TokenOptions>)[];
        safetyLevel: SafetyLevel | undefined;
    }, keyof TokenProjectOptions>, Exclude<keyof O, keyof TokenProject>> & Omit<O, keyof TokenProjectOptions>;
    (): Omit<{
        name: string;
        id: string;
        tokens: Token[];
        __typename: "TokenProject";
        spamCode: number;
        logoUrl: string;
        isSpam: boolean;
        logo: Omit<{
            __typename: "Image";
            id: string;
            url: string;
        }, "url"> & {
            url: string;
        };
        markets: (Omit<{
            __typename: "TokenProjectMarket";
            id: string;
            priceHistory: (TimestampedAmount | undefined)[];
            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
            currency: Currency;
            tokenProject: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
        }, never> & Omit<{
            priceHistory: (TimestampedAmount | undefined)[];
        }, "priceHistory">)[];
        safetyLevel: SafetyLevel | undefined;
    }, "priceHistory"> & Omit<{
        priceHistory: (TimestampedAmount | undefined)[];
        tokens: (Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
            market: TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: Token[];
                safetyLevel: SafetyLevel.Verified;
                logoUrl: string;
                isSpam: boolean;
                logo: Omit<{
                    __typename: "Image";
                    id: string;
                    url: string;
                }, "url"> & {
                    url: string;
                };
                spamCode: number;
            };
            feeData: {
                buyFeeBps: string;
                sellFeeBps: string;
            };
            protectionInfo: ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: SDKToken;
            market: {
                __typename: "TokenMarket";
                id: string;
                token: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
                    address: string;
                    standard: TokenStandard;
                    market: TokenMarket | undefined;
                    project: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: Token[];
                        safetyLevel: SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image";
                            id: string;
                            url: string;
                        }, "url"> & {
                            url: string;
                        };
                        spamCode: number;
                    };
                    feeData: {
                        buyFeeBps: string;
                        sellFeeBps: string;
                    };
                    protectionInfo: ProtectionInfo | undefined;
                }, "sdkToken"> & Omit<{
                    sdkToken: SDKToken;
                    project: Omit<{
                        name: string;
                        id: string;
                        tokens: Token[];
                        __typename: "TokenProject";
                        spamCode: number;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image";
                            id: string;
                            url: string;
                        }, "url"> & {
                            url: string;
                        };
                        markets: (Omit<{
                            __typename: "TokenProjectMarket";
                            id: string;
                            priceHistory: (TimestampedAmount | undefined)[];
                            price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                            pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                            relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                            currency: Currency;
                            tokenProject: {
                                __typename: "TokenProject";
                                id: string;
                                name: string;
                                tokens: Token[];
                                safetyLevel: SafetyLevel.Verified;
                                logoUrl: string;
                                isSpam: boolean;
                                logo: Omit<{
                                    __typename: "Image";
                                    id: string;
                                    url: string;
                                }, "url"> & {
                                    url: string;
                                };
                                spamCode: number;
                            };
                        }, never> & Omit<{
                            priceHistory: (TimestampedAmount | undefined)[];
                        }, "priceHistory">)[];
                        safetyLevel: SafetyLevel | undefined;
                    }, never> & Omit<{
                        name: string;
                        safetyLevel: SafetyLevel.Verified;
                        isSpam: false;
                    }, keyof TokenProjectOptions>;
                }, keyof TokenOptions>;
                priceSource: PriceSource;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
                pricePercentChange: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount | undefined;
            };
        }, keyof TokenOptions>)[];
        safetyLevel: SafetyLevel | undefined;
    }, keyof TokenProjectOptions>;
};
export declare const ethToken: {
    <O extends Partial<Token>>(overrides: O): Omit<Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>, keyof O> & O;
    (): Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>;
};
export declare const wethToken: {
    <O extends Partial<Token>>(overrides: O): Omit<Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>, keyof O> & O;
    (): Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>;
};
export declare const daiToken: {
    <O extends Partial<Token>>(overrides: O): Omit<Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>, keyof O> & O;
    (): Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>;
};
export declare const usdcToken: {
    <O extends Partial<Token>>(overrides: O): Omit<Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>, keyof O> & O;
    (): Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>;
};
export declare const usdcBaseToken: {
    <O extends Partial<Token>>(overrides: O): Omit<Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>, keyof O> & O;
    (): Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>;
};
export declare const usdcArbitrumToken: {
    <O extends Partial<Token>>(overrides: O): Omit<Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>, keyof O> & O;
    (): Omit<{
        __typename: "Token";
        id: string;
        name: string;
        symbol: string;
        decimals: number;
        chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        address: string;
        standard: TokenStandard;
        market: TokenMarket | undefined;
        project: {
            __typename: "TokenProject";
            id: string;
            name: string;
            tokens: Token[];
            safetyLevel: SafetyLevel.Verified;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            spamCode: number;
        };
        feeData: {
            buyFeeBps: string;
            sellFeeBps: string;
        };
        protectionInfo: ProtectionInfo | undefined;
    }, "sdkToken"> & Omit<{
        sdkToken: SDKToken;
        project: Omit<{
            name: string;
            id: string;
            tokens: Token[];
            __typename: "TokenProject";
            spamCode: number;
            logoUrl: string;
            isSpam: boolean;
            logo: Omit<{
                __typename: "Image";
                id: string;
                url: string;
            }, "url"> & {
                url: string;
            };
            markets: (Omit<{
                __typename: "TokenProjectMarket";
                id: string;
                priceHistory: (TimestampedAmount | undefined)[];
                price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                currency: Currency;
                tokenProject: {
                    __typename: "TokenProject";
                    id: string;
                    name: string;
                    tokens: Token[];
                    safetyLevel: SafetyLevel.Verified;
                    logoUrl: string;
                    isSpam: boolean;
                    logo: Omit<{
                        __typename: "Image";
                        id: string;
                        url: string;
                    }, "url"> & {
                        url: string;
                    };
                    spamCode: number;
                };
            }, never> & Omit<{
                priceHistory: (TimestampedAmount | undefined)[];
            }, "priceHistory">)[];
            safetyLevel: SafetyLevel | undefined;
        }, never> & Omit<{
            name: string;
            safetyLevel: SafetyLevel.Verified;
            isSpam: false;
        }, keyof TokenProjectOptions>;
    }, keyof TokenOptions>;
};
export {};
//# sourceMappingURL=tokens.d.ts.map