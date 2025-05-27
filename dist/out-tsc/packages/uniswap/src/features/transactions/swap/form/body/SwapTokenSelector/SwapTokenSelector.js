import { jsx as _jsx } from "react/jsx-runtime";
import { TokenSelectorModal, TokenSelectorVariation } from 'uniswap/src/components/TokenSelector/TokenSelector';
import { TokenSelectorFlow } from 'uniswap/src/components/TokenSelector/types';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useChainId } from 'uniswap/src/features/transactions/swap/form/body/SwapTokenSelector/hooks/useChainId';
import { useHideTokenSelector } from 'uniswap/src/features/transactions/swap/form/body/SwapTokenSelector/hooks/useHideTokenSelector';
import { useOnSelectCurrency } from 'uniswap/src/features/transactions/swap/form/hooks/useOnSelectCurrency';
import { CurrencyField } from 'uniswap/src/types/currency';
export function SwapTokenSelector({ isModalOpen, focusHook, }) {
    var _a;
    const { selectingCurrencyField, input, output } = useSwapFormContext();
    const activeAccountAddress = (_a = useAccountMeta()) === null || _a === void 0 ? void 0 : _a.address;
    const chainId = useChainId();
    const handleHideTokenSelector = useHideTokenSelector();
    const onSelectCurrency = useOnSelectCurrency({ onSelect: handleHideTokenSelector });
    if (!isModalOpen) {
        // `TokenSelectorModal` already returns `null` when `isModalOpen` is `false
        // We're adding this extra check, here, to satisfy typescript
        return null;
    }
    if (!selectingCurrencyField) {
        throw new Error('TokenSelector rendered without `selectingCurrencyField`');
    }
    return (_jsx(TokenSelectorModal, { isModalOpen: isModalOpen, activeAccountAddress: activeAccountAddress, chainId: chainId, input: input, output: output, currencyField: selectingCurrencyField, flow: TokenSelectorFlow.Swap, variation: selectingCurrencyField === CurrencyField.INPUT
            ? TokenSelectorVariation.SwapInput
            : TokenSelectorVariation.SwapOutput, focusHook: focusHook, onClose: handleHideTokenSelector, onSelectCurrency: onSelectCurrency }));
}
//# sourceMappingURL=SwapTokenSelector.js.map