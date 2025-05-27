import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { areCurrencyIdsEqual, buildWrappedNativeCurrencyId, currencyId } from 'uniswap/src/utils/currencyId';
export function getWrapType(inputCurrency, outputCurrency) {
    if (!inputCurrency || !outputCurrency || inputCurrency.chainId !== outputCurrency.chainId) {
        return WrapType.NotApplicable;
    }
    const inputChainId = inputCurrency.chainId;
    const wrappedCurrencyId = buildWrappedNativeCurrencyId(inputChainId);
    if (inputCurrency.isNative && areCurrencyIdsEqual(currencyId(outputCurrency), wrappedCurrencyId)) {
        return WrapType.Wrap;
    }
    else if (outputCurrency.isNative && areCurrencyIdsEqual(currencyId(inputCurrency), wrappedCurrencyId)) {
        return WrapType.Unwrap;
    }
    return WrapType.NotApplicable;
}
export function isWrapAction(wrapType) {
    return wrapType === WrapType.Unwrap || wrapType === WrapType.Wrap;
}
//# sourceMappingURL=wrap.js.map