import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { TokenProtectionWarning, getFeeWarning, getSeverityFromTokenProtectionWarning, } from 'uniswap/src/features/tokens/safetyUtils';
export function getFeeSeverity(fee) {
    // WarningSeverity for styling. Same logic as getTokenWarningSeverity but without non-fee-related cases.
    // If fee >= 5% then HIGH, else 0% < fee < 5% then MEDIUM, else NONE
    const tokenProtectionWarning = getFeeWarning(parseFloat(fee.toFixed()));
    const severity = getSeverityFromTokenProtectionWarning(tokenProtectionWarning);
    return { severity, tokenProtectionWarning };
}
export function getHighestFeeSeverity(feeOnTransferProps) {
    if (!feeOnTransferProps) {
        return { severity: WarningSeverity.None, tokenProtectionWarning: TokenProtectionWarning.None };
    }
    const { inputTokenInfo, outputTokenInfo } = feeOnTransferProps;
    if (!inputTokenInfo.fee.greaterThan(0) && !outputTokenInfo.fee.greaterThan(0)) {
        return { severity: WarningSeverity.None, tokenProtectionWarning: TokenProtectionWarning.None };
    }
    const isInputFeeHigher = inputTokenInfo.fee.greaterThan(outputTokenInfo.fee);
    const feeType = isInputFeeHigher ? 'sell' : 'buy';
    const highestFeeTokenInfo = isInputFeeHigher ? inputTokenInfo : outputTokenInfo;
    return { feeType, highestFeeTokenInfo, ...getFeeSeverity(highestFeeTokenInfo.fee) };
}
//# sourceMappingURL=getFeeSeverity.js.map