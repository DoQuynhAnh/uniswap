import { AssetType } from 'uniswap/src/entities/assets';
import { CurrencyField } from 'uniswap/src/types/currency';
import { currencyIdToAddress, currencyIdToChain } from 'uniswap/src/utils/currencyId';
export const prepareSwapFormState = ({ inputCurrencyId, outputCurrencyId, defaultChainId, filteredChainIdsOverride, }) => {
    var _a, _b;
    return {
        exactCurrencyField: CurrencyField.INPUT,
        exactAmountToken: '',
        [CurrencyField.INPUT]: inputCurrencyId ? {
            address: currencyIdToAddress(inputCurrencyId),
            chainId: (_a = currencyIdToChain(inputCurrencyId)) !== null && _a !== void 0 ? _a : defaultChainId,
            type: AssetType.Currency,
        } : null,
        [CurrencyField.OUTPUT]: outputCurrencyId ? {
            address: currencyIdToAddress(outputCurrencyId),
            chainId: (_b = currencyIdToChain(outputCurrencyId)) !== null && _b !== void 0 ? _b : defaultChainId,
            type: AssetType.Currency,
        } : null,
        filteredChainIdsOverride,
    };
};
//# sourceMappingURL=transactionState.js.map