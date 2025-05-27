import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { Flex } from 'ui/src';
import { AmountInputPresets } from 'uniswap/src/components/CurrencyInputPanel/AmountInputPresets';
import { MAX_FIAT_INPUT_DECIMALS } from 'uniswap/src/constants/transactions';
import { Layers, SwapPresetsProperties } from 'uniswap/src/features/gating/experiments';
import { useExperimentValueFromLayer } from 'uniswap/src/features/gating/hooks';
import { DecimalPadCalculateSpace, DecimalPadCalculatedSpaceId, DecimalPadInput, } from 'uniswap/src/features/transactions/components/DecimalPadInput/DecimalPadInput';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useDecimalPadControlledField } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/hooks/useDecimalPadControlledField';
import { maybeLogFirstSwapAction } from 'uniswap/src/features/transactions/swap/utils/maybeLogFirstSwapAction';
import { CurrencyField } from 'uniswap/src/types/currency';
import { truncateToMaxDecimals } from 'utilities/src/format/truncateToMaxDecimals';
import { useEvent } from 'utilities/src/react/hooks';
import { useBooleanState } from 'utilities/src/react/useBooleanState';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
const SHORT_BREAKPOINT_STYLE = { gap: '$none' };
const AMOUNT_INPUT_PRESET_BUTTON_PROPS = {
    emphasis: 'tertiary',
    size: 'xsmall',
    // set to height of the button for full rounding
    borderRadius: 16,
    fill: true,
};
export function SwapFormDecimalPad({ decimalPadRef, onSetPresetValue, resetSelection, inputSelectionRef, outputSelectionRef, decimalPadValueRef, onDecimalPadTriggerInputShake, }) {
    var _a, _b;
    const areInputPresetsEnabled = useExperimentValueFromLayer(Layers.SwapPage, SwapPresetsProperties.InputEnabled, false);
    const { isFiatMode, exactCurrencyField, derivedSwapInfo: { currencyAmounts, currencyBalances, currencies }, updateSwapForm, } = useSwapFormContext();
    const { value: isDecimalPadReady, setTrue: setDecimalPadIsReady } = useBooleanState(false);
    const decimalPadControlledField = useDecimalPadControlledField();
    const trace = useTrace();
    const setValue = useEvent((value) => {
        var _a, _b;
        const currentIsFiatMode = isFiatMode && decimalPadControlledField === exactCurrencyField;
        const currentMaxDecimals = currentIsFiatMode
            ? MAX_FIAT_INPUT_DECIMALS
            : (_b = (_a = currencies[decimalPadControlledField]) === null || _a === void 0 ? void 0 : _a.currency.decimals) !== null && _b !== void 0 ? _b : 0;
        // We disable the `DecimalPad` when the input reaches the max number of decimals,
        // but we still need to truncate in case the user moves the cursor and adds a decimal separator in the middle of the input.
        const truncatedValue = truncateToMaxDecimals({
            value,
            maxDecimals: currentMaxDecimals,
        });
        updateSwapForm({
            exactAmountFiat: currentIsFiatMode ? truncatedValue : undefined,
            exactAmountToken: !currentIsFiatMode ? truncatedValue : undefined,
            exactCurrencyField: decimalPadControlledField,
            focusOnCurrencyField: decimalPadControlledField,
            isFiatMode: currentIsFiatMode,
            presetPercentage: undefined,
        });
        maybeLogFirstSwapAction(trace);
    });
    const selection = useMemo(() => ({
        [CurrencyField.INPUT]: inputSelectionRef,
        [CurrencyField.OUTPUT]: outputSelectionRef,
    }), [inputSelectionRef, outputSelectionRef]);
    const maxDecimals = isFiatMode
        ? MAX_FIAT_INPUT_DECIMALS
        : (_b = (_a = currencies[decimalPadControlledField]) === null || _a === void 0 ? void 0 : _a.currency.decimals) !== null && _b !== void 0 ? _b : 0;
    const [additionalElementsHeight, setAdditionalElementsHeight] = useState(null);
    const onAmountInputPresetsLayout = useEvent((event) => {
        setAdditionalElementsHeight(event.nativeEvent.layout.height);
    });
    return (_jsxs(_Fragment, { children: [_jsx(DecimalPadCalculateSpace, { id: DecimalPadCalculatedSpaceId.Swap, decimalPadRef: decimalPadRef, additionalElementsHeight: additionalElementsHeight }), _jsx(Flex, { "$short": SHORT_BREAKPOINT_STYLE, animation: "quick", bottom: 0, gap: "$spacing8", left: 0, opacity: isDecimalPadReady ? 1 : 0, position: "absolute", right: 0, children: _jsxs(Flex, { grow: true, justifyContent: "flex-end", children: [areInputPresetsEnabled && currencyBalances[CurrencyField.INPUT] && (_jsx(AmountInputPresets, { flex: 1, gap: "$gap8", pb: "$padding16", currencyAmount: currencyAmounts[CurrencyField.INPUT], currencyBalance: currencyBalances[CurrencyField.INPUT], buttonProps: AMOUNT_INPUT_PRESET_BUTTON_PROPS, onSetPresetValue: onSetPresetValue, onLayout: onAmountInputPresetsLayout })), _jsx(DecimalPadInput, { ref: decimalPadRef, maxDecimals: maxDecimals, resetSelection: resetSelection, selectionRef: selection[decimalPadControlledField], setValue: setValue, valueRef: decimalPadValueRef, onReady: setDecimalPadIsReady, onTriggerInputShakeAnimation: onDecimalPadTriggerInputShake })] }) })] }));
}
//# sourceMappingURL=SwapFormDecimalPad.js.map