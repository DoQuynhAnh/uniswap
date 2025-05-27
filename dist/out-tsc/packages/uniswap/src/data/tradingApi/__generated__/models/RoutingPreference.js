/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The `routingPreference` specifies the preferred strategy to determine the quote. If the `routingPreference` is `BEST_PRICE`, then the quote will propose a route through the specified whitelisted protocols (or all, if none are specified) that provides the best price. When the `routingPreference` is `FASTEST`, the quote will propose the first route which is found to complete the swap. Note that the values `CLASSIC`, `UNISWAPX`, `BEST_PRICE_V2`, `UNISWAPX_V2`, `V3_ONLY`, and `V2_ONLY` are deprecated and will be removed in a future release. See the [Token Trading Workflow](https://uniswap-docs.readme.io/reference/trading-flow#migrating-from-routingpreference-to-protocols) page for more information.
 */
export var RoutingPreference;
(function (RoutingPreference) {
    RoutingPreference["BEST_PRICE"] = "BEST_PRICE";
    RoutingPreference["FASTEST"] = "FASTEST";
    RoutingPreference["CLASSIC"] = "CLASSIC";
    RoutingPreference["UNISWAPX"] = "UNISWAPX";
    RoutingPreference["BEST_PRICE_V2"] = "BEST_PRICE_V2";
    RoutingPreference["UNISWAPX_V2"] = "UNISWAPX_V2";
    RoutingPreference["V3_ONLY"] = "V3_ONLY";
    RoutingPreference["V2_ONLY"] = "V2_ONLY";
})(RoutingPreference || (RoutingPreference = {}));
//# sourceMappingURL=RoutingPreference.js.map