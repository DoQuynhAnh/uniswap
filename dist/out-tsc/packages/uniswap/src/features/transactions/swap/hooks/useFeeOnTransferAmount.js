import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { useUSDCValue } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
import { getTradeAmounts } from 'uniswap/src/features/transactions/swap/hooks/getTradeAmounts';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { isBridge } from 'uniswap/src/features/transactions/swap/utils/routing';
import { NumberType } from 'utilities/src/format/types';
export function useFeeOnTransferAmounts(acceptedDerivedSwapInfo) {
    const priceUXEnabled = usePriceUXEnabled();
    const { t } = useTranslation();
    const { convertFiatAmountFormatted, formatCurrencyAmount } = useLocalizationContext();
    const { inputCurrencyAmount, outputCurrencyAmount } = getTradeAmounts(acceptedDerivedSwapInfo, priceUXEnabled);
    const usdAmountIn = useUSDCValue(inputCurrencyAmount);
    const usdAmountOut = useUSDCValue(outputCurrencyAmount);
    return useMemo(() => {
        var _a, _b, _c, _d, _e;
        if (!acceptedDerivedSwapInfo) {
            return undefined;
        }
        const { currencies } = acceptedDerivedSwapInfo;
        const { input: inputCurrencyInfo, output: outputCurrencyInfo } = currencies;
        const acceptedTrade = (_a = acceptedDerivedSwapInfo.trade.trade) !== null && _a !== void 0 ? _a : acceptedDerivedSwapInfo.trade.indicativeTrade;
        const tradeHasFeeToken = ((_b = acceptedTrade === null || acceptedTrade === void 0 ? void 0 : acceptedTrade.inputTax) === null || _b === void 0 ? void 0 : _b.greaterThan(0)) || ((_c = acceptedTrade === null || acceptedTrade === void 0 ? void 0 : acceptedTrade.outputTax) === null || _c === void 0 ? void 0 : _c.greaterThan(0));
        if (!acceptedTrade || !tradeHasFeeToken || acceptedTrade.indicative || isBridge(acceptedTrade)) {
            return undefined;
        }
        const usdTaxAmountIn = usdAmountIn === null || usdAmountIn === void 0 ? void 0 : usdAmountIn.multiply(acceptedTrade.inputTax).toExact();
        const usdTaxAmountOut = usdAmountOut === null || usdAmountOut === void 0 ? void 0 : usdAmountOut.multiply(acceptedTrade.outputTax).toExact();
        const formattedUsdTaxAmountIn = convertFiatAmountFormatted(usdTaxAmountIn, NumberType.FiatTokenQuantity);
        const formattedUsdTaxAmountOut = convertFiatAmountFormatted(usdTaxAmountOut, NumberType.FiatTokenQuantity);
        const taxAmountIn = inputCurrencyAmount === null || inputCurrencyAmount === void 0 ? void 0 : inputCurrencyAmount.multiply(acceptedTrade.inputTax);
        const taxAmountOut = outputCurrencyAmount === null || outputCurrencyAmount === void 0 ? void 0 : outputCurrencyAmount.multiply(acceptedTrade.outputTax);
        const formattedAmountIn = formatCurrencyAmount({ value: taxAmountIn, type: NumberType.TokenTx });
        const formattedAmountOut = formatCurrencyAmount({ value: taxAmountOut, type: NumberType.TokenTx });
        return {
            inputTokenInfo: {
                currencyInfo: inputCurrencyInfo,
                fee: acceptedTrade.inputTax,
                tokenSymbol: (_d = acceptedTrade.inputAmount.currency.symbol) !== null && _d !== void 0 ? _d : t('token.symbol.input.fallback'),
                formattedUsdAmount: formattedUsdTaxAmountIn,
                formattedAmount: formattedAmountIn,
            },
            outputTokenInfo: {
                currencyInfo: outputCurrencyInfo,
                fee: acceptedTrade.outputTax,
                tokenSymbol: (_e = acceptedTrade.outputAmount.currency.symbol) !== null && _e !== void 0 ? _e : t('token.symbol.output.fallback'),
                formattedUsdAmount: formattedUsdTaxAmountOut,
                formattedAmount: formattedAmountOut,
            },
        };
    }, [
        acceptedDerivedSwapInfo,
        usdAmountIn,
        usdAmountOut,
        convertFiatAmountFormatted,
        formatCurrencyAmount,
        inputCurrencyAmount,
        outputCurrencyAmount,
        t,
    ]);
}
//# sourceMappingURL=useFeeOnTransferAmount.js.map