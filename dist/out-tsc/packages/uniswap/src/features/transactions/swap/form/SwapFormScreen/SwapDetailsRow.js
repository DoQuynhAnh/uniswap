import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef } from 'react';
import { Flex, Text, isWeb } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled';
import { AnimatedFlex } from 'ui/src/components/layout/AnimatedFlex';
import { iconSizes, zIndexes } from 'ui/src/theme';
import { useRefetchAnimationStyle } from 'uniswap/src/components/CurrencyInputPanel/CurrencyInputPanel';
import { WarningInfo } from 'uniswap/src/components/modals/WarningModal/WarningInfo';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { LargePriceDifferenceTooltip, SwapFeeOnTransferTooltip, } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormTooltips';
const Outer = ({ children }) => {
    return (_jsx(Flex, { row: true, justifyContent: "space-between", children: children }));
};
const Label = ({ label, tooltip, analyticsTitle, }) => {
    return (_jsxs(Flex, { row: true, gap: "$spacing4", alignItems: "center", children: [_jsx(Text, { variant: "body3", color: "$neutral2", children: label }), isWeb && (_jsx(WarningInfo, { tooltipProps: {
                    text: tooltip,
                    placement: 'top',
                    maxWidth: 300,
                }, trigger: _jsx(InfoCircleFilled, { color: "$neutral3", size: iconSizes.icon12 }), 
                // doesn't matter for web, but required prop
                modalProps: {
                    modalName: ModalName.SwapWarning,
                    zIndex: zIndexes.popover,
                }, analyticsTitle: analyticsTitle }))] }));
};
const ValueLabel = ({ value, color = '$neutral1' }) => {
    return (_jsx(Text, { variant: "body3", color: color, children: value }));
};
function useIndicativeTextDisplay({ currencyAmount, isLoading, value, valueIsIndicative, }) {
    const lastDisplayRef = useRef({
        value: undefined,
        color: '$neutral3',
    });
    const hasInput = Boolean(isLoading || currencyAmount);
    // Clear the lastDisplayRef if input is cleared, so that it is not used upon subsequent input
    useEffect(() => {
        if (!hasInput) {
            lastDisplayRef.current = { value: undefined, color: '$neutral3' };
        }
    }, [hasInput]);
    return useMemo(() => {
        if (!value) {
            return hasInput ? lastDisplayRef.current : { value, color: '$neutral3' };
        }
        const color = valueIsIndicative ? '$neutral3' : '$neutral1';
        const display = { value, color };
        lastDisplayRef.current = display;
        return display;
    }, [value, hasInput, valueIsIndicative]);
}
const ReceivingAmount = ({ amount, formattedAmount, priceDifferenceWarning, isIndicative = false, isLoading = false, feeOnTransferProps, isLoadingIndicative, }) => {
    const hasFeeOnTransfer = feeOnTransferProps &&
        ((feeOnTransferProps === null || feeOnTransferProps === void 0 ? void 0 : feeOnTransferProps.inputTokenInfo.fee.greaterThan(0)) || (feeOnTransferProps === null || feeOnTransferProps === void 0 ? void 0 : feeOnTransferProps.outputTokenInfo.fee.greaterThan(0)));
    const { value: userReceivesOutputAmount, color: userReceivesOutputAmountColor } = useIndicativeTextDisplay({
        currencyAmount: amount,
        isLoading,
        value: formattedAmount,
        valueIsIndicative: isIndicative,
    });
    const priceDifferenceWarningColor = priceDifferenceWarning === null || priceDifferenceWarning === void 0 ? void 0 : priceDifferenceWarning.priceDifferenceColor;
    const refetchAnimationStyle = useRefetchAnimationStyle({
        currencyAmount: amount,
        isLoading,
        isIndicativeLoading: isLoadingIndicative,
        valueIsIndicative: isIndicative,
    });
    return (_jsx(WarningInfo, { tooltipProps: {
            enabled: hasFeeOnTransfer || (priceDifferenceWarning === null || priceDifferenceWarning === void 0 ? void 0 : priceDifferenceWarning.showPriceDifferenceWarning),
            text: hasFeeOnTransfer ? (_jsx(SwapFeeOnTransferTooltip, { ...feeOnTransferProps })) : (priceDifferenceWarning === null || priceDifferenceWarning === void 0 ? void 0 : priceDifferenceWarning.showPriceDifferenceWarning) ? (_jsx(LargePriceDifferenceTooltip, {})) : null,
            placement: 'top',
            maxWidth: 300,
        }, modalProps: {
            modalName: ModalName.SwapWarning,
            severity: hasFeeOnTransfer ? WarningSeverity.Medium : WarningSeverity.High,
            rejectText: 'Close',
            zIndex: zIndexes.popover,
        }, trigger: _jsxs(AnimatedFlex, { row: true, gap: "$spacing4", alignItems: "center", style: refetchAnimationStyle, children: [(hasFeeOnTransfer || (priceDifferenceWarning === null || priceDifferenceWarning === void 0 ? void 0 : priceDifferenceWarning.showPriceDifferenceWarning)) && (_jsx(AlertTriangleFilled, { color: priceDifferenceWarningColor !== null && priceDifferenceWarningColor !== void 0 ? priceDifferenceWarningColor : 'neutral2', size: "$icon.16" })), _jsx(Text, { variant: "body3", color: priceDifferenceWarningColor !== null && priceDifferenceWarningColor !== void 0 ? priceDifferenceWarningColor : userReceivesOutputAmountColor, children: userReceivesOutputAmount })] }) }));
};
export { Label, Outer, ReceivingAmount, ValueLabel };
//# sourceMappingURL=SwapDetailsRow.js.map