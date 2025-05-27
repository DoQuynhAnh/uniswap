export var NumberType;
(function (NumberType) {
    // used for token quantities in non-transaction contexts (e.g. portfolio balances)
    NumberType["TokenNonTx"] = "token-non-tx";
    // used for token quantities in transaction contexts (e.g. swap, send)
    NumberType["TokenTx"] = "token-tx";
    // this formatter is used for displaying swap price conversions
    // below the input/output amounts
    NumberType["SwapPrice"] = "swap-price";
    // this formatter is only used for displaying the swap trade output amount
    // in the text input boxes. Output amounts on review screen should use the above TokenTx formatter
    NumberType["SwapTradeAmount"] = "swap-trade-amount";
    // fiat number that uses standard formatting without any specific rules
    NumberType["FiatStandard"] = "fiat-standard";
    // fiat prices in any component that belongs in the Token Details flow (except for token stats)
    NumberType["FiatTokenDetails"] = "fiat-token-details";
    // fiat prices everywhere except Token Details flow
    NumberType["FiatTokenPrice"] = "fiat-token-price";
    // fiat values for market cap, TVL, volume in the Token Details screen
    NumberType["FiatTokenStats"] = "fiat-token-stats";
    // fiat price of token balances
    NumberType["FiatTokenQuantity"] = "fiat-token-quantity";
    // fiat gas prices
    NumberType["FiatGasPrice"] = "fiat-gas-price";
    // portfolio balance
    NumberType["PortfolioBalance"] = "portfolio-balance";
    // nft floor price denominated in a token (e.g, ETH)
    NumberType["NFTTokenFloorPrice"] = "nft-token-floor-price";
    // nft collection stats like number of items, holder, and sales
    NumberType["NFTCollectionStats"] = "nft-collection-stats";
    NumberType["Percentage"] = "percentage";
})(NumberType || (NumberType = {}));
//# sourceMappingURL=types.js.map