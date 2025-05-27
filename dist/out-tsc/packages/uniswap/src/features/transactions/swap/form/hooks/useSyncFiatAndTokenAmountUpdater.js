import { useEffect } from 'react';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { STABLECOIN_AMOUNT_OUT, useUSDCPrice } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { currencyIdToChain } from 'uniswap/src/utils/currencyId';
// Used for rounding in conversion math
const NUM_DECIMALS_FIAT_ROUNDING = 2;
// Used for display text on fiat amount
const NUM_DECIMALS_DISPLAY_FIAT = 2;
/**
 * Updater to always populate fiatAmount, or tokenAmount in swap context. If fiat mode is enabled,
 * we reference the current fiat input amount, and update the token amount. If not enabled, we update the fiat amount based on token
 * amount. This allows us to toggle between 2 modes, without losing the entered amount.
 */
export function useSyncFiatAndTokenAmountUpdater({ skip = false }) {
    var _a, _b;
    const { isFiatMode, updateSwapForm, exactAmountToken, exactAmountFiat, derivedSwapInfo, exactCurrencyField } = useSwapFormContext();
    const exactCurrency = derivedSwapInfo.currencies[exactCurrencyField];
    const { price: usdPriceOfCurrency } = useUSDCPrice(skip ? undefined : (_a = exactCurrency === null || exactCurrency === void 0 ? void 0 : exactCurrency.currency) !== null && _a !== void 0 ? _a : undefined);
    const { convertFiatAmount } = useLocalizationContext();
    const conversionRate = convertFiatAmount(1).amount;
    const chainId = currencyIdToChain((_b = exactCurrency === null || exactCurrency === void 0 ? void 0 : exactCurrency.currencyId) !== null && _b !== void 0 ? _b : '');
    useEffect(() => {
        var _a, _b;
        if (skip || !exactCurrency || !usdPriceOfCurrency || !chainId) {
            return;
        }
        if (isFiatMode) {
            const fiatAmount = exactAmountFiat && !isNaN(parseFloat(exactAmountFiat)) ? parseFloat(exactAmountFiat) : 0;
            const usdAmount = (fiatAmount / conversionRate).toFixed(NUM_DECIMALS_FIAT_ROUNDING);
            const stablecoinAmount = getCurrencyAmount({
                value: usdAmount,
                valueType: ValueType.Exact,
                currency: (_a = STABLECOIN_AMOUNT_OUT[chainId]) === null || _a === void 0 ? void 0 : _a.currency,
            });
            const tokenAmount = stablecoinAmount ? usdPriceOfCurrency === null || usdPriceOfCurrency === void 0 ? void 0 : usdPriceOfCurrency.invert().quote(stablecoinAmount) : undefined;
            updateSwapForm({ exactAmountToken: tokenAmount === null || tokenAmount === void 0 ? void 0 : tokenAmount.toExact() });
        }
        // When we have new token amount after user hit "max" or changes exact currency field
        if (!isFiatMode || (isFiatMode && !exactAmountFiat && exactAmountToken)) {
            const tokenAmount = getCurrencyAmount({
                value: exactAmountToken,
                valueType: ValueType.Exact,
                currency: exactCurrency.currency,
            });
            const usdAmount = tokenAmount ? usdPriceOfCurrency === null || usdPriceOfCurrency === void 0 ? void 0 : usdPriceOfCurrency.quote(tokenAmount) : undefined;
            const fiatAmount = parseFloat((_b = usdAmount === null || usdAmount === void 0 ? void 0 : usdAmount.toExact()) !== null && _b !== void 0 ? _b : '0') * conversionRate;
            const fiatAmountFormatted = fiatAmount ? fiatAmount.toFixed(NUM_DECIMALS_DISPLAY_FIAT) : '';
            updateSwapForm({
                exactAmountFiat: fiatAmountFormatted,
            });
        }
    }, [
        exactAmountFiat,
        exactAmountToken,
        exactCurrency,
        conversionRate,
        updateSwapForm,
        chainId,
        usdPriceOfCurrency,
        isFiatMode,
        skip,
    ]);
}
//# sourceMappingURL=useSyncFiatAndTokenAmountUpdater.js.map