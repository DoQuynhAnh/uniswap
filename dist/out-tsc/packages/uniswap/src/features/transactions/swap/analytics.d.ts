import { Currency, CurrencyAmount, TradeType } from '@uniswap/sdk-core';
import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__';
import { LocalizationContextState } from 'uniswap/src/features/language/LocalizationContext';
import { SwapRouting, SwapTradeBaseProperties } from 'uniswap/src/features/telemetry/types';
import { TransactionSettingsContextState } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { ClassicTrade, Trade } from 'uniswap/src/features/transactions/swap/types/trade';
import { ITraceContext } from 'utilities/src/telemetry/trace/TraceContext';
type ProtocolVersion = 'V2' | 'V3' | 'V4' | 'unknown';
export interface RouteInfo {
    poolAddress: string;
    version: ProtocolVersion;
}
export interface SwapRoutesAnalyticsData {
    poolsCount?: number;
    paths?: RouteInfo[][];
    v2Used: boolean;
    v3Used: boolean;
    v4Used: boolean;
    uniswapXUsed: boolean;
}
/**
 * Extract route data from a trade for analytics purposes
 * @param trade The trade object containing route information
 * @returns Structured route data for analytics or undefined if route data is not available
 */
export declare function getRouteAnalyticsData({ routing, routes, }: {
    routing?: Routing;
    routes?: ClassicTrade['routes'];
}): SwapRoutesAnalyticsData | undefined;
export declare function useSwapAnalytics(derivedSwapInfo: DerivedSwapInfo): void;
export declare function getBaseTradeAnalyticsProperties({ formatter, trade, currencyInAmountUSD, currencyOutAmountUSD, portfolioBalanceUsd, presetPercentage, preselectAsset, trace, isBatched, includedPermitTransactionStep, }: {
    formatter: LocalizationContextState;
    trade: Trade<Currency, Currency, TradeType>;
    currencyInAmountUSD?: Maybe<CurrencyAmount<Currency>>;
    currencyOutAmountUSD?: Maybe<CurrencyAmount<Currency>>;
    portfolioBalanceUsd?: number;
    presetPercentage?: PresetPercentage;
    preselectAsset?: boolean;
    trace: ITraceContext;
    isBatched?: boolean;
    includedPermitTransactionStep?: boolean;
}): SwapTradeBaseProperties;
export declare function getBaseTradeAnalyticsPropertiesFromSwapInfo({ transactionSettings, derivedSwapInfo, trace, }: {
    transactionSettings: TransactionSettingsContextState;
    derivedSwapInfo: DerivedSwapInfo;
    trace: ITraceContext;
}): SwapTradeBaseProperties;
export declare function logSwapQuoteFetch({ chainId, isUSDQuote, isQuickRoute, }: {
    chainId: number;
    isUSDQuote?: boolean;
    isQuickRoute?: boolean;
}): void;
export declare function tradeRoutingToFillType({ routing, indicative, }: {
    routing: Routing;
    indicative: boolean;
}): SwapRouting;
export {};
//# sourceMappingURL=analytics.d.ts.map