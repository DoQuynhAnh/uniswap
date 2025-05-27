import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { usePrefilledNeedsTokenProtectionWarning } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
export const useCurrenciesWithProtectionWarnings = () => {
    const { derivedSwapInfo, prefilledCurrencies } = useSwapFormContext();
    const { currenciesWithProtectionWarnings } = usePrefilledNeedsTokenProtectionWarning(derivedSwapInfo, prefilledCurrencies);
    const maybeCurrencyInfo0 = currenciesWithProtectionWarnings[0];
    if (maybeCurrencyInfo0 === undefined) {
        return {
            currencyInfo0: undefined,
            currencyInfo1: undefined,
        };
    }
    return {
        currencyInfo0: maybeCurrencyInfo0,
        currencyInfo1: currenciesWithProtectionWarnings[1],
    };
};
//# sourceMappingURL=useCurrenciesWithProtectionWarnings.js.map