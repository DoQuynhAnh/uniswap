import { useMemo } from 'react';
import { ALL_NETWORKS_ARG } from 'uniswap/src/data/rest/base';
import { tokenRankingsStatToCurrencyInfo, useTokenRankingsQuery } from 'uniswap/src/data/rest/tokenRankings';
import { CustomRankingType } from 'uniswap/src/data/types';
export function useTrendingTokensCurrencyInfos(chainFilter, skip) {
    var _a, _b, _c;
    const { data, isLoading, error, refetch, isFetching } = useTokenRankingsQuery({
        chainId: (_a = chainFilter === null || chainFilter === void 0 ? void 0 : chainFilter.toString()) !== null && _a !== void 0 ? _a : ALL_NETWORKS_ARG,
    }, !skip);
    const trendingTokens = (_c = (_b = data === null || data === void 0 ? void 0 : data.tokenRankings) === null || _b === void 0 ? void 0 : _b[CustomRankingType.Trending]) === null || _c === void 0 ? void 0 : _c.tokens;
    const formattedTokens = useMemo(() => trendingTokens === null || trendingTokens === void 0 ? void 0 : trendingTokens.map(tokenRankingsStatToCurrencyInfo).filter((t) => Boolean(t)), [trendingTokens]);
    return { data: formattedTokens, loading: isLoading || isFetching, error: error !== null && error !== void 0 ? error : undefined, refetch };
}
//# sourceMappingURL=useTrendingTokensCurrencyInfos.js.map