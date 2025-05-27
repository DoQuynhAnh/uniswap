import { createStore } from '@reduxjs/toolkit';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { addTransaction, cancelTransaction, finalizeTransaction, initialTransactionsState, replaceTransaction, resetTransactions, transactionReducer, updateTransaction, } from 'uniswap/src/features/transactions/slice';
import { TransactionOriginType, TransactionStatus, TransactionType, } from 'uniswap/src/features/transactions/types/transactionDetails';
import { finalizedTransactionAction } from 'uniswap/src/test/fixtures';
const finalizedTxAction = finalizedTransactionAction();
const address = '0x123';
const approveTxTypeInfo = {
    type: TransactionType.Approve,
    tokenAddress: '0xabc',
    spender: '0xdef',
};
const approveTxRequest = {
    request: {
        from: address,
        to: '0x456',
        value: '0x0',
    },
};
describe('transaction reducer', () => {
    let store;
    beforeEach(() => {
        store = createStore(transactionReducer, initialTransactionsState);
    });
    describe('addTransaction', () => {
        it('adds the transaction', () => {
            var _a, _b;
            const beforeTime = new Date().getTime();
            store.dispatch(addTransaction({
                routing: Routing.CLASSIC,
                chainId: UniverseChainId.Mainnet,
                id: '0',
                hash: '0x0',
                from: address,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            }));
            const txs = store.getState()[address];
            expect(txs === null || txs === void 0 ? void 0 : txs[UniverseChainId.Mainnet]).toBeTruthy();
            expect((_a = txs === null || txs === void 0 ? void 0 : txs[UniverseChainId.Mainnet]) === null || _a === void 0 ? void 0 : _a['0']).toBeTruthy();
            const tx = (_b = txs === null || txs === void 0 ? void 0 : txs[UniverseChainId.Mainnet]) === null || _b === void 0 ? void 0 : _b['0'];
            expect(tx).toBeTruthy();
            expect(tx === null || tx === void 0 ? void 0 : tx.hash).toEqual('0x0');
            expect(tx === null || tx === void 0 ? void 0 : tx.from).toEqual(address);
            expect(tx === null || tx === void 0 ? void 0 : tx.addedTime).toBeGreaterThanOrEqual(beforeTime);
            expect(tx === null || tx === void 0 ? void 0 : tx.typeInfo).toEqual({
                type: TransactionType.Approve,
                tokenAddress: '0xabc',
                spender: '0xdef',
            });
        });
        it('throws if attempting to add a transaction that already exists', () => {
            const id = '5';
            const chainId = UniverseChainId.Mainnet;
            store.dispatch(addTransaction({
                routing: Routing.CLASSIC,
                chainId,
                id,
                hash: '0x0',
                from: address,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            }));
            try {
                store.dispatch(addTransaction({
                    routing: Routing.CLASSIC,
                    chainId,
                    id,
                    hash: '0x0',
                    from: address,
                    options: approveTxRequest,
                    typeInfo: approveTxTypeInfo,
                    status: TransactionStatus.Pending,
                    addedTime: Date.now(),
                    transactionOriginType: TransactionOriginType.Internal,
                }));
            }
            catch (error) {
                expect(error).toEqual(Error(`addTransaction: Attempted to overwrite tx with id ${id}`));
            }
        });
    });
    describe('updateTransaction', () => {
        it('throws if attempting to update a missing transaction', () => {
            const id = '2';
            const chainId = UniverseChainId.Polygon;
            try {
                store.dispatch(updateTransaction({
                    routing: Routing.CLASSIC,
                    chainId,
                    id,
                    hash: '0x0',
                    from: address,
                    options: approveTxRequest,
                    typeInfo: approveTxTypeInfo,
                    status: TransactionStatus.Pending,
                    addedTime: Date.now(),
                    transactionOriginType: TransactionOriginType.Internal,
                }));
            }
            catch (error) {
                expect(error).toEqual(Error(`updateTransaction: Attempted to update a missing tx with id ${id}`));
            }
            expect(store.getState()).toEqual({});
        });
        it('updates a transaction that was previoulsy added', () => {
            var _a, _b;
            const id = '19';
            const chainId = UniverseChainId.Polygon;
            const transaction = {
                routing: Routing.CLASSIC,
                chainId,
                id,
                hash: '0x0',
                from: address,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            };
            store.dispatch(addTransaction(transaction));
            store.dispatch(updateTransaction({ ...transaction, status: TransactionStatus.Canceled }));
            const tx = (_b = (_a = store.getState()[address]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id];
            expect(tx === null || tx === void 0 ? void 0 : tx.status).toEqual(TransactionStatus.Canceled);
        });
    });
    describe('finalizeTransaction', () => {
        it('throws if attempting to finalize a missing transaction', () => {
            try {
                store.dispatch(finalizeTransaction(finalizedTxAction.payload));
            }
            catch (error) {
                expect(error).toEqual(Error(`finalizeTransaction: Attempted to finalize a missing tx with id ${finalizedTxAction.payload.id}`));
            }
            expect(store.getState()).toEqual({});
        });
        const { from, chainId, id, receipt } = finalizedTxAction.payload;
        it('finalizes a transaction that was previoulsy added', () => {
            var _a, _b;
            store.dispatch(addTransaction({
                routing: Routing.CLASSIC,
                chainId,
                id,
                hash: '0x0',
                from,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            }));
            store.dispatch(finalizeTransaction(finalizedTxAction.payload));
            const tx = (_b = (_a = store.getState()[from]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id];
            expect(tx === null || tx === void 0 ? void 0 : tx.receipt).toEqual(receipt);
        });
    });
    describe('cancelTransaction', () => {
        it('throws if attempting to cancel a missing transaction', () => {
            const id = '13';
            try {
                store.dispatch(cancelTransaction({
                    address: '0xaddress',
                    chainId: UniverseChainId.Optimism,
                    cancelRequest: {},
                    id,
                }));
            }
            catch (error) {
                expect(error).toEqual(Error(`cancelTransaction: Attempted to cancel a tx that doesn't exist with id ${id}`));
            }
            expect(store.getState()).toEqual({});
        });
        it('cancels a tranasction that was previoulsy added', () => {
            var _a, _b;
            const id = '420';
            const chainId = UniverseChainId.ArbitrumOne;
            store.dispatch(addTransaction({
                routing: Routing.CLASSIC,
                chainId,
                id,
                hash: '0x0',
                from: address,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            }));
            store.dispatch(cancelTransaction({ chainId, id, address, cancelRequest: {} }));
            const tx = (_b = (_a = store.getState()[address]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id];
            expect(tx === null || tx === void 0 ? void 0 : tx.status).toEqual(TransactionStatus.Cancelling);
        });
    });
    describe('replaceTransaction', () => {
        const newTxParams = { gasPrice: '0x123' };
        it('throws if attempting to replace a missing transaction', () => {
            const id = '2';
            try {
                store.dispatch(replaceTransaction({
                    address: '0xaddress',
                    chainId: UniverseChainId.Optimism,
                    id,
                    newTxParams,
                }));
            }
            catch (error) {
                expect(error).toEqual(Error(`replaceTransaction: Attempted to replace a tx that doesn't exist with id ${id}`));
            }
            expect(store.getState()).toEqual({});
        });
        it('replaces a transaction that was previously added', () => {
            var _a, _b;
            const id = '101';
            const chainId = UniverseChainId.Optimism;
            const transaction = {
                routing: Routing.CLASSIC,
                chainId,
                id,
                hash: '0x0',
                from: address,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            };
            store.dispatch(addTransaction(transaction));
            store.dispatch(replaceTransaction({ chainId, id, newTxParams, address }));
            const tx = (_b = (_a = store.getState()[address]) === null || _a === void 0 ? void 0 : _a[chainId]) === null || _b === void 0 ? void 0 : _b[id];
            expect(tx === null || tx === void 0 ? void 0 : tx.status).toEqual(TransactionStatus.Replacing);
        });
    });
    describe('clearAllTransactions', () => {
        it('removes all transactions for the chain', () => {
            var _a, _b, _c, _d;
            const address1 = '0x123';
            const address2 = '0xabc';
            const chainId1 = UniverseChainId.Mainnet;
            const chainId2 = UniverseChainId.Optimism;
            store.dispatch(addTransaction({
                routing: Routing.CLASSIC,
                chainId: chainId1,
                id: '0',
                hash: '0x0',
                from: address1,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            }));
            store.dispatch(addTransaction({
                routing: Routing.CLASSIC,
                chainId: chainId2,
                id: '1',
                hash: '0x1',
                from: address2,
                options: approveTxRequest,
                typeInfo: approveTxTypeInfo,
                status: TransactionStatus.Pending,
                addedTime: Date.now(),
                transactionOriginType: TransactionOriginType.Internal,
            }));
            const txs = store.getState();
            expect(Object.keys(txs)).toHaveLength(2);
            expect(Object.keys(txs)).toEqual([address1, address2]);
            expect(Object.keys((_b = (_a = txs[address1]) === null || _a === void 0 ? void 0 : _a[chainId1]) !== null && _b !== void 0 ? _b : {})).toEqual(['0']);
            expect(Object.keys((_d = (_c = txs[address2]) === null || _c === void 0 ? void 0 : _c[chainId2]) !== null && _d !== void 0 ? _d : {})).toEqual(['1']);
            store.dispatch(resetTransactions());
            expect(Object.keys(store.getState())).toHaveLength(0);
        });
    });
});
//# sourceMappingURL=slice.test.js.map