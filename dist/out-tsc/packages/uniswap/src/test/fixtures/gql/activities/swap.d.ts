import { SwapOrderDetails, SwapOrderStatus, SwapOrderType } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare const swapOrderDetails: {
    <O extends Partial<SwapOrderDetails>>(overrides: O): Omit<{
        __typename: "SwapOrderDetails";
        id: string;
        hash: string;
        expiry: number;
        inputToken: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: import("@uniswap/sdk-core").Token;
            project: Omit<{
                name: string;
                id: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                    price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                }, "priceHistory">)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }, never> & Omit<{
                name: string;
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                isSpam: false;
            }, keyof {
                priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }>;
        }, keyof {
            sdkToken: import("@uniswap/sdk-core").Token | null;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }>;
        inputTokenQuantity: string;
        offerer: string;
        outputToken: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: import("@uniswap/sdk-core").Token;
            project: Omit<{
                name: string;
                id: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                    price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                }, "priceHistory">)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }, never> & Omit<{
                name: string;
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                isSpam: false;
            }, keyof {
                priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }>;
        }, keyof {
            sdkToken: import("@uniswap/sdk-core").Token | null;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }>;
        outputTokenQuantity: string;
        /** @deprecated use swapOrderStatus to disambiguate from transactionStatus */
        status: SwapOrderStatus;
        swapOrderStatus: SwapOrderStatus;
        encodedOrder: string;
        swapOrderType: SwapOrderType.Dutch;
    }, keyof O> & O;
    (): {
        __typename: "SwapOrderDetails";
        id: string;
        hash: string;
        expiry: number;
        inputToken: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: import("@uniswap/sdk-core").Token;
            project: Omit<{
                name: string;
                id: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                    price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                }, "priceHistory">)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }, never> & Omit<{
                name: string;
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                isSpam: false;
            }, keyof {
                priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }>;
        }, keyof {
            sdkToken: import("@uniswap/sdk-core").Token | null;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }>;
        inputTokenQuantity: string;
        offerer: string;
        outputToken: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            project: {
                __typename: "TokenProject";
                id: string;
                name: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }, "sdkToken"> & Omit<{
            sdkToken: import("@uniswap/sdk-core").Token;
            project: Omit<{
                name: string;
                id: string;
                tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                    price: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    pricePercentChange24h: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    relativeChange24: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Amount;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
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
                    priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                }, "priceHistory">)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }, never> & Omit<{
                name: string;
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                isSpam: false;
            }, keyof {
                priceHistory: (import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TimestampedAmount | undefined)[];
                safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel | undefined;
            }>;
        }, keyof {
            sdkToken: import("@uniswap/sdk-core").Token | null;
            market: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenMarket | undefined;
            protectionInfo: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ProtectionInfo | undefined;
        }>;
        outputTokenQuantity: string;
        /** @deprecated use swapOrderStatus to disambiguate from transactionStatus */
        status: SwapOrderStatus;
        swapOrderStatus: SwapOrderStatus;
        encodedOrder: string;
        swapOrderType: SwapOrderType.Dutch;
    };
};
//# sourceMappingURL=swap.d.ts.map