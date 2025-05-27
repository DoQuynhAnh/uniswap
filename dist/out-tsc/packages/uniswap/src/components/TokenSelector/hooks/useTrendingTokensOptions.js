import { useCallback } from 'react';
import { useCurrencyInfosToTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/useCurrencyInfosToTokenOptions';
import { usePortfolioBalancesForAddressById } from 'uniswap/src/components/TokenSelector/hooks/usePortfolioBalancesForAddressById';
import { useTrendingTokensCurrencyInfos } from 'uniswap/src/components/TokenSelector/hooks/useTrendingTokensCurrencyInfos';
export function useTrendingTokensOptions(address, chainFilter) {
    const { data: portfolioBalancesById, error: portfolioBalancesByIdError, refetch: portfolioBalancesByIdRefetch, loading: loadingPorfolioBalancesById, } = usePortfolioBalancesForAddressById(address);
    const { data: tokens, error: tokensError, refetch: refetchTokens, loading: loadingTokens, } = useTrendingTokensCurrencyInfos(chainFilter);
    const tokenOptions = useCurrencyInfosToTokenOptions({ currencyInfos: tokens, portfolioBalancesById });
    const refetch = useCallback(() => {
        portfolioBalancesByIdRefetch === null || portfolioBalancesByIdRefetch === void 0 ? void 0 : portfolioBalancesByIdRefetch();
        refetchTokens === null || refetchTokens === void 0 ? void 0 : refetchTokens();
    }, [portfolioBalancesByIdRefetch, refetchTokens]);
    const error = (!portfolioBalancesById ? portfolioBalancesByIdError : undefined) || (!tokenOptions ? tokensError : undefined);
    return {
        data: tokenOptions,
        refetch,
        error,
        loading: loadingPorfolioBalancesById || loadingTokens,
    };
}
//# sourceMappingURL=useTrendingTokensOptions.js.map