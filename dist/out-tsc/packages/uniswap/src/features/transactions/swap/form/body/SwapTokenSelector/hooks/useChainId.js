import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { CurrencyField } from 'uniswap/src/types/currency';
export const useChainId = () => {
    var _a, _b;
    const { filteredChainIds, selectingCurrencyField, input } = useSwapFormContext();
    const { isTestnetModeEnabled, defaultChainId } = useEnabledChains();
    const selectedChainId = filteredChainIds[selectingCurrencyField !== null && selectingCurrencyField !== void 0 ? selectingCurrencyField : CurrencyField.INPUT];
    if (selectedChainId || !isTestnetModeEnabled) {
        return selectedChainId;
    }
    return (_b = (_a = filteredChainIds[CurrencyField.INPUT]) !== null && _a !== void 0 ? _a : input === null || input === void 0 ? void 0 : input.chainId) !== null && _b !== void 0 ? _b : defaultChainId;
};
//# sourceMappingURL=useChainId.js.map