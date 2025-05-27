import providers from '@ethersproject/providers';
import { Protocol } from '@uniswap/router-sdk';
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { NullablePermit, Permit } from 'uniswap/src/data/tradingApi/__generated__/index';
import { LocalizationContextState } from 'uniswap/src/features/language/LocalizationContext';
import { PopulatedTransactionRequestArray } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { IndicativeTrade, Trade } from 'uniswap/src/features/transactions/swap/types/trade';
import { BridgeTransactionInfo, ExactInputSwapTransactionInfo, ExactOutputSwapTransactionInfo, GasFeeEstimates } from 'uniswap/src/features/transactions/types/transactionDetails';
export declare function tradeToTransactionInfo(trade: Trade, transactedUSDValue?: number, gasEstimates?: GasFeeEstimates): ExactInputSwapTransactionInfo | ExactOutputSwapTransactionInfo | BridgeTransactionInfo;
export declare function requireAcceptNewTrade(oldTrade: Maybe<Trade>, newTrade: Maybe<Trade>): boolean;
/**
 * Calculate Rate Line: The rate is line is calculate by using the output token's USD price
 * Caculate input rate amount:
 *  ( output USD amount / input coin ratio ) * the output coin ratio
 *
 * Caculate output rate line:
 * ( input rate amount / input coin ratio )
 *
 * Example:
 * Swap: 1.50 ETH = 367.351 UNI
 * ETH USD Price: $4,839.93, UNI USD Price: $4,755.47
 * Corrected Rate Calculation:
 * 1 UNI USD Rate = 4,755.47 / 367.351 = 12.94 USD
 * 1 ETH USD Rate = (4,755.47 / 367.351) * 244.9 = 3,170 USD
 */
export declare const calculateRateLine: (usdAmountOut: CurrencyAmount<Currency> | null, outputCurrencyAmount: Maybe<CurrencyAmount<Currency>>, trade: Trade | IndicativeTrade | undefined | null, showInverseRate: boolean, formatter: LocalizationContextState) => string;
export declare const getRateToDisplay: (formatter: LocalizationContextState, trade: Trade | IndicativeTrade, showInverseRate: boolean) => string;
export declare function getProtocolVersionFromTrade(trade: Trade): Protocol | undefined;
export type ValidatedTransactionRequest = providers.TransactionRequest & {
    to: string;
    chainId: number;
};
export declare function validateTransactionRequest(request?: providers.TransactionRequest | null): ValidatedTransactionRequest | undefined;
export declare function validateTransactionRequests(requests?: providers.TransactionRequest[] | null): PopulatedTransactionRequestArray | undefined;
type RemoveUndefined<T> = {
    [P in keyof T]-?: Exclude<T[P], undefined>;
};
export type ValidatedPermit = RemoveUndefined<Permit>;
export declare function validatePermit(permit: NullablePermit | undefined): ValidatedPermit | undefined;
export {};
//# sourceMappingURL=trade.d.ts.map