import { useDispatch } from 'react-redux';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { SearchResultType } from 'uniswap/src/features/search/SearchResult';
import { addToSearchHistory } from 'uniswap/src/features/search/searchHistorySlice';
import { tokenAddressOrNativeAddress } from 'uniswap/src/features/search/utils';
export function useAddToSearchHistory() {
    const dispatch = useDispatch();
    const registerSearchItem = (item) => {
        switch (item.type) {
            case OnchainItemListOptionType.Pool:
                dispatch(addToSearchHistory({ searchResult: poolOptionToSearchResult(item) }));
                break;
            case OnchainItemListOptionType.Token:
                dispatch(addToSearchHistory({ searchResult: currencyInfoToTokenSearchResult(item.currencyInfo) }));
                break;
            case OnchainItemListOptionType.WalletByAddress:
            case OnchainItemListOptionType.Unitag:
            case OnchainItemListOptionType.ENSAddress:
                dispatch(addToSearchHistory({
                    searchResult: { ...item, type: SearchResultType.WalletByAddress },
                }));
                break;
            case OnchainItemListOptionType.NFTCollection:
                dispatch(addToSearchHistory({
                    searchResult: {
                        ...item,
                        type: SearchResultType.NFTCollection,
                    },
                }));
                break;
        }
    };
    const registerSearchTokenCurrencyInfo = (currencyInfo) => {
        dispatch(addToSearchHistory({ searchResult: currencyInfoToTokenSearchResult(currencyInfo) }));
    };
    return { registerSearchItem, registerSearchTokenCurrencyInfo };
}
function poolOptionToSearchResult(item) {
    const { chainId, poolId, token0CurrencyInfo, token1CurrencyInfo, protocolVersion, feeTier } = item;
    return {
        type: SearchResultType.Pool,
        chainId,
        poolId,
        token0CurrencyId: token0CurrencyInfo.currencyId,
        token1CurrencyId: token1CurrencyInfo.currencyId,
        protocolVersion,
        feeTier,
    };
}
function currencyInfoToTokenSearchResult(currencyInfo) {
    var _a, _b, _c, _d, _e;
    const address = currencyInfo.currency.isToken
        ? currencyInfo.currency.address
        : getNativeAddress(currencyInfo.currency.chainId);
    return {
        type: SearchResultType.Token,
        chainId: currencyInfo.currency.chainId,
        address: tokenAddressOrNativeAddress(address, currencyInfo.currency.chainId),
        name: (_a = currencyInfo.currency.name) !== null && _a !== void 0 ? _a : null,
        symbol: (_b = currencyInfo.currency.symbol) !== null && _b !== void 0 ? _b : '',
        logoUrl: (_c = currencyInfo.logoUrl) !== null && _c !== void 0 ? _c : null,
        safetyInfo: currencyInfo.safetyInfo,
        feeData: currencyInfo.currency.isToken
            ? {
                buyFeeBps: ((_d = currencyInfo.currency.buyFeeBps) === null || _d === void 0 ? void 0 : _d.gt(0)) ? currencyInfo.currency.buyFeeBps.toString() : undefined,
                sellFeeBps: ((_e = currencyInfo.currency.sellFeeBps) === null || _e === void 0 ? void 0 : _e.gt(0)) ? currencyInfo.currency.sellFeeBps.toString() : undefined,
            }
            : null,
    };
}
//# sourceMappingURL=useAddToSearchHistory.js.map