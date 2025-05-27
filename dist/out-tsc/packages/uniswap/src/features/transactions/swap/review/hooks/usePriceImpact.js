import { useMemo } from 'react';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { formatPriceImpact } from 'uniswap/src/features/transactions/swap/utils/formatPriceImpact';
import { getPriceImpact } from 'uniswap/src/features/transactions/swap/utils/getPriceImpact';
/** Returns the price impact of the current trade, including UniswapX trades. UniswapX trades do not have typical pool-based price impact; we use a frontend-calculated metric. */
export function usePriceImpact({ derivedSwapInfo }) {
    const { formatPercent } = useLocalizationContext();
    return useMemo(() => {
        const priceImpact = getPriceImpact(derivedSwapInfo);
        if (!priceImpact) {
            return { priceImpact: undefined, formattedPriceImpact: undefined };
        }
        const formattedPriceImpact = formatPriceImpact(priceImpact, formatPercent);
        return { priceImpact, formattedPriceImpact };
    }, [derivedSwapInfo, formatPercent]);
}
//# sourceMappingURL=usePriceImpact.js.map