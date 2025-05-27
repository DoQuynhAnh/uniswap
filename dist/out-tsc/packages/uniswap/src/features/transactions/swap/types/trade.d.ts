import { MixedRouteSDK, Trade as RouterSDKTrade } from '@uniswap/router-sdk';
import { Currency, CurrencyAmount, Percent, Price, TradeType } from '@uniswap/sdk-core';
import { V2DutchOrderTrade, PriorityOrderTrade as IPriorityOrderTrade, V3DutchOrderTrade } from '@uniswap/uniswapx-sdk';
import { Route as V2RouteSDK } from '@uniswap/v2-sdk';
import { Route as V3RouteSDK } from '@uniswap/v3-sdk';
import { Route as V4RouteSDK } from '@uniswap/v4-sdk';
import { BridgeQuoteResponse, ClassicQuoteResponse, DutchQuoteResponse, DutchV3QuoteResponse, PriorityQuoteResponse } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { providers } from 'ethers/lib/ethers';
import { PollingInterval } from 'uniswap/src/constants/misc';
import { IndicativeQuoteResponse, Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { AccountMeta } from 'uniswap/src/features/accounts/types';
import { GasFeeEstimates } from 'uniswap/src/features/transactions/types/transactionDetails';
import { FrontendSupportedProtocol } from 'uniswap/src/features/transactions/swap/utils/protocols';
export type UniswapXTrade = UniswapXV2Trade | UniswapXV3Trade | PriorityOrderTrade;
export declare class UniswapXV2Trade extends V2DutchOrderTrade<Currency, Currency, TradeType> {
    readonly routing = Routing.DUTCH_V2;
    readonly quote: DutchQuoteResponse;
    readonly slippageTolerance: number;
    readonly swapFee?: SwapFee;
    readonly indicative = false;
    constructor({ quote, currencyIn, currencyOut, tradeType, }: {
        quote: DutchQuoteResponse;
        currencyIn: Currency;
        currencyOut: Currency;
        tradeType: TradeType;
    });
    get needsWrap(): boolean;
    get deadline(): number;
    get inputTax(): Percent;
    get outputTax(): Percent;
    get quoteOutputAmount(): CurrencyAmount<Currency>;
    get quoteOutputAmountUserWillReceive(): CurrencyAmount<Currency>;
}
export declare class UniswapXV3Trade extends V3DutchOrderTrade<Currency, Currency, TradeType> {
    readonly routing = Routing.DUTCH_V3;
    readonly quote: DutchV3QuoteResponse;
    readonly slippageTolerance: number;
    readonly swapFee?: SwapFee;
    readonly indicative = false;
    constructor({ quote, currencyIn, currencyOut, tradeType, }: {
        quote: DutchV3QuoteResponse;
        currencyIn: Currency;
        currencyOut: Currency;
        tradeType: TradeType;
    });
    get needsWrap(): boolean;
    get deadline(): number;
    get inputTax(): Percent;
    get outputTax(): Percent;
    get quoteOutputAmount(): CurrencyAmount<Currency>;
    get quoteOutputAmountUserWillReceive(): CurrencyAmount<Currency>;
}
export declare class PriorityOrderTrade extends IPriorityOrderTrade<Currency, Currency, TradeType> {
    readonly routing = Routing.PRIORITY;
    readonly quote: PriorityQuoteResponse;
    readonly slippageTolerance: number;
    readonly swapFee?: SwapFee;
    readonly indicative = false;
    constructor({ quote, currencyIn, currencyOut, tradeType, }: {
        quote: PriorityQuoteResponse;
        currencyIn: Currency;
        currencyOut: Currency;
        tradeType: TradeType;
    });
    get needsWrap(): boolean;
    get deadline(): number;
    get inputTax(): Percent;
    get outputTax(): Percent;
    get quoteOutputAmount(): CurrencyAmount<Currency>;
    get quoteOutputAmountUserWillReceive(): CurrencyAmount<Currency>;
}
export declare class ClassicTrade<TInput extends Currency = Currency, TOutput extends Currency = Currency, TTradeType extends TradeType = TradeType> extends RouterSDKTrade<TInput, TOutput, TTradeType> {
    readonly quote: ClassicQuoteResponse;
    readonly routing = Routing.CLASSIC;
    readonly deadline: number;
    readonly slippageTolerance: number;
    readonly swapFee?: SwapFee;
    readonly indicative = false;
    constructor({ quote, deadline, ...routes }: {
        readonly quote: ClassicQuoteResponse;
        readonly deadline: number;
        readonly v2Routes: {
            routev2: V2RouteSDK<TInput, TOutput>;
            inputAmount: CurrencyAmount<TInput>;
            outputAmount: CurrencyAmount<TOutput>;
        }[];
        readonly v3Routes: {
            routev3: V3RouteSDK<TInput, TOutput>;
            inputAmount: CurrencyAmount<TInput>;
            outputAmount: CurrencyAmount<TOutput>;
        }[];
        readonly mixedRoutes: {
            mixedRoute: MixedRouteSDK<TInput, TOutput>;
            inputAmount: CurrencyAmount<TInput>;
            outputAmount: CurrencyAmount<TOutput>;
        }[];
        readonly v4Routes: {
            routev4: V4RouteSDK<TInput, TOutput>;
            inputAmount: CurrencyAmount<TInput>;
            outputAmount: CurrencyAmount<TOutput>;
        }[];
        readonly tradeType: TTradeType;
    });
    private _cachedPriceImpact?;
    get priceImpact(): Percent;
    get quoteOutputAmount(): CurrencyAmount<Currency>;
    get quoteOutputAmountUserWillReceive(): CurrencyAmount<Currency>;
}
export type Trade<TInput extends Currency = Currency, TOutput extends Currency = Currency, TTradeType extends TradeType = TradeType> = ClassicTrade<TInput, TOutput, TTradeType> | UniswapXTrade | BridgeTrade;
export type TradeWithSlippage = Exclude<Trade, BridgeTrade>;
export interface TradeWithStatus<T extends Trade = Trade> {
    isLoading: boolean;
    isFetching?: boolean;
    error: Error | null;
    trade: T | null;
    indicativeTrade: IndicativeTrade | undefined;
    isIndicativeLoading: boolean;
    gasEstimates: GasFeeEstimates | undefined;
}
export interface UseTradeArgs {
    account?: AccountMeta;
    amountSpecified: Maybe<CurrencyAmount<Currency>>;
    otherCurrency: Maybe<Currency>;
    tradeType: TradeType;
    pollInterval?: PollingInterval;
    customSlippageTolerance?: number;
    isUSDQuote?: boolean;
    sendPortionEnabled?: boolean;
    skip?: boolean;
    selectedProtocols?: FrontendSupportedProtocol[];
    isDebouncing?: boolean;
    generatePermitAsTransaction?: boolean;
    isV4HookPoolsEnabled?: boolean;
}
export type SwapFee = {
    recipient?: string;
    percent: Percent;
    amount: string;
};
export type SwapFeeInfo = {
    noFeeCharged: boolean;
    formattedPercent: string;
    formattedAmount: string;
    formattedAmountFiat?: string;
};
export declare enum ApprovalAction {
    None = "none",
    Permit2Approve = "permit2-approve",
    RevokeAndPermit2Approve = "revoke-and-permit2-approve",
    Unknown = "unknown"
}
export type TokenApprovalInfo = {
    action: ApprovalAction.None | ApprovalAction.Unknown;
    txRequest: null;
    cancelTxRequest: null;
} | {
    action: ApprovalAction.Permit2Approve;
    txRequest: providers.TransactionRequest;
    cancelTxRequest: null;
} | {
    action: ApprovalAction.RevokeAndPermit2Approve;
    txRequest: providers.TransactionRequest;
    cancelTxRequest: providers.TransactionRequest;
};
type ValidatedIndicativeQuoteToken = Required<IndicativeQuoteResponse["input"]>;
export type ValidatedIndicativeQuoteResponse = IndicativeQuoteResponse & {
    input: ValidatedIndicativeQuoteToken;
    output: ValidatedIndicativeQuoteToken;
};
export declare function validateIndicativeQuoteResponse(response: IndicativeQuoteResponse): ValidatedIndicativeQuoteResponse | undefined;
export declare class IndicativeTrade {
    quote: ValidatedIndicativeQuoteResponse;
    inputAmount: CurrencyAmount<Currency>;
    outputAmount: CurrencyAmount<Currency>;
    executionPrice: Price<Currency, Currency>;
    swapFee: undefined;
    inputTax: undefined;
    outputTax: undefined;
    slippageTolerance?: number;
    readonly indicative = true;
    constructor({ quote, currencyIn, currencyOut, slippageTolerance }: {
        quote: ValidatedIndicativeQuoteResponse;
        currencyIn: Currency;
        currencyOut: Currency;
        slippageTolerance?: number;
    });
    get quoteOutputAmount(): CurrencyAmount<Currency>;
    get quoteOutputAmountUserWillReceive(): CurrencyAmount<Currency>;
}
export declare class BridgeTrade {
    quote: BridgeQuoteResponse;
    inputAmount: CurrencyAmount<Currency>;
    outputAmount: CurrencyAmount<Currency>;
    executionPrice: Price<Currency, Currency>;
    tradeType: TradeType;
    readonly routing = Routing.BRIDGE;
    readonly indicative = false;
    readonly swapFee?: SwapFee;
    readonly inputTax: Percent;
    readonly outputTax: Percent;
    readonly slippageTolerance: undefined;
    readonly priceImpact: undefined;
    readonly deadline: undefined;
    constructor({ quote, currencyIn, currencyOut, tradeType }: {
        quote: BridgeQuoteResponse;
        currencyIn: Currency;
        currencyOut: Currency;
        tradeType: TradeType;
    });
    worstExecutionPrice(_threshold: Percent): Price<Currency, Currency>;
    maximumAmountIn(_slippageTolerance: Percent, _amountIn?: CurrencyAmount<Currency>): CurrencyAmount<Currency>;
    minimumAmountOut(_slippageTolerance: Percent, _amountOut?: CurrencyAmount<Currency>): CurrencyAmount<Currency>;
    get quoteOutputAmount(): CurrencyAmount<Currency>;
    get quoteOutputAmountUserWillReceive(): CurrencyAmount<Currency>;
}
export {};
//# sourceMappingURL=trade.d.ts.map