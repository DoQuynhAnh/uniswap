import { useMemo } from 'react';
import { getPriceImpact } from 'uniswap/src/features/transactions/swap/utils/getPriceImpact';
import { CurrencyField } from 'uniswap/src/types/currency';
const PRICE_DIFFERENCE_THRESHOLD = 5;
const PRICE_DIFFERENCE_THRESHOLD_CRITICAL = 10;
export function usePriceDifference(derivedSwapInfo) {
    var _a, _b;
    const inputPrice = (_a = derivedSwapInfo === null || derivedSwapInfo === void 0 ? void 0 : derivedSwapInfo.currencyAmountsUSDValue[CurrencyField.INPUT]) === null || _a === void 0 ? void 0 : _a.toFixed();
    const outputPrice = (_b = derivedSwapInfo === null || derivedSwapInfo === void 0 ? void 0 : derivedSwapInfo.currencyAmountsUSDValue[CurrencyField.OUTPUT]) === null || _b === void 0 ? void 0 : _b.toFixed();
    return useMemo(() => {
        var _a;
        if (!derivedSwapInfo) {
            return { showPriceDifferenceWarning: false };
        }
        const priceDifferencePercentage = outputPrice !== undefined && inputPrice !== undefined
            ? ((+outputPrice - +inputPrice) / +inputPrice) * 100
            : +(((_a = getPriceImpact(derivedSwapInfo)) === null || _a === void 0 ? void 0 : _a.toFixed()) || 0);
        const showPriceDifferenceWarning = !!priceDifferencePercentage && priceDifferencePercentage * -1 > PRICE_DIFFERENCE_THRESHOLD;
        if (showPriceDifferenceWarning) {
            return {
                priceDifferencePercentage,
                showPriceDifferenceWarning,
                priceDifferenceColor: priceDifferencePercentage * -1 > PRICE_DIFFERENCE_THRESHOLD_CRITICAL ? '$statusCritical' : '$statusWarning',
            };
        }
        return { priceDifferencePercentage, showPriceDifferenceWarning };
    }, [derivedSwapInfo, inputPrice, outputPrice]);
}
//# sourceMappingURL=usePriceDifference.js.map