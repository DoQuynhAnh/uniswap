import JSBI from 'jsbi';
import { areEqualGasStrategies } from 'uniswap/src/features/gas/types';
import { DynamicConfigs, } from 'uniswap/src/features/gating/configs';
import { getStatsigClient } from 'uniswap/src/features/gating/sdk/statsig';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
export function applyNativeTokenPercentageBuffer(currencyAmount, nativeTokenPercentageBuffer) {
    if (!currencyAmount) {
        return undefined;
    }
    if (!currencyAmount.currency.isNative) {
        return currencyAmount;
    }
    // Calculate the remaining percentage (e.g., for 10% reduction, multiply by 0.9)
    const remainingPercentage = JSBI.subtract(JSBI.BigInt(10000), JSBI.BigInt(Math.floor(nativeTokenPercentageBuffer * 100)));
    // currencyAmount is 1 ETH (1000000000000000000 wei)
    const totalAmount = currencyAmount.quotient;
    // remainingAmount is remainingPercentage * totalAmount
    // or for 10% reduction, it's 900000000000000000 wei
    const remainingAmount = JSBI.divide(JSBI.multiply(totalAmount, remainingPercentage), JSBI.BigInt(10000));
    return getCurrencyAmount({
        value: remainingAmount.toString(),
        valueType: ValueType.Raw,
        currency: currencyAmount.currency,
    });
}
function getNativeCurrencyTotalSpend(value, gasFee, nativeCurrency) {
    if (!gasFee || !nativeCurrency) {
        return value;
    }
    const gasFeeAmount = getCurrencyAmount({
        value: gasFee,
        valueType: ValueType.Raw,
        currency: nativeCurrency,
    });
    return value && gasFeeAmount ? gasFeeAmount.add(value) : gasFeeAmount;
}
export function hasSufficientFundsIncludingGas(params) {
    const { transactionAmount, gasFee, nativeCurrencyBalance } = params;
    const totalSpend = getNativeCurrencyTotalSpend(transactionAmount, gasFee, nativeCurrencyBalance === null || nativeCurrencyBalance === void 0 ? void 0 : nativeCurrencyBalance.currency);
    return !totalSpend || !(nativeCurrencyBalance === null || nativeCurrencyBalance === void 0 ? void 0 : nativeCurrencyBalance.lessThan(totalSpend));
}
// Function to find the name of a gas strategy based on the GasEstimate
export function findLocalGasStrategy(gasEstimate, type) {
    const gasStrategies = getStatsigClient().getDynamicConfig(DynamicConfigs.GasStrategies).value;
    return gasStrategies.strategies.find((s) => s.conditions.types === type && areEqualGasStrategies(s.strategy, gasEstimate.strategy));
}
//# sourceMappingURL=utils.js.map