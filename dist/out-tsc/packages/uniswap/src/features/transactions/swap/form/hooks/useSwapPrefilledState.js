import { useMemo } from 'react';
import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { AssetType } from 'uniswap/src/entities/assets';
import { DEFAULT_PROTOCOL_OPTIONS } from 'uniswap/src/features/transactions/swap/utils/protocols';
import { CurrencyField } from 'uniswap/src/types/currency';
import { areAddressesEqual } from 'uniswap/src/utils/addresses';
export function useSwapPrefilledState(initialState) {
    const swapPrefilledState = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        if (!initialState) {
            return undefined;
        }
        const inputChainFilterOverride = (_b = (_a = initialState === null || initialState === void 0 ? void 0 : initialState.filteredChainIdsOverride) === null || _a === void 0 ? void 0 : _a.input) !== null && _b !== void 0 ? _b : ((initialState === null || initialState === void 0 ? void 0 : initialState.selectingCurrencyField) === CurrencyField.INPUT
            ? initialState === null || initialState === void 0 ? void 0 : initialState.selectingCurrencyChainId
            : undefined);
        const outputChainFilterOverride = (_d = (_c = initialState === null || initialState === void 0 ? void 0 : initialState.filteredChainIdsOverride) === null || _c === void 0 ? void 0 : _c.output) !== null && _d !== void 0 ? _d : ((initialState === null || initialState === void 0 ? void 0 : initialState.selectingCurrencyField) === CurrencyField.OUTPUT
            ? initialState === null || initialState === void 0 ? void 0 : initialState.selectingCurrencyChainId
            : undefined);
        return {
            exactAmountFiat: initialState.exactAmountFiat,
            exactAmountToken: initialState.exactAmountToken,
            exactCurrencyField: initialState.exactCurrencyField,
            filteredChainIds: {
                [CurrencyField.INPUT]: inputChainFilterOverride,
                [CurrencyField.OUTPUT]: outputChainFilterOverride,
            },
            focusOnCurrencyField: getFocusOnCurrencyFieldFromInitialState(initialState),
            input: (_e = initialState.input) !== null && _e !== void 0 ? _e : undefined,
            output: (_f = initialState.output) !== null && _f !== void 0 ? _f : undefined,
            selectingCurrencyField: initialState.selectingCurrencyField,
            txId: initialState.txId,
            isFiatMode: false,
            isSubmitting: false,
            isMax: false,
            showPendingUI: false,
        };
    }, [initialState]);
    return swapPrefilledState;
}
export function getFocusOnCurrencyFieldFromInitialState({ focusOnCurrencyField, skipFocusOnCurrencyField, input, output, exactCurrencyField, }) {
    if (skipFocusOnCurrencyField) {
        return undefined;
    }
    if (focusOnCurrencyField) {
        return focusOnCurrencyField;
    }
    if (input && exactCurrencyField === CurrencyField.INPUT) {
        return CurrencyField.INPUT;
    }
    if (output && exactCurrencyField === CurrencyField.OUTPUT) {
        return CurrencyField.OUTPUT;
    }
    return undefined;
}
export function getSwapPrefilledState({ currencyAddress, currencyChainId, currencyField, }) {
    const nativeTokenAddress = getNativeAddress(currencyChainId);
    const nativeToken = {
        address: nativeTokenAddress,
        chainId: currencyChainId,
        type: AssetType.Currency,
    };
    const chosenToken = {
        address: currencyAddress,
        chainId: currencyChainId,
        type: AssetType.Currency,
    };
    const opposedToken = areAddressesEqual(nativeTokenAddress, currencyAddress) ? null : nativeToken;
    const swapFormState = {
        exactCurrencyField: currencyField,
        exactAmountToken: '',
        [CurrencyField.INPUT]: currencyField === CurrencyField.INPUT ? chosenToken : opposedToken,
        [CurrencyField.OUTPUT]: currencyField === CurrencyField.OUTPUT ? chosenToken : opposedToken,
        selectedProtocols: DEFAULT_PROTOCOL_OPTIONS,
    };
    return swapFormState;
}
//# sourceMappingURL=useSwapPrefilledState.js.map