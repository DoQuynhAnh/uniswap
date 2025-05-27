// MOB-2816: move these to analytics-events package
export var UnitagEventName;
(function (UnitagEventName) {
    UnitagEventName["UnitagBannerActionTaken"] = "Unitag Banner Action Taken";
    UnitagEventName["UnitagOnboardingActionTaken"] = "Unitag Onboarding Action Taken";
    UnitagEventName["UnitagClaimAvailabilityDisplayed"] = "Unitag Claim Availability Displayed";
    UnitagEventName["UnitagClaimed"] = "Unitag Claimed";
    UnitagEventName["UnitagMetadataUpdated"] = "Unitag Metadata Updated";
    UnitagEventName["UnitagChanged"] = "Unitag Changed";
    UnitagEventName["UnitagRemoved"] = "Unitag Removed";
})(UnitagEventName || (UnitagEventName = {}));
export var FiatOffRampEventName;
(function (FiatOffRampEventName) {
    FiatOffRampEventName["FORBuySellToggled"] = "Fiat OnRamp Buy Sell Toggled";
    FiatOffRampEventName["FiatOffRampAmountEntered"] = "Fiat OffRamp Amount Entered";
    FiatOffRampEventName["FiatOffRampTokenSelected"] = "Fiat OffRamp Token Selected";
    FiatOffRampEventName["FiatOffRampUnsupportedTokenBack"] = "Fiat OffRamp Unsupported Token Modal Back Button Pressed";
    FiatOffRampEventName["FiatOffRampUnsupportedTokenSwap"] = "Fiat OffRamp Unsupported Token Modal Swap Button Pressed";
    FiatOffRampEventName["FiatOffRampWidgetOpened"] = "Fiat OffRamp Widget Opened";
    FiatOffRampEventName["FiatOffRampWidgetCompleted"] = "Fiat OffRamp Widget Completed";
    FiatOffRampEventName["FiatOffRampFundsSent"] = "Fiat OffRamp Funds Sent";
})(FiatOffRampEventName || (FiatOffRampEventName = {}));
export var FiatOnRampEventName;
(function (FiatOnRampEventName) {
    FiatOnRampEventName["FiatOnRampAmountEntered"] = "Fiat OnRamp Amount Entered";
    FiatOnRampEventName["FiatOnRampTransactionUpdated"] = "Fiat OnRamp Transaction Updated";
    FiatOnRampEventName["FiatOnRampTokenSelected"] = "Fiat OnRamp Token Selected";
    FiatOnRampEventName["FiatOnRampWidgetOpened"] = "Fiat OnRamp Widget Opened";
})(FiatOnRampEventName || (FiatOnRampEventName = {}));
export var InstitutionTransferEventName;
(function (InstitutionTransferEventName) {
    InstitutionTransferEventName["InstitutionTransferTransactionUpdated"] = "Institution Transfer Transaction Updated";
    InstitutionTransferEventName["InstitutionTransferWidgetOpened"] = "Institution Transfer Widget Opened";
})(InstitutionTransferEventName || (InstitutionTransferEventName = {}));
//# sourceMappingURL=features.js.map