/* eslint-disable max-lines */
import { BigNumber } from '@ethersproject/bignumber';
import { MixedRouteSDK } from '@uniswap/router-sdk';
import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { Pair, Route as V2Route } from '@uniswap/v2-sdk';
import { Pool as V3Pool, Route as V3Route } from '@uniswap/v3-sdk';
import { Pool as V4Pool, Route as V4Route } from '@uniswap/v4-sdk';
import { useMemo } from 'react';
import { AutoSlippage, HooksOptions, ProtocolItems, Routing, RoutingPreference, ChainId as TradingApiChainId, Urgency, } from 'uniswap/src/data/tradingApi/__generated__/index';
import { getChainInfo } from 'uniswap/src/features/chains/chainInfo';
import { isUniverseChainId } from 'uniswap/src/features/chains/types';
import { isL2ChainId } from 'uniswap/src/features/chains/utils';
import { DynamicConfigs, SwapConfigKey } from 'uniswap/src/features/gating/configs';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useDynamicConfigValue, useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { ValueType, getCurrencyAmount } from 'uniswap/src/features/tokens/getCurrencyAmount';
import { BridgeTrade, ClassicTrade, PriorityOrderTrade, UniswapXV2Trade, UniswapXV3Trade, } from 'uniswap/src/features/transactions/swap/types/trade';
import { DEFAULT_PROTOCOL_OPTIONS, useProtocolsForChain, } from 'uniswap/src/features/transactions/swap/utils/protocols';
import { areAddressesEqual } from 'uniswap/src/utils/addresses';
import { currencyId } from 'uniswap/src/utils/currencyId';
import { logger } from 'utilities/src/logger/logger';
import { isInterface } from 'utilities/src/platform';
export const NATIVE_ADDRESS_FOR_TRADING_API = '0x0000000000000000000000000000000000000000';
export const SWAP_GAS_URGENCY_OVERRIDE = isInterface ? Urgency.NORMAL : undefined; // on Interface, use a normal urgency, else use TradingAPI default
export function transformTradingApiResponseToTrade(params) {
    var _a, _b, _c, _d, _e;
    const { currencyIn, currencyOut, tradeType, deadline, data } = params;
    switch (data === null || data === void 0 ? void 0 : data.routing) {
        case Routing.CLASSIC: {
            const routes = computeRoutes(currencyIn.isNative, currencyOut.isNative, data);
            if (!routes || !deadline) {
                return null;
            }
            return new ClassicTrade({
                quote: data,
                deadline,
                v2Routes: (_a = routes === null || routes === void 0 ? void 0 : routes.flatMap((r) => ((r === null || r === void 0 ? void 0 : r.routev2) ? { ...r, routev2: r.routev2 } : []))) !== null && _a !== void 0 ? _a : [],
                v3Routes: (_b = routes === null || routes === void 0 ? void 0 : routes.flatMap((r) => ((r === null || r === void 0 ? void 0 : r.routev3) ? { ...r, routev3: r.routev3 } : []))) !== null && _b !== void 0 ? _b : [],
                v4Routes: (_c = routes === null || routes === void 0 ? void 0 : routes.flatMap((r) => ((r === null || r === void 0 ? void 0 : r.routev4) ? { ...r, routev4: r.routev4 } : []))) !== null && _c !== void 0 ? _c : [],
                mixedRoutes: (_d = routes === null || routes === void 0 ? void 0 : routes.flatMap((r) => ((r === null || r === void 0 ? void 0 : r.mixedRoute) ? { ...r, mixedRoute: r.mixedRoute } : []))) !== null && _d !== void 0 ? _d : [],
                tradeType,
            });
        }
        case Routing.PRIORITY:
        case Routing.DUTCH_V3:
        case Routing.DUTCH_V2: {
            const { quote } = data;
            // UniswapX backend response does not include decimals; local currencies must be passed to UniswapXTrade rather than tokens parsed from the api response.
            // We validate the token addresses match to ensure the trade is valid.
            if (!areAddressesEqual(currencyIn.wrapped.address, quote.orderInfo.input.token) || // UniswapX quotes should use wrapped native as input, rather than the native token
                !areAddressesEqual(getTokenAddressForApi(currencyOut), (_e = quote.orderInfo.outputs[0]) === null || _e === void 0 ? void 0 : _e.token)) {
                return null;
            }
            const isPriority = data.routing === Routing.PRIORITY;
            if (isPriority) {
                return new PriorityOrderTrade({ quote: data, currencyIn, currencyOut, tradeType });
            }
            else if (data.routing === Routing.DUTCH_V2) {
                return new UniswapXV2Trade({ quote: data, currencyIn, currencyOut, tradeType });
            }
            else {
                return new UniswapXV3Trade({ quote: data, currencyIn, currencyOut, tradeType });
            }
        }
        case Routing.BRIDGE: {
            return new BridgeTrade({ quote: data, currencyIn, currencyOut, tradeType });
        }
        default: {
            return null;
        }
    }
}
/**
 * Transforms a trading API quote into an array of routes that can be used to
 * create a `Trade`.
 */
export function computeRoutes(tokenInIsNative, tokenOutIsNative, quoteResponse) {
    var _a, _b, _c, _d, _e, _f;
    // TODO : remove quote type check for Uniswap X integration
    if (!quoteResponse || !quoteResponse.quote || !isClassicQuote(quoteResponse.quote)) {
        return undefined;
    }
    const { quote } = quoteResponse;
    if (!quote.route || ((_a = quote.route) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        return undefined;
    }
    const tokenIn = (_c = (_b = quote.route[0]) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.tokenIn;
    const tokenOut = (_f = (_d = quote.route[0]) === null || _d === void 0 ? void 0 : _d[((_e = quote.route[0]) === null || _e === void 0 ? void 0 : _e.length) - 1]) === null || _f === void 0 ? void 0 : _f.tokenOut;
    if (!tokenIn || !tokenOut) {
        throw new Error('Expected both tokenIn and tokenOut to be present');
    }
    if (!tokenIn.chainId ||
        tokenOut.chainId === undefined ||
        !tokenIn.address ||
        !tokenOut.address ||
        !tokenIn.decimals ||
        !tokenOut.decimals) {
        throw new Error('Expected all token properties to be present');
    }
    const parsedCurrencyIn = tokenInIsNative ? NativeCurrency.onChain(tokenIn.chainId) : parseTokenApi(tokenIn);
    const parsedCurrencyOut = tokenOutIsNative ? NativeCurrency.onChain(tokenOut.chainId) : parseTokenApi(tokenOut);
    try {
        return quote.route.map((route) => {
            var _a, _b;
            if (route.length === 0) {
                throw new Error('Expected route to have at least one pair or pool');
            }
            const inputAmount = getCurrencyAmount({
                value: (_a = route[0]) === null || _a === void 0 ? void 0 : _a.amountIn,
                valueType: ValueType.Raw,
                currency: parsedCurrencyIn,
            });
            const outputAmount = getCurrencyAmount({
                value: (_b = route[route.length - 1]) === null || _b === void 0 ? void 0 : _b.amountOut,
                valueType: ValueType.Raw,
                currency: parsedCurrencyOut,
            });
            if (!inputAmount || !outputAmount) {
                throw new Error('Expected both amountIn and amountOut to be present');
            }
            const isOnlyV2 = isV2OnlyRouteApi(route);
            const isOnlyV3 = isV3OnlyRouteApi(route);
            const isOnlyV4 = isV4OnlyRouteApi(route);
            const v4Routes = route.filter((r) => r.type === 'v4-pool');
            return {
                routev4: isOnlyV4 ? new V4Route(v4Routes.map(parseV4PoolApi), parsedCurrencyIn, parsedCurrencyOut) : null,
                routev3: isOnlyV3 ? new V3Route(route.map(parseV3PoolApi), parsedCurrencyIn, parsedCurrencyOut) : null,
                routev2: isOnlyV2 ? new V2Route(route.map(parseV2PairApi), parsedCurrencyIn, parsedCurrencyOut) : null,
                mixedRoute: !isOnlyV3 && !isOnlyV2 && !isOnlyV4
                    ? new MixedRouteSDK(route.map(parseMixedRouteApi), parsedCurrencyIn, parsedCurrencyOut)
                    : null,
                inputAmount,
                outputAmount,
            };
        });
    }
    catch (e) {
        logger.error(e, {
            tags: { file: 'tradingApi.ts', function: 'computeRoutes' },
            extra: {
                input: parsedCurrencyIn.address,
                output: parsedCurrencyOut.address,
                inputChainId: parsedCurrencyIn.chainId,
                outputChainId: parsedCurrencyOut.chainId,
            },
        });
        return undefined;
    }
}
function parseTokenApi(token) {
    const { address, chainId, decimals, symbol, buyFeeBps, sellFeeBps } = token;
    if (!chainId || !address || !decimals || !symbol) {
        throw new Error('Expected token to have chainId, address, decimals, and symbol');
    }
    if (address === NATIVE_ADDRESS_FOR_TRADING_API) {
        throw new Error('Cannot parse native currency as an erc20 Token');
    }
    return new Token(chainId, address, parseInt(decimals.toString(), 10), symbol, 
    /**name=*/ undefined, false, buyFeeBps ? BigNumber.from(buyFeeBps) : undefined, sellFeeBps ? BigNumber.from(sellFeeBps) : undefined);
}
function parseV4PoolApi({ fee, sqrtRatioX96, liquidity, tickCurrent, tickSpacing, hooks, tokenIn, tokenOut, }) {
    if (!tokenIn.address || !tokenOut.address || !tokenIn.chainId || !tokenOut.chainId) {
        throw new Error('Expected V4 route to have defined addresses and chainIds');
    }
    const inputIsNative = tokenIn.address === NATIVE_ADDRESS_FOR_TRADING_API;
    const outputIsNative = tokenOut.address === NATIVE_ADDRESS_FOR_TRADING_API;
    // Unlike lower protocol versions, v4 routes can involve unwrapped native tokens.
    const currencyIn = inputIsNative ? NativeCurrency.onChain(tokenIn.chainId) : parseTokenApi(tokenIn);
    const currencyOut = outputIsNative ? NativeCurrency.onChain(tokenOut.chainId) : parseTokenApi(tokenOut);
    return new V4Pool(currencyIn, currencyOut, Number(fee), Number(tickSpacing), hooks, sqrtRatioX96, liquidity, Number(tickCurrent));
}
function parseV3PoolApi({ fee, sqrtRatioX96, liquidity, tickCurrent, tokenIn, tokenOut, }) {
    if (!tokenIn || !tokenOut || !fee || !sqrtRatioX96 || !liquidity || !tickCurrent) {
        throw new Error('Expected pool values to be present');
    }
    return new V3Pool(parseTokenApi(tokenIn), parseTokenApi(tokenOut), parseInt(fee, 10), sqrtRatioX96, liquidity, parseInt(tickCurrent, 10));
}
function parseV2PairApi({ reserve0, reserve1 }) {
    if (!(reserve0 === null || reserve0 === void 0 ? void 0 : reserve0.token) || !(reserve1 === null || reserve1 === void 0 ? void 0 : reserve1.token) || !reserve0.quotient || !reserve1.quotient) {
        throw new Error('Expected pool values to be present');
    }
    return new Pair(CurrencyAmount.fromRawAmount(parseTokenApi(reserve0.token), reserve0.quotient), CurrencyAmount.fromRawAmount(parseTokenApi(reserve1.token), reserve1.quotient));
}
function parseMixedRouteApi(pool) {
    if (isV2Pool(pool)) {
        return parseV2PairApi(pool);
    }
    else if (isV3Pool(pool)) {
        return parseV3PoolApi(pool);
    }
    else if (isV4Pool(pool)) {
        return parseV4PoolApi(pool);
    }
    throw new Error('Invalid pool type');
}
function isV2Pool(pool) {
    return pool.type === 'v2-pool';
}
function isV3Pool(pool) {
    return pool.type === 'v3-pool';
}
function isV4Pool(pool) {
    return pool.type === 'v4-pool';
}
function isV2OnlyRouteApi(route) {
    return route.every(isV2Pool);
}
function isV3OnlyRouteApi(route) {
    return route.every(isV3Pool);
}
function isV4OnlyRouteApi(route) {
    return route.every(isV4Pool);
}
export function getTokenAddressFromChainForTradingApi(address, chainId) {
    // For native currencies, we need to map to 0x0000000000000000000000000000000000000000
    if (address === getChainInfo(chainId).nativeCurrency.address) {
        return NATIVE_ADDRESS_FOR_TRADING_API;
    }
    return address;
}
export function getTokenAddressForApi(currency) {
    if (!currency) {
        return undefined;
    }
    return currency.isNative ? NATIVE_ADDRESS_FOR_TRADING_API : currency.address;
}
const SUPPORTED_TRADING_API_CHAIN_IDS = Object.values(TradingApiChainId).filter((value) => typeof value === 'number');
// Parse any chain id to check if its supported by the API ChainId type
function isTradingApiSupportedChainId(chainId) {
    if (!chainId) {
        return false;
    }
    return Object.values(SUPPORTED_TRADING_API_CHAIN_IDS).includes(chainId);
}
export function toTradingApiSupportedChainId(chainId) {
    if (!chainId || !isTradingApiSupportedChainId(chainId)) {
        return undefined;
    }
    return chainId;
}
// Classic quote is a non-uniswap x quote. Forces the type on api responses.
// `route` field doesnt exist on uniswap x quote response, so can be used as the custom type gaurd.
// TODO:tradingapi MOB-2438 https://linear.app/uniswap/issue/MOB-2438/uniswap-x-clean-forced-types-for-classic-quotes
export function isClassicQuote(quote) {
    if (!quote) {
        return false;
    }
    return 'route' in quote;
}
// TODO:tradingapi MOB-2438 https://linear.app/uniswap/issue/MOB-2438/uniswap-x-clean-forced-types-for-classic-quotes
export function getClassicQuoteFromResponse(quote) {
    return isClassicQuote(quote === null || quote === void 0 ? void 0 : quote.quote) ? quote.quote : undefined;
}
export function getBridgeQuoteFromResponse(quote) {
    return (quote === null || quote === void 0 ? void 0 : quote.routing) === Routing.BRIDGE ? quote.quote : undefined;
}
/**
 * The trade object should always have the same currencies and amounts as the form values
 * from state - to avoid bad swap submissions we should invalidate the trade object if there are mismatches.
 */
export function validateTrade({ trade, currencyIn, currencyOut, exactAmount, exactCurrencyField, }) {
    // skip if no valid trade object
    if (!trade || !currencyIn || !currencyOut || !exactAmount) {
        return null;
    }
    const inputsMatch = areAddressesEqual(currencyIn.wrapped.address, trade === null || trade === void 0 ? void 0 : trade.inputAmount.currency.wrapped.address);
    const outputsMatch = areAddressesEqual(currencyOut.wrapped.address, trade.outputAmount.currency.wrapped.address);
    const tokenAddressesMatch = inputsMatch && outputsMatch;
    // TODO(WEB-5132): Add validation checking that exact amount from response matches exact amount from user input
    if (!tokenAddressesMatch) {
        logger.error(new Error(`Mismatched address in swap trade`), {
            tags: { file: 'tradingApi/utils', function: 'validateTrade' },
            extra: {
                formState: {
                    currencyIdIn: currencyId(currencyIn),
                    currencyIdOut: currencyId(currencyOut),
                    exactAmount: exactAmount.toExact(),
                    exactCurrencyField,
                },
                tradeProperties: trade,
            },
        });
        return null;
    }
    return trade;
}
export function useQuoteRoutingParams({ selectedProtocols, tokenInChainId, tokenOutChainId, isUSDQuote, isV4HookPoolsEnabled = true, }) {
    const protocols = useProtocolsForChain(selectedProtocols !== null && selectedProtocols !== void 0 ? selectedProtocols : DEFAULT_PROTOCOL_OPTIONS, tokenInChainId);
    const v4HooksToggleFFEnabled = useFeatureFlag(FeatureFlags.SwapSettingsV4HooksToggle);
    return useMemo(() => {
        // for USD quotes, we avoid routing through UniswapX
        // hooksOptions should not be sent for USD quotes
        if (isUSDQuote) {
            return {
                protocols: [ProtocolItems.V2, ProtocolItems.V3, ProtocolItems.V4],
            };
        }
        // for bridging, we want to only return BEST_PRICE
        if (tokenInChainId !== tokenOutChainId) {
            return { routingPreference: RoutingPreference.BEST_PRICE };
        }
        if (!v4HooksToggleFFEnabled) {
            return { protocols };
        }
        else {
            let finalProtocols = [...protocols];
            let hooksOptions;
            if (isV4HookPoolsEnabled) {
                if (!protocols.includes(ProtocolItems.V4)) {
                    finalProtocols = [...protocols, ProtocolItems.V4]; // we need to re-add v4 to protocols if v4 hooks is toggled on
                    hooksOptions = HooksOptions.V4_HOOKS_ONLY;
                }
                else {
                    hooksOptions = HooksOptions.V4_HOOKS_INCLUSIVE;
                }
            }
            else {
                hooksOptions = HooksOptions.V4_NO_HOOKS;
            }
            return { protocols: finalProtocols, hooksOptions };
        }
    }, [isUSDQuote, tokenInChainId, tokenOutChainId, protocols, isV4HookPoolsEnabled, v4HooksToggleFFEnabled]);
}
// Used if dynamic config value fails to resolve
const DEFAULT_L2_SLIPPAGE_TOLERANCE_VALUE = 2.5;
export function useQuoteSlippageParams({ customSlippageTolerance, tokenInChainId, tokenOutChainId, isUSDQuote, }) {
    const minAutoSlippageToleranceL2 = useDynamicConfigValue(DynamicConfigs.Swap, SwapConfigKey.MinAutoSlippageToleranceL2, DEFAULT_L2_SLIPPAGE_TOLERANCE_VALUE);
    return useMemo(() => {
        if (customSlippageTolerance) {
            return { slippageTolerance: customSlippageTolerance };
        }
        // For bridging or USD quotes, we do not apply any slippage settings
        if (tokenInChainId !== tokenOutChainId || isUSDQuote) {
            return undefined;
        }
        // L2 chains should use the minimum slippage tolerance defined in the dynamic config
        if (isL2ChainId(tokenInChainId)) {
            return { slippageTolerance: minAutoSlippageToleranceL2 };
        }
        // Otherwise, use an auto slippage tolerance calculated on the backend
        return { autoSlippage: AutoSlippage.DEFAULT };
    }, [customSlippageTolerance, isUSDQuote, minAutoSlippageToleranceL2, tokenInChainId, tokenOutChainId]);
}
export function tradingApiToUniverseChainId(chainId) {
    if (!chainId) {
        return undefined;
    }
    const castedChainId = Number(chainId);
    return isUniverseChainId(castedChainId) ? castedChainId : undefined;
}
//# sourceMappingURL=tradingApi.js.map