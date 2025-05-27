import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
/**
 * Dynamic Configs
 * These should match the dynamic config's `Config Name` on Statsig
 */
export declare enum DynamicConfigs {
    Swap = "swap_config",
    NetworkRequests = "network_requests",
    Chains = "chains",
    HomeScreenExploreTokens = "home_screen_explore_tokens",
    ForceUpgrade = "force_upgrade",
    OnDeviceRecovery = "on_device_recovery",
    UwuLink = "uwulink_config",
    GasStrategies = "gas_strategy",
    DatadogSessionSampleRate = "datadog_session_sample_rate",
    DatadogIgnoredErrors = "datadog_ignored_errors",
    EmbeddedWalletConfig = "embedded_wallet_config",
    AstroChain = "astro_chain",
    BlockedNftCollections = "blocked_nft_collections",
    ExternallyConnectableExtension = "externally_connectable_extension",
    LPConfig = "lp_config"
}
export declare enum SwapConfigKey {
    AverageL1BlockTimeMs = "averageL1BlockTimeMs",
    AverageL2BlockTimeMs = "averageL2BlockTimeMs",
    TradingApiSwapRequestMs = "tradingApiSwapRequestMs",
    MonadTestnetPollingIntervalMs = "monadTestnetPollingIntervalMs",
    MinAutoSlippageToleranceL2 = "minAutoSlippageToleranceL2",
    EthSwapMinGasAmount = "ethSwapMinGasAmount",
    EthSendMinGasAmount = "ethSendMinGasAmount",
    PolygonSwapMinGasAmount = "polygonSwapMinGasAmount",
    PolygonSendMinGasAmount = "polygonSendMinGasAmount",
    AvalancheSwapMinGasAmount = "avalancheSwapMinGasAmount",
    AvalancheSendMinGasAmount = "avalancheSendMinGasAmount",
    CeloSwapMinGasAmount = "celoSwapMinGasAmount",
    CeloSendMinGasAmount = "celoSendMinGasAmount",
    MonSwapMinGasAmount = "monSwapMinGasAmount",
    MonSendMinGasAmount = "monSendMinGasAmount",
    GenericL2SwapMinGasAmount = "genericL2SwapMinGasAmount",
    GenericL2SendMinGasAmount = "genericL2SendMinGasAmount",
    LowBalanceWarningGasPercentage = "lowBalanceWarningGasPercentage"
}
export declare enum NetworkRequestsConfigKey {
    BalanceMaxRefetchAttempts = "balanceMaxRefetchAttempts"
}
export declare enum ChainsConfigKey {
    OrderedChainIds = "orderedChainIds",
    NewChainIds = "newChainIds"
}
export declare enum ForceUpgradeConfigKey {
    Status = "status",
    Translations = "translations"
}
export type ForceUpgradeStatus = 'recommended' | 'required' | 'not-required';
type SupportedLocale = `${Extract<Locale[keyof Locale], string>}`;
type ContentMessage = {
    title: string;
    description: string;
};
export type ForceUpgradeTranslations = Record<SupportedLocale, ContentMessage>;
export declare enum EmbeddedWalletConfigKey {
    BaseUrl = "baseUrl"
}
export declare enum HomeScreenExploreTokensConfigKey {
    EthChainId = "ethChainId",
    Tokens = "tokens"
}
export declare enum OnDeviceRecoveryConfigKey {
    AppLoadingTimeoutMs = "appLoadingTimeoutMs",
    MaxMnemonicsToLoad = "maxMnemonicsToLoad"
}
export declare enum UwuLinkConfigKey {
    Allowlist = "allowlist"
}
export declare enum DatadogIgnoredErrorsConfigKey {
    Errors = "errors"
}
export declare enum DatadogSessionSampleRateKey {
    Rate = "rate"
}
export declare enum BlockedNftCollectionsConfigKey {
    BlocklistedCollections = "blocklistedCollections"
}
export declare enum ExternallyConnectableExtensionConfigKey {
    ExtensionId = "extensionId"
}
export type DatadogIgnoredErrorsValType = Array<{
    messageContains: string;
    sampleRate: number;
}>;
export type DatadogSessionSampleRateValType = number;
export type GasStrategyType = 'general' | 'swap';
export type GasStrategyConditions = {
    name: string;
    chainId: number;
    types: GasStrategyType;
    isActive: boolean;
};
export type GasStrategyWithConditions = {
    strategy: GasStrategy;
    conditions: GasStrategyConditions;
};
export type GasStrategies = {
    strategies: GasStrategyWithConditions[];
};
export declare enum QuickRouteChainsConfigKey {
    Chains = "quick_route_chains"
}
export declare enum AstroChainConfigKey {
    Url = "url"
}
export declare enum LPConfigKey {
    DefaultSlippage = "defaultSlippage",
    V4SlippageOverride = "v4SlippageOverride"
}
export type DynamicConfigKeys = {
    [DynamicConfigs.Swap]: SwapConfigKey;
    [DynamicConfigs.NetworkRequests]: NetworkRequestsConfigKey;
    [DynamicConfigs.Chains]: ChainsConfigKey;
    [DynamicConfigs.HomeScreenExploreTokens]: HomeScreenExploreTokensConfigKey;
    [DynamicConfigs.ForceUpgrade]: ForceUpgradeConfigKey;
    [DynamicConfigs.OnDeviceRecovery]: OnDeviceRecoveryConfigKey;
    [DynamicConfigs.UwuLink]: UwuLinkConfigKey;
    [DynamicConfigs.DatadogIgnoredErrors]: DatadogIgnoredErrorsConfigKey;
    [DynamicConfigs.DatadogSessionSampleRate]: DatadogSessionSampleRateKey;
    [DynamicConfigs.EmbeddedWalletConfig]: EmbeddedWalletConfigKey;
    [DynamicConfigs.AstroChain]: AstroChainConfigKey;
    [DynamicConfigs.BlockedNftCollections]: BlockedNftCollectionsConfigKey;
    [DynamicConfigs.ExternallyConnectableExtension]: ExternallyConnectableExtensionConfigKey;
    [DynamicConfigs.LPConfig]: LPConfigKey;
};
export type UwULinkAllowlistItem = {
    chainId: number;
    address: string;
    name: string;
    logo?: {
        dark?: string;
        light?: string;
    };
};
export type UwULinkAllowlist = {
    contracts: UwULinkAllowlistItem[];
    tokenRecipients: UwULinkAllowlistItem[];
};
export {};
//# sourceMappingURL=configs.d.ts.map