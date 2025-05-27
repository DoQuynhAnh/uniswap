import { Portfolio } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
type PortfolioOptions = {
    activitiesCount: number;
    tokenBalancesCount: number;
};
export declare const portfolio: {
    <O extends Partial<Portfolio & PortfolioOptions>>(overrides: O): Omit<{
        assetActivities?: {
            id: string;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            assetChanges: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").AssetChange[];
            details: {
                __typename: "TransactionDetails";
                id: string;
                hash: string;
                from: string;
                to: string;
                nonce: number;
                status: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionStatus;
                transactionStatus: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionStatus;
                type: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionType;
                assetChanges: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").AssetChange[];
            };
            timestamp: number;
            transaction: {
                __typename: "Transaction";
                id: string;
                hash: string;
                blockNumber: number;
                from: string;
                to: string;
                nonce: number;
                status: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionStatus;
            };
            type: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ActivityType;
        }[] | undefined;
        tokensTotalDenominatedValue?: {
            __typename: "Amount";
            id: string;
            value: number;
            currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
        } | undefined;
        tokensTotalDenominatedValueChange?: {
            id: string;
            absolute: {
                __typename: "Amount";
                id: string;
                value: number;
                currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
            };
            percentage: {
                __typename: "Amount";
                id: string;
                value: number;
                currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
            };
        } | undefined;
        tokenBalances?: {
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
            };
            tokenProjectMarket: {
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
            };
        }[] | undefined;
        __typename: "Portfolio";
        id: string;
        ownerAddress: string;
    }, Exclude<keyof O, keyof Portfolio>> & Omit<O, keyof PortfolioOptions>;
    (): {
        assetActivities?: {
            id: string;
            chain: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
            assetChanges: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").AssetChange[];
            details: {
                __typename: "TransactionDetails";
                id: string;
                hash: string;
                from: string;
                to: string;
                nonce: number;
                status: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionStatus;
                transactionStatus: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionStatus;
                type: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionType;
                assetChanges: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").AssetChange[];
            };
            timestamp: number;
            transaction: {
                __typename: "Transaction";
                id: string;
                hash: string;
                blockNumber: number;
                from: string;
                to: string;
                nonce: number;
                status: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").TransactionStatus;
            };
            type: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").ActivityType;
        }[] | undefined;
        tokensTotalDenominatedValue?: {
            __typename: "Amount";
            id: string;
            value: number;
            currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
        } | undefined;
        tokensTotalDenominatedValueChange?: {
            id: string;
            absolute: {
                __typename: "Amount";
                id: string;
                value: number;
                currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
            };
            percentage: {
                __typename: "Amount";
                id: string;
                value: number;
                currency: import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Currency;
            };
        } | undefined;
        tokenBalances?: {
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
            };
            tokenProjectMarket: {
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
            };
        }[] | undefined;
        __typename: "Portfolio";
        id: string;
        ownerAddress: string;
    };
};
export {};
//# sourceMappingURL=portfolio.d.ts.map