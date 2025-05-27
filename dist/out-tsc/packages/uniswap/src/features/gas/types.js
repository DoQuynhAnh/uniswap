export function areEqualGasStrategies(a, b) {
    if (!a || !b) {
        return false;
    }
    const optionalFieldMatch = (fieldA, fieldB) => {
        return fieldA == null || fieldB == null || fieldA === fieldB;
    };
    // Required fields must be exactly equal
    const requiredFieldsEqual = a.limitInflationFactor === b.limitInflationFactor &&
        a.priceInflationFactor === b.priceInflationFactor &&
        a.percentileThresholdFor1559Fee === b.percentileThresholdFor1559Fee;
    // Optional fields can be undefined on either side or equal if both defined
    const optionalFieldsMatch = optionalFieldMatch(a.thresholdToInflateLastBlockBaseFee, b.thresholdToInflateLastBlockBaseFee) &&
        optionalFieldMatch(a.baseFeeMultiplier, b.baseFeeMultiplier) &&
        optionalFieldMatch(a.baseFeeHistoryWindow, b.baseFeeHistoryWindow) &&
        optionalFieldMatch(a.minPriorityFeeRatioOfBaseFee, b.minPriorityFeeRatioOfBaseFee) &&
        optionalFieldMatch(a.minPriorityFeeGwei, b.minPriorityFeeGwei) &&
        optionalFieldMatch(a.maxPriorityFeeGwei, b.maxPriorityFeeGwei);
    // displayLimitInflationFactor is not returned by the server, so it's ignored here
    return requiredFieldsEqual && optionalFieldsMatch;
}
export function getGasPrice(estimate) {
    return 'gasPrice' in estimate ? estimate.gasPrice : estimate.maxFeePerGas;
}
export function validateGasFeeResult(gasFee) {
    if (gasFee.value === undefined || gasFee.error) {
        return undefined;
    }
    return { ...gasFee, value: gasFee.value, error: null };
}
//# sourceMappingURL=types.js.map