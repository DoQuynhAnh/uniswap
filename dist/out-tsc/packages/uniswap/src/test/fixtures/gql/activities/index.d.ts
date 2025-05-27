import { ActivityType, AssetActivity, AssetChange, Chain, TransactionStatus, TransactionType } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export * from './nfts';
export * from './swap';
export * from './tokens';
/**
 * Base fixtures
 */
export declare const assetActivity: {
    <O extends Partial<AssetActivity>>(overrides: O): Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, keyof O> & O;
    (): {
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    };
};
/**
 * Derived fixtures
 */
export declare const approveAssetActivity: {
    <O extends Partial<AssetActivity>>(overrides: O): Omit<Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Approve;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Approve;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: (Omit<{
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
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "asset" | "tokenStandard"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
            })[];
        }, "transactionStatus">;
    }, keyof O> & O;
    (): Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Approve;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Approve;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: (Omit<{
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
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "asset" | "tokenStandard"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
            })[];
        }, "transactionStatus">;
    };
};
export declare const erc20SwapAssetActivity: {
    <O extends Partial<AssetActivity>>(overrides: O): Omit<Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Swap;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Swap;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: ((Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }) | (Omit<Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }, "direction"> & {
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.In;
            }))[];
        }, "transactionStatus">;
    }, keyof O> & O;
    (): Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Swap;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Swap;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: ((Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }) | (Omit<Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }, "direction"> & {
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.In;
            }))[];
        }, "transactionStatus">;
    };
};
export declare const erc20RecentReceiveAssetActivity: {
    <O extends Partial<AssetActivity>>(overrides: O): Omit<Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "timestamp" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Receive;
        timestamp: number;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Receive;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: (Omit<Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }, "direction"> & {
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.In;
            })[];
        }, "transactionStatus">;
    }, keyof O> & O;
    (): Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "timestamp" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Receive;
        timestamp: number;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Receive;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: (Omit<Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }, "direction"> & {
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.In;
            })[];
        }, "transactionStatus">;
    };
};
export declare const erc20StaleReceiveAssetActivity: {
    <O extends Partial<AssetActivity>>(overrides: O): Omit<Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "timestamp" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Receive;
        timestamp: number;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Receive;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: (Omit<Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }, "direction"> & {
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.In;
            })[];
        }, "transactionStatus">;
    }, keyof O> & O;
    (): Omit<{
        id: string;
        chain: Chain;
        /** @deprecated use assetChanges field in details */
        assetChanges: AssetChange[];
        details: {
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        };
        timestamp: number;
        /** @deprecated use type field in details */
        transaction: {
            __typename: "Transaction";
            id: string;
            hash: string;
            blockNumber: number;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
        };
        /** @deprecated use type field in details */
        type: ActivityType;
    }, "details" | "timestamp" | "chain" | "type"> & {
        chain: Chain.Ethereum;
        /** @deprecated use type field in details */
        type: ActivityType.Receive;
        timestamp: number;
        details: Omit<{
            __typename: "TransactionDetails";
            id: string;
            hash: string;
            from: string;
            to: string;
            nonce: number;
            status: TransactionStatus;
            transactionStatus: TransactionStatus;
            type: TransactionType;
            assetChanges: AssetChange[];
        }, never> & Omit<{
            type: TransactionType.Receive;
            transactionStatus: TransactionStatus.Confirmed;
            assetChanges: (Omit<Omit<{
                __typename: "TokenTransfer";
                id: string;
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection;
                quantity: string;
                recipient: string;
                sender: string;
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard;
            }, "direction" | "asset" | "tokenStandard" | "transactedValue"> & {
                asset: Omit<{
                    __typename: "Token";
                    id: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                    chain: Chain;
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
                tokenStandard: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TokenStandard.Erc20;
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.Out;
                transactedValue: Omit<{
                    __typename: "Amount";
                    id: string;
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
                }, "value" | "currency"> & {
                    value: number;
                    currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency.Usd;
                };
            }, "direction"> & {
                direction: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionDirection.In;
            })[];
        }, "transactionStatus">;
    };
};
//# sourceMappingURL=index.d.ts.map