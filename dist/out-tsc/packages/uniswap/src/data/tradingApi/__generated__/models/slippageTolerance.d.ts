/**
 * The slippage tollerace as a percentage up to a maximum of two decimal places. For Uniswap Protocols (v2, v3, v4), the slippage tolerance is the maximum amount the price can change between the time the transaction is submitted and the time it is executed. The slippage tolerance is a percentage of the total value of the swap.
 *
 * When submitting a quote, note that slippage tolerance works differently in UniswapX swaps where it does not set a limit on the Spread in an order. See [here](https://uniswap-docs.readme.io/reference/faqs#why-do-the-uniswapx-quotes-have-more-slippage-than-the-tolerance-i-set) for more information.
 *
 * Note that if the trade type is `EXACT_INPUT`, then the slippage is in terms of the output token. If the trade type is `EXACT_OUTPUT`, then the slippage is in terms of the input token.
 *
 * When submitting a request, `slippageTolerance` may not be set when `autoSlippage` is defined. One of `slippageTolerance` or `autoSlippage` must be defined.
 */
export type slippageTolerance = number;
//# sourceMappingURL=slippageTolerance.d.ts.map