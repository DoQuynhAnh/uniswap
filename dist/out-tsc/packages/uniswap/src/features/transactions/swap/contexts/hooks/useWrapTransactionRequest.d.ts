import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { providers } from 'ethers/lib/ethers';
import { Weth } from 'uniswap/src/abis/types';
import { AccountMeta } from 'uniswap/src/features/accounts/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
export declare function getWrappedNativeContract(chainId: UniverseChainId): Weth;
export declare function useWrapTransactionRequest(derivedSwapInfo: DerivedSwapInfo, account?: AccountMeta): providers.TransactionRequest | undefined;
/**
 * Generates a transaction request for wrapping/unwrapping native currency
 * @param ctx - Transaction context containing input amount and sender address
 * @throws {Error} If input validation or request generation fails
 * @returns Populated transaction request
 */
export declare function getWrapTransactionRequest(ctx: {
    currencyAmountIn: CurrencyAmount<Currency>;
    from: Address | undefined;
}): Promise<providers.TransactionRequest>;
//# sourceMappingURL=useWrapTransactionRequest.d.ts.map