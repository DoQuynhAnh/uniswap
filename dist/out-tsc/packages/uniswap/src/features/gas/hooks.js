import { BigNumber } from 'ethers/lib/ethers';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { isWeb } from 'ui/src';
import { WarningAction, WarningLabel, WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { useGasFeeQuery } from 'uniswap/src/data/apiClients/uniswapApi/useGasFeeQuery';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { hasSufficientFundsIncludingGas } from 'uniswap/src/features/gas/utils';
import { DynamicConfigs } from 'uniswap/src/features/gating/configs';
import { useStatsigClientStatus } from 'uniswap/src/features/gating/hooks';
import { getStatsigClient } from 'uniswap/src/features/gating/sdk/statsig';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useOnChainNativeCurrencyBalance } from 'uniswap/src/features/portfolio/api';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { usePollingIntervalByChain } from 'uniswap/src/features/transactions/hooks/usePollingIntervalByChain';
import { useUSDCValueWithStatus } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { CurrencyField } from 'uniswap/src/types/currency';
import { NumberType } from 'utilities/src/format/types';
import { ONE_SECOND_MS } from 'utilities/src/time/time';
// The default "Urgent" strategy that was previously hardcoded in the gas service
export const DEFAULT_GAS_STRATEGY = {
    limitInflationFactor: 1.15,
    displayLimitInflationFactor: 1,
    priceInflationFactor: 1.5,
    percentileThresholdFor1559Fee: 75,
    thresholdToInflateLastBlockBaseFee: 0,
    baseFeeMultiplier: 1.05,
    baseFeeHistoryWindow: 100,
    minPriorityFeeRatioOfBaseFee: undefined,
    minPriorityFeeGwei: 2,
    maxPriorityFeeGwei: 9,
};
// Helper function to check if the config value is a valid GasStrategies object
function isValidGasStrategies(value) {
    return (typeof value === 'object' &&
        value !== null &&
        'strategies' in value &&
        Array.isArray(value.strategies));
}
// Hook to use active GasStrategy for a specific chain.
export function useActiveGasStrategy(chainId, type) {
    const { isStatsigReady } = useStatsigClientStatus();
    return useMemo(() => {
        if (!isStatsigReady) {
            return DEFAULT_GAS_STRATEGY;
        }
        const config = getStatsigClient().getDynamicConfig(DynamicConfigs.GasStrategies);
        const gasStrategies = isValidGasStrategies(config.value) ? config.value : undefined;
        const activeStrategy = gasStrategies === null || gasStrategies === void 0 ? void 0 : gasStrategies.strategies.find((s) => s.conditions.chainId === chainId && s.conditions.types === type && s.conditions.isActive);
        return activeStrategy ? activeStrategy.strategy : DEFAULT_GAS_STRATEGY;
    }, [isStatsigReady, chainId, type]);
}
// Hook to use shadow GasStrategies for a specific chain.
export function useShadowGasStrategies(chainId, type) {
    const { isStatsigReady } = useStatsigClientStatus();
    return useMemo(() => {
        if (!isStatsigReady) {
            return [];
        }
        const config = getStatsigClient().getDynamicConfig(DynamicConfigs.GasStrategies);
        const gasStrategies = isValidGasStrategies(config.value) ? config.value : undefined;
        const shadowStrategies = gasStrategies === null || gasStrategies === void 0 ? void 0 : gasStrategies.strategies.filter((s) => s.conditions.chainId === chainId && s.conditions.types === type && !s.conditions.isActive).map((s) => s.strategy);
        return shadowStrategies !== null && shadowStrategies !== void 0 ? shadowStrategies : [];
    }, [chainId, isStatsigReady, type]);
}
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
export function convertGasFeeToDisplayValue(gasFee, gasStrategy) {
    if (!gasFee || !gasStrategy || gasStrategy.limitInflationFactor === 0) {
        return gasFee;
    }
    const PRECISION = 1000000;
    const { displayLimitInflationFactor, limitInflationFactor } = gasStrategy;
    // Scale the inflation factors to integers
    const scaledDisplayFactor = Math.round(displayLimitInflationFactor * PRECISION);
    const scaledLimitFactor = Math.round(limitInflationFactor * PRECISION);
    return BigNumber.from(gasFee)
        .mul(BigNumber.from(scaledDisplayFactor))
        .div(BigNumber.from(scaledLimitFactor))
        .toString();
}
export function useTransactionGasFee(tx, skip, refetchInterval, fallbackGasLimit) {
    const pollingIntervalForChain = usePollingIntervalByChain(tx === null || tx === void 0 ? void 0 : tx.chainId);
    const { data, error, isLoading } = useGasFeeQuery({
        params: skip || !tx ? undefined : { tx, fallbackGasLimit },
        refetchInterval,
        staleTime: pollingIntervalForChain,
        immediateGcTime: pollingIntervalForChain + 15 * ONE_SECOND_MS,
    });
    // TODO(WALL-6421): Remove spread once GasFeeResult shape is decoupled from state fields
    return useMemo(() => ({ ...data, error, isLoading }), [data, error, isLoading]);
}
export function useUSDValueOfGasFee(chainId, feeValueInWei) {
    const currencyAmount = getCurrencyAmount({
        value: feeValueInWei,
        valueType: ValueType.Raw,
        currency: chainId ? NativeCurrency.onChain(chainId) : undefined,
    });
    const { value, isLoading } = useUSDCValueWithStatus(currencyAmount);
    return { isLoading, value: value === null || value === void 0 ? void 0 : value.toExact() };
}
// Same as useUSDValueOfGasFee, but returns a CurrencyAmount<Currency> instead of a string
export function useUSDCurrencyAmountOfGasFee(chainId, feeValueInWei) {
    const currencyAmount = getCurrencyAmount({
        value: feeValueInWei,
        valueType: ValueType.Raw,
        currency: chainId ? NativeCurrency.onChain(chainId) : undefined,
    });
    const { value } = useUSDCValueWithStatus(currencyAmount);
    return value;
}
export function useFormattedUniswapXGasFeeInfo(uniswapXGasBreakdown, chainId) {
    const { convertFiatAmountFormatted } = useLocalizationContext();
    const { value: approvalCostUsd } = useUSDValueOfGasFee(chainId, uniswapXGasBreakdown === null || uniswapXGasBreakdown === void 0 ? void 0 : uniswapXGasBreakdown.approvalCost);
    const { value: wrapCostUsd } = useUSDValueOfGasFee(chainId, uniswapXGasBreakdown === null || uniswapXGasBreakdown === void 0 ? void 0 : uniswapXGasBreakdown.wrapCost);
    return useMemo(() => {
        var _a;
        if (!uniswapXGasBreakdown) {
            return undefined;
        }
        const { approvalCost, wrapCost, inputTokenSymbol } = uniswapXGasBreakdown;
        // Without uniswapx, the swap would have costed approval price + classic swap fee. A separate wrap tx would not have occurred.
        const preSavingsGasCostUsd = Number(approvalCostUsd !== null && approvalCostUsd !== void 0 ? approvalCostUsd : 0) + Number((_a = uniswapXGasBreakdown === null || uniswapXGasBreakdown === void 0 ? void 0 : uniswapXGasBreakdown.classicGasUseEstimateUSD) !== null && _a !== void 0 ? _a : 0);
        const preSavingsGasFeeFormatted = convertFiatAmountFormatted(preSavingsGasCostUsd, NumberType.FiatGasPrice);
        // Swap submission will always cost 0, since it's not an on-chain tx.
        const swapFeeFormatted = convertFiatAmountFormatted(0, NumberType.FiatGasPrice);
        return {
            approvalFeeFormatted: approvalCost
                ? convertFiatAmountFormatted(approvalCostUsd, NumberType.FiatGasPrice)
                : undefined,
            wrapFeeFormatted: wrapCost ? convertFiatAmountFormatted(wrapCostUsd, NumberType.FiatGasPrice) : undefined,
            preSavingsGasFeeFormatted,
            swapFeeFormatted,
            inputTokenSymbol,
        };
    }, [uniswapXGasBreakdown, approvalCostUsd, convertFiatAmountFormatted, wrapCostUsd]);
}
export function useGasFeeHighRelativeToValue(gasFeeUSD, value) {
    return useMemo(() => {
        if (!value) {
            return false;
        }
        const tenthOfOutputValue = parseFloat(value.toExact()) / 10;
        return Number(gasFeeUSD !== null && gasFeeUSD !== void 0 ? gasFeeUSD : 0) > tenthOfOutputValue;
    }, [gasFeeUSD, value]);
}
export function useTransactionGasWarning({ account, derivedInfo, gasFee, }) {
    const { chainId, currencyAmounts, currencyBalances } = derivedInfo;
    const { t } = useTranslation();
    const { balance: nativeCurrencyBalance } = useOnChainNativeCurrencyBalance(chainId, account === null || account === void 0 ? void 0 : account.address);
    const currencyAmountIn = currencyAmounts[CurrencyField.INPUT];
    const currencyBalanceIn = currencyBalances[CurrencyField.INPUT];
    // insufficient funds for gas
    const nativeAmountIn = (currencyAmountIn === null || currencyAmountIn === void 0 ? void 0 : currencyAmountIn.currency.isNative)
        ? currencyAmountIn
        : undefined;
    const hasGasFunds = hasSufficientFundsIncludingGas({
        transactionAmount: nativeAmountIn,
        gasFee,
        nativeCurrencyBalance,
    });
    const balanceInsufficient = currencyAmountIn && (currencyBalanceIn === null || currencyBalanceIn === void 0 ? void 0 : currencyBalanceIn.lessThan(currencyAmountIn));
    return useMemo(() => {
        var _a;
        // if balance is already insufficient, dont need to show warning about network fee
        if (gasFee === undefined || balanceInsufficient || !nativeCurrencyBalance || hasGasFunds) {
            return undefined;
        }
        const currencySymbol = (_a = nativeCurrencyBalance.currency.symbol) !== null && _a !== void 0 ? _a : '';
        return {
            type: WarningLabel.InsufficientGasFunds,
            severity: WarningSeverity.Medium,
            action: WarningAction.DisableSubmit,
            title: t('swap.warning.insufficientGas.title', {
                currencySymbol,
            }),
            buttonText: isWeb
                ? t('swap.warning.insufficientGas.button', {
                    currencySymbol,
                })
                : undefined,
            message: undefined,
            currency: nativeCurrencyBalance.currency,
        };
    }, [gasFee, balanceInsufficient, nativeCurrencyBalance, hasGasFunds, t]);
}
/**
 * Returns formatted fiat amounts based on a gas fee. Will format a USD price if a quote
 * is available, otherwise will return a formatted native currency amount.
 *
 * If no placeholder is defined, the response can be null. If a placeholder is defined,
 * the gas fee amount will always be a string.
 */
export function useGasFeeFormattedDisplayAmounts({ gasFee, chainId, placeholder, }) {
    const { convertFiatAmountFormatted, formatNumberOrString } = useLocalizationContext();
    const { value: gasFeeUSD, isLoading: gasFeeUSDIsLoading } = useUSDValueOfGasFee(chainId, gasFee === null || gasFee === void 0 ? void 0 : gasFee.displayValue);
    // In testnet mode, use native currency values as USD pricing may be unreliable
    const { isTestnetModeEnabled } = useEnabledChains();
    const nativeCurrency = NativeCurrency.onChain(chainId);
    const nativeCurrencyAmount = getCurrencyAmount({
        currency: nativeCurrency,
        value: gasFee === null || gasFee === void 0 ? void 0 : gasFee.displayValue,
        valueType: ValueType.Raw,
    });
    const fiatAmountFormatted = convertFiatAmountFormatted(gasFeeUSD, NumberType.FiatGasPrice);
    const nativeAmountFormatted = formatNumberOrString({
        value: nativeCurrencyAmount === null || nativeCurrencyAmount === void 0 ? void 0 : nativeCurrencyAmount.toExact(),
        type: NumberType.TokenNonTx,
    });
    const emptyState = placeholder !== null && placeholder !== void 0 ? placeholder : null;
    const gasFeeFormatted = useMemo(() => {
        // Gas fee not available
        if (!(gasFee === null || gasFee === void 0 ? void 0 : gasFee.displayValue)) {
            return emptyState;
        }
        // Gas fee available, USD not available - return native currency amount (always do this in testnet mode)
        if (!gasFeeUSD || isTestnetModeEnabled) {
            return gasFee.isLoading || gasFeeUSDIsLoading ? emptyState : `${nativeAmountFormatted} ${nativeCurrency.symbol}`;
        }
        // Gas fee and USD both available
        return fiatAmountFormatted;
    }, [
        emptyState,
        fiatAmountFormatted,
        gasFee === null || gasFee === void 0 ? void 0 : gasFee.isLoading,
        gasFee === null || gasFee === void 0 ? void 0 : gasFee.displayValue,
        gasFeeUSD,
        gasFeeUSDIsLoading,
        isTestnetModeEnabled,
        nativeAmountFormatted,
        nativeCurrency.symbol,
    ]);
    return {
        gasFeeUSD,
        gasFeeFormatted,
    };
}
//# sourceMappingURL=hooks.js.map