import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { CurrencyField } from 'uniswap/src/types/currency';
export function getTradeAmounts(acceptedDerivedSwapInfo, priceUXEnabled = false) {
    var _a, _b;
    if (!acceptedDerivedSwapInfo) {
        return { inputCurrencyAmount: undefined, outputCurrencyAmount: undefined };
    }
    const { trade: { trade, indicativeTrade }, wrapType, currencyAmounts, } = acceptedDerivedSwapInfo;
    const displayTrade = trade !== null && trade !== void 0 ? trade : indicativeTrade;
    const isWrap = wrapType !== WrapType.NotApplicable;
    // For wraps, we need to detect if WETH is input or output, because we have logic in `useDerivedSwapInfo` that
    // sets both currencyAmounts to native currency, which would result in native ETH as both tokens for this UI.
    const wrapInputCurrencyAmount = wrapType === WrapType.Wrap ? currencyAmounts[CurrencyField.INPUT] : (_a = currencyAmounts[CurrencyField.INPUT]) === null || _a === void 0 ? void 0 : _a.wrapped;
    const wrapOutputCurrencyAmount = wrapType === WrapType.Wrap ? (_b = currencyAmounts[CurrencyField.OUTPUT]) === null || _b === void 0 ? void 0 : _b.wrapped : currencyAmounts[CurrencyField.OUTPUT];
    // Token amounts
    // On review screen, always show values directly from trade object, to match exactly what is submitted on chain
    // For wraps, we have no trade object so use values from form state
    const inputCurrencyAmount = isWrap ? wrapInputCurrencyAmount : displayTrade === null || displayTrade === void 0 ? void 0 : displayTrade.inputAmount;
    const outputCurrencyAmount = isWrap
        ? wrapOutputCurrencyAmount
        : priceUXEnabled
            ? displayTrade === null || displayTrade === void 0 ? void 0 : displayTrade.quoteOutputAmount
            : displayTrade === null || displayTrade === void 0 ? void 0 : displayTrade.outputAmount;
    return {
        inputCurrencyAmount,
        outputCurrencyAmount,
    };
}
//# sourceMappingURL=getTradeAmounts.js.map