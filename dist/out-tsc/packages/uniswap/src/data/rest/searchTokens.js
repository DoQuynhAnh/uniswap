import { useQuery } from '@connectrpc/connect-query';
import { searchTokens } from '@uniswap/client-search/dist/search/v1/api-searchService_connectquery';
import { getNativeAddress } from 'uniswap/src/constants/addresses';
import { uniswapPostTransport } from 'uniswap/src/data/rest/base';
import { parseProtectionInfo, parseSafetyLevel } from 'uniswap/src/data/rest/utils';
import { buildCurrency, buildCurrencyInfo, getCurrencySafetyInfo } from 'uniswap/src/features/dataApi/utils';
import { currencyId } from 'uniswap/src/utils/currencyId';
/**
 * Wrapper around Tanstack useQuery for the Uniswap REST BE service SearchTokens
 * This includes data for token search
 * @param input - The search request parameters including search query, chain IDs, search type, page and size
 * @returns data, error, isPending, and refetch
 */
export function useSearchTokensQuery({ input, enabled = true, }) {
    return useQuery(searchTokens, input, {
        transport: uniswapPostTransport,
        enabled: !!input && enabled,
    });
}
export function searchTokenToCurrencyInfo(token) {
    const { chainId, address, symbol, name, decimals, logoUrl, feeData } = token;
    const safetyLevel = parseSafetyLevel(token.safetyLevel);
    const protectionInfo = parseProtectionInfo(token.protectionInfo);
    const currency = buildCurrency({
        chainId,
        // TODO: backend currently returns 'ETH' for some native tokens, remove this check once BE fixes
        address: address === 'ETH' ? getNativeAddress(chainId) : address,
        decimals,
        symbol,
        name,
        buyFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.buyFeeBps,
        sellFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.sellFeeBps,
    });
    const safetyInfo = getCurrencySafetyInfo(safetyLevel, protectionInfo);
    if (!currency) {
        return null;
    }
    return buildCurrencyInfo({ currency, currencyId: currencyId(currency), logoUrl, safetyInfo });
}
//# sourceMappingURL=searchTokens.js.map