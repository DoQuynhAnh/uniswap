import { AssetChange, Transaction, TransactionDetails, TransactionStatus, TransactionType } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
export declare const gqlTransaction: {
    <O extends Partial<Transaction>>(overrides: O): Omit<{
        __typename: "Transaction";
        id: string;
        hash: string;
        blockNumber: number;
        from: string;
        to: string;
        nonce: number;
        status: TransactionStatus;
    }, keyof O> & O;
    (): {
        __typename: "Transaction";
        id: string;
        hash: string;
        blockNumber: number;
        from: string;
        to: string;
        nonce: number;
        status: TransactionStatus;
    };
};
type TransactionDetailsBaseOptions = {
    transactionStatus: TransactionStatus;
};
export declare const gqlTransactionDetails: {
    <O extends Partial<TransactionDetails & TransactionDetailsBaseOptions>>(overrides: O): Omit<{
        __typename: "TransactionDetails";
        id: string;
        hash: string;
        from: string;
        to: string;
        nonce: number;
        /** @deprecated use transactionStatus to disambiguate from swapOrderStatus */
        status: TransactionStatus;
        transactionStatus: TransactionStatus;
        type: TransactionType;
        assetChanges: AssetChange[];
    }, Exclude<keyof O, keyof TransactionDetails>> & Omit<O, "transactionStatus">;
    (): {
        __typename: "TransactionDetails";
        id: string;
        hash: string;
        from: string;
        to: string;
        nonce: number;
        /** @deprecated use transactionStatus to disambiguate from swapOrderStatus */
        status: TransactionStatus;
        transactionStatus: TransactionStatus;
        type: TransactionType;
        assetChanges: AssetChange[];
    };
};
export {};
//# sourceMappingURL=transactions.d.ts.map