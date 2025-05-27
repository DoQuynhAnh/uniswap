import { useEffect, useRef } from 'react';
import { isUniverseChainId } from 'uniswap/src/features/chains/types';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { STABLECOIN_AMOUNT_OUT, useUSDCPrice } from 'uniswap/src/features/transactions/hooks/useUSDCPrice';
const NUM_DECIMALS_USD = 2;
const NUM_DECIMALS_DISPLAY = 2;
export function useUSDTokenUpdater({ isFiatInput, exactAmountToken, exactAmountFiat, currency, onFiatAmountUpdated, onTokenAmountUpdated, }) {
    const { price } = useUSDCPrice(currency);
    const shouldUseUSDRef = useRef(isFiatInput);
    const { convertFiatAmount, formatCurrencyAmount } = useLocalizationContext();
    const conversionRate = convertFiatAmount(1).amount;
    useEffect(() => {
        shouldUseUSDRef.current = isFiatInput;
    }, [isFiatInput]);
    useEffect(() => {
        var _a, _b, _c;
        if (!currency || !price || !isUniverseChainId(currency.chainId)) {
            return undefined;
        }
        const _exactAmountFiat = exactAmountFiat === '.' ? '0' : exactAmountFiat || '0';
        const exactAmountUSD = (parseFloat(_exactAmountFiat) / conversionRate).toFixed(NUM_DECIMALS_USD);
        if (shouldUseUSDRef.current) {
            const stablecoinAmount = getCurrencyAmount({
                value: exactAmountUSD,
                valueType: ValueType.Exact,
                currency: (_a = STABLECOIN_AMOUNT_OUT[currency.chainId]) === null || _a === void 0 ? void 0 : _a.currency,
            });
            const currencyAmount = stablecoinAmount ? price === null || price === void 0 ? void 0 : price.invert().quote(stablecoinAmount) : undefined;
            return onTokenAmountUpdated((_b = currencyAmount === null || currencyAmount === void 0 ? void 0 : currencyAmount.toExact()) !== null && _b !== void 0 ? _b : '');
        }
        const exactCurrencyAmount = getCurrencyAmount({
            value: exactAmountToken,
            valueType: ValueType.Exact,
            currency,
        });
        const usdPrice = exactCurrencyAmount ? price === null || price === void 0 ? void 0 : price.quote(exactCurrencyAmount) : undefined;
        const fiatPrice = parseFloat((_c = usdPrice === null || usdPrice === void 0 ? void 0 : usdPrice.toExact()) !== null && _c !== void 0 ? _c : '0') * conversionRate;
        return onFiatAmountUpdated(fiatPrice ? fiatPrice.toFixed(NUM_DECIMALS_DISPLAY) : '');
    }, [
        shouldUseUSDRef,
        exactAmountFiat,
        exactAmountToken,
        currency,
        price,
        conversionRate,
        formatCurrencyAmount,
        onFiatAmountUpdated,
        onTokenAmountUpdated,
    ]);
}
//# sourceMappingURL=useUSDTokenUpdater.js.map