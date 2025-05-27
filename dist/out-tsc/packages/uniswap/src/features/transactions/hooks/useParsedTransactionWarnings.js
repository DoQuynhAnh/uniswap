import { useMemo } from 'react';
import { Wifi } from 'ui/src/components/icons/Wifi';
import { getAlertColor } from 'uniswap/src/components/modals/WarningModal/getAlertColor';
import { WarningAction, WarningLabel, WarningSeverity, } from 'uniswap/src/components/modals/WarningModal/types';
export function isPriceImpactWarning(warning) {
    return warning.type === WarningLabel.PriceImpactMedium || warning.type === WarningLabel.PriceImpactHigh;
}
export const getNetworkWarning = (t) => ({
    type: WarningLabel.NetworkError,
    severity: WarningSeverity.Low,
    action: WarningAction.DisableReview,
    title: t('swap.warning.offline.title'),
    icon: Wifi,
    message: t('swap.warning.offline.message'),
});
// Format an array of warnings into the ParsedWarnings type
export function useFormattedWarnings(warnings) {
    return useMemo(() => {
        const blockingWarning = warnings.find((warning) => warning.action === WarningAction.DisableReview || warning.action === WarningAction.DisableSubmit);
        const insufficientBalanceWarning = warnings.find((warning) => warning.type === WarningLabel.InsufficientFunds);
        const insufficientGasFundsWarning = warnings.find((warning) => warning.type === WarningLabel.InsufficientGasFunds);
        const priceImpactWarning = warnings.find((warning) => isPriceImpactWarning(warning));
        return {
            blockingWarning,
            formScreenWarning: getFormScreenWarning(warnings),
            insufficientBalanceWarning,
            insufficientGasFundsWarning,
            priceImpactWarning,
            reviewScreenWarning: getReviewScreenWarning(warnings),
            warnings,
        };
    }, [warnings]);
}
function getReviewScreenWarning(warnings) {
    const reviewWarning = warnings.find((warning) => warning.severity >= WarningSeverity.Medium);
    if (!reviewWarning) {
        return undefined;
    }
    return getWarningWithStyle({ warning: reviewWarning, displayedInline: true });
}
// This function decides which warning to show when there is more than one.
function getFormScreenWarning(warnings) {
    const insufficientBalanceWarning = warnings.find((warning) => warning.type === WarningLabel.InsufficientFunds);
    if (insufficientBalanceWarning) {
        return {
            warning: insufficientBalanceWarning,
            color: getAlertColor(WarningSeverity.Medium),
            Icon: null,
            displayedInline: false,
        };
    }
    const formWarning = warnings.find((warning) => warning.severity >= WarningSeverity.Low);
    if (!formWarning) {
        return undefined;
    }
    // InsufficientGasFunds is displayed in a separate banner, rather than inline.
    const displayedInline = formWarning.type !== WarningLabel.InsufficientGasFunds;
    return getWarningWithStyle({ warning: formWarning, displayedInline });
}
function getWarningWithStyle({ warning, displayedInline, }) {
    var _a;
    return {
        warning,
        displayedInline,
        color: getAlertColor(warning.severity),
        Icon: (_a = warning.icon) !== null && _a !== void 0 ? _a : null,
    };
}
//# sourceMappingURL=useParsedTransactionWarnings.js.map