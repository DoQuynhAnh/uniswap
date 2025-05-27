import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import WarningIcon from 'uniswap/src/components/warnings/WarningIcon';
import { FeeOnTransferWarning } from 'uniswap/src/features/transactions/TransactionDetails/modals/FeeOnTransferWarning';
import { getFeeSeverity } from 'uniswap/src/features/transactions/TransactionDetails/utils/getFeeSeverity';
export function FeeOnTransferFeeGroup({ inputTokenInfo, outputTokenInfo, }) {
    if (!inputTokenInfo.fee.greaterThan(0) && !outputTokenInfo.fee.greaterThan(0)) {
        return null;
    }
    // The input token is the one you're selling, therefore it would have a sell fee
    // The output token is the one you're buying, therefore it would have a buy fee
    return (_jsxs(Flex, { gap: "$spacing8", children: [inputTokenInfo.fee.greaterThan(0) && _jsx(FeeOnTransferFeeRow, { feeType: "sell", feeInfo: inputTokenInfo }), outputTokenInfo.fee.greaterThan(0) && _jsx(FeeOnTransferFeeRow, { feeType: "buy", feeInfo: outputTokenInfo })] }));
}
function FeeOnTransferFeeRow({ feeType, feeInfo }) {
    const { t } = useTranslation();
    const { severity } = getFeeSeverity(feeInfo.fee);
    const usdAmountLoading = feeInfo.formattedUsdAmount === '-';
    return (_jsxs(Flex, { row: true, alignItems: "center", justifyContent: "space-between", children: [_jsx(FeeOnTransferWarning, { feeInfo: feeInfo, feeType: feeType, children: _jsx(Text, { color: "$neutral2", variant: "body3", children: t('swap.details.feeOnTransfer', { tokenSymbol: feeInfo.tokenSymbol }) }) }), _jsxs(Flex, { row: true, alignItems: "center", gap: "$spacing4", children: [_jsx(WarningIcon, { severity: severity, size: "$icon.16" }), _jsx(Text, { flex: 0, variant: "body3", children: usdAmountLoading ? `${feeInfo.formattedAmount} ${feeInfo.tokenSymbol}` : feeInfo.formattedUsdAmount })] })] }));
}
//# sourceMappingURL=FeeOnTransferFee.js.map