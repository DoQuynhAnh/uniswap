export var WarningSeverity;
(function (WarningSeverity) {
    WarningSeverity[WarningSeverity["None"] = 0] = "None";
    WarningSeverity[WarningSeverity["Low"] = 1] = "Low";
    WarningSeverity[WarningSeverity["Medium"] = 5] = "Medium";
    WarningSeverity[WarningSeverity["High"] = 10] = "High";
    WarningSeverity[WarningSeverity["Blocked"] = 11] = "Blocked";
})(WarningSeverity || (WarningSeverity = {}));
export var WarningAction;
(function (WarningAction) {
    WarningAction["None"] = "none";
    // prevents users from continuing to the review screen
    WarningAction["DisableReview"] = "disable_review";
    // allows users to continue to review screen, but requires them to
    // acknowledge a popup warning before submitting
    WarningAction["WarnBeforeSubmit"] = "warn_before_submit";
    // same as WarnBeforeSubmit but pops up after recipient is selected (send only)
    WarningAction["WarnAfterRecipientSelect"] = "warn_after_recipient_select";
    // prevents submission altogether
    WarningAction["DisableSubmit"] = "disable_submit";
})(WarningAction || (WarningAction = {}));
export var WarningLabel;
(function (WarningLabel) {
    WarningLabel["EnterLargerAmount"] = "enter_larger_amount";
    WarningLabel["InsufficientFunds"] = "insufficient_funds";
    WarningLabel["InsufficientGasFunds"] = "insufficient_gas_funds";
    WarningLabel["FormIncomplete"] = "form_incomplete";
    WarningLabel["UnsupportedNetwork"] = "unsupported_network";
    WarningLabel["PriceImpactMedium"] = "price_impact_medium";
    WarningLabel["PriceImpactHigh"] = "price_impact_high";
    WarningLabel["LowLiquidity"] = "low_liquidity";
    WarningLabel["SwapRouterError"] = "swap_router_error";
    WarningLabel["NoRoutesError"] = "no_routes_error";
    WarningLabel["RateLimit"] = "rate_limit";
    WarningLabel["RecipientZeroBalances"] = "recipient_zero_balances";
    WarningLabel["RecipientNewAddress"] = "recipient_new_address";
    WarningLabel["RecipientIsSmartContract"] = "recipient_is_smart_contract";
    WarningLabel["ViewOnlyAccount"] = "view_only_account";
    WarningLabel["NetworkError"] = "network_error";
    WarningLabel["BlockedToken"] = "blocked_token";
    WarningLabel["NoQuotesFound"] = "no_quotes_found";
})(WarningLabel || (WarningLabel = {}));
//# sourceMappingURL=types.js.map