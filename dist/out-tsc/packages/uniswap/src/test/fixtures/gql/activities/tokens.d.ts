import { Currency, TokenApproval, TokenStandard, TokenTransfer, TransactionDirection } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
/**
 * Base fixtures
 */
export declare const tokenApproval: {
    <O extends Partial<TokenApproval>>(overrides: O): Omit<{
        __typename: "TokenApproval";
        id: string;
        approvedAddress: string;
        quantity: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard;
    }, keyof O> & O;
    (): {
        __typename: "TokenApproval";
        id: string;
        approvedAddress: string;
        quantity: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard;
    };
};
export declare const tokenTransfer: {
    <O extends Partial<TokenTransfer>>(overrides: O): Omit<{
        __typename: "TokenTransfer";
        id: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        direction: TransactionDirection;
        quantity: string;
        recipient: string;
        sender: string;
        tokenStandard: TokenStandard;
    }, keyof O> & O;
    (): {
        __typename: "TokenTransfer";
        id: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        direction: TransactionDirection;
        quantity: string;
        recipient: string;
        sender: string;
        tokenStandard: TokenStandard;
    };
};
/**
 * Derived fixtures
 */
export declare const erc20ApproveAssetChange: {
    <O extends Partial<TokenApproval>>(overrides: O): Omit<Omit<{
        __typename: "TokenApproval";
        id: string;
        approvedAddress: string;
        quantity: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard;
    }, "asset" | "tokenStandard"> & {
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard.Erc20;
    }, keyof O> & O;
    (): Omit<{
        __typename: "TokenApproval";
        id: string;
        approvedAddress: string;
        quantity: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard;
    }, "asset" | "tokenStandard"> & {
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard.Erc20;
    };
};
export declare const erc20TokenTransferOut: {
    <O extends Partial<TokenTransfer>>(overrides: O): Omit<Omit<{
        __typename: "TokenTransfer";
        id: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        direction: TransactionDirection;
        quantity: string;
        recipient: string;
        sender: string;
        tokenStandard: TokenStandard;
    }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard.Erc20;
        direction: TransactionDirection.Out;
        transactedValue: Omit<{
            __typename: "Amount";
            id: string;
            value: number;
            currency: Currency;
        }, "value" | "currency"> & {
            value: number;
            currency: Currency.Usd;
        };
    }, keyof O> & O;
    (): Omit<{
        __typename: "TokenTransfer";
        id: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        direction: TransactionDirection;
        quantity: string;
        recipient: string;
        sender: string;
        tokenStandard: TokenStandard;
    }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard.Erc20;
        direction: TransactionDirection.Out;
        transactedValue: Omit<{
            __typename: "Amount";
            id: string;
            value: number;
            currency: Currency;
        }, "value" | "currency"> & {
            value: number;
            currency: Currency.Usd;
        };
    };
};
export declare const erc20TransferIn: {
    <O extends Partial<TokenTransfer>>(overrides: O): Omit<Omit<Omit<{
        __typename: "TokenTransfer";
        id: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        direction: TransactionDirection;
        quantity: string;
        recipient: string;
        sender: string;
        tokenStandard: TokenStandard;
    }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard.Erc20;
        direction: TransactionDirection.Out;
        transactedValue: Omit<{
            __typename: "Amount";
            id: string;
            value: number;
            currency: Currency;
        }, "value" | "currency"> & {
            value: number;
            currency: Currency.Usd;
        };
    }, "direction"> & {
        direction: TransactionDirection.In;
    }, keyof O> & O;
    (): Omit<Omit<{
        __typename: "TokenTransfer";
        id: string;
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        direction: TransactionDirection;
        quantity: string;
        recipient: string;
        sender: string;
        tokenStandard: TokenStandard;
    }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
        asset: Omit<{
            __typename: "Token";
            id: string;
            name: string;
            symbol: string;
            decimals: number;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            address: string;
            standard: TokenStandard;
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    __typename: "Image"; /**
                     * Base fixtures
                     */
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
                    currency: Currency;
                    tokenProject: {
                        __typename: "TokenProject";
                        id: string;
                        name: string;
                        tokens: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Token[];
                        safetyLevel: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").SafetyLevel.Verified;
                        logoUrl: string;
                        isSpam: boolean;
                        logo: Omit<{
                            __typename: "Image"; /**
                             * Base fixtures
                             */
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
        tokenStandard: TokenStandard.Erc20;
        direction: TransactionDirection.Out;
        transactedValue: Omit<{
            __typename: "Amount";
            id: string;
            value: number;
            currency: Currency;
        }, "value" | "currency"> & {
            value: number;
            currency: Currency.Usd;
        };
    }, "direction"> & {
        direction: TransactionDirection.In;
    };
};
//# sourceMappingURL=tokens.d.ts.map