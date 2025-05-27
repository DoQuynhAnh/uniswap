import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TokenWarningCard } from 'uniswap/src/features/tokens/TokenWarningCard';
import TokenWarningModal from 'uniswap/src/features/tokens/TokenWarningModal';
import { getShouldDisplayTokenWarningCard } from 'uniswap/src/features/transactions/TransactionDetails/utils/getShouldDisplayTokenWarningCard';
export function SwapReviewTokenWarningCard({ feeOnTransferProps, tokenWarningProps, checked, setChecked, }) {
    const [showModal, setShowModal] = useState(false);
    const { showFeeSeverityWarning, shouldDisplayTokenWarningCard, tokenProtectionWarningToDisplay, feePercent, feeType, currencyInfoToDisplay, tokenFeeInfo, } = getShouldDisplayTokenWarningCard({
        tokenWarningProps,
        feeOnTransferProps,
    });
    if (!shouldDisplayTokenWarningCard || !currencyInfoToDisplay) {
        return null;
    }
    const feeOnTransferOverride = showFeeSeverityWarning && tokenFeeInfo && feeType
        ? {
            buyFeePercent: feeType === 'buy' ? feePercent : undefined,
            sellFeePercent: feeType === 'sell' ? feePercent : undefined,
        }
        : undefined;
    const onPress = () => {
        setShowModal(true);
    };
    const onClose = () => {
        setShowModal(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TokenWarningCard, { hideCtaIcon: true, currencyInfo: currencyInfoToDisplay, tokenProtectionWarningOverride: tokenProtectionWarningToDisplay, feeOnTransferOverride: feeOnTransferOverride, checked: checked, setChecked: setChecked, onPress: onPress }), _jsx(TokenWarningModal, { isInfoOnlyWarning: true, isVisible: showModal, currencyInfo0: currencyInfoToDisplay, feeOnTransferOverride: feeOnTransferOverride, closeModalOnly: onClose, onAcknowledge: onClose })] }));
}
//# sourceMappingURL=SwapReviewTokenWarningCard.js.map