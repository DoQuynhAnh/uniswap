import { useMemo } from 'react';
import { useFormattedUniswapXGasFeeInfo, useGasFeeFormattedDisplayAmounts, useGasFeeHighRelativeToValue, } from 'uniswap/src/features/gas/hooks';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { CurrencyField } from 'uniswap/src/types/currency';
import { usePrevious } from 'utilities/src/react/hooks';
// TODO: WALL-6293
export function useDebouncedGasInfo() {
    const { derivedSwapInfo: { chainId, currencyAmountsUSDValue, trade, currencyAmounts, exactCurrencyField }, } = useSwapFormContext();
    const inputUSDValue = currencyAmountsUSDValue[CurrencyField.INPUT];
    const outputUSDValue = currencyAmountsUSDValue[CurrencyField.OUTPUT];
    const swapTxContext = useSwapTxContext();
    const { gasFee } = swapTxContext;
    const uniswapXGasFeeInfo = useFormattedUniswapXGasFeeInfo(isUniswapX(swapTxContext) ? swapTxContext.gasFeeBreakdown : undefined, chainId);
    const { gasFeeFormatted, gasFeeUSD } = useGasFeeFormattedDisplayAmounts({
        gasFee,
        chainId,
        placeholder: undefined,
    });
    const isHighRelativeToValue = useGasFeeHighRelativeToValue(gasFeeUSD, outputUSDValue !== null && outputUSDValue !== void 0 ? outputUSDValue : inputUSDValue);
    const amountChanged = usePrevious(currencyAmounts[exactCurrencyField]) !== currencyAmounts[exactCurrencyField];
    const tradeChanged = usePrevious(trade.trade) !== trade.trade && Boolean(trade.trade);
    const tradeLoadingOrRefetching = Boolean(trade.isLoading || trade.isFetching);
    const gasLoading = Boolean(gasFee.isLoading || (gasFee.value && !gasFeeUSD));
    const isLoading = tradeLoadingOrRefetching || gasLoading || amountChanged || tradeChanged;
    return useMemo(() => ({
        gasFee,
        fiatPriceFormatted: gasFeeFormatted !== null && gasFeeFormatted !== void 0 ? gasFeeFormatted : undefined,
        isHighRelativeToValue,
        uniswapXGasFeeInfo,
        isLoading,
        chainId,
    }), [gasFee, gasFeeFormatted, isHighRelativeToValue, isLoading, uniswapXGasFeeInfo, chainId]);
}
//# sourceMappingURL=useDebouncedGasInfo.js.map