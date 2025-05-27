import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { AssetType } from 'uniswap/src/entities/assets';
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains';
import { useMaxAmountSpend } from 'uniswap/src/features/gas/useMaxAmountSpend';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { useSwapAnalytics } from 'uniswap/src/features/transactions/swap/analytics';
import { useDerivedSwapInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useDerivedSwapInfo';
import { selectFilteredChainIds } from 'uniswap/src/features/transactions/swap/contexts/selectors';
import { updateFilteredChainIds } from 'uniswap/src/features/transactions/swap/contexts/slice';
import { TransactionType } from 'uniswap/src/features/transactions/types/transactionDetails';
import { CurrencyField } from 'uniswap/src/types/currency';
import { currencyId } from 'uniswap/src/utils/currencyId';
import { logContextUpdate } from 'utilities/src/logger/contextEnhancer';
import { usePrevious } from 'utilities/src/react/hooks';
import { useValueAsRef } from 'utilities/src/react/useValueAsRef';
import { useDebounceWithStatus } from 'utilities/src/time/timing';
const SWAP_FORM_DEBOUNCE_TIME_MS = 250;
function getDefaultInputCurrency(chainId) {
    return {
        address: getNativeAddress(chainId),
        chainId,
        type: AssetType.Currency,
    };
}
export const getDefaultState = (defaultChainId) => ({
    exactAmountFiat: undefined,
    exactAmountToken: '',
    exactCurrencyField: CurrencyField.INPUT,
    focusOnCurrencyField: CurrencyField.INPUT,
    filteredChainIds: {},
    input: getDefaultInputCurrency(defaultChainId),
    output: undefined,
    isFiatMode: false,
    isMax: false,
    isSubmitting: false,
    showPendingUI: false,
});
export const SwapFormContext = createContext(undefined);
export function SwapFormContextProvider({ children, hideFooter, hideSettings, prefilledState, }) {
    var _a, _b, _c;
    const amountUpdatedTimeRef = useRef(0);
    const exactAmountFiatRef = useRef('');
    const exactAmountTokenRef = useRef('');
    const { defaultChainId } = useEnabledChains();
    const dispatch = useDispatch();
    const persistedFilteredChainIds = useSelector(selectFilteredChainIds);
    const defaultState = useMemo(() => getDefaultState(defaultChainId), [defaultChainId]);
    const [swapForm, setSwapForm] = useState(prefilledState !== null && prefilledState !== void 0 ? prefilledState : defaultState);
    const datadogEnabled = useFeatureFlag(FeatureFlags.Datadog);
    // prefilled state may load in -- i.e. `outputCurrency` URL param pulling from gql
    const previousInitialInputCurrency = usePrevious(prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.input);
    const previousInitialOutputCurrency = usePrevious(prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.output);
    useEffect(() => {
        const previousInputCurrencyId = previousInitialInputCurrency && currencyId(previousInitialInputCurrency);
        const previousOutputCurrencyId = previousInitialOutputCurrency && currencyId(previousInitialOutputCurrency);
        if (previousInputCurrencyId !== ((prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.input) && currencyId(prefilledState.input)) ||
            previousOutputCurrencyId !== ((prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.output) && currencyId(prefilledState.output))) {
            setSwapForm(prefilledState !== null && prefilledState !== void 0 ? prefilledState : defaultState);
        }
    }, [prefilledState, previousInitialInputCurrency, previousInitialOutputCurrency, defaultState]);
    // Enable launching the output token selector through a change to the prefilled state
    useEffect(() => {
        // Only rerender the swap form value when true, not when false/undefined
        if (prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.selectingCurrencyField) {
            setSwapForm((oldVal) => {
                return {
                    ...oldVal,
                    selectingCurrencyField: prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.selectingCurrencyField,
                    filteredChainIds: prefilledState.filteredChainIds,
                    isSelectingCurrencyFieldPrefilled: true,
                };
            });
        }
    }, [prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.selectingCurrencyField, prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.filteredChainIds]);
    const previousExactCurrencyField = usePrevious(swapForm.exactCurrencyField);
    // If the exact currency field is changed, the amount may have changed as well
    // so we'll skip debouncing in this case
    const hasExactCurrencyFieldChanged = previousExactCurrencyField !== swapForm.exactCurrencyField;
    const [debouncedExactAmountToken, isDebouncingExactAmountToken] = useDebounceWithStatus({
        value: swapForm.exactAmountToken,
        delay: SWAP_FORM_DEBOUNCE_TIME_MS,
        skipDebounce: hasExactCurrencyFieldChanged,
    });
    const [debouncedExactAmountFiat, isDebouncingExactAmountFiat] = useDebounceWithStatus({
        value: swapForm.exactAmountFiat,
        delay: SWAP_FORM_DEBOUNCE_TIME_MS,
        skipDebounce: hasExactCurrencyFieldChanged,
    });
    const derivedSwapInfo = useDerivedSwapInfo({
        txId: swapForm.txId,
        [CurrencyField.INPUT]: (_a = swapForm.input) !== null && _a !== void 0 ? _a : null,
        [CurrencyField.OUTPUT]: (_b = swapForm.output) !== null && _b !== void 0 ? _b : null,
        exactCurrencyField: swapForm.exactCurrencyField,
        exactAmountToken: debouncedExactAmountToken !== null && debouncedExactAmountToken !== void 0 ? debouncedExactAmountToken : '',
        exactAmountFiat: debouncedExactAmountFiat,
        focusOnCurrencyField: swapForm.focusOnCurrencyField,
        selectingCurrencyField: swapForm.selectingCurrencyField,
        isDebouncing: isDebouncingExactAmountToken || isDebouncingExactAmountFiat,
    });
    const inputAmount = derivedSwapInfo.currencyAmounts[CurrencyField.INPUT];
    const inputBalanceAmount = derivedSwapInfo.currencyBalances[CurrencyField.INPUT];
    useSwapAnalytics(derivedSwapInfo);
    // for native transfers, this is the balance - (estimated gas fee for one transaction * multiplier from flag);
    // for ERC20 transfers, this is the balance
    const maxInputAmountAsRef = useValueAsRef((_c = useMaxAmountSpend({
        currencyAmount: inputBalanceAmount,
        txType: TransactionType.Swap,
        isExtraTx: true,
    })) === null || _c === void 0 ? void 0 : _c.toExact());
    // update `isMax` when inputAmount changes indirectly (eg output amount is set)
    useEffect(() => {
        // exact-input-field forms are handled in `updateSwapForm()`
        const inputAmountString = inputAmount === null || inputAmount === void 0 ? void 0 : inputAmount.toExact();
        const maxInputAmountThresholdString = maxInputAmountAsRef.current;
        if (derivedSwapInfo.exactCurrencyField === CurrencyField.OUTPUT &&
            inputAmountString &&
            maxInputAmountThresholdString) {
            const isMaxThreshold = !!(parseFloat(inputAmountString) >= parseFloat(maxInputAmountThresholdString));
            // do not rerender if isMax is unchanged
            setSwapForm((prevState) => prevState.isMax === isMaxThreshold
                ? prevState
                : {
                    ...prevState,
                    isMax: isMaxThreshold,
                });
        }
        // `maxInputAmountAsRef` is a ref so it does not trigger a rerender on change
    }, [inputAmount, derivedSwapInfo.exactCurrencyField, maxInputAmountAsRef]);
    const updateSwapForm = useCallback((newState) => {
        var _a, _b, _c, _d;
        let isAmountUpdated = false;
        if ('exactAmountFiat' in newState || 'exactAmountToken' in newState) {
            amountUpdatedTimeRef.current = Date.now();
            isAmountUpdated = true;
        }
        if ('exactAmountFiat' in newState) {
            exactAmountFiatRef.current = (_a = newState.exactAmountFiat) !== null && _a !== void 0 ? _a : '';
        }
        if ('exactAmountToken' in newState) {
            exactAmountTokenRef.current = (_b = newState.exactAmountToken) !== null && _b !== void 0 ? _b : '';
        }
        // Update chainFilter redux state if swap form update includes a change to filteredChainIds
        if ('filteredChainIds' in newState) {
            dispatch(updateFilteredChainIds({ filteredChainIds: (_d = (_c = newState.filteredChainIds) !== null && _c !== void 0 ? _c : persistedFilteredChainIds) !== null && _d !== void 0 ? _d : {} }));
        }
        setSwapForm((prevState) => {
            var _a;
            const updatedState = { ...prevState, ...newState };
            if (isAmountUpdated || newState.exactCurrencyField !== CurrencyField.OUTPUT) {
                const isMaxTokenAmount = maxInputAmountAsRef.current &&
                    updatedState.exactAmountToken &&
                    parseFloat(maxInputAmountAsRef.current) <= parseFloat(updatedState.exactAmountToken);
                // if max value is explicitly set, use that
                // otherwise, check the token amount again the maxInputAmount
                updatedState.isMax = (_a = newState.isMax) !== null && _a !== void 0 ? _a : !!isMaxTokenAmount;
            }
            logContextUpdate('SwapFormContext', updatedState, datadogEnabled);
            return updatedState;
        });
    }, 
    // avoid rerenders unless absolutely necessary since this component is widely used
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setSwapForm, datadogEnabled]);
    const state = useMemo(() => ({
        amountUpdatedTimeRef,
        derivedSwapInfo,
        exactAmountFiat: swapForm.exactAmountFiat,
        exactAmountFiatRef,
        exactAmountToken: swapForm.exactAmountToken,
        exactAmountTokenRef,
        exactCurrencyField: swapForm.exactCurrencyField,
        focusOnCurrencyField: swapForm.focusOnCurrencyField,
        filteredChainIds: swapForm.filteredChainIds,
        input: swapForm.input,
        isFiatMode: swapForm.isFiatMode,
        isMax: swapForm.isMax,
        presetPercentage: swapForm.presetPercentage,
        preselectAsset: swapForm.preselectAsset,
        isSubmitting: swapForm.isSubmitting,
        output: swapForm.output,
        selectingCurrencyField: swapForm.selectingCurrencyField,
        txId: swapForm.txId,
        showPendingUI: swapForm.showPendingUI,
        hideFooter,
        hideSettings,
        updateSwapForm,
        prefilledCurrencies: [prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.input, prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.output].filter((asset) => Boolean(asset)),
        isSelectingCurrencyFieldPrefilled: swapForm.isSelectingCurrencyFieldPrefilled,
    }), [
        derivedSwapInfo,
        swapForm.exactAmountFiat,
        swapForm.exactAmountToken,
        swapForm.exactCurrencyField,
        swapForm.focusOnCurrencyField,
        swapForm.filteredChainIds,
        swapForm.input,
        swapForm.isFiatMode,
        swapForm.isMax,
        swapForm.presetPercentage,
        swapForm.preselectAsset,
        swapForm.isSubmitting,
        swapForm.showPendingUI,
        swapForm.output,
        swapForm.selectingCurrencyField,
        swapForm.txId,
        swapForm.isSelectingCurrencyFieldPrefilled,
        hideFooter,
        hideSettings,
        updateSwapForm,
        prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.input,
        prefilledState === null || prefilledState === void 0 ? void 0 : prefilledState.output,
    ]);
    return _jsx(SwapFormContext.Provider, { value: state, children: children });
}
// TODO: WEB-7258 Remove this after Swap Form Settings component refactor
export const useOptionalSwapFormContext = () => {
    return useContext(SwapFormContext);
};
export const useSwapFormContext = () => {
    const swapContext = useContext(SwapFormContext);
    if (swapContext === undefined) {
        throw new Error('`useSwapFormContext` must be used inside of `SwapFormContextProvider`');
    }
    return swapContext;
};
//# sourceMappingURL=SwapFormContext.js.map