import { toGqlSafetyLevel } from 'uniswap/src/components/TokenSelector/utils';
import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { toSupportedChainId } from 'uniswap/src/features/chains/utils';
import { buildCurrency, getCurrencySafetyInfo } from 'uniswap/src/features/dataApi/utils';
import { NATIVE_ADDRESS_FOR_TRADING_API } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
import { currencyId } from 'uniswap/src/utils/currencyId';
export function tradingApiSwappableTokenToCurrencyInfo(token) {
    var _a;
    const isNative = token.address === NATIVE_ADDRESS_FOR_TRADING_API;
    const supportedChainId = toSupportedChainId(token.chainId);
    if (!supportedChainId) {
        return undefined;
    }
    const currency = buildCurrency({
        chainId: supportedChainId,
        address: isNative ? getNativeAddress(supportedChainId) : token.address,
        decimals: token.decimals,
        symbol: token.symbol,
        name: token.name,
    });
    if (!currency) {
        return undefined;
    }
    const safetyLevel = toGqlSafetyLevel(token.project.safetyLevel);
    const currencyInfo = {
        currency,
        currencyId: currencyId(currency),
        logoUrl: (_a = token.project.logo) === null || _a === void 0 ? void 0 : _a.url,
        isSpam: token.project.isSpam,
        safetyInfo: getCurrencySafetyInfo(safetyLevel !== null && safetyLevel !== void 0 ? safetyLevel : undefined),
    };
    return currencyInfo;
}
//# sourceMappingURL=tradingApiSwappableTokenToCurrencyInfo.js.map