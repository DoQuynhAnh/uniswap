import { providers } from 'ethers/lib/ethers';
import { FORTransactionDetails } from 'uniswap/src/features/fiatOnRamp/types';
import { ChainIdToTxIdToDetails, FinalizedTransactionDetails, TransactionDetails, TransactionId } from 'uniswap/src/features/transactions/types/transactionDetails';
export interface TransactionsState {
    [address: Address]: ChainIdToTxIdToDetails;
}
export declare const initialTransactionsState: TransactionsState;
export declare const forceFetchFiatOnRampTransactions: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"transactions/forceFetchFiatOnRampTransactions">;
export declare const addTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionDetails, "transactions/addTransaction">, cancelTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionId & {
    address: string;
    cancelRequest: providers.TransactionRequest;
}, "transactions/cancelTransaction">, deleteTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionId & {
    address: string;
}, "transactions/deleteTransaction">, finalizeTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<FinalizedTransactionDetails, "transactions/finalizeTransaction">, replaceTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionId & {
    newTxParams: providers.TransactionRequest;
} & {
    address: string;
}, "transactions/replaceTransaction">, resetTransactions: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"transactions/resetTransactions">, upsertFiatOnRampTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<FORTransactionDetails, "transactions/upsertFiatOnRampTransaction">, updateTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionDetails, "transactions/updateTransaction">, updateTransactionWithoutWatch: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionDetails, "transactions/updateTransactionWithoutWatch">;
export declare const transactionReducer: import("redux").Reducer<TransactionsState>;
export declare const transactionActions: {
    forceFetchFiatOnRampTransactions: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"transactions/forceFetchFiatOnRampTransactions">;
    addTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionDetails, "transactions/addTransaction">;
    updateTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionDetails, "transactions/updateTransaction">;
    updateTransactionWithoutWatch: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionDetails, "transactions/updateTransactionWithoutWatch">;
    finalizeTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<FinalizedTransactionDetails, "transactions/finalizeTransaction">;
    deleteTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionId & {
        address: string;
    }, "transactions/deleteTransaction">;
    cancelTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionId & {
        address: string;
        cancelRequest: providers.TransactionRequest;
    }, "transactions/cancelTransaction">;
    replaceTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TransactionId & {
        newTxParams: providers.TransactionRequest;
    } & {
        address: string;
    }, "transactions/replaceTransaction">;
    resetTransactions: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"transactions/resetTransactions">;
    upsertFiatOnRampTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<FORTransactionDetails, "transactions/upsertFiatOnRampTransaction">;
};
//# sourceMappingURL=slice.d.ts.map