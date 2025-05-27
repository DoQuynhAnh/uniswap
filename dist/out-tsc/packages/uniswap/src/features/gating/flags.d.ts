/**
 * Feature flag names
 */
export declare enum FeatureFlags {
    ArbitrumDutchV3 = 0,
    BlockaidFotLogging = 1,
    Datadog = 2,
    DisableSwap7702 = 3,
    EmbeddedWallet = 4,
    IndicativeSwapQuotes = 5,
    InstantTokenBalanceUpdate = 6,
    MonadTestnet = 7,
    MonadTestnetDown = 8,
    PortionFields = 9,
    SearchRevamp = 10,
    Soneium = 11,
    SwapSettingsV4HooksToggle = 12,
    TwoSecondSwapQuotePollingInterval = 13,
    UniquoteEnabled = 14,
    UniswapX = 15,
    UniswapXPriorityOrdersBase = 16,
    UniswapXPriorityOrdersOptimism = 17,
    UniswapXPriorityOrdersUnichain = 18,
    ServiceBasedSwapTransactionInfo = 19,
    SmartWallet = 20,
    ForcePermitTransactions = 21,
    EnablePermitMismatchUX = 22,
    ViemProviderEnabled = 23,
    ForceDisableWalletGetCapabilities = 24,
    DisableFiatOnRampKorea = 25,
    EnableTransactionSpacingForDelegatedAccounts = 26,
    NotificationPriceAlertsAndroid = 27,
    NotificationPriceAlertsIOS = 28,
    NotificationOnboardingCard = 29,
    NotificationUnfundedWalletsAndroid = 30,
    NotificationUnfundedWalletsIOS = 31,
    OnboardingKeyring = 32,
    PrivateRpc = 33,
    Scantastic = 34,
    SelfReportSpamNFTs = 35,
    UwULink = 36,
    BlurredLockScreen = 37,
    Eip5792Methods = 38,
    ExecuteTransactionV2 = 39,
    RestoreSeedPhrase = 40,
    AATestWeb = 41,
    ConversionTracking = 42,
    DummyFlagTest = 43,
    GoogleConversionTracking = 44,
    GqlTokenLists = 45,
    LimitsFees = 46,
    LpIncentives = 47,
    PoolSearch = 48,
    PositionPageV2 = 49,
    PriceRangeInputV2 = 50,
    TraceJsonRpc = 51,
    TwitterConversionTracking = 52,
    UniversalSwap = 53,
    BatchedSwaps = 54
}
export declare const SHARED_FEATURE_FLAG_NAMES: Map<FeatureFlags, string>;
export declare const WEB_FEATURE_FLAG_NAMES: Map<FeatureFlags, string>;
export declare const WALLET_FEATURE_FLAG_NAMES: Map<FeatureFlags, string>;
export declare enum FeatureFlagClient {
    Web = 0,
    Wallet = 1
}
export declare function getFeatureFlagName(flag: FeatureFlags, client?: FeatureFlagClient): string;
//# sourceMappingURL=flags.d.ts.map