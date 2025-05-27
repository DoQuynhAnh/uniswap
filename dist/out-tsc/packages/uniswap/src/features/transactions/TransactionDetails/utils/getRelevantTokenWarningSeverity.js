import { getSeverityFromTokenProtectionWarning, getTokenProtectionWarning, } from 'uniswap/src/features/tokens/safetyUtils';
export function getRelevantTokenWarningSeverity(acceptedDerivedSwapInfo) {
    // We only care about a non-fee-related warning on the output token, since the user already owns the input token, so only sell-tax warning are relevant
    const outputCurrency = acceptedDerivedSwapInfo === null || acceptedDerivedSwapInfo === void 0 ? void 0 : acceptedDerivedSwapInfo.currencies.output;
    const outputWarning = getTokenProtectionWarning(outputCurrency);
    const outputSeverity = getSeverityFromTokenProtectionWarning(outputWarning);
    return {
        currencyInfo: outputCurrency,
        tokenProtectionWarning: outputWarning,
        severity: outputSeverity,
    };
}
//# sourceMappingURL=getRelevantTokenWarningSeverity.js.map