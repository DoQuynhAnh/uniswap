import { jsx as _jsx } from "react/jsx-runtime";
import JSBI from 'jsbi';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'ui/src';
import { useMaxAmountSpend } from 'uniswap/src/features/gas/useMaxAmountSpend';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ElementName } from 'uniswap/src/features/telemetry/constants';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { MaxBalanceInfoModal } from 'uniswap/src/features/transactions/modals/MaxBalanceInfoModal';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { CurrencyField } from 'uniswap/src/types/currency';
export const PRESET_MAX = 100;
/**
 * Returns the currency amount for the specified percentage of the passed in raw value.
 * If the currency amount is less than the max amount the user has it returns 0.
 */
function getPercentageOfCurrencyAmount({ currency, rawBalanceAmount, percent, rawMaxAmount, }) {
    if (!rawBalanceAmount) {
        return undefined;
    }
    const rawPercentageValue = JSBI.divide(JSBI.multiply(rawBalanceAmount, JSBI.BigInt(percent)), JSBI.BigInt(100));
    const amount = JSBI.GT(rawPercentageValue, rawMaxAmount) ? '0' : rawPercentageValue.toString();
    return getCurrencyAmount({
        value: amount,
        valueType: ValueType.Raw,
        currency,
    });
}
export function PresetAmountButton({ currencyAmount, currencyBalance, percentage = 100, elementName, onSetPresetValue, currencyField, transactionType, buttonProps, }) {
    const isNativeAsset = !!(currencyBalance === null || currencyBalance === void 0 ? void 0 : currencyBalance.currency.isNative);
    const [isShowingMaxNativeBalanceModal, setIsShowingMaxNativeBalanceModal] = useState(false);
    const maxInputAmount = useMaxAmountSpend({
        currencyAmount: currencyBalance,
        txType: transactionType,
    });
    const presetValueAmount = useMemo(() => {
        if (percentage === 100) {
            return maxInputAmount;
        }
        return getPercentageOfCurrencyAmount({
            currency: currencyBalance === null || currencyBalance === void 0 ? void 0 : currencyBalance.currency,
            rawBalanceAmount: currencyBalance === null || currencyBalance === void 0 ? void 0 : currencyBalance.quotient,
            percent: percentage,
            rawMaxAmount: maxInputAmount === null || maxInputAmount === void 0 ? void 0 : maxInputAmount.quotient,
        });
    }, [currencyBalance === null || currencyBalance === void 0 ? void 0 : currencyBalance.currency, currencyBalance === null || currencyBalance === void 0 ? void 0 : currencyBalance.quotient, percentage, maxInputAmount]);
    // Disable max button if max already set or when balance is not sufficient
    const disablePresetButton = !presetValueAmount ||
        !presetValueAmount.greaterThan(0) ||
        (percentage === PRESET_MAX && (currencyAmount === null || currencyAmount === void 0 ? void 0 : currencyAmount.toExact()) === presetValueAmount.toExact());
    const presetValueAmountRef = useRef(presetValueAmount);
    presetValueAmountRef.current = presetValueAmount;
    const onPress = useCallback((event) => {
        event.stopPropagation();
        if (disablePresetButton) {
            if (isNativeAsset) {
                setIsShowingMaxNativeBalanceModal(true);
            }
            return;
        }
        if (presetValueAmountRef.current) {
            // We use `maxPresetAmountRef` instead of `maxPresetAmount` so that we can get the latest value
            // and avoid this callback function having to depend on `maxPresetAmount` because that would mean
            // it would recreate this function on every render (which would cause the button to re-render and ignore the `memo`).
            onSetPresetValue(presetValueAmountRef.current.toExact(), percentage);
        }
    }, [disablePresetButton, onSetPresetValue, isNativeAsset, percentage]);
    // We split this out into 2 components so it can be efficiently memoized.
    return (_jsx(PresetButtonContent, { percentage: percentage, isShowingMaxNativeBalanceModal: isShowingMaxNativeBalanceModal, disabled: disablePresetButton, currencyField: currencyField, elementName: elementName, isNativeAsset: isNativeAsset, currencySymbol: currencyBalance === null || currencyBalance === void 0 ? void 0 : currencyBalance.currency.symbol, setIsShowingMaxNativeBalanceModal: setIsShowingMaxNativeBalanceModal, ...buttonProps, onPress: onPress }));
}
const PresetButtonContent = memo(function _PresetButtonContent({ percentage, disabled, onPress, currencyField, isShowingMaxNativeBalanceModal, isNativeAsset, currencySymbol, elementName, setIsShowingMaxNativeBalanceModal, size = 'xxsmall', variant = 'branded', emphasis = 'secondary', fill = false, ...rest }) {
    const { t } = useTranslation();
    const handleMaxBalanceInfoModalClose = useCallback(() => {
        setIsShowingMaxNativeBalanceModal(false);
    }, [setIsShowingMaxNativeBalanceModal]);
    const isMax = percentage === PRESET_MAX;
    return (_jsx(MaxBalanceInfoModal, { isMax: isMax, 
        // triggers on tap (mob)
        isModalOpen: isShowingMaxNativeBalanceModal, 
        // triggers on hover (ext/web)
        isTooltipEnabled: isNativeAsset && disabled, currencySymbol: currencySymbol, onClose: handleMaxBalanceInfoModalClose, children: _jsx(Trace, { logPress: true, element: elementName !== null && elementName !== void 0 ? elementName : (currencyField === CurrencyField.INPUT ? ElementName.SetPercentageInput : ElementName.SetPercentageOutput), properties: { percentage }, children: _jsx(Button, { fill: fill, variant: variant, emphasis: emphasis, size: size, isDisabled: disabled, testID: currencyField === CurrencyField.INPUT ? TestID.SetMaxInput : TestID.SetMaxOutput, borderColor: "$surface3", pressStyle: {
                    scale: 0.99,
                }, hoverStyle: {
                    scale: 1.02,
                }, onPress: onPress, ...rest, children: isMax ? t('swap.button.max') : `${percentage}%` }) }) }));
});
//# sourceMappingURL=PresetAmountButton.js.map