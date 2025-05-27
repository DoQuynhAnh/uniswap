import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'tsafe';
import { Flex, Text, TouchableArea } from 'ui/src';
import { InfoCircle } from 'ui/src/components/icons/InfoCircle';
import { InfoTooltip } from 'uniswap/src/components/tooltip/InfoTooltip';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import TokenWarningModal from 'uniswap/src/features/tokens/TokenWarningModal';
import { WarningModalInfoContainer } from 'uniswap/src/features/tokens/WarningInfoModalContainer';
import { getFeeColor, useModalHeaderText, useModalSubtitleText } from 'uniswap/src/features/tokens/safetyUtils';
import { getFeeSeverity } from 'uniswap/src/features/transactions/TransactionDetails/utils/getFeeSeverity';
import { isInterface } from 'utilities/src/platform';
export function FeeOnTransferWarning({ children, feeInfo, feeType, }) {
    var _a, _b;
    const [showModal, setShowModal] = useState(false);
    const { fee, tokenSymbol } = feeInfo;
    const feePercent = parseFloat(fee.toFixed());
    const { tokenProtectionWarning } = getFeeSeverity(feeInfo.fee);
    const title = (_a = useModalHeaderText({ tokenProtectionWarning, tokenSymbol0: tokenSymbol })) !== null && _a !== void 0 ? _a : '';
    const subtitle = (_b = useModalSubtitleText({
        tokenProtectionWarning,
        tokenSymbol,
        buyFeePercent: feeType === 'buy' ? feePercent : undefined,
        sellFeePercent: feeType === 'sell' ? feePercent : undefined,
    })) !== null && _b !== void 0 ? _b : '';
    if (isInterface) {
        return (_jsx(InfoTooltip, { text: subtitle,
            title,
            placement: 'top', button: _jsx(WarningModalInfoContainer, { children: _jsx(FeeRow, { feePercent: feePercent, feeType: feeType }) }), trigger: _jsx(InfoCircle, { color: "$neutral3", size: "$icon.12" }), triggerPlacement: "end", children: children }));
    }
    const onPress = () => {
        setShowModal(true);
    };
    const onClose = () => {
        setShowModal(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TouchableArea, { flexShrink: 1, onPress: onPress, children: _jsxs(Flex, { row: true, shrink: true, alignItems: "center", gap: "$spacing4", children: [children, _jsx(InfoCircle, { color: "$neutral3", size: "$icon.16" })] }) }), feeInfo.currencyInfo && (_jsx(TokenWarningModal, { isInfoOnlyWarning: true, isVisible: showModal, currencyInfo0: feeInfo.currencyInfo, feeOnTransferOverride: {
                    buyFeePercent: feeType === 'buy' ? feePercent : undefined,
                    sellFeePercent: feeType === 'sell' ? feePercent : undefined,
                }, closeModalOnly: onClose, onAcknowledge: onClose }))] }));
}
// feePercent is the percentage as an integer. I.e. feePercent = 5 means 5%
function FeeRow({ feeType, feePercent = 0 }) {
    const { t } = useTranslation();
    const { formatPercent } = useLocalizationContext();
    const textColor = getFeeColor(feePercent);
    return (_jsxs(Flex, { row: true, width: "100%", justifyContent: "space-between", gap: "$spacing4", children: [_jsx(Text, { variant: "body3", color: "$neutral2", children: feeType === 'buy' ? capitalize(t('token.fee.buy.label')) : capitalize(t('token.fee.sell.label')) }), _jsx(Text, { variant: "body3", color: textColor, children: formatPercent(feePercent) })] }));
}
//# sourceMappingURL=FeeOnTransferWarning.js.map