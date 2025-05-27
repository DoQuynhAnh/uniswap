/**
 * Dynamic Configs
 * These should match the dynamic config's `Config Name` on Statsig
 */
export var DynamicConfigs;
(function (DynamicConfigs) {
    // Shared
    DynamicConfigs["Swap"] = "swap_config";
    DynamicConfigs["NetworkRequests"] = "network_requests";
    DynamicConfigs["Chains"] = "chains";
    // Wallet
    DynamicConfigs["HomeScreenExploreTokens"] = "home_screen_explore_tokens";
    DynamicConfigs["ForceUpgrade"] = "force_upgrade";
    DynamicConfigs["OnDeviceRecovery"] = "on_device_recovery";
    DynamicConfigs["UwuLink"] = "uwulink_config";
    DynamicConfigs["GasStrategies"] = "gas_strategy";
    DynamicConfigs["DatadogSessionSampleRate"] = "datadog_session_sample_rate";
    DynamicConfigs["DatadogIgnoredErrors"] = "datadog_ignored_errors";
    DynamicConfigs["EmbeddedWalletConfig"] = "embedded_wallet_config";
    // Web
    DynamicConfigs["AstroChain"] = "astro_chain";
    DynamicConfigs["BlockedNftCollections"] = "blocked_nft_collections";
    DynamicConfigs["ExternallyConnectableExtension"] = "externally_connectable_extension";
    DynamicConfigs["LPConfig"] = "lp_config";
})(DynamicConfigs || (DynamicConfigs = {}));
// Config values go here for easy access
// Shared
export var SwapConfigKey;
(function (SwapConfigKey) {
    SwapConfigKey["AverageL1BlockTimeMs"] = "averageL1BlockTimeMs";
    SwapConfigKey["AverageL2BlockTimeMs"] = "averageL2BlockTimeMs";
    SwapConfigKey["TradingApiSwapRequestMs"] = "tradingApiSwapRequestMs";
    SwapConfigKey["MonadTestnetPollingIntervalMs"] = "monadTestnetPollingIntervalMs";
    SwapConfigKey["MinAutoSlippageToleranceL2"] = "minAutoSlippageToleranceL2";
    SwapConfigKey["EthSwapMinGasAmount"] = "ethSwapMinGasAmount";
    SwapConfigKey["EthSendMinGasAmount"] = "ethSendMinGasAmount";
    SwapConfigKey["PolygonSwapMinGasAmount"] = "polygonSwapMinGasAmount";
    SwapConfigKey["PolygonSendMinGasAmount"] = "polygonSendMinGasAmount";
    SwapConfigKey["AvalancheSwapMinGasAmount"] = "avalancheSwapMinGasAmount";
    SwapConfigKey["AvalancheSendMinGasAmount"] = "avalancheSendMinGasAmount";
    SwapConfigKey["CeloSwapMinGasAmount"] = "celoSwapMinGasAmount";
    SwapConfigKey["CeloSendMinGasAmount"] = "celoSendMinGasAmount";
    SwapConfigKey["MonSwapMinGasAmount"] = "monSwapMinGasAmount";
    SwapConfigKey["MonSendMinGasAmount"] = "monSendMinGasAmount";
    SwapConfigKey["GenericL2SwapMinGasAmount"] = "genericL2SwapMinGasAmount";
    SwapConfigKey["GenericL2SendMinGasAmount"] = "genericL2SendMinGasAmount";
    SwapConfigKey["LowBalanceWarningGasPercentage"] = "lowBalanceWarningGasPercentage";
})(SwapConfigKey || (SwapConfigKey = {}));
export var NetworkRequestsConfigKey;
(function (NetworkRequestsConfigKey) {
    NetworkRequestsConfigKey["BalanceMaxRefetchAttempts"] = "balanceMaxRefetchAttempts";
})(NetworkRequestsConfigKey || (NetworkRequestsConfigKey = {}));
export var ChainsConfigKey;
(function (ChainsConfigKey) {
    ChainsConfigKey["OrderedChainIds"] = "orderedChainIds";
    ChainsConfigKey["NewChainIds"] = "newChainIds";
})(ChainsConfigKey || (ChainsConfigKey = {}));
// Wallet
export var ForceUpgradeConfigKey;
(function (ForceUpgradeConfigKey) {
    ForceUpgradeConfigKey["Status"] = "status";
    ForceUpgradeConfigKey["Translations"] = "translations";
})(ForceUpgradeConfigKey || (ForceUpgradeConfigKey = {}));
export var EmbeddedWalletConfigKey;
(function (EmbeddedWalletConfigKey) {
    EmbeddedWalletConfigKey["BaseUrl"] = "baseUrl";
})(EmbeddedWalletConfigKey || (EmbeddedWalletConfigKey = {}));
export var HomeScreenExploreTokensConfigKey;
(function (HomeScreenExploreTokensConfigKey) {
    HomeScreenExploreTokensConfigKey["EthChainId"] = "ethChainId";
    HomeScreenExploreTokensConfigKey["Tokens"] = "tokens";
})(HomeScreenExploreTokensConfigKey || (HomeScreenExploreTokensConfigKey = {}));
export var OnDeviceRecoveryConfigKey;
(function (OnDeviceRecoveryConfigKey) {
    OnDeviceRecoveryConfigKey["AppLoadingTimeoutMs"] = "appLoadingTimeoutMs";
    OnDeviceRecoveryConfigKey["MaxMnemonicsToLoad"] = "maxMnemonicsToLoad";
})(OnDeviceRecoveryConfigKey || (OnDeviceRecoveryConfigKey = {}));
export var UwuLinkConfigKey;
(function (UwuLinkConfigKey) {
    UwuLinkConfigKey["Allowlist"] = "allowlist";
})(UwuLinkConfigKey || (UwuLinkConfigKey = {}));
export var DatadogIgnoredErrorsConfigKey;
(function (DatadogIgnoredErrorsConfigKey) {
    DatadogIgnoredErrorsConfigKey["Errors"] = "errors";
})(DatadogIgnoredErrorsConfigKey || (DatadogIgnoredErrorsConfigKey = {}));
export var DatadogSessionSampleRateKey;
(function (DatadogSessionSampleRateKey) {
    DatadogSessionSampleRateKey["Rate"] = "rate";
})(DatadogSessionSampleRateKey || (DatadogSessionSampleRateKey = {}));
export var BlockedNftCollectionsConfigKey;
(function (BlockedNftCollectionsConfigKey) {
    BlockedNftCollectionsConfigKey["BlocklistedCollections"] = "blocklistedCollections";
})(BlockedNftCollectionsConfigKey || (BlockedNftCollectionsConfigKey = {}));
export var ExternallyConnectableExtensionConfigKey;
(function (ExternallyConnectableExtensionConfigKey) {
    ExternallyConnectableExtensionConfigKey["ExtensionId"] = "extensionId";
})(ExternallyConnectableExtensionConfigKey || (ExternallyConnectableExtensionConfigKey = {}));
// Web
export var QuickRouteChainsConfigKey;
(function (QuickRouteChainsConfigKey) {
    QuickRouteChainsConfigKey["Chains"] = "quick_route_chains";
})(QuickRouteChainsConfigKey || (QuickRouteChainsConfigKey = {}));
export var AstroChainConfigKey;
(function (AstroChainConfigKey) {
    AstroChainConfigKey["Url"] = "url";
})(AstroChainConfigKey || (AstroChainConfigKey = {}));
export var LPConfigKey;
(function (LPConfigKey) {
    LPConfigKey["DefaultSlippage"] = "defaultSlippage";
    LPConfigKey["V4SlippageOverride"] = "v4SlippageOverride";
})(LPConfigKey || (LPConfigKey = {}));
//# sourceMappingURL=configs.js.map