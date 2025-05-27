import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
/**
 * Logs an analytics event when there are discrepancies between our backend's and Blockaid's fee-on-transfer (FOT) detection.
 * This data helps the protocols team identify and improve FOT detection accuracy.
 *
 * @param currencyInfo - The result of useCurrencyInfo()
 */
export declare function useBlockaidFeeComparisonAnalytics(currencyInfo: Maybe<CurrencyInfo>): void;
//# sourceMappingURL=useBlockaidFeeComparisonAnalytics.d.ts.map