import { SwappableTokensParams } from 'uniswap/src/data/apiClients/tradingApi/useTradingApiSwappableTokensQuery';
import { ApprovalRequest, ApprovalResponse, BridgeQuote, ChainId, CheckApprovalLPRequest, CheckApprovalLPResponse, ClaimLPFeesRequest, ClaimLPFeesResponse, ClaimLPRewardsRequest, ClaimLPRewardsResponse, ClassicQuote, CreateLPPositionRequest, CreateLPPositionResponse, CreateSwap5792Request, CreateSwap5792Response, CreateSwap7702Request, CreateSwap7702Response, CreateSwapRequest, CreateSwapResponse, DecreaseLPPositionRequest, DecreaseLPPositionResponse, DutchQuoteV2, DutchQuoteV3, Encode7702ResponseBody, GetOrdersResponse, GetSwappableTokensResponse, GetSwapsResponse, IncreaseLPPositionRequest, IncreaseLPPositionResponse, IndicativeQuoteRequest, IndicativeQuoteResponse, MigrateLPPositionRequest, MigrateLPPositionResponse, OrderRequest, OrderResponse, PriorityQuote, QuoteRequest, QuoteResponse, Routing, TransactionHash, WalletCheckDelegationRequestBody, WalletCheckDelegationResponseBody, WalletEncode7702RequestBody } from 'uniswap/src/data/tradingApi/__generated__';
export type DiscriminatedQuoteResponse = ClassicQuoteResponse | DutchQuoteResponse | DutchV3QuoteResponse | PriorityQuoteResponse | BridgeQuoteResponse;
export type DutchV3QuoteResponse = QuoteResponse & {
    quote: DutchQuoteV3;
    routing: Routing.DUTCH_V3;
};
export type DutchQuoteResponse = QuoteResponse & {
    quote: DutchQuoteV2;
    routing: Routing.DUTCH_V2;
};
export type PriorityQuoteResponse = QuoteResponse & {
    quote: PriorityQuote;
    routing: Routing.PRIORITY;
};
export type ClassicQuoteResponse = QuoteResponse & {
    quote: ClassicQuote;
    routing: Routing.CLASSIC;
};
export type BridgeQuoteResponse = QuoteResponse & {
    quote: BridgeQuote;
    routing: Routing.BRIDGE;
};
export type WithV4Flag<T> = T & {
    v4Enabled: boolean;
};
export declare const getFeatureFlaggedHeaders: () => Record<string, string>;
export declare function fetchQuote({ v4Enabled, ...params }: WithV4Flag<QuoteRequest>): Promise<DiscriminatedQuoteResponse>;
export declare function fetchIndicativeQuote(params: IndicativeQuoteRequest): Promise<IndicativeQuoteResponse>;
export declare function fetchSwap({ v4Enabled, ...params }: WithV4Flag<CreateSwapRequest>): Promise<CreateSwapResponse>;
export declare function fetchSwap5792({ v4Enabled, ...params }: WithV4Flag<CreateSwap5792Request>): Promise<CreateSwap5792Response>;
export declare function fetchSwap7702({ v4Enabled, ...params }: WithV4Flag<CreateSwap7702Request>): Promise<CreateSwap7702Response>;
export declare function fetchCheckApproval(params: ApprovalRequest): Promise<ApprovalResponse>;
export declare function submitOrder(params: OrderRequest): Promise<OrderResponse>;
export declare function fetchOrders({ orderIds }: {
    orderIds: string[];
}): Promise<GetOrdersResponse>;
export declare function fetchSwappableTokens(params: SwappableTokensParams): Promise<GetSwappableTokensResponse>;
export declare function createLpPosition(params: CreateLPPositionRequest): Promise<CreateLPPositionResponse>;
export declare function decreaseLpPosition(params: DecreaseLPPositionRequest): Promise<DecreaseLPPositionResponse>;
export declare function increaseLpPosition(params: IncreaseLPPositionRequest): Promise<IncreaseLPPositionResponse>;
export declare function checkLpApproval(params: CheckApprovalLPRequest, headers?: Record<string, string>): Promise<CheckApprovalLPResponse>;
export declare function claimLpFees(params: ClaimLPFeesRequest): Promise<ClaimLPFeesResponse>;
export declare function fetchSwaps(params: {
    txHashes: TransactionHash[];
    chainId: ChainId;
}): Promise<GetSwapsResponse>;
export declare function migrateLpPosition(params: MigrateLPPositionRequest): Promise<MigrateLPPositionResponse>;
export declare function fetchClaimLpIncentiveRewards(params: ClaimLPRewardsRequest): Promise<ClaimLPRewardsResponse>;
export declare function fetchWalletEncoding7702(params: WalletEncode7702RequestBody): Promise<Encode7702ResponseBody>;
export declare function checkWalletDelegation(params: WalletCheckDelegationRequestBody): Promise<WalletCheckDelegationResponseBody>;
//# sourceMappingURL=TradingApiClient.d.ts.map