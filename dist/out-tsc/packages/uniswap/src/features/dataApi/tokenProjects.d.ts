import { GqlResult } from 'uniswap/src/data/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { CurrencyId } from 'uniswap/src/types/currency';
/**
 * Fetches token information as CurrencyInfo from currencyIds. When used, wrap component
 * with Suspense.
 */
export declare function useTokenProjects(currencyIds: CurrencyId[]): GqlResult<CurrencyInfo[]>;
//# sourceMappingURL=tokenProjects.d.ts.map