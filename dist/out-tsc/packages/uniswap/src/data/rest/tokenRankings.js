import { useQuery } from '@connectrpc/connect-query';
import { tokenRankings } from '@uniswap/client-explore/dist/uniswap/explore/v1/service-ExploreStatsService_connectquery';
import { uniswapGetTransport } from 'uniswap/src/data/rest/base';
import { parseProtectionInfo, parseSafetyLevel } from 'uniswap/src/data/rest/utils';
import { fromGraphQLChain } from 'uniswap/src/features/chains/utils';
import { buildCurrency, buildCurrencyInfo, getCurrencySafetyInfo } from 'uniswap/src/features/dataApi/utils';
import { currencyId } from 'uniswap/src/utils/currencyId';
/**
 * Wrapper around Tanstack useQuery for the Uniswap REST BE service TokenRankings
 * This includes the top tokens pre-sorted by various filters
 * @param input { chainId: string } - string representation of the chain to query or `ALL_NETWORKS` for aggregated data
 * @returns UseQueryResult<TokenRankingsResponse, ConnectError>
 */
export function useTokenRankingsQuery(input, enabled = true) {
    return useQuery(tokenRankings, input, { transport: uniswapGetTransport, enabled });
}
export function tokenRankingsStatToCurrencyInfo(tokenRankingsStat) {
    const { chain, address, symbol, name, logo, decimals, feeData } = tokenRankingsStat;
    const chainId = fromGraphQLChain(chain);
    const protectionInfo = parseProtectionInfo(tokenRankingsStat.protectionInfo);
    const safetyLevel = parseSafetyLevel(tokenRankingsStat.safetyLevel);
    if (!chainId || !symbol || !name) {
        return null;
    }
    const currency = buildCurrency({
        chainId,
        address,
        decimals,
        symbol,
        name,
        buyFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.buyFeeBps,
        sellFeeBps: feeData === null || feeData === void 0 ? void 0 : feeData.sellFeeBps,
    });
    if (!currency) {
        return null;
    }
    return buildCurrencyInfo({
        currency,
        currencyId: currencyId(currency),
        logoUrl: logo,
        safetyInfo: getCurrencySafetyInfo(safetyLevel, protectionInfo),
    });
}
//# sourceMappingURL=tokenRankings.js.map