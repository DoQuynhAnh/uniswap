import { InterfaceEventName, LiquidityEventName, MoonpayEventName, NFTEventName, SharedEventName, SwapEventName, } from '@uniswap/analytics-events';
import { ExtensionEventName, FiatOffRampEventName, FiatOnRampEventName, InstitutionTransferEventName, InterfaceEventNameLocal, MobileAppsFlyerEvents, MobileEventName, UniswapEventName, UnitagEventName, WalletEventName, } from 'uniswap/src/features/telemetry/constants';
export var DappRequestAction;
(function (DappRequestAction) {
    DappRequestAction["Accept"] = "Accept";
    DappRequestAction["Reject"] = "Reject";
})(DappRequestAction || (DappRequestAction = {}));
export var OnboardingCardLoggingName;
(function (OnboardingCardLoggingName) {
    OnboardingCardLoggingName["FundWallet"] = "fund_wallet";
    OnboardingCardLoggingName["RecoveryBackup"] = "recovery_backup";
    OnboardingCardLoggingName["ClaimUnitag"] = "claim_unitag";
    OnboardingCardLoggingName["EnablePushNotifications"] = "enable_push_notifications";
})(OnboardingCardLoggingName || (OnboardingCardLoggingName = {}));
export var DappRequestCardLoggingName;
(function (DappRequestCardLoggingName) {
    DappRequestCardLoggingName["BridgingBanner"] = "dapp_request_bridging_banner";
})(DappRequestCardLoggingName || (DappRequestCardLoggingName = {}));
export var ConnectionCardLoggingName;
(function (ConnectionCardLoggingName) {
    ConnectionCardLoggingName["ConnectionBanner"] = "connections_removed_banner";
})(ConnectionCardLoggingName || (ConnectionCardLoggingName = {}));
//# sourceMappingURL=types.js.map