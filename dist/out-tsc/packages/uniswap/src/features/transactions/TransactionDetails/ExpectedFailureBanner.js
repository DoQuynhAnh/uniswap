import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'ui/src';
import { AlertTriangleFilled } from 'ui/src/components/icons/AlertTriangleFilled';
import { TransactionFailureReason } from 'uniswap/src/data/tradingApi/__generated__';
import { SlippageEdit } from 'uniswap/src/features/transactions/TransactionDetails/SlippageEdit';
export function ExpectedFailureBanner({ txFailureReasons, onSlippageEditPress, }) {
    const { t } = useTranslation();
    const showSlippageWarning = txFailureReasons === null || txFailureReasons === void 0 ? void 0 : txFailureReasons.includes(TransactionFailureReason.SLIPPAGE_TOO_LOW);
    return (_jsxs(Flex, { row: true, justifyContent: "space-between", alignItems: "center", borderRadius: "$rounded16", borderColor: "$surface3", borderWidth: "$spacing1", gap: "$spacing12", p: "$spacing12", children: [_jsxs(Flex, { row: true, justifyContent: "flex-start", gap: "$spacing12", alignItems: "center", children: [_jsx(AlertTriangleFilled, { color: "$statusWarning", size: "$icon.20" }), _jsxs(Flex, { gap: "$spacing4", children: [_jsx(Text, { color: "$statusWarning", variant: "buttonLabel3", children: t('swap.warning.expectedFailure.titleMay') }), showSlippageWarning && (_jsx(Text, { color: "$neutral2", variant: "body4", children: t('swap.warning.expectedFailure.increaseSlippage') }))] })] }), showSlippageWarning && _jsx(SlippageEdit, { onWalletSlippageEditPress: onSlippageEditPress })] }));
}
//# sourceMappingURL=ExpectedFailureBanner.js.map