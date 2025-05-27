import { SwapEventName } from '@uniswap/analytics-events';
import { Protocol } from '@uniswap/router-sdk';
import { Pair } from '@uniswap/v2-sdk';
import { Pool as V3Pool } from '@uniswap/v3-sdk';
import { Pool as V4Pool } from '@uniswap/v4-sdk';
import { useEffect } from 'react';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__';
import { getChainLabel } from 'uniswap/src/features/chains/utils';
import { usePortfolioTotalValue } from 'uniswap/src/features/dataApi/balances';
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { getTokenProtectionWarning } from 'uniswap/src/features/tokens/safetyUtils';
import { SwapEventType, timestampTracker } from 'uniswap/src/features/transactions/swap/utils/SwapEventTimestampTracker';
import { slippageToleranceToPercent } from 'uniswap/src/features/transactions/swap/utils/format';
import { getSwapFeeUsd } from 'uniswap/src/features/transactions/swap/utils/getSwapFeeUsd';
import { isClassic, isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing';
import { getClassicQuoteFromResponse } from 'uniswap/src/features/transactions/swap/utils/tradingApi';
import { TransactionOriginType } from 'uniswap/src/features/transactions/types/transactionDetails';
import { CurrencyField } from 'uniswap/src/types/currency';
import { getCurrencyAddressForAnalytics } from 'uniswap/src/utils/currencyId';
import { NumberType } from 'utilities/src/format/types';
import { logger } from 'utilities/src/logger/logger';
import { useTrace } from 'utilities/src/telemetry/trace/TraceContext';
const DEFAULT_RESULT = {
    v2Used: false,
    v3Used: false,
    v4Used: false,
    uniswapXUsed: false,
};
function getPoolAddress(pool) {
    if (pool instanceof Pair) {
        return Pair.getAddress(pool.token0, pool.token1);
    }
    else if (pool instanceof V3Pool) {
        return V3Pool.getAddress(pool.token0, pool.token1, pool.fee);
    }
    else if (pool instanceof V4Pool) {
        return pool.poolId;
    }
    return undefined;
}
function getClassicPoolProtocol(pool) {
    if (pool instanceof Pair) {
        return 'V2';
    }
    else if (pool instanceof V3Pool) {
        return 'V3';
    }
    else if (pool instanceof V4Pool) {
        return 'V4';
    }
    return undefined;
}
/**
 * Loops through all routes and returns an array of pools combinations.
 */
function getRoutings(routes) {
    return routes.map((route) => route.pools);
}
/**
 * Extract route data from a trade for analytics purposes
 * @param trade The trade object containing route information
 * @returns Structured route data for analytics or undefined if route data is not available
 */
export function getRouteAnalyticsData({ routing, routes, }) {
    if (!routing) {
        return undefined;
    }
    // For classic trades, we can extract detailed route information
    if (isClassic({ routing }) && routes) {
        const routings = getRoutings(routes);
        const paths = routings.map((route) => route.map((pool) => {
            var _a, _b;
            return ({
                poolAddress: (_a = getPoolAddress(pool)) !== null && _a !== void 0 ? _a : 'unknown',
                version: (_b = getClassicPoolProtocol(pool)) !== null && _b !== void 0 ? _b : 'unknown',
            });
        }));
        // Determine which versions are used
        const v2Used = paths.some((path) => path.some((pool) => pool.version === Protocol.V2));
        const v3Used = paths.some((path) => path.some((pool) => pool.version === Protocol.V3));
        const v4Used = paths.some((path) => path.some((pool) => pool.version === Protocol.V4));
        const poolsCount = paths.reduce((acc, path) => acc + path.length, 0);
        return {
            poolsCount,
            paths,
            v2Used,
            v3Used,
            v4Used,
            // For classic trades, X is not used
            uniswapXUsed: false,
        };
    }
    if (isUniswapX({ routing })) {
        // For UniswapX trades, we don't have detailed route information in the same way
        // But we can mark it as using X
        return {
            ...DEFAULT_RESULT,
            uniswapXUsed: true,
        };
    }
    // For other trade types or if extraction fails
    return DEFAULT_RESULT;
}
// hook-based analytics because this one is data-lifecycle dependent
export function useSwapAnalytics(derivedSwapInfo) {
    var _a;
    const formatter = useLocalizationContext();
    const trace = useTrace();
    const { trade: { trade }, } = derivedSwapInfo;
    const quoteId = (_a = trade === null || trade === void 0 ? void 0 : trade.quote) === null || _a === void 0 ? void 0 : _a.requestId;
    const account = useAccountMeta();
    const { data: portfolioData } = usePortfolioTotalValue({
        address: account === null || account === void 0 ? void 0 : account.address,
        fetchPolicy: 'cache-first',
    });
    useEffect(() => {
        if (!trade) {
            return;
        }
        sendAnalyticsEvent(SwapEventName.SWAP_QUOTE_RECEIVED, getBaseTradeAnalyticsProperties({
            formatter,
            trade,
            currencyInAmountUSD: derivedSwapInfo.currencyAmountsUSDValue.input,
            currencyOutAmountUSD: derivedSwapInfo.currencyAmountsUSDValue.output,
            portfolioBalanceUsd: portfolioData === null || portfolioData === void 0 ? void 0 : portfolioData.balanceUSD,
            trace,
        }));
        // We only want to re-run this when we get a new `quoteId`.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quoteId]);
    return;
}
export function getBaseTradeAnalyticsProperties({ formatter, trade, currencyInAmountUSD, currencyOutAmountUSD, portfolioBalanceUsd, presetPercentage, preselectAsset, trace, isBatched, includedPermitTransactionStep, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const portionAmount = (_a = getClassicQuoteFromResponse(trade === null || trade === void 0 ? void 0 : trade.quote)) === null || _a === void 0 ? void 0 : _a.portionAmount;
    const feeCurrencyAmount = getCurrencyAmount({
        value: portionAmount,
        valueType: ValueType.Raw,
        currency: trade.outputAmount.currency,
    });
    const classicQuote = getClassicQuoteFromResponse(trade === null || trade === void 0 ? void 0 : trade.quote);
    const finalOutputAmount = feeCurrencyAmount ? trade.outputAmount.subtract(feeCurrencyAmount) : trade.outputAmount;
    const slippagePercent = slippageToleranceToPercent((_b = trade.slippageTolerance) !== null && _b !== void 0 ? _b : 0);
    return {
        ...trace,
        routing: tradeRoutingToFillType(trade),
        total_balances_usd: portfolioBalanceUsd,
        token_in_symbol: trade.inputAmount.currency.symbol,
        token_out_symbol: trade.outputAmount.currency.symbol,
        token_in_address: getCurrencyAddressForAnalytics(trade.inputAmount.currency),
        token_out_address: getCurrencyAddressForAnalytics(trade.outputAmount.currency),
        price_impact_basis_points: isClassic(trade) ? (_c = trade.priceImpact) === null || _c === void 0 ? void 0 : _c.multiply(100).toSignificant() : undefined,
        chain_id: trade.inputAmount.currency.chainId === trade.outputAmount.currency.chainId
            ? trade.inputAmount.currency.chainId
            : undefined,
        chain_id_in: trade.inputAmount.currency.chainId,
        chain_id_out: trade.outputAmount.currency.chainId,
        token_in_amount: trade.inputAmount.toExact(),
        token_out_amount: formatter.formatCurrencyAmount({
            value: finalOutputAmount,
            type: NumberType.SwapTradeAmount,
        }),
        token_in_amount_usd: currencyInAmountUSD ? parseFloat(currencyInAmountUSD.toFixed(2)) : undefined,
        token_out_amount_usd: currencyOutAmountUSD ? parseFloat(currencyOutAmountUSD.toFixed(2)) : undefined,
        preset_percentage: presetPercentage,
        preselect_asset: preselectAsset,
        allowed_slippage: trade.slippageTolerance !== undefined ? parseFloat(trade.slippageTolerance.toFixed(2)) : undefined,
        allowed_slippage_basis_points: trade.slippageTolerance ? trade.slippageTolerance * 100 : undefined,
        fee_amount: portionAmount,
        requestId: (_d = trade.quote) === null || _d === void 0 ? void 0 : _d.requestId,
        ura_request_id: (_e = trade.quote) === null || _e === void 0 ? void 0 : _e.requestId,
        ura_block_number: isClassic(trade) ? (_f = trade.quote) === null || _f === void 0 ? void 0 : _f.quote.blockNumber : undefined,
        quoteId: classicQuote === null || classicQuote === void 0 ? void 0 : classicQuote.quoteId,
        transactionOriginType: TransactionOriginType.Internal,
        swap_quote_block_number: classicQuote === null || classicQuote === void 0 ? void 0 : classicQuote.blockNumber,
        estimated_network_fee_usd: isClassic(trade) ? (_g = trade.quote) === null || _g === void 0 ? void 0 : _g.quote.gasFeeUSD : undefined,
        fee_usd: currencyOutAmountUSD
            ? getSwapFeeUsd({
                trade,
                outputAmount: trade.outputAmount,
                outputAmountUsd: currencyOutAmountUSD,
            })
            : undefined,
        type: trade.tradeType,
        minimum_output_after_slippage: trade.minimumAmountOut(slippagePercent).toSignificant(6),
        token_in_amount_max: trade.maximumAmountIn(slippagePercent).toExact(),
        token_out_amount_min: trade.minimumAmountOut(slippagePercent).toExact(),
        token_in_detected_tax: parseFloat(trade.inputTax.toFixed(2)),
        token_out_detected_tax: parseFloat(trade.outputTax.toFixed(2)),
        simulation_failure_reasons: isClassic(trade) ? (_h = trade.quote) === null || _h === void 0 ? void 0 : _h.quote.txFailureReasons : undefined,
        ...getRouteAnalyticsData(trade),
        is_batch: isBatched,
        included_permit_transaction_step: includedPermitTransactionStep,
    };
}
export function getBaseTradeAnalyticsPropertiesFromSwapInfo({ transactionSettings, derivedSwapInfo, trace, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { chainId, currencyAmounts, currencyAmountsUSDValue } = derivedSwapInfo;
    const inputCurrencyAmount = currencyAmounts[CurrencyField.INPUT];
    const outputCurrencyAmount = currencyAmounts[CurrencyField.OUTPUT];
    const currencyInAmountUSD = currencyAmountsUSDValue[CurrencyField.INPUT]
        ? parseFloat(currencyAmountsUSDValue[CurrencyField.INPUT].toFixed(2))
        : undefined;
    const currencyOutAmountUSD = currencyAmountsUSDValue[CurrencyField.OUTPUT]
        ? parseFloat(currencyAmountsUSDValue[CurrencyField.OUTPUT].toFixed(2))
        : undefined;
    const slippageTolerance = (_a = transactionSettings.customSlippageTolerance) !== null && _a !== void 0 ? _a : transactionSettings.autoSlippageTolerance;
    const portionAmount = (_d = getClassicQuoteFromResponse((_c = (_b = derivedSwapInfo.trade) === null || _b === void 0 ? void 0 : _b.trade) === null || _c === void 0 ? void 0 : _c.quote)) === null || _d === void 0 ? void 0 : _d.portionAmount;
    const feeCurrencyAmount = getCurrencyAmount({
        value: portionAmount,
        valueType: ValueType.Raw,
        currency: outputCurrencyAmount === null || outputCurrencyAmount === void 0 ? void 0 : outputCurrencyAmount.currency,
    });
    const finalOutputAmount = outputCurrencyAmount && feeCurrencyAmount ? outputCurrencyAmount.subtract(feeCurrencyAmount) : outputCurrencyAmount;
    const trade = derivedSwapInfo.trade.trade;
    return {
        ...trace,
        token_in_symbol: inputCurrencyAmount === null || inputCurrencyAmount === void 0 ? void 0 : inputCurrencyAmount.currency.symbol,
        token_out_symbol: outputCurrencyAmount === null || outputCurrencyAmount === void 0 ? void 0 : outputCurrencyAmount.currency.symbol,
        token_in_address: inputCurrencyAmount ? getCurrencyAddressForAnalytics(inputCurrencyAmount === null || inputCurrencyAmount === void 0 ? void 0 : inputCurrencyAmount.currency) : '',
        token_out_address: outputCurrencyAmount ? getCurrencyAddressForAnalytics(outputCurrencyAmount === null || outputCurrencyAmount === void 0 ? void 0 : outputCurrencyAmount.currency) : '',
        price_impact_basis_points: trade && isClassic(trade) ? (_f = (_e = trade === null || trade === void 0 ? void 0 : trade.priceImpact) === null || _e === void 0 ? void 0 : _e.multiply(100)) === null || _f === void 0 ? void 0 : _f.toSignificant() : undefined,
        estimated_network_fee_usd: undefined,
        chain_id: chainId,
        token_in_amount: (_g = inputCurrencyAmount === null || inputCurrencyAmount === void 0 ? void 0 : inputCurrencyAmount.toExact()) !== null && _g !== void 0 ? _g : '',
        token_out_amount: (_h = finalOutputAmount === null || finalOutputAmount === void 0 ? void 0 : finalOutputAmount.toExact()) !== null && _h !== void 0 ? _h : '',
        token_in_amount_usd: currencyInAmountUSD,
        token_out_amount_usd: currencyOutAmountUSD,
        allowed_slippage_basis_points: slippageTolerance ? slippageTolerance * 100 : undefined,
        fee_amount: portionAmount,
        transactionOriginType: TransactionOriginType.Internal,
        tokenWarnings: {
            input: getTokenProtectionWarning(derivedSwapInfo.currencies.input),
            output: getTokenProtectionWarning(derivedSwapInfo.currencies.output),
        },
    };
}
export function logSwapQuoteFetch({ chainId, isUSDQuote = false, isQuickRoute = false, }) {
    let performanceMetrics = {};
    if (!isUSDQuote) {
        const hasSetSwapQuote = timestampTracker.hasTimestamp(SwapEventType.FirstQuoteFetchStarted);
        const elapsedTime = timestampTracker.setElapsedTime(SwapEventType.FirstQuoteFetchStarted);
        // We only log the time_to_first_quote_request metric for the first quote request of a session.
        const time_to_first_quote_request = hasSetSwapQuote ? undefined : elapsedTime;
        const time_to_first_quote_request_since_first_input = hasSetSwapQuote
            ? undefined
            : timestampTracker.getElapsedTime(SwapEventType.FirstQuoteFetchStarted, SwapEventType.FirstSwapAction);
        performanceMetrics = { time_to_first_quote_request, time_to_first_quote_request_since_first_input };
    }
    sendAnalyticsEvent(SwapEventName.SWAP_QUOTE_FETCH, { chainId, isQuickRoute, ...performanceMetrics });
    logger.info('analytics', 'logSwapQuoteFetch', SwapEventName.SWAP_QUOTE_FETCH, {
        chainId,
        // we explicitly log it here to show on Datadog dashboard
        chainLabel: getChainLabel(chainId),
        isQuickRoute,
        ...performanceMetrics,
    });
}
export function tradeRoutingToFillType({ routing, indicative, }) {
    if (indicative) {
        return 'none';
    }
    switch (routing) {
        case Routing.DUTCH_V3:
            return 'uniswap_x_v3';
        case Routing.DUTCH_V2:
            return 'uniswap_x_v2';
        case Routing.DUTCH_LIMIT:
            return 'uniswap_x';
        case Routing.PRIORITY:
            return 'priority_order';
        case Routing.LIMIT_ORDER:
            return 'limit_order';
        case Routing.CLASSIC:
            return 'classic';
        case Routing.BRIDGE:
            return 'bridge';
        default:
            return 'none';
    }
}
//# sourceMappingURL=analytics.js.map