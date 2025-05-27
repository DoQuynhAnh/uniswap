import { logger } from 'utilities/src/logger/logger';
import { isInterface } from 'utilities/src/platform';
// only disable for this enum
/* eslint-disable @typescript-eslint/prefer-enum-initializers */
/**
 * Feature flag names
 */
export var FeatureFlags;
(function (FeatureFlags) {
    // Shared
    FeatureFlags[FeatureFlags["ArbitrumDutchV3"] = 0] = "ArbitrumDutchV3";
    FeatureFlags[FeatureFlags["BlockaidFotLogging"] = 1] = "BlockaidFotLogging";
    FeatureFlags[FeatureFlags["Datadog"] = 2] = "Datadog";
    FeatureFlags[FeatureFlags["DisableSwap7702"] = 3] = "DisableSwap7702";
    FeatureFlags[FeatureFlags["EmbeddedWallet"] = 4] = "EmbeddedWallet";
    FeatureFlags[FeatureFlags["IndicativeSwapQuotes"] = 5] = "IndicativeSwapQuotes";
    FeatureFlags[FeatureFlags["InstantTokenBalanceUpdate"] = 6] = "InstantTokenBalanceUpdate";
    FeatureFlags[FeatureFlags["MonadTestnet"] = 7] = "MonadTestnet";
    FeatureFlags[FeatureFlags["MonadTestnetDown"] = 8] = "MonadTestnetDown";
    FeatureFlags[FeatureFlags["PortionFields"] = 9] = "PortionFields";
    FeatureFlags[FeatureFlags["SearchRevamp"] = 10] = "SearchRevamp";
    FeatureFlags[FeatureFlags["Soneium"] = 11] = "Soneium";
    FeatureFlags[FeatureFlags["SwapSettingsV4HooksToggle"] = 12] = "SwapSettingsV4HooksToggle";
    FeatureFlags[FeatureFlags["TwoSecondSwapQuotePollingInterval"] = 13] = "TwoSecondSwapQuotePollingInterval";
    FeatureFlags[FeatureFlags["UniquoteEnabled"] = 14] = "UniquoteEnabled";
    FeatureFlags[FeatureFlags["UniswapX"] = 15] = "UniswapX";
    FeatureFlags[FeatureFlags["UniswapXPriorityOrdersBase"] = 16] = "UniswapXPriorityOrdersBase";
    FeatureFlags[FeatureFlags["UniswapXPriorityOrdersOptimism"] = 17] = "UniswapXPriorityOrdersOptimism";
    FeatureFlags[FeatureFlags["UniswapXPriorityOrdersUnichain"] = 18] = "UniswapXPriorityOrdersUnichain";
    FeatureFlags[FeatureFlags["ServiceBasedSwapTransactionInfo"] = 19] = "ServiceBasedSwapTransactionInfo";
    FeatureFlags[FeatureFlags["SmartWallet"] = 20] = "SmartWallet";
    FeatureFlags[FeatureFlags["ForcePermitTransactions"] = 21] = "ForcePermitTransactions";
    FeatureFlags[FeatureFlags["EnablePermitMismatchUX"] = 22] = "EnablePermitMismatchUX";
    FeatureFlags[FeatureFlags["ViemProviderEnabled"] = 23] = "ViemProviderEnabled";
    FeatureFlags[FeatureFlags["ForceDisableWalletGetCapabilities"] = 24] = "ForceDisableWalletGetCapabilities";
    // Wallet
    FeatureFlags[FeatureFlags["DisableFiatOnRampKorea"] = 25] = "DisableFiatOnRampKorea";
    FeatureFlags[FeatureFlags["EnableTransactionSpacingForDelegatedAccounts"] = 26] = "EnableTransactionSpacingForDelegatedAccounts";
    FeatureFlags[FeatureFlags["NotificationPriceAlertsAndroid"] = 27] = "NotificationPriceAlertsAndroid";
    FeatureFlags[FeatureFlags["NotificationPriceAlertsIOS"] = 28] = "NotificationPriceAlertsIOS";
    FeatureFlags[FeatureFlags["NotificationOnboardingCard"] = 29] = "NotificationOnboardingCard";
    FeatureFlags[FeatureFlags["NotificationUnfundedWalletsAndroid"] = 30] = "NotificationUnfundedWalletsAndroid";
    FeatureFlags[FeatureFlags["NotificationUnfundedWalletsIOS"] = 31] = "NotificationUnfundedWalletsIOS";
    FeatureFlags[FeatureFlags["OnboardingKeyring"] = 32] = "OnboardingKeyring";
    FeatureFlags[FeatureFlags["PrivateRpc"] = 33] = "PrivateRpc";
    FeatureFlags[FeatureFlags["Scantastic"] = 34] = "Scantastic";
    FeatureFlags[FeatureFlags["SelfReportSpamNFTs"] = 35] = "SelfReportSpamNFTs";
    FeatureFlags[FeatureFlags["UwULink"] = 36] = "UwULink";
    FeatureFlags[FeatureFlags["BlurredLockScreen"] = 37] = "BlurredLockScreen";
    FeatureFlags[FeatureFlags["Eip5792Methods"] = 38] = "Eip5792Methods";
    FeatureFlags[FeatureFlags["ExecuteTransactionV2"] = 39] = "ExecuteTransactionV2";
    FeatureFlags[FeatureFlags["RestoreSeedPhrase"] = 40] = "RestoreSeedPhrase";
    // Web
    FeatureFlags[FeatureFlags["AATestWeb"] = 41] = "AATestWeb";
    FeatureFlags[FeatureFlags["ConversionTracking"] = 42] = "ConversionTracking";
    FeatureFlags[FeatureFlags["DummyFlagTest"] = 43] = "DummyFlagTest";
    FeatureFlags[FeatureFlags["GoogleConversionTracking"] = 44] = "GoogleConversionTracking";
    FeatureFlags[FeatureFlags["GqlTokenLists"] = 45] = "GqlTokenLists";
    FeatureFlags[FeatureFlags["LimitsFees"] = 46] = "LimitsFees";
    FeatureFlags[FeatureFlags["LpIncentives"] = 47] = "LpIncentives";
    FeatureFlags[FeatureFlags["PoolSearch"] = 48] = "PoolSearch";
    FeatureFlags[FeatureFlags["PositionPageV2"] = 49] = "PositionPageV2";
    FeatureFlags[FeatureFlags["PriceRangeInputV2"] = 50] = "PriceRangeInputV2";
    FeatureFlags[FeatureFlags["TraceJsonRpc"] = 51] = "TraceJsonRpc";
    FeatureFlags[FeatureFlags["TwitterConversionTracking"] = 52] = "TwitterConversionTracking";
    FeatureFlags[FeatureFlags["UniversalSwap"] = 53] = "UniversalSwap";
    FeatureFlags[FeatureFlags["BatchedSwaps"] = 54] = "BatchedSwaps";
})(FeatureFlags || (FeatureFlags = {}));
/* eslint-enable @typescript-eslint/prefer-enum-initializers */
// These names must match the gate name on statsig
export const SHARED_FEATURE_FLAG_NAMES = new Map([
    [FeatureFlags.ArbitrumDutchV3, 'uniswapx_dutchv3_orders_arbitrum'],
    [FeatureFlags.BlockaidFotLogging, 'blockaid_fot_logging'],
    [FeatureFlags.Datadog, 'datadog'],
    [FeatureFlags.DisableSwap7702, 'disable-swap-7702'],
    [FeatureFlags.EmbeddedWallet, 'embedded_wallet'],
    [FeatureFlags.EnablePermitMismatchUX, 'enable_permit2_mismatch_ux'],
    [FeatureFlags.ExecuteTransactionV2, 'new_execute_transaction_arch'],
    [FeatureFlags.ForceDisableWalletGetCapabilities, 'force_disable_wallet_get_capabilities'],
    [FeatureFlags.ForcePermitTransactions, 'force_permit_transactions'],
    [FeatureFlags.IndicativeSwapQuotes, 'indicative-quotes'],
    [FeatureFlags.InstantTokenBalanceUpdate, 'instant-token-balance-update'],
    [FeatureFlags.MonadTestnet, 'monad_testnet'],
    [FeatureFlags.PortionFields, 'portion-fields'],
    [FeatureFlags.SearchRevamp, 'search_revamp'],
    [FeatureFlags.ServiceBasedSwapTransactionInfo, 'new_swap_transaction_info_arch'],
    [FeatureFlags.SmartWallet, 'smart-wallet'],
    [FeatureFlags.Soneium, 'soneium'],
    [FeatureFlags.SwapSettingsV4HooksToggle, 'swap_settings_v4_hooks_toggle'],
    [FeatureFlags.TwoSecondSwapQuotePollingInterval, 'two_second_swap_quote_polling_interval'],
    [FeatureFlags.UniquoteEnabled, 'uniquote_enabled'],
    [FeatureFlags.UniswapX, 'uniswapx'],
    [FeatureFlags.UniswapXPriorityOrdersBase, 'uniswapx_priority_orders_base'],
    [FeatureFlags.UniswapXPriorityOrdersOptimism, 'uniswapx_priority_orders_optimism'],
    [FeatureFlags.UniswapXPriorityOrdersUnichain, 'uniswapx_priority_orders_unichain'],
    [FeatureFlags.ViemProviderEnabled, 'viem_provider_enabled'],
]);
// These names must match the gate name on statsig
export const WEB_FEATURE_FLAG_NAMES = new Map([
    ...SHARED_FEATURE_FLAG_NAMES,
    [FeatureFlags.AATestWeb, 'aatest_web'],
    [FeatureFlags.BatchedSwaps, 'batched_swaps'],
    [FeatureFlags.ConversionTracking, 'conversion-tracking'],
    [FeatureFlags.DummyFlagTest, 'dummy_flag_test'],
    [FeatureFlags.GoogleConversionTracking, 'google_conversion_tracking'],
    [FeatureFlags.GqlTokenLists, 'gql_token_lists'],
    [FeatureFlags.LimitsFees, 'limits_fees'],
    [FeatureFlags.LpIncentives, 'lp_incentives'],
    [FeatureFlags.MonadTestnetDown, 'monad_down'],
    [FeatureFlags.PoolSearch, 'pool_search'],
    [FeatureFlags.PositionPageV2, 'position_page_v2'],
    [FeatureFlags.PriceRangeInputV2, 'price_range_input_v2'],
    [FeatureFlags.TraceJsonRpc, 'traceJsonRpc'],
    [FeatureFlags.TwitterConversionTracking, 'twitter_conversion_tracking'],
    [FeatureFlags.UniversalSwap, 'universal_swap'],
]);
// These names must match the gate name on statsig
export const WALLET_FEATURE_FLAG_NAMES = new Map([
    ...SHARED_FEATURE_FLAG_NAMES,
    [FeatureFlags.BlurredLockScreen, 'blurred_lock_screen'],
    [FeatureFlags.DisableFiatOnRampKorea, 'disable-fiat-onramp-korea'],
    [FeatureFlags.Eip5792Methods, 'eip_5792_methods'],
    [FeatureFlags.EnableTransactionSpacingForDelegatedAccounts, 'enable_transaction_spacing_for_delegated_accounts'],
    [FeatureFlags.NotificationOnboardingCard, 'notification_onboarding_card'],
    [FeatureFlags.NotificationPriceAlertsAndroid, 'notification_price_alerts_android'],
    [FeatureFlags.NotificationPriceAlertsIOS, 'notification_price_alerts_ios'],
    [FeatureFlags.NotificationUnfundedWalletsAndroid, 'notification_unfunded_wallet_android'],
    [FeatureFlags.NotificationUnfundedWalletsIOS, 'notification_unfunded_wallet_ios'],
    [FeatureFlags.OnboardingKeyring, 'onboarding-keyring'],
    [FeatureFlags.PrivateRpc, 'mev-blocker'],
    [FeatureFlags.RestoreSeedPhrase, 'restore-seed-phrase'],
    [FeatureFlags.Scantastic, 'scantastic'],
    [FeatureFlags.SelfReportSpamNFTs, 'self-report-spam-nfts'],
    [FeatureFlags.UwULink, 'uwu-link'],
]);
export var FeatureFlagClient;
(function (FeatureFlagClient) {
    FeatureFlagClient[FeatureFlagClient["Web"] = 0] = "Web";
    FeatureFlagClient[FeatureFlagClient["Wallet"] = 1] = "Wallet";
})(FeatureFlagClient || (FeatureFlagClient = {}));
const FEATURE_FLAG_NAMES = {
    [FeatureFlagClient.Web]: WEB_FEATURE_FLAG_NAMES,
    [FeatureFlagClient.Wallet]: WALLET_FEATURE_FLAG_NAMES,
};
export function getFeatureFlagName(flag, client) {
    const names = client !== undefined
        ? FEATURE_FLAG_NAMES[client]
        : isInterface
            ? FEATURE_FLAG_NAMES[FeatureFlagClient.Web]
            : FEATURE_FLAG_NAMES[FeatureFlagClient.Wallet];
    const name = names.get(flag);
    if (!name) {
        const err = new Error(`Feature ${FeatureFlags[flag]} does not have a name mapped for this application`);
        logger.error(err, {
            tags: {
                file: 'flags.ts',
                function: 'getFeatureFlagName',
            },
        });
        throw err;
    }
    return name;
}
//# sourceMappingURL=flags.js.map