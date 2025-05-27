import { Token } from '@uniswap/sdk-core';
import { CurrencyField } from 'uniswap/src/types/currency';
function getHasTokenFee(currencyInfo) {
    if (!((currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.currency) instanceof Token)) {
        return { hasBuyTax: false, hasSellTax: false };
    }
    return {
        hasBuyTax: !!currencyInfo.currency.buyFeeBps && currencyInfo.currency.buyFeeBps.gt(0),
        hasSellTax: !!currencyInfo.currency.sellFeeBps && currencyInfo.currency.sellFeeBps.gt(0),
    };
}
export function getExactOutputWillFail({ currencies, }) {
    const { hasBuyTax: inputTokenHasBuyTax, hasSellTax: inputTokenHasSellTax } = getHasTokenFee(currencies[CurrencyField.INPUT]);
    const { hasBuyTax: outputTokenHasBuyTax, hasSellTax: outputTokenHasSellTax } = getHasTokenFee(currencies[CurrencyField.OUTPUT]);
    const exactOutputWillFail = inputTokenHasSellTax || outputTokenHasBuyTax;
    const exactOutputWouldFailIfCurrenciesSwitched = inputTokenHasBuyTax || outputTokenHasSellTax;
    return {
        outputTokenHasBuyTax,
        exactOutputWillFail,
        exactOutputWouldFailIfCurrenciesSwitched,
    };
}
//# sourceMappingURL=getExactOutputWillFail.js.map