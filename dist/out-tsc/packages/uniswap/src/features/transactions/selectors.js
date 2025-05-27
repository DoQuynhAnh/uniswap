import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { uniqueAddressesOnly } from 'uniswap/src/features/address/utils';
import { isBridge, isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { isFinalizedTx, TransactionType, } from 'uniswap/src/features/transactions/types/transactionDetails';
import { selectTokensVisibility } from 'uniswap/src/features/visibility/selectors';
import { buildCurrencyId } from 'uniswap/src/utils/currencyId';
import { unique } from 'utilities/src/primitives/array';
import { flattenObjectOfObjects } from 'utilities/src/primitives/objects';
export const selectTransactions = (state) => state.transactions;
export const selectSwapTransactionsCount = createSelector(selectTransactions, (transactions) => {
    let swapTransactionCount = 0;
    const txs = flattenObjectOfObjects(transactions);
    for (const tx of txs) {
        for (const transaction of Object.values(tx)) {
            if (transaction.typeInfo.type === TransactionType.Swap) {
                swapTransactionCount++;
            }
        }
    }
    return swapTransactionCount;
});
export const makeSelectAddressTransactions = () => createSelector(selectTransactions, (_, address) => address, (transactions, address) => {
    if (!address) {
        return undefined;
    }
    const addressTransactions = transactions[address];
    if (!addressTransactions) {
        return undefined;
    }
    return unique(flattenObjectOfObjects(addressTransactions), (tx, _, self) => {
        // Remove dummy local FOR transactions from TransactionList, notification badge, etc.
        // this is what prevents the local transactions from actually appearing in the activity tab.
        if (tx.typeInfo.type === TransactionType.LocalOnRamp || tx.typeInfo.type === TransactionType.LocalOffRamp) {
            return false;
        }
        /*
         * Remove duplicate transactions with the same chain and nonce, keep the one with the higher addedTime,
         * this represents a txn that is replacing or cancelling the older txn.
         */
        const duplicate = self.find((tx2) => tx2.id !== tx.id &&
            (isClassic(tx) || isBridge(tx)) &&
            (isClassic(tx2) || isBridge(tx2)) &&
            tx2.options.request.chainId &&
            tx2.options.request.chainId === tx.options.request.chainId &&
            tx.options.request.nonce &&
            tx2.options.request.nonce === tx.options.request.nonce);
        if (duplicate) {
            return tx.addedTime > duplicate.addedTime;
        }
        return true;
    });
});
export function useSelectAddressTransactions(address) {
    const selectAddressTransactions = useMemo(makeSelectAddressTransactions, []);
    return useSelector((state) => selectAddressTransactions(state, address));
}
export function useCurrencyIdToVisibility(addresses) {
    const manuallySetTokenVisibility = useSelector(selectTokensVisibility);
    const selectLocalTxCurrencyIds = useMemo(makeSelectTokenVisibilityFromLocalTxs, []);
    const tokenVisibilityFromLocalTxs = useSelector((state) => selectLocalTxCurrencyIds(state, addresses));
    return useMemo(() => ({
        ...tokenVisibilityFromLocalTxs,
        // Tokens the user has individually shown/hidden in the app should take preference over local txs
        ...manuallySetTokenVisibility,
    }), [manuallySetTokenVisibility, tokenVisibilityFromLocalTxs]);
}
const makeSelectTokenVisibilityFromLocalTxs = () => createSelector(selectTransactions, (_, addresses) => addresses, (transactions, addresses) => addresses.reduce((acc, address) => {
    const addressTransactions = transactions[address];
    if (!addressTransactions) {
        return acc;
    }
    Object.values(flattenObjectOfObjects(addressTransactions)).forEach((tx) => {
        if (tx.typeInfo.type === TransactionType.Send) {
            acc[buildCurrencyId(tx.chainId, tx.typeInfo.tokenAddress.toLowerCase())] = {
                isVisible: true,
            };
        }
        else if (tx.typeInfo.type === TransactionType.Swap) {
            acc[tx.typeInfo.inputCurrencyId.toLowerCase()] = { isVisible: true };
            acc[tx.typeInfo.outputCurrencyId.toLowerCase()] = { isVisible: true };
        }
    });
    return acc;
}, {}));
export const makeSelectTransaction = () => createSelector(selectTransactions, (_, { address, chainId, txId }) => ({
    address,
    chainId,
    txId,
}), (transactions, { address, chainId, txId }) => {
    var _a;
    if (!address || !transactions[address] || !chainId || !txId) {
        return undefined;
    }
    const addressTxs = (_a = transactions[address]) === null || _a === void 0 ? void 0 : _a[chainId];
    if (!addressTxs) {
        return undefined;
    }
    return Object.values(addressTxs).find((txDetails) => txDetails.id === txId);
});
export const makeSelectUniswapXOrder = () => createSelector(selectTransactions, (_, { orderHash }) => ({ orderHash }), (transactions, { orderHash }) => {
    for (const transactionsForChain of flattenObjectOfObjects(transactions)) {
        for (const tx of Object.values(transactionsForChain)) {
            if (isUniswapX(tx) && tx.orderHash === orderHash) {
                return tx;
            }
        }
    }
    return undefined;
});
// Returns a list of past recipients ordered from most to least recent
// TODO: [MOB-232] either revert this to return addresses or keep but also return displayName so that it's searchable for RecipientSelect
export const selectRecipientsByRecency = (state) => {
    const transactionsByChainId = flattenObjectOfObjects(state.transactions);
    const sendTransactions = transactionsByChainId.reduce((accum, transactions) => {
        const sendTransactionsWithRecipients = Object.values(transactions).filter((tx) => tx.typeInfo.type === TransactionType.Send && tx.typeInfo.recipient);
        return [...accum, ...sendTransactionsWithRecipients];
    }, []);
    const sortedRecipients = sendTransactions
        .sort((a, b) => (a.addedTime < b.addedTime ? 1 : -1))
        .map((transaction) => {
        var _a;
        return {
            address: (_a = transaction.typeInfo) === null || _a === void 0 ? void 0 : _a.recipient,
            name: '',
        };
    });
    return uniqueAddressesOnly(sortedRecipients);
};
export const selectIncompleteTransactions = (state) => {
    const transactionsByChainId = flattenObjectOfObjects(state.transactions);
    return transactionsByChainId.reduce((accum, transactions) => {
        const pendingTxs = Object.values(transactions).filter((tx) => Boolean(!tx.receipt) && !isFinalizedTx(tx));
        return [...accum, ...pendingTxs];
    }, []);
};
//# sourceMappingURL=selectors.js.map