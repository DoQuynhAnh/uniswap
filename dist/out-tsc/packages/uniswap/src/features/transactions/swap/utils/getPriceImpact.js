import { CurrencyAmount, Percent } from '@uniswap/sdk-core';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { getSwapFeeUsdFromDerivedSwapInfo } from 'uniswap/src/features/transactions/swap/utils/getSwapFeeUsd';
import { isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
function stringToUSDAmount(value, USDCurrency) {
    if (!value) {
        return undefined;
    }
    return getCurrencyAmount({
        value: value.toString().slice(0, USDCurrency.decimals),
        valueType: ValueType.Exact,
        currency: USDCurrency,
    });
}
/** Returns the price impact of the current trade, including UniswapX trades. UniswapX trades do not have typical pool-based price impact; we use a frontend-calculated metric. */
function getUniswapXPriceImpact({ derivedSwapInfo }) {
    var _a;
    const trade = derivedSwapInfo.trade.trade;
    const { input: inputUSD, output: outputUSD } = derivedSwapInfo.currencyAmountsUSDValue;
    if (!trade || !isUniswapX(trade) || !trade.quote.quote.classicGasUseEstimateUSD || !inputUSD || !outputUSD) {
        return undefined;
    }
    const classicGasEstimateUSD = stringToUSDAmount(trade.quote.quote.classicGasUseEstimateUSD, inputUSD.currency);
    const swapFeeUSDString = getSwapFeeUsdFromDerivedSwapInfo(derivedSwapInfo);
    const swapFeeUSD = (_a = stringToUSDAmount(swapFeeUSDString, inputUSD.currency)) !== null && _a !== void 0 ? _a : CurrencyAmount.fromRawAmount(inputUSD.currency, '0');
    if (!classicGasEstimateUSD) {
        return undefined;
    }
    const result = outputUSD
        .add(classicGasEstimateUSD)
        .add(swapFeeUSD)
        .divide(inputUSD)
        .asFraction.subtract(1)
        .multiply(-1);
    return new Percent(result.numerator, result.denominator);
}
export function getPriceImpact(derivedSwapInfo) {
    const trade = derivedSwapInfo.trade.trade;
    if (!trade) {
        return undefined;
    }
    if (isUniswapX(trade)) {
        return getUniswapXPriceImpact({ derivedSwapInfo });
    }
    else if (isClassic(trade)) {
        return trade.priceImpact;
    }
    else {
        return undefined;
    }
}
//# sourceMappingURL=getPriceImpact.js.map