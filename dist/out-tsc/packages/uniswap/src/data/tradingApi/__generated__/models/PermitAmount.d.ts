/**
 * For Uniswap Protocols (v2, v3, v4) swaps, specify the input token spend allowance (e.g. quantity) to be set in the permit. `FULL` can be used to specify an unlimited token quantity, and may prevent the wallet from needing to sign another permit for the same token in the future. `EXACT` can be used to specify the exact input token quantity for this request. Defaults to `FULL`.
 */
export declare enum PermitAmount {
    FULL = "FULL",
    EXACT = "EXACT"
}
//# sourceMappingURL=PermitAmount.d.ts.map