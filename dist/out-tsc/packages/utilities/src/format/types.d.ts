export declare enum NumberType {
    TokenNonTx = "token-non-tx",
    TokenTx = "token-tx",
    SwapPrice = "swap-price",
    SwapTradeAmount = "swap-trade-amount",
    FiatStandard = "fiat-standard",
    FiatTokenDetails = "fiat-token-details",
    FiatTokenPrice = "fiat-token-price",
    FiatTokenStats = "fiat-token-stats",
    FiatTokenQuantity = "fiat-token-quantity",
    FiatGasPrice = "fiat-gas-price",
    PortfolioBalance = "portfolio-balance",
    NFTTokenFloorPrice = "nft-token-floor-price",
    NFTCollectionStats = "nft-collection-stats",
    Percentage = "percentage"
}
export type FiatNumberType = Extract<NumberType, NumberType.FiatTokenPrice | NumberType.FiatTokenDetails | NumberType.FiatTokenStats | NumberType.FiatTokenQuantity | NumberType.FiatGasPrice | NumberType.PortfolioBalance | NumberType.FiatStandard>;
//# sourceMappingURL=types.d.ts.map