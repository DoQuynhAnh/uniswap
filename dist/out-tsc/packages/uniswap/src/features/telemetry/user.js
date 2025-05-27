// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { analytics } from 'utilities/src/telemetry/analytics/analytics';
/**
 * User properties tied to user rather than events
 */
export var MobileUserPropertyName;
(function (MobileUserPropertyName) {
    MobileUserPropertyName["ActiveWalletAddress"] = "active_wallet_address";
    MobileUserPropertyName["ActiveWalletType"] = "active_wallet_type";
    MobileUserPropertyName["AdvertisingId"] = "advertising_id";
    MobileUserPropertyName["AndroidPerfClass"] = "android_perf_class";
    MobileUserPropertyName["AppOpenAuthMethod"] = "app_open_auth_method";
    MobileUserPropertyName["AppVersion"] = "app_version";
    MobileUserPropertyName["Currency"] = "currency";
    MobileUserPropertyName["DarkMode"] = "is_dark_mode";
    MobileUserPropertyName["HasLoadedENS"] = "has_loaded_ens";
    MobileUserPropertyName["HasLoadedUnitag"] = "has_loaded_unitag";
    MobileUserPropertyName["IsCloudBackedUp"] = "is_cloud_backed_up";
    MobileUserPropertyName["BackupTypes"] = "backup_types";
    MobileUserPropertyName["IsHideSmallBalancesEnabled"] = "is_hide_small_balances_enabled";
    MobileUserPropertyName["IsHideSpamTokensEnabled"] = "is_hide_spam_tokens_enabled";
    MobileUserPropertyName["IsPushEnabled"] = "is_push_enabled";
    MobileUserPropertyName["Language"] = "language";
    MobileUserPropertyName["MnemonicCount"] = "mnemonic_count";
    MobileUserPropertyName["TestnetModeEnabled"] = "testnet_mode_enabled";
    MobileUserPropertyName["TransactionAuthMethod"] = "transaction_auth_method";
    MobileUserPropertyName["WalletSignerAccounts"] = "wallet_signer_accounts";
    MobileUserPropertyName["WalletSignerCount"] = "wallet_signer_count";
    MobileUserPropertyName["WalletSwapProtectionSetting"] = "wallet_swap_protection_setting";
    MobileUserPropertyName["WalletViewOnlyCount"] = "wallet_view_only_count";
    MobileUserPropertyName["WindowHeight"] = "window_height";
    MobileUserPropertyName["WindowWidth"] = "window_width";
    // alphabetize additional values.
})(MobileUserPropertyName || (MobileUserPropertyName = {}));
/**
 * User properties tied to user rather than events
 */
export var ExtensionUserPropertyName;
(function (ExtensionUserPropertyName) {
    ExtensionUserPropertyName["ActiveWalletAddress"] = "active_wallet_address";
    ExtensionUserPropertyName["ActiveWalletType"] = "active_wallet_type";
    ExtensionUserPropertyName["AppVersion"] = "app_version";
    ExtensionUserPropertyName["Currency"] = "currency";
    ExtensionUserPropertyName["DarkMode"] = "is_dark_mode";
    ExtensionUserPropertyName["BackupTypes"] = "backup_types";
    ExtensionUserPropertyName["IsHideSmallBalancesEnabled"] = "is_hide_small_balances_enabled";
    ExtensionUserPropertyName["IsHideSpamTokensEnabled"] = "is_hide_spam_tokens_enabled";
    ExtensionUserPropertyName["Language"] = "language";
    ExtensionUserPropertyName["TestnetModeEnabled"] = "testnet_mode_enabled";
    ExtensionUserPropertyName["WalletSignerAccounts"] = "wallet_signer_accounts";
    ExtensionUserPropertyName["WalletSignerCount"] = "wallet_signer_count";
    ExtensionUserPropertyName["WalletViewOnlyCount"] = "wallet_view_only_count";
    // alphabetize additional values.
})(ExtensionUserPropertyName || (ExtensionUserPropertyName = {}));
export var InterfaceUserPropertyName;
(function (InterfaceUserPropertyName) {
    InterfaceUserPropertyName["SupportsAtomicBatching"] = "supports_atomic_batching";
})(InterfaceUserPropertyName || (InterfaceUserPropertyName = {}));
export var UniswapUserPropertyName;
(function (UniswapUserPropertyName) {
    UniswapUserPropertyName["IsDelegatedEOA"] = "is_delegated_eoa";
})(UniswapUserPropertyName || (UniswapUserPropertyName = {}));
export function setUserProperty(property, value, insert) {
    analytics.setUserProperty(property, value, insert);
}
//# sourceMappingURL=user.js.map