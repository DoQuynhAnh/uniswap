import { isWeb } from 'ui/src';
import { PRESET_MAX } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useDecimalPadControlledField } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/hooks/useDecimalPadControlledField';
import { useOnToggleIsFiatMode } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/hooks/useOnToggleIsFiatMode';
import { maybeLogFirstSwapAction } from 'uniswap/src/features/transactions/swap/utils/maybeLogFirstSwapAction';
import { CurrencyField } from 'uniswap/src/types/currency';
import { useEvent } from 'utilities/src/react/hooks';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
const ON_SELECTION_CHANGE_WAIT_TIME_MS = 500;
export function useSwapFormScreenCallbacks({ exactOutputWouldFailIfCurrenciesSwitched, exactFieldIsInput, isBridge, formattedDerivedValueRef, inputRef, outputRef, decimalPadRef, inputSelectionRef, outputSelectionRef, }) {
    const trace = useTrace();
    const { amountUpdatedTimeRef, exactAmountTokenRef, exactCurrencyField, focusOnCurrencyField, input, isFiatMode, output, updateSwapForm, } = useSwapFormContext();
    const decimalPadControlledField = useDecimalPadControlledField();
    const resetSelection = useEvent(({ start, end, currencyField }) => {
        var _a, _b;
        // Update refs first to have the latest selection state available in the DecimalPadInput
        // component and properly update disabled keys of the decimal pad.
        // We reset the native selection on the next tick because we need to wait for the native input to be updated.
        // This is needed because of the combination of state (delayed update) + ref (instant update) to improve performance.
        const _currencyField = currencyField !== null && currencyField !== void 0 ? currencyField : decimalPadControlledField;
        const selectionRef = _currencyField === CurrencyField.INPUT ? inputSelectionRef : outputSelectionRef;
        const inputFieldRef = _currencyField === CurrencyField.INPUT ? (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.textInputRef : (_b = outputRef.current) === null || _b === void 0 ? void 0 : _b.textInputRef;
        selectionRef.current = { start, end };
        if (!isWeb && inputFieldRef) {
            setTimeout(() => {
                var _a, _b;
                (_b = (_a = inputFieldRef.current) === null || _a === void 0 ? void 0 : _a.setNativeProps) === null || _b === void 0 ? void 0 : _b.call(_a, { selection: { start, end } });
            }, 0);
        }
    });
    const moveCursorToEnd = useEvent(({ targetInputRef }) => {
        resetSelection({
            start: targetInputRef.current.length,
            end: targetInputRef.current.length,
        });
    });
    const onDecimalPadTriggerInputShake = useEvent(() => {
        var _a, _b;
        switch (decimalPadControlledField) {
            case CurrencyField.INPUT:
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.triggerShakeAnimation();
                break;
            case CurrencyField.OUTPUT:
                (_b = outputRef.current) === null || _b === void 0 ? void 0 : _b.triggerShakeAnimation();
                break;
        }
    });
    const onInputSelectionChange = useEvent((start, end) => {
        var _a;
        if (Date.now() - amountUpdatedTimeRef.current < ON_SELECTION_CHANGE_WAIT_TIME_MS) {
            // We only want to trigger this callback when the user is manually moving the cursor,
            // but this function is also triggered when the input value is updated, which causes issues on Android.
            // We use `amountUpdatedTimeRef` to check if the input value was updated recently, and if so, we assume that the user is actually typing and not manually moving the cursor.
            return;
        }
        inputSelectionRef.current = { start, end };
        (_a = decimalPadRef.current) === null || _a === void 0 ? void 0 : _a.updateDisabledKeys();
    });
    const onOutputSelectionChange = useEvent((start, end) => {
        var _a;
        if (Date.now() - amountUpdatedTimeRef.current < ON_SELECTION_CHANGE_WAIT_TIME_MS) {
            // See explanation in `onInputSelectionChange`.
            return;
        }
        outputSelectionRef.current = { start, end };
        (_a = decimalPadRef.current) === null || _a === void 0 ? void 0 : _a.updateDisabledKeys();
    });
    const onFocusInput = useEvent(() => updateSwapForm({
        focusOnCurrencyField: CurrencyField.INPUT,
    }));
    const onFocusOutput = useEvent(() => updateSwapForm({
        focusOnCurrencyField: CurrencyField.OUTPUT,
    }));
    const onShowTokenSelectorInput = useEvent(() => {
        updateSwapForm({
            selectingCurrencyField: CurrencyField.INPUT,
        });
    });
    const onShowTokenSelectorOutput = useEvent(() => {
        updateSwapForm({
            selectingCurrencyField: CurrencyField.OUTPUT,
        });
    });
    const onSetExactAmount = useEvent((currencyField, amount) => {
        const currentIsFiatMode = isFiatMode && focusOnCurrencyField === exactCurrencyField;
        updateSwapForm({
            exactAmountFiat: currentIsFiatMode ? amount : undefined,
            exactAmountToken: currentIsFiatMode ? undefined : amount,
            exactCurrencyField: currencyField,
            isFiatMode: currentIsFiatMode,
            presetPercentage: undefined,
        });
        maybeLogFirstSwapAction(trace);
    });
    const onSetExactAmountInput = useEvent((amount) => {
        onSetExactAmount(CurrencyField.INPUT, amount);
    });
    const onSetExactAmountOutput = useEvent((amount) => {
        onSetExactAmount(CurrencyField.OUTPUT, amount);
    });
    const onSetPresetValue = useEvent((amount, percentage) => {
        updateSwapForm({
            exactAmountFiat: undefined,
            exactAmountToken: amount,
            exactCurrencyField: CurrencyField.INPUT,
            focusOnCurrencyField: undefined,
            isMax: percentage === PRESET_MAX,
            presetPercentage: percentage,
        });
        // We want this update to happen on the next tick, after the input value is updated.
        setTimeout(() => {
            var _a;
            moveCursorToEnd({ targetInputRef: exactAmountTokenRef });
            (_a = decimalPadRef.current) === null || _a === void 0 ? void 0 : _a.updateDisabledKeys();
        }, 0);
        maybeLogFirstSwapAction(trace);
    });
    // Reset selection based the new input value (token, or fiat), and toggle fiat mode
    const onToggleIsFiatMode = useOnToggleIsFiatMode({
        formattedDerivedValueRef,
        moveCursorToEnd,
    });
    const onSwitchCurrencies = useEvent(() => {
        // If exact output would fail if currencies switch, we never want to have OUTPUT as exact field / focused field
        const newExactCurrencyField = isBridge
            ? CurrencyField.INPUT
            : exactOutputWouldFailIfCurrenciesSwitched
                ? CurrencyField.INPUT
                : exactFieldIsInput
                    ? CurrencyField.OUTPUT
                    : CurrencyField.INPUT;
        // If for a bridge, when currencies are switched, update the new output to the old output chainId and change input to all networks
        const newFilteredChainIds = isBridge
            ? {
                input: undefined,
                output: output === null || output === void 0 ? void 0 : output.chainId,
            }
            : undefined;
        updateSwapForm({
            exactCurrencyField: newExactCurrencyField,
            focusOnCurrencyField: newExactCurrencyField,
            input: output,
            output: input,
            // Preserve the derived output amount if we force exact field to be input to keep USD value of the trade constant after switching
            ...(exactOutputWouldFailIfCurrenciesSwitched && exactFieldIsInput && !isFiatMode
                ? { exactAmountToken: formattedDerivedValueRef.current }
                : undefined),
            ...(isBridge ? { filteredChainIds: newFilteredChainIds } : undefined),
        });
        // When we have FOT disable exact output logic, the cursor gets out of sync when switching currencies
        setTimeout(() => {
            moveCursorToEnd({ targetInputRef: exactAmountTokenRef });
        }, 0);
        maybeLogFirstSwapAction(trace);
    });
    return {
        resetSelection,
        moveCursorToEnd,
        onDecimalPadTriggerInputShake,
        onInputSelectionChange,
        onOutputSelectionChange,
        onFocusInput,
        onFocusOutput,
        onShowTokenSelectorInput,
        onShowTokenSelectorOutput,
        onSetExactAmount,
        onSetExactAmountInput,
        onSetExactAmountOutput,
        onSetPresetValue,
        onToggleIsFiatMode,
        onSwitchCurrencies,
    };
}
//# sourceMappingURL=useSwapFormScreenCallbacks.js.map