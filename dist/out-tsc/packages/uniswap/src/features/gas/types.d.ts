import { FetchError } from 'uniswap/src/data/apiClients/FetchError';
import { GasEstimate, GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { GasFeeEstimates } from 'uniswap/src/features/transactions/types/transactionDetails';
export type TransactionLegacyFeeParams = {
    gasPrice: string;
    gasLimit: string;
};
export type TransactionEip1559FeeParams = {
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    gasLimit: string;
};
export declare function areEqualGasStrategies(a?: GasStrategy, b?: GasStrategy): boolean;
export declare function getGasPrice(estimate: GasEstimate): string;
export type GasFeeResponse = {
    gasEstimates: GasEstimate[];
};
export type GasFeeResult = {
    value?: string;
    displayValue?: string;
    isLoading: boolean;
    error: FetchError | Error | null;
    params?: TransactionLegacyFeeParams | TransactionEip1559FeeParams;
    gasEstimates?: GasFeeEstimates;
};
export type ValidatedGasFeeResult = GasFeeResult & {
    value: string;
    error: null;
};
export declare function validateGasFeeResult(gasFee: GasFeeResult): ValidatedGasFeeResult | undefined;
export type FormattedUniswapXGasFeeInfo = {
    approvalFeeFormatted?: string;
    wrapFeeFormatted?: string;
    swapFeeFormatted: string;
    preSavingsGasFeeFormatted: string;
    inputTokenSymbol?: string;
};
//# sourceMappingURL=types.d.ts.map