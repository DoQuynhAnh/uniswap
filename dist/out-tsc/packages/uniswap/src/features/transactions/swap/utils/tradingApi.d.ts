import { MixedRouteSDK } from '@uniswap/router-sdk';
import { Currency, CurrencyAmount, TradeType } from '@uniswap/sdk-core';
import { Route as V2Route } from '@uniswap/v2-sdk';
import { Route as V3Route } from '@uniswap/v3-sdk';
import { Route as V4Route } from '@uniswap/v4-sdk';
import { DiscriminatedQuoteResponse } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { BridgeQuote, ClassicQuote, Quote, QuoteRequest, QuoteResponse, ChainId as TradingApiChainId, Urgency } from 'uniswap/src/data/tradingApi/__generated__/index';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { Trade } from 'uniswap/src/features/transactions/swap/types/trade';
import { FrontendSupportedProtocol } from 'uniswap/src/features/transactions/swap/utils/protocols';
import { CurrencyField } from 'uniswap/src/types/currency';
export declare const NATIVE_ADDRESS_FOR_TRADING_API = "0x0000000000000000000000000000000000000000";
export declare const SWAP_GAS_URGENCY_OVERRIDE: Urgency | undefined;
interface TradingApiResponseToTradeArgs {
    currencyIn: Currency;
    currencyOut: Currency;
    tradeType: TradeType;
    deadline: number | undefined;
    data: DiscriminatedQuoteResponse | undefined;
}
export declare function transformTradingApiResponseToTrade(params: TradingApiResponseToTradeArgs): Trade | null;
/**
 * Transforms a trading API quote into an array of routes that can be used to
 * create a `Trade`.
 */
export declare function computeRoutes(tokenInIsNative: boolean, tokenOutIsNative: boolean, quoteResponse?: QuoteResponse): {
    routev4: V4Route<Currency, Currency> | null;
    routev3: V3Route<Currency, Currency> | null;
    routev2: V2Route<Currency, Currency> | null;
    mixedRoute: MixedRouteSDK<Currency, Currency> | null;
    inputAmount: CurrencyAmount<Currency>;
    outputAmount: CurrencyAmount<Currency>;
}[] | undefined;
export declare function getTokenAddressFromChainForTradingApi(address: Address, chainId: UniverseChainId): string;
export declare function getTokenAddressForApi(currency: Maybe<Currency>): string | undefined;
export declare function toTradingApiSupportedChainId(chainId: Maybe<number>): TradingApiChainId | undefined;
export declare function isClassicQuote(quote?: Quote): quote is ClassicQuote;
export declare function getClassicQuoteFromResponse(quote?: QuoteResponse): ClassicQuote | undefined;
export declare function getBridgeQuoteFromResponse(quote?: QuoteResponse): BridgeQuote | undefined;
/**
 * The trade object should always have the same currencies and amounts as the form values
 * from state - to avoid bad swap submissions we should invalidate the trade object if there are mismatches.
 */
export declare function validateTrade({ trade, currencyIn, currencyOut, exactAmount, exactCurrencyField, }: {
    trade: Trade | null;
    currencyIn: Maybe<Currency>;
    currencyOut: Maybe<Currency>;
    exactAmount: Maybe<CurrencyAmount<Currency>>;
    exactCurrencyField: CurrencyField;
}): Trade<Currency, Currency, TradeType> | null;
type UseQuoteRoutingParamsArgs = {
    selectedProtocols: FrontendSupportedProtocol[] | undefined;
    tokenInChainId: UniverseChainId | undefined;
    tokenOutChainId: UniverseChainId | undefined;
    isUSDQuote?: boolean;
    isV4HookPoolsEnabled?: boolean;
};
export declare function useQuoteRoutingParams({ selectedProtocols, tokenInChainId, tokenOutChainId, isUSDQuote, isV4HookPoolsEnabled, }: UseQuoteRoutingParamsArgs): Pick<QuoteRequest, 'routingPreference' | 'protocols' | 'hooksOptions'>;
type UseQuoteSlippageParamsArgs = {
    customSlippageTolerance: number | undefined;
    tokenInChainId: UniverseChainId | undefined;
    tokenOutChainId: UniverseChainId | undefined;
    isUSDQuote?: boolean;
};
export declare function useQuoteSlippageParams({ customSlippageTolerance, tokenInChainId, tokenOutChainId, isUSDQuote, }: UseQuoteSlippageParamsArgs): Pick<QuoteRequest, 'autoSlippage' | 'slippageTolerance'> | undefined;
export declare function tradingApiToUniverseChainId(chainId?: TradingApiChainId): UniverseChainId | undefined;
export {};
//# sourceMappingURL=tradingApi.d.ts.map