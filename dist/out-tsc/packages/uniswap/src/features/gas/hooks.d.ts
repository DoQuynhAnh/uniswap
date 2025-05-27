import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { providers } from 'ethers/lib/ethers';
import { Warning } from 'uniswap/src/components/modals/WarningModal/types';
import { PollingInterval } from 'uniswap/src/constants/misc';
import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { AccountMeta } from 'uniswap/src/features/accounts/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { FormattedUniswapXGasFeeInfo, GasFeeResult } from 'uniswap/src/features/gas/types';
import { GasStrategyType } from 'uniswap/src/features/gating/configs';
import { DerivedSendInfo } from 'uniswap/src/features/transactions/send/types';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { UniswapXGasBreakdown } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
export declare const DEFAULT_GAS_STRATEGY: GasStrategy;
export type CancellationGasFeeDetails = {
    cancelRequest: providers.TransactionRequest;
    gasFeeDisplayValue: string;
};
export declare function useActiveGasStrategy(chainId: number | undefined, type: GasStrategyType): GasStrategy;
export declare function useShadowGasStrategies(chainId: number | undefined, type: GasStrategyType): GasStrategy[];
/**
 * Converts a gas fee calculated with the provided gas strategy to a display value.
 * When calculating the gas fee, the gas limit is multiplied by the `limitInflationFactor`,
 * but in the vast majority of cases, the transaction uses only the originally estimated gas limit.
 * We use the `displayLimitInflationFactor` to calculate the display value, which can be
 * different from the `limitInflationFactor` so that the gas fee displayed is more accurate.
 *
 * More info: https://www.notion.so/uniswaplabs/Gas-Limit-Experiment-14ac52b2548b80ea932ff2edfdab6683
 *
 * @param gasFee - The gas fee value to convert.
 * @param gasStrategy - The gas strategy used to calculate the gas fee.
 * @returns The display value of the gas fee.
 */
export declare function convertGasFeeToDisplayValue(gasFee: string | undefined, gasStrategy: GasStrategy | undefined): string | undefined;
export declare function useTransactionGasFee(tx: providers.TransactionRequest | undefined, skip?: boolean, refetchInterval?: PollingInterval, fallbackGasLimit?: number): GasFeeResult;
export declare function useUSDValueOfGasFee(chainId?: UniverseChainId, feeValueInWei?: string): {
    isLoading: boolean;
    value: string | undefined;
};
export declare function useUSDCurrencyAmountOfGasFee(chainId?: UniverseChainId, feeValueInWei?: string): CurrencyAmount<Currency> | null;
export declare function useFormattedUniswapXGasFeeInfo(uniswapXGasBreakdown: UniswapXGasBreakdown | undefined, chainId: UniverseChainId): FormattedUniswapXGasFeeInfo | undefined;
export declare function useGasFeeHighRelativeToValue(gasFeeUSD: string | undefined, value: Maybe<CurrencyAmount<Currency>>): boolean;
export declare function useTransactionGasWarning({ account, derivedInfo, gasFee, }: {
    account?: AccountMeta;
    derivedInfo: DerivedSwapInfo | DerivedSendInfo;
    gasFee?: string;
}): Warning | undefined;
type GasFeeFormattedAmounts<T extends string | undefined> = T extends string ? {
    gasFeeUSD: string | undefined;
    gasFeeFormatted: string;
} : {
    gasFeeUSD: string | undefined;
    gasFeeFormatted: string | null;
};
/**
 * Returns formatted fiat amounts based on a gas fee. Will format a USD price if a quote
 * is available, otherwise will return a formatted native currency amount.
 *
 * If no placeholder is defined, the response can be null. If a placeholder is defined,
 * the gas fee amount will always be a string.
 */
export declare function useGasFeeFormattedDisplayAmounts<T extends string | undefined>({ gasFee, chainId, placeholder, }: {
    gasFee: GasFeeResult | undefined;
    chainId: UniverseChainId;
    placeholder: T;
}): GasFeeFormattedAmounts<T>;
export {};
//# sourceMappingURL=hooks.d.ts.map