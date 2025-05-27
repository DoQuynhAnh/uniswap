import { Token } from '@uniswap/sdk-core';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { getValidAddress } from 'uniswap/src/utils/addresses';
import { shortenAddress } from 'utilities/src/addresses';
const DEFAULT_MAX_SYMBOL_CHARACTERS = 6;
export function getSymbolDisplayText(symbol) {
    if (!symbol) {
        return symbol;
    }
    return symbol.length > DEFAULT_MAX_SYMBOL_CHARACTERS
        ? (symbol === null || symbol === void 0 ? void 0 : symbol.substring(0, DEFAULT_MAX_SYMBOL_CHARACTERS - 1)) + '…'
        : symbol;
}
export function wrappedNativeCurrency(chainId) {
    const wrappedCurrencyInfo = getChainInfo(chainId).wrappedNativeCurrency;
    return new Token(chainId, wrappedCurrencyInfo.address, wrappedCurrencyInfo.decimals, wrappedCurrencyInfo.symbol, wrappedCurrencyInfo.name);
}
export function serializeToken(token) {
    return {
        chainId: token.chainId,
        address: token.address,
        decimals: token.decimals,
        name: token.name,
        symbol: token.symbol,
    };
}
export function deserializeToken(serializedToken) {
    return new Token(serializedToken.chainId, serializedToken.address, serializedToken.decimals, serializedToken.symbol, serializedToken.name);
}
export function getFormattedCurrencyAmount(currency, currencyAmountRaw, formatter, isApproximateAmount = false, valueType = ValueType.Raw) {
    const currencyAmount = getCurrencyAmount({
        value: currencyAmountRaw,
        valueType,
        currency,
    });
    if (!currencyAmount) {
        return '';
    }
    const formattedAmount = formatter.formatCurrencyAmount({ value: currencyAmount });
    return isApproximateAmount ? `~${formattedAmount} ` : `${formattedAmount} `;
}
export function getCurrencyDisplayText(currency, tokenAddressString) {
    const symbolDisplayText = getSymbolDisplayText(currency === null || currency === void 0 ? void 0 : currency.symbol);
    if (symbolDisplayText) {
        return symbolDisplayText;
    }
    return tokenAddressString && getValidAddress(tokenAddressString, true)
        ? shortenAddress(tokenAddressString)
        : tokenAddressString;
}
//# sourceMappingURL=currency.js.map