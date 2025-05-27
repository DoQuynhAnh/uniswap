import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SwapEventName } from '@uniswap/analytics-events';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, Flex } from 'ui/src';
import { NetworkFee } from 'uniswap/src/components/gas/NetworkFee';
import { TransactionFailureReason } from 'uniswap/src/data/tradingApi/__generated__';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { ExpectedFailureBanner } from 'uniswap/src/features/transactions/TransactionDetails/ExpectedFailureBanner';
import { FeeOnTransferFeeGroup } from 'uniswap/src/features/transactions/TransactionDetails/FeeOnTransferFee';
import { ListSeparatorToggle } from 'uniswap/src/features/transactions/TransactionDetails/ListSeparatorToggle';
import { SwapFee } from 'uniswap/src/features/transactions/TransactionDetails/SwapFee';
import { SwapReviewTokenWarningCard } from 'uniswap/src/features/transactions/TransactionDetails/SwapReviewTokenWarningCard';
import { TransactionWarning } from 'uniswap/src/features/transactions/TransactionDetails/TransactionWarning';
import { TransactionSettingsModal } from 'uniswap/src/features/transactions/components/settings/TransactionSettingsModal/TransactionSettingsModal';
import { SlippageUpdate } from 'uniswap/src/features/transactions/swap/form/header/SwapFormSettings/settingsConfigurations/slippageUpdate/SlippageUpdate';
import { usePriceUXEnabled } from 'uniswap/src/features/transactions/swap/hooks/usePriceUXEnabled';
import { EstimatedTime } from 'uniswap/src/features/transactions/swap/review/EstimatedTime';
import { UserReceiveAmount } from 'uniswap/src/features/transactions/swap/review/UserReceiveAmount';
import { isInterface } from 'utilities/src/platform';
// eslint-disable-next-line complexity
export function TransactionDetails({ banner, children, showExpandedChildren, chainId, gasFee, outputCurrency, uniswapXGasBreakdown, swapFee, swapFeeUsd, showGasFeeError = true, showSeparatorToggle = true, showWarning, warning, feeOnTransferProps, tokenWarningProps, tokenWarningChecked, setTokenWarningChecked, onShowWarning, indicative = false, isSwap, transactionUSDValue, txSimulationErrors, isBridgeTrade, AccountDetails, estimatedBridgingTime, RoutingInfo, RateInfo, amountUserWillReceive, }) {
    const { t } = useTranslation();
    const [showChildren, setShowChildren] = useState(showExpandedChildren);
    const priceUXEnabled = usePriceUXEnabled();
    const onPressToggleShowChildren = () => {
        if (!showChildren) {
            sendAnalyticsEvent(SwapEventName.SWAP_DETAILS_EXPANDED);
        }
        setShowChildren(!showChildren);
    };
    // Used to show slippage settings on mobile, where the modal needs to be added outside of the conditional expected failure banner
    const [showSlippageSettings, setShowSlippageSettings] = useState(false);
    const showExpectedFailureBanner = isSwap &&
        ((showGasFeeError && gasFee.error) ||
            (txSimulationErrors === null || txSimulationErrors === void 0 ? void 0 : txSimulationErrors.includes(TransactionFailureReason.SIMULATION_ERROR)) ||
            (txSimulationErrors === null || txSimulationErrors === void 0 ? void 0 : txSimulationErrors.includes(TransactionFailureReason.SLIPPAGE_TOO_LOW)));
    return (_jsxs(Flex, { children: [showExpectedFailureBanner && (_jsx(ExpectedFailureBanner, { txFailureReasons: txSimulationErrors, onSlippageEditPress: () => setShowSlippageSettings(true) })), !showWarning && banner && _jsx(Flex, { py: "$spacing16", children: banner }), children && showSeparatorToggle ? (_jsx(ListSeparatorToggle, { closedText: t('common.button.showMore'), isOpen: showChildren, openText: t('common.button.showLess'), onPress: onPressToggleShowChildren })) : null, _jsxs(Flex, { gap: "$spacing16", pb: "$spacing8", children: [_jsxs(Flex, { gap: "$spacing8", px: "$spacing8", children: [showChildren && priceUXEnabled ? (_jsx(AnimatePresence, { children: _jsx(Flex, { animation: "fast", exitStyle: { opacity: 0 }, enterStyle: { opacity: 0 }, gap: "$spacing8", children: children }) })) : null, RateInfo, feeOnTransferProps && _jsx(FeeOnTransferFeeGroup, { ...feeOnTransferProps }), isSwap && isBridgeTrade && _jsx(EstimatedTime, { visibleIfLong: true, timeMs: estimatedBridgingTime }), isSwap && outputCurrency && (_jsx(SwapFee, { currency: outputCurrency, loading: indicative, swapFee: swapFee, swapFeeUsd: swapFeeUsd })), _jsx(NetworkFee, { chainId: chainId, gasFee: gasFee, indicative: indicative, transactionUSDValue: transactionUSDValue, uniswapXGasBreakdown: uniswapXGasBreakdown }), isSwap && RoutingInfo, AccountDetails, showChildren && !priceUXEnabled ? (_jsx(AnimatePresence, { children: _jsx(Flex, { animation: "fast", exitStyle: { opacity: 0 }, enterStyle: { opacity: 0 }, gap: "$spacing8", children: children }) })) : null, amountUserWillReceive && outputCurrency && priceUXEnabled && (_jsx(UserReceiveAmount, { amountUserWillReceive: amountUserWillReceive, outputCurrency: outputCurrency }))] }), setTokenWarningChecked && tokenWarningProps && (_jsx(SwapReviewTokenWarningCard, { checked: !!tokenWarningChecked, setChecked: setTokenWarningChecked, feeOnTransferProps: feeOnTransferProps, tokenWarningProps: tokenWarningProps }))] }), showWarning && warning && onShowWarning && (_jsx(TransactionWarning, { warning: warning, onShowWarning: onShowWarning })), !isInterface && isSwap && (_jsx(TransactionSettingsModal, { settings: [SlippageUpdate], initialSelectedSetting: SlippageUpdate, isOpen: showSlippageSettings, onClose: () => setShowSlippageSettings(false) }))] }));
}
//# sourceMappingURL=TransactionDetails.js.map