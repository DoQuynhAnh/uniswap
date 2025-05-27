import { PortfolioBalancesQueryResult } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
/**
 * Computes the total balances in USD per chain asynchronously to avoid blocking the main thread.
 */
export declare function useTotalBalancesUsdPerChain(portfolioBalances: PortfolioBalancesQueryResult): Record<string, number> | undefined;
//# sourceMappingURL=utils.d.ts.map