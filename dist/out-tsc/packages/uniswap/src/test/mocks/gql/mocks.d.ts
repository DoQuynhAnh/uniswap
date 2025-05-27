import { Currency, ProtectionResult, SafetyLevel, SwapOrderStatus, TransactionStatus } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare const mocks: {
    readonly TokenProject: {
        readonly id: () => string;
        readonly description: () => string;
        readonly logoUrl: () => string;
        readonly name: () => string;
        readonly safetyLevel: () => SafetyLevel;
        readonly tokens: () => any[];
        readonly markets: () => null;
    };
    readonly TokenProjectMarket: {
        readonly currency: () => Currency;
        readonly id: () => string;
        readonly tokenProject: () => {
            id: string;
            tokens: never[];
        };
        readonly priceHistory: () => any[];
    };
    readonly Token: {
        readonly id: () => string;
        readonly address: () => null;
        readonly chain: () => import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        readonly decimals: () => number;
        readonly symbol: () => string;
        readonly protectionInfo: () => {
            result: ProtectionResult;
            attackTypes: never[];
        };
        readonly feeData: () => {
            buyFeeBps: string;
            sellFeeBps: string;
        };
    };
    readonly Amount: {
        readonly id: () => string;
        readonly value: () => number;
    };
    readonly AmountChange: {
        readonly id: () => string;
    };
    readonly TimestampedAmount: {
        readonly id: () => string;
        readonly timestamp: () => number;
        readonly value: () => number;
    };
    readonly Portfolio: {
        readonly id: () => string;
        readonly ownerAddress: () => string;
    };
    readonly AssetActivity: {
        readonly timestamp: () => number;
        readonly chain: () => import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
    };
    readonly TransactionDetails: {
        readonly id: () => string;
        readonly status: () => TransactionStatus;
        readonly to: () => string;
        readonly from: () => string;
        readonly nonce: () => number;
        readonly assetChanges: () => any[];
        readonly hash: () => string;
    };
    readonly SwapOrderDetails: {
        readonly id: () => string;
        readonly offerer: () => string;
        readonly hash: () => string;
        readonly status: () => SwapOrderStatus;
    };
    readonly ApplicationContract: {
        readonly id: () => string;
        readonly chain: () => import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        readonly address: () => string;
    };
    readonly NftCollection: {
        readonly id: () => string;
        readonly name: () => string;
        readonly collectionId: () => string;
        readonly isVerified: () => boolean;
        readonly nftContracts: () => any[];
    };
    readonly NftContract: {
        readonly id: () => string;
        readonly chain: () => import("uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks").Chain;
        readonly address: () => string;
    };
    readonly Image: {
        readonly id: () => string;
        readonly url: () => string;
    };
};
//# sourceMappingURL=mocks.d.ts.map