import { Contract } from 'ethers/lib/ethers';
import { useCallback } from 'react';
import WETH_ABI from 'uniswap/src/abis/weth.json';
import { getWrappedNativeAddress } from 'uniswap/src/constants/addresses';
import { nativeOnChain } from 'uniswap/src/constants/tokens';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { useAsyncData } from 'utilities/src/react/hooks';
export function getWrappedNativeContract(chainId) {
    return new Contract(getWrappedNativeAddress(chainId), WETH_ABI);
}
export function useWrapTransactionRequest(derivedSwapInfo, account) {
    const { wrapType, currencyAmounts, trade } = derivedSwapInfo;
    const isUniswapXWrap = Boolean(trade.trade && isUniswapX(trade.trade) && trade.trade.needsWrap);
    const transactionFetcher = useCallback(() => {
        const currencyAmountIn = currencyAmounts.input;
        const from = account === null || account === void 0 ? void 0 : account.address;
        if (!currencyAmountIn || (wrapType === WrapType.NotApplicable && !isUniswapXWrap)) {
            return undefined;
        }
        return getWrapTransactionRequest({ currencyAmountIn, from });
    }, [account, isUniswapXWrap, wrapType, currencyAmounts.input]);
    return useAsyncData(transactionFetcher).data;
}
function isValidWrapInputCurrency(currency) {
    return currency.isNative || currency.equals(nativeOnChain(currency.chainId).wrapped);
}
/**
 * Generates a transaction request for wrapping/unwrapping native currency
 * @param ctx - Transaction context containing input amount and sender address
 * @throws {Error} If input validation or request generation fails
 * @returns Populated transaction request
 */
export async function getWrapTransactionRequest(ctx) {
    const { currencyAmountIn, from } = ctx;
    const { currency } = currencyAmountIn;
    const { chainId } = currency;
    const wrappedNativeContract = getWrappedNativeContract(chainId);
    if (!isValidWrapInputCurrency(currency)) {
        throw new Error('Invalid wrap input currency');
    }
    const value = `0x${currencyAmountIn.quotient.toString(16)}`;
    const isWrap = currency.isNative;
    const tx = isWrap
        ? await wrappedNativeContract.populateTransaction.deposit({ value, from })
        : await wrappedNativeContract.populateTransaction.withdraw(value);
    return { ...tx, from, chainId };
}
//# sourceMappingURL=useWrapTransactionRequest.js.map