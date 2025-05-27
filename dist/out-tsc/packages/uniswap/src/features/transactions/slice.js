/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* helpful when dealing with deeply nested state objects */
import { createAction, createSlice } from '@reduxjs/toolkit';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { TransactionStatus, TransactionType, } from 'uniswap/src/features/transactions/types/transactionDetails';
import { assert } from 'utilities/src/errors';
export const initialTransactionsState = {};
const slice = createSlice({
    name: 'transactions',
    initialState: initialTransactionsState,
    reducers: {
        addTransaction: (state, { payload: transaction }) => {
            var _a, _b, _c, _d;
            var _e;
            const { chainId, id, from } = transaction;
            assert(!((_b = (_a = state === null || state === void 0 ? void 0 : state[from]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id]), `addTransaction: Attempted to overwrite tx with id ${id}`);
            (_c = state[from]) !== null && _c !== void 0 ? _c : (state[from] = {});
            (_d = (_e = state[from])[chainId]) !== null && _d !== void 0 ? _d : (_e[chainId] = {});
            state[from][chainId][id] = transaction;
        },
        updateTransaction: (state, { payload: transaction }) => {
            var _a, _b;
            const { chainId, id, from } = transaction;
            assert((_b = (_a = state === null || state === void 0 ? void 0 : state[from]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id], `updateTransaction: Attempted to update a missing tx with id ${id}`);
            state[from][chainId][id] = transaction;
        },
        updateTransactionWithoutWatch: (state, { payload: transaction }) => {
            var _a, _b;
            const { chainId, id, from } = transaction;
            assert((_b = (_a = state === null || state === void 0 ? void 0 : state[from]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id], `updateTransactionWithoutWatch: Attempted to update a missing tx with id ${id}`);
            state[from][chainId][id] = transaction;
        },
        finalizeTransaction: (state, { payload: transaction }) => {
            var _a, _b;
            const { chainId, id, status, receipt, from, hash, networkFee } = transaction;
            assert((_b = (_a = state === null || state === void 0 ? void 0 : state[from]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id], `finalizeTransaction: Attempted to finalize a missing tx with id ${id}`);
            state[from][chainId][id].status = status;
            if (receipt) {
                state[from][chainId][id].receipt = receipt;
            }
            if (networkFee) {
                state[from][chainId][id].networkFee = networkFee;
            }
            if (isUniswapX(transaction) && status === TransactionStatus.Success) {
                assert(hash, `finalizeTransaction: Attempted to finalize an order without providing the fill tx hash`);
                state[from][chainId][id].hash = hash;
            }
        },
        deleteTransaction: (state, { payload: { chainId, id, address } }) => {
            var _a, _b;
            assert((_b = (_a = state === null || state === void 0 ? void 0 : state[address]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id], `deleteTransaction: Attempted to delete a tx that doesn't exist with id ${id}`);
            delete state[address][chainId][id];
        },
        cancelTransaction: (state, { payload: { chainId, id, address, cancelRequest }, }) => {
            var _a, _b;
            assert((_b = (_a = state === null || state === void 0 ? void 0 : state[address]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id], `cancelTransaction: Attempted to cancel a tx that doesn't exist with id ${id}`);
            state[address][chainId][id].status = TransactionStatus.Cancelling;
            state[address][chainId][id].cancelRequest = cancelRequest;
        },
        replaceTransaction: (state, { payload: { chainId, id, address }, }) => {
            var _a, _b;
            assert((_b = (_a = state === null || state === void 0 ? void 0 : state[address]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id], `replaceTransaction: Attempted to replace a tx that doesn't exist with id ${id}`);
            state[address][chainId][id].status = TransactionStatus.Replacing;
        },
        resetTransactions: () => initialTransactionsState,
        // FOR transactions re-use this slice to store (off-chain) pending txs
        upsertFiatOnRampTransaction: (state, { payload: transaction }) => {
            var _a, _b;
            var _c;
            const { chainId, id, from, typeInfo: { type }, } = transaction;
            assert(type === TransactionType.LocalOnRamp ||
                type === TransactionType.LocalOffRamp ||
                type === TransactionType.OnRampPurchase ||
                type === TransactionType.OnRampTransfer ||
                type === TransactionType.OffRampSale, `only FOR transactions can be upserted`);
            (_a = state[from]) !== null && _a !== void 0 ? _a : (state[from] = {});
            (_b = (_c = state[from])[chainId]) !== null && _b !== void 0 ? _b : (_c[chainId] = {});
            state[from][chainId][id] = {
                ...transaction,
                typeInfo: { ...transaction.typeInfo },
            };
        },
    },
});
// This action is fired, when user has come back from Moonpay flow using Return to Uniswap button
export const forceFetchFiatOnRampTransactions = createAction('transactions/forceFetchFiatOnRampTransactions');
export const { addTransaction, cancelTransaction, deleteTransaction, finalizeTransaction, replaceTransaction, resetTransactions, upsertFiatOnRampTransaction, updateTransaction, updateTransactionWithoutWatch, } = slice.actions;
export const { reducer: transactionReducer } = slice;
export const transactionActions = { ...slice.actions, forceFetchFiatOnRampTransactions };
//# sourceMappingURL=slice.js.map