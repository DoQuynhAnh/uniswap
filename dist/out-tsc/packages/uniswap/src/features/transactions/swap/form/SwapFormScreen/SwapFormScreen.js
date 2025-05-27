import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, isWeb } from 'ui/src';
import { CurrencyInputPanel } from 'uniswap/src/components/CurrencyInputPanel/CurrencyInputPanel';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { SectionName } from 'uniswap/src/features/telemetry/constants';
import { TransactionModalInnerContainer } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModal';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { SwapFormDecimalPad } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormDecimalPad';
import { SwapFormScreenDetails } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormScreenDetails';
import { SwitchCurrenciesButton } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwitchCurrenciesButton';
import { WalletRestoreButton } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/WalletRestoreButton';
import { YouReceiveDetails } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/YouReceiveDetails';
import { SwapTokenSelector } from 'uniswap/src/features/transactions/swap/form/body/SwapTokenSelector/SwapTokenSelector';
import { useSwapFormScreenState } from 'uniswap/src/features/transactions/swap/form/context/SwapFormScreenContext';
import { SwapFormScreenContextProvider } from 'uniswap/src/features/transactions/swap/form/context/SwapFormScreenContextProvider';
import { SwapFormHeader } from 'uniswap/src/features/transactions/swap/form/header/SwapFormHeader/SwapFormHeader';
import { SwapFormSettings } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/SwapFormSettings';
import { TradeRoutingPreference } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/TradeRoutingPreference/TradeRoutingPreference';
import { Slippage } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippage/Slippage/Slippage';
import { usePriceDifference } from 'uniswap/src/features/transactions/swap/hooks/usePriceDifference';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { BridgeTrade } from 'uniswap/src/features/transactions/swap/types/trade';
import { CurrencyField } from 'uniswap/src/types/currency';
import { isExtension, isInterface } from 'utilities/src/platform';
/**
 * IMPORTANT: In the Extension, this component remains mounted when the user moves to the `SwapReview` screen.
 *            Make sure you take this into consideration when adding/modifying any hooks that run on this component.
 */
export function SwapFormScreen({ hideContent, settings = [Slippage, TradeRoutingPreference], tokenColor, focusHook, }) {
    const { bottomSheetViewStyles } = useTransactionModalContext();
    const { selectingCurrencyField, hideSettings, derivedSwapInfo } = useSwapFormContext();
    const showTokenSelector = !hideContent && !!selectingCurrencyField;
    const isBridgeTrade = derivedSwapInfo.trade.trade instanceof BridgeTrade;
    return (_jsxs(TransactionModalInnerContainer, { fullscreen: true, bottomSheetViewStyles: bottomSheetViewStyles, children: [!isInterface && _jsx(SwapFormHeader, {}) /* Interface renders its own header with multiple tabs */, !hideSettings && _jsx(SwapFormSettings, { settings: settings, isBridgeTrade: isBridgeTrade }), !hideContent && (_jsx(SwapFormScreenContextProvider, { tokenColor: tokenColor, children: _jsx(SwapFormContent, {}) })), _jsx(SwapTokenSelector, { isModalOpen: showTokenSelector, focusHook: focusHook })] }));
}
function SwapFormContent() {
    const { t } = useTranslation();
    const priceUXEnabled = usePriceUXEnabled();
    const { derivedSwapInfo } = useSwapFormContext();
    const { priceDifferencePercentage } = usePriceDifference(derivedSwapInfo);
    const { 
    // References
    inputRef, outputRef, decimalPadRef, inputSelectionRef, outputSelectionRef, decimalPadValueRef, 
    // State values
    focusOnCurrencyField, currencies, currencyAmounts, currencyBalances, selectingCurrencyField, isFiatMode, exactFieldIsInput, exactFieldIsOutput, exactOutputDisabled, isSwapDataLoading, resetSelection, currencyAmountsUSDValue, exactValue, formattedDerivedValue, tokenColor, walletNeedsRestore, isBridge, 
    // Trade-related values
    trade, 
    // Event handlers
    onFocusInput, onInputSelectionChange, onSetExactAmountInput, onSetPresetValue, onShowTokenSelectorInput, onToggleIsFiatMode, onSwitchCurrencies, onFocusOutput, onOutputSelectionChange, onSetExactAmountOutput, onShowTokenSelectorOutput, showTemporaryFoTWarning, onDecimalPadTriggerInputShake, 
    // Styles
    hoverStyles, } = useSwapFormScreenState();
    return (_jsxs(Flex, { grow: true, gap: "$spacing8", justifyContent: "space-between", children: [_jsxs(Flex, { gap: "$spacing4", animation: "quick", exitStyle: { opacity: 0 }, grow: isExtension, children: [_jsxs(Flex, { gap: "$spacing2", children: [_jsx(Trace, { section: SectionName.CurrencyInputPanel, children: _jsx(Flex, { animation: "simple", borderColor: focusOnCurrencyField === CurrencyField.INPUT ? '$surface3' : '$transparent', borderRadius: "$rounded20", backgroundColor: focusOnCurrencyField === CurrencyField.INPUT ? '$surface1' : '$surface2', borderWidth: "$spacing1", overflow: "hidden", pb: currencies[CurrencyField.INPUT] ? '$spacing4' : '$none', hoverStyle: hoverStyles.input, children: _jsx(CurrencyInputPanel, { ref: inputRef, headerLabel: isInterface ? t('common.button.sell') : undefined, currencyAmount: currencyAmounts[CurrencyField.INPUT], currencyBalance: currencyBalances[CurrencyField.INPUT], currencyField: CurrencyField.INPUT, currencyInfo: currencies[CurrencyField.INPUT], 
                                        // We do not want to force-focus the input when the token selector is open.
                                        focus: selectingCurrencyField ? undefined : focusOnCurrencyField === CurrencyField.INPUT, isFiatMode: isFiatMode && exactFieldIsInput, isIndicativeLoading: trade.isIndicativeLoading, isLoading: !exactFieldIsInput && isSwapDataLoading, priceDifferencePercentage: priceDifferencePercentage, resetSelection: resetSelection, showSoftInputOnFocus: false, usdValue: currencyAmountsUSDValue[CurrencyField.INPUT], value: exactFieldIsInput ? exactValue : formattedDerivedValue, valueIsIndicative: !exactFieldIsInput && trade.indicativeTrade && !trade.trade, tokenColor: tokenColor, onPressIn: onFocusInput, onSelectionChange: onInputSelectionChange, onSetExactAmount: onSetExactAmountInput, onSetPresetValue: onSetPresetValue, onShowTokenSelector: onShowTokenSelectorInput, onToggleIsFiatMode: onToggleIsFiatMode }) }) }), _jsx(SwitchCurrenciesButton, { onSwitchCurrencies: onSwitchCurrencies }), _jsx(Trace, { section: SectionName.CurrencyOutputPanel, children: _jsxs(Flex, { borderRadius: "$rounded20", borderWidth: "$spacing1", borderColor: focusOnCurrencyField === CurrencyField.OUTPUT ? '$surface3' : '$transparent', backgroundColor: focusOnCurrencyField === CurrencyField.OUTPUT ? '$surface1' : '$surface2', hoverStyle: hoverStyles.output, children: [_jsx(CurrencyInputPanel, { ref: outputRef, headerLabel: isInterface ? t('common.button.buy') : undefined, currencyAmount: currencyAmounts[CurrencyField.OUTPUT], currencyBalance: currencyBalances[CurrencyField.OUTPUT], currencyField: CurrencyField.OUTPUT, currencyInfo: currencies[CurrencyField.OUTPUT], disabled: exactOutputDisabled, 
                                            // We do not want to force-focus the input when the token selector is open.
                                            focus: selectingCurrencyField ? undefined : focusOnCurrencyField === CurrencyField.OUTPUT, isFiatMode: isFiatMode && exactFieldIsOutput, isLoading: !exactFieldIsOutput && isSwapDataLoading, priceDifferencePercentage: priceDifferencePercentage, resetSelection: resetSelection, showSoftInputOnFocus: false, usdValue: currencyAmountsUSDValue[CurrencyField.OUTPUT], value: exactFieldIsOutput ? exactValue : formattedDerivedValue, valueIsIndicative: !exactFieldIsOutput && trade.indicativeTrade && !trade.trade, tokenColor: tokenColor, onPressDisabled: isBridge ? undefined : showTemporaryFoTWarning, onPressIn: onFocusOutput, onSelectionChange: onOutputSelectionChange, onSetExactAmount: onSetExactAmountOutput, onSetPresetValue: onSetPresetValue, onShowTokenSelector: onShowTokenSelectorOutput, onToggleIsFiatMode: onToggleIsFiatMode }), walletNeedsRestore && _jsx(WalletRestoreButton, {})] }) })] }), _jsxs(Flex, { children: [priceUXEnabled && isWeb && (_jsx(YouReceiveDetails, { isIndicative: Boolean(trade.indicativeTrade && !trade.trade), isLoadingIndicative: trade.isIndicativeLoading, isLoading: isSwapDataLoading, isBridge: isBridge })), _jsx(SwapFormScreenDetails, {})] })] }), !isWeb && (_jsx(SwapFormDecimalPad, { decimalPadRef: decimalPadRef, resetSelection: resetSelection, inputSelectionRef: inputSelectionRef, outputSelectionRef: outputSelectionRef, decimalPadValueRef: decimalPadValueRef, onDecimalPadTriggerInputShake: onDecimalPadTriggerInputShake, onSetPresetValue: onSetPresetValue }))] }));
}
//# sourceMappingURL=SwapFormScreen.js.map