import { ApolloError } from '@apollo/client';
import { TransactionRequest as EthersTransactionRequest } from '@ethersproject/providers';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { AppDownloadPlatform, FeePoolSelectAction, InterfaceEventName, InterfacePageName, LiquidityEventName, MoonpayEventName, NFTEventName, NFTFilterTypes, NavBarSearchTypes, SharedEventName, SwapEventName, SwapPriceImpactUserResponse, SwapPriceUpdateUserResponse, WalletConnectionResult } from '@uniswap/analytics-events';
import { Protocol } from '@uniswap/router-sdk';
import { Currency, TradeType } from '@uniswap/sdk-core';
import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { NftStandard } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { CreateLPPositionRequest, IncreaseLPPositionRequest, TransactionFailureReason } from 'uniswap/src/data/tradingApi/__generated__';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { EthMethod } from 'uniswap/src/features/dappRequests/types';
import { FiatCurrency } from 'uniswap/src/features/fiatCurrency/constants';
import { ExtensionEventName, FiatOffRampEventName, FiatOnRampEventName, InstitutionTransferEventName, InterfaceEventNameLocal, MobileAppsFlyerEvents, MobileEventName, UniswapEventName, UnitagEventName, WalletEventName } from 'uniswap/src/features/telemetry/constants';
import { TokenProtectionWarning } from 'uniswap/src/features/tokens/safetyUtils';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { UnitagClaimContext } from 'uniswap/src/features/unitags/types';
import { RenderPassReport } from 'uniswap/src/types/RenderPassReport';
import { CurrencyField } from 'uniswap/src/types/currency';
import { LimitsExpiry } from 'uniswap/src/types/limits';
import { ImportType } from 'uniswap/src/types/onboarding';
import { ExtensionOnboardingFlow } from 'uniswap/src/types/screens/extension';
import { SwapTab } from 'uniswap/src/types/screens/interface';
import { ShareableEntity } from 'uniswap/src/types/sharing';
import { UwULinkMethod, WCEventType, WCRequestOutcome } from 'uniswap/src/types/walletConnect';
import { WidgetEvent, WidgetType } from 'uniswap/src/types/widgets';
import { ITraceContext } from 'utilities/src/telemetry/trace/TraceContext';
export type GasEstimateAccuracyProperties = {
    tx_hash?: string;
    transaction_type: string;
    chain_id: number;
    final_status?: string;
    time_to_confirmed_ms?: number;
    blocks_to_confirmed?: number;
    user_experienced_delay_ms?: number;
    send_to_confirmation_delay_ms?: number;
    rpc_submission_delay_ms?: number;
    current_block_fetch_delay_ms?: number;
    gas_use_diff?: number;
    gas_use_diff_percentage?: number;
    gas_used?: number;
    gas_price_diff?: number;
    gas_price_diff_percentage?: number;
    gas_price?: number;
    max_priority_fee_per_gas?: string;
    private_rpc?: boolean;
    is_shadow?: boolean;
    name?: string;
    out_of_gas: boolean;
    timed_out: boolean;
    app_backgrounded_while_pending?: boolean;
    display_limit_inflation_factor?: number;
};
type KeyringMissingMnemonicProperties = {
    mnemonicId: string;
    timeImportedMsFirst?: number;
    timeImportedMsLast?: number;
    keyringMnemonicIds: string[];
    keyringPrivateKeyAddresses: string[];
    signerMnemonicAccounts: {
        mnemonicId: string;
        address: string;
        timeImportedMs: number;
    }[];
};
export type PendingTransactionTimeoutProperties = {
    use_flashbots: boolean;
    flashbots_refund_percent: number;
    private_rpc: boolean;
    chain_id: number;
    address: string;
    tx_hash?: string;
};
export type AssetDetailsBaseProperties = {
    name?: string;
    domain?: string;
    address: string;
    chain?: number;
};
export type SearchResultContextProperties = {
    category?: string;
    query?: string;
    suggestion_count?: number;
    position?: number;
    isHistory?: boolean;
};
type OnboardingCompletedProps = {
    flow?: ExtensionOnboardingFlow;
    wallet_type: ImportType;
    accounts_imported_count: number;
    wallets_imported: string[];
    cloud_backup_used: boolean;
};
export type SwapRouting = 'classic' | 'uniswap_x' | 'uniswap_x_v2' | 'uniswap_x_v3' | 'priority_order' | 'bridge' | 'limit_order' | 'none';
export type SwapTradeBaseProperties = {
    routing?: SwapRouting;
    total_balances_usd?: number;
    transactionOriginType: string;
    allowed_slippage?: number;
    allowed_slippage_basis_points?: number;
    token_in_symbol?: string;
    token_out_symbol?: string;
    token_in_address?: string;
    token_out_address?: string;
    price_impact_basis_points?: string | number;
    estimated_network_fee_usd?: string;
    chain_id?: number;
    chain_id_in?: number;
    chain_id_out?: number;
    token_in_amount?: string | number;
    token_out_amount?: string | number;
    token_in_amount_usd?: number;
    token_out_amount_usd?: number;
    token_in_amount_max?: string;
    token_out_amount_min?: string;
    token_in_detected_tax?: number;
    token_out_detected_tax?: number;
    minimum_output_after_slippage?: string;
    preset_percentage?: PresetPercentage;
    preselect_asset?: boolean;
    fee_amount?: string;
    requestId?: string;
    ura_request_id?: string;
    ura_block_number?: string;
    ura_quote_id?: string;
    ura_quote_block_number?: string;
    quoteId?: string;
    swap_quote_block_number?: string;
    fee_usd?: number;
    type?: TradeType;
    method?: 'ROUTING_API' | 'QUICK_ROUTE' | 'CLIENT_SIDE_FALLBACK';
    offchain_order_type?: 'Dutch' | 'Dutch_V2' | 'Limit' | 'Dutch_V1_V2' | 'Priority' | 'Dutch_V3';
    simulation_failure_reasons?: TransactionFailureReason[];
    tokenWarnings?: {
        input: TokenProtectionWarning;
        output: TokenProtectionWarning;
    };
    is_batch?: boolean;
    batch_id?: string;
    included_permit_transaction_step?: boolean;
} & ITraceContext;
type BaseSwapTransactionResultProperties = {
    routing: SwapTradeBaseProperties['routing'];
    transactionOriginType: string;
    time_to_swap?: number;
    time_to_swap_since_first_input?: number;
    address?: string;
    chain_id: number;
    chain_id_in?: number;
    chain_id_out?: number;
    hash: string;
    batch_id?: string;
    added_time?: number;
    confirmed_time?: number;
    gas_used?: number;
    effective_gas_price?: number;
    tradeType?: string;
    inputCurrencyId?: string;
    outputCurrencyId?: string;
    slippageTolerance?: number;
    gasUseEstimate?: string;
    route?: string;
    quoteId?: string;
    submitViaPrivateRpc?: boolean;
    protocol?: Protocol;
    transactedUSDValue?: number;
    simulation_failure_reasons?: TransactionFailureReason[];
};
type ClassicSwapTransactionResultProperties = BaseSwapTransactionResultProperties;
type UniswapXTransactionResultProperties = BaseSwapTransactionResultProperties & {
    order_hash: string;
};
type BridgeSwapTransactionResultProperties = BaseSwapTransactionResultProperties;
type FailedUniswapXOrderResultProperties = Omit<UniswapXTransactionResultProperties, 'hash'>;
type FailedClassicSwapResultProperties = Omit<ClassicSwapTransactionResultProperties, 'hash'> & {
    hash: string | undefined;
};
type FailedBridgeSwapResultProperties = Omit<BridgeSwapTransactionResultProperties, 'hash'> & {
    hash: string | undefined;
};
type TransferProperties = {
    chainId: UniverseChainId;
    tokenAddress: Address;
    toAddress: Address;
    amountUSD?: number;
};
export type WindowEthereumRequestProperties = {
    method: string;
    dappUrl: string;
    chainId?: string;
};
export type DappContextProperties = {
    dappUrl?: string;
    chainId?: UniverseChainId;
    activeConnectedAddress?: Address;
    connectedAddresses: Address[];
};
export type SwapPriceUpdateActionProperties = {
    chain_id?: number;
    response: SwapPriceUpdateUserResponse;
    token_in_symbol?: string;
    token_out_symbol?: string;
    price_update_basis_points?: number;
};
export type SwapPriceImpactActionProperties = {
    response: SwapPriceImpactUserResponse;
};
export type InterfaceSearchResultSelectionProperties = {
    suggestion_type: NavBarSearchTypes;
    query_text: string;
    position?: number;
    selected_search_result_name?: string;
    selected_search_result_address?: string;
    total_suggestions?: number;
    chainId?: UniverseChainId;
} & ITraceContext;
type WrapProperties = {
    type: WrapType;
    token_in_address: string;
    token_out_address: string;
    token_in_symbol?: string;
    token_out_symbol?: string;
    chain_id: number;
    amount?: number;
    contract_address?: string;
    contract_chain_id?: number;
    transaction_hash?: string;
};
type NFTBagProperties = {
    collection_addresses: (string | undefined)[];
    token_ids: (string | undefined)[];
};
type InterfaceTokenSelectedProperties = {
    is_imported_by_user: boolean;
    token_balance_usd?: number | string;
};
export declare enum DappRequestAction {
    Accept = "Accept",
    Reject = "Reject"
}
export type CardLoggingName = OnboardingCardLoggingName | DappRequestCardLoggingName | ConnectionCardLoggingName;
export declare enum OnboardingCardLoggingName {
    FundWallet = "fund_wallet",
    RecoveryBackup = "recovery_backup",
    ClaimUnitag = "claim_unitag",
    EnablePushNotifications = "enable_push_notifications"
}
export declare enum DappRequestCardLoggingName {
    BridgingBanner = "dapp_request_bridging_banner"
}
export declare enum ConnectionCardLoggingName {
    ConnectionBanner = "connections_removed_banner"
}
export type FORAmountEnteredProperties = ITraceContext & {
    source: 'chip' | 'textInput' | 'changeAsset' | 'maxButton';
    externalTransactionIdSuffix?: string;
    amountUSD?: number;
    amount?: number;
    chainId?: number;
    cryptoCurrency?: string;
    fiatCurrency?: string;
    isTokenInputMode?: boolean;
};
export type FORTokenSelectedProperties = ITraceContext & {
    token: string;
    externalTransactionIdSuffix?: string;
    isUnsupported?: boolean;
    chainId?: number;
};
export type FORUnsupportedTokenSelectedProperties = ITraceContext & {
    token?: string;
};
export type FORTransactionUpdatedProperties = {
    status: string;
    externalTransactionId: string;
    serviceProvider: string;
};
export type OfframpSendTransactionProperties = ITraceContext & {
    cryptoCurrency: string;
    currencyAmount: number;
    serviceProvider: string;
    chainId: string;
    externalTransactionId: Maybe<string>;
    amountUSD?: number;
};
export type FORWidgetOpenedProperties = ITraceContext & {
    countryCode?: string;
    countryState?: string;
    cryptoCurrency: string;
    externalTransactionId: string;
    fiatCurrency: string;
    preselectedServiceProvider?: string;
    serviceProvider: string;
    chainId?: number;
    currencyAmount?: number;
    amountUSD?: number;
};
type DappRequestCardEventProperties = ITraceContext & {
    card_name: DappRequestCardLoggingName;
};
type OnboardingCardEventProperties = ITraceContext & {
    card_name: OnboardingCardLoggingName;
};
export type LiquidityAnalyticsProperties = ITraceContext & {
    label: string;
    type: string;
    fee_tier: number;
    pool_address?: string;
    chain_id?: UniverseChainId;
    baseCurrencyId: string;
    quoteCurrencyId: string;
    token0AmountUSD?: number;
    token1AmountUSD?: number;
    transaction_hash: string;
    currencyInfo0Decimals: number;
    currencyInfo1Decimals: number;
};
export type NotificationToggleLoggingType = 'settings_general_updates_enabled' | 'settings_price_alerts_enabled' | 'wallet_activity';
export type UniverseEventProperties = {
    [ExtensionEventName.BackgroundAttemptedToOpenSidebar]: {
        hasError: boolean;
    };
    [ExtensionEventName.OnboardingLoad]: undefined;
    [ExtensionEventName.SidebarLoad]: {
        locked: boolean;
    };
    [ExtensionEventName.SidebarClosed]: undefined;
    [ExtensionEventName.ChangeLockedState]: {
        locked: boolean;
        location: 'background' | 'sidebar';
    };
    [ExtensionEventName.DappConnect]: DappContextProperties;
    [ExtensionEventName.DappConnectRequest]: DappContextProperties;
    [ExtensionEventName.DappDisconnect]: DappContextProperties;
    [ExtensionEventName.DappDisconnectAll]: Pick<DappContextProperties, 'activeConnectedAddress'>;
    [ExtensionEventName.DappRequest]: DappContextProperties & {
        action: DappRequestAction;
        requestType: string;
    };
    [ExtensionEventName.DappChangeChain]: Omit<DappContextProperties, 'connectedAddresses'>;
    [ExtensionEventName.DappTroubleConnecting]: Pick<DappContextProperties, 'dappUrl'>;
    [ExtensionEventName.PasswordChanged]: undefined;
    [ExtensionEventName.ProviderDirectMethodRequest]: WindowEthereumRequestProperties;
    [ExtensionEventName.ExtensionEthMethodRequest]: WindowEthereumRequestProperties;
    [ExtensionEventName.DeprecatedMethodRequest]: WindowEthereumRequestProperties;
    [ExtensionEventName.UnsupportedMethodRequest]: WindowEthereumRequestProperties;
    [ExtensionEventName.UnrecognizedMethodRequest]: WindowEthereumRequestProperties;
    [ExtensionEventName.SidebarSwitchChain]: {
        previousChainId?: number;
        newChainId: number;
    };
    [ExtensionEventName.SidebarDisconnect]: undefined;
    [ExtensionEventName.UnknownMethodRequest]: WindowEthereumRequestProperties;
    [FiatOffRampEventName.FORBuySellToggled]: ITraceContext & {
        value: 'BUY' | 'SELL';
    };
    [FiatOffRampEventName.FiatOffRampAmountEntered]: FORAmountEnteredProperties;
    [FiatOffRampEventName.FiatOffRampTokenSelected]: FORTokenSelectedProperties;
    [FiatOffRampEventName.FiatOffRampUnsupportedTokenBack]: FORUnsupportedTokenSelectedProperties;
    [FiatOffRampEventName.FiatOffRampUnsupportedTokenSwap]: FORUnsupportedTokenSelectedProperties;
    [FiatOffRampEventName.FiatOffRampWidgetOpened]: FORWidgetOpenedProperties;
    [FiatOffRampEventName.FiatOffRampWidgetCompleted]: OfframpSendTransactionProperties;
    [FiatOffRampEventName.FiatOffRampFundsSent]: OfframpSendTransactionProperties;
    [FiatOnRampEventName.FiatOnRampAmountEntered]: FORAmountEnteredProperties;
    [FiatOnRampEventName.FiatOnRampTokenSelected]: FORTokenSelectedProperties;
    [FiatOnRampEventName.FiatOnRampTransactionUpdated]: FORTransactionUpdatedProperties;
    [FiatOnRampEventName.FiatOnRampWidgetOpened]: FORWidgetOpenedProperties;
    [InstitutionTransferEventName.InstitutionTransferTransactionUpdated]: {
        status: string;
        externalTransactionId: string;
        serviceProvider: string;
    };
    [InstitutionTransferEventName.InstitutionTransferWidgetOpened]: ITraceContext & {
        externalTransactionId: string;
        serviceProvider: string;
    };
    [InterfaceEventName.WALLET_CONNECTED]: {
        result: WalletConnectionResult;
        wallet_name: string;
        wallet_type: string;
        wallet_address?: string;
        is_reconnect?: boolean;
        peer_wallet_agent?: string;
        page?: InterfacePageName;
        error?: string;
    };
    [InterfaceEventName.APPROVE_TOKEN_TXN_SUBMITTED]: {
        chain_id: number;
        token_address: string;
        token_symbol?: string;
    };
    [InterfaceEventName.FIAT_ONRAMP_WIDGET_OPENED]: undefined;
    [InterfaceEventName.UNIWALLET_CONNECT_MODAL_OPENED]: undefined;
    [InterfaceEventName.EXTERNAL_LINK_CLICK]: {
        label: string;
    };
    [InterfaceEventName.NAVBAR_RESULT_SELECTED]: InterfaceSearchResultSelectionProperties;
    [InterfaceEventName.ACCOUNT_DROPDOWN_BUTTON_CLICKED]: undefined;
    [InterfaceEventName.WALLET_PROVIDER_USED]: {
        source: string;
        contract: {
            name: string;
            address?: string;
            withSignerIfPossible?: boolean;
            chainId?: number;
        };
    };
    [InterfaceEventName.WRAP_TOKEN_TXN_INVALIDATED]: WrapProperties;
    [InterfaceEventName.WRAP_TOKEN_TXN_SUBMITTED]: WrapProperties;
    [InterfaceEventName.UNISWAP_WALLET_MICROSITE_OPENED]: ITraceContext;
    [InterfaceEventName.UNISWAP_WALLET_APP_DOWNLOAD_OPENED]: ITraceContext & {
        appPlatform?: AppDownloadPlatform;
    };
    [InterfaceEventName.MINI_PORTFOLIO_TOGGLED]: {
        type: 'open' | 'close';
    };
    [InterfaceEventName.CONNECT_WALLET_BUTTON_CLICKED]: {
        received_swap_quote?: boolean;
    };
    [InterfaceEventName.WALLET_SELECTED]: {
        wallet_name: string;
        wallet_type: string;
    };
    [InterfaceEventNameLocal.PortfolioMenuOpened]: {
        name: string;
    };
    [InterfaceEventNameLocal.UniswapXOrderDetailsSheetOpened]: {
        order: string;
    };
    [InterfaceEventNameLocal.UniswapXOrderCancelInitiated]: {
        orders: string[];
    };
    [InterfaceEventNameLocal.LimitPresetRateSelected]: {
        value: number;
    };
    [InterfaceEventNameLocal.LimitPriceReversed]: undefined;
    [InterfaceEventNameLocal.LimitExpirySelected]: {
        value: LimitsExpiry;
    };
    [InterfaceEventNameLocal.SwapTabClicked]: {
        tab: SwapTab;
    };
    [InterfaceEventNameLocal.LocalCurrencySelected]: {
        previous_local_currency: FiatCurrency;
        new_local_currency: FiatCurrency;
    };
    [InterfaceEventNameLocal.NoQuoteReceivedFromQuickrouteAPI]: {
        requestBody: unknown;
        response: unknown;
    };
    [InterfaceEventNameLocal.NoQuoteReceivedFromRoutingAPI]: {
        requestBody: unknown;
        response: unknown;
        routerPreference: 'price' | 'uniswapx' | 'api';
    };
    [InterfaceEventNameLocal.UniswapXSignatureDeadlineExpired]: {
        deadline: number;
        resultTime: number;
    };
    [InterfaceEventNameLocal.UniswapXSignatureRequested]: Record<string, unknown>;
    [InterfaceEventNameLocal.UniswapXOrderPostError]: Record<string, unknown>;
    [InterfaceEventNameLocal.UniswapXOrderSubmitted]: Record<string, unknown>;
    [InterfaceEventNameLocal.CreatePositionFailed]: {
        message: string;
    } & CreateLPPositionRequest;
    [InterfaceEventNameLocal.IncreaseLiquidityFailed]: {
        message: string;
    } & IncreaseLPPositionRequest;
    [InterfaceEventNameLocal.DecreaseLiquidityFailed]: {
        message: string;
    };
    [InterfaceEventNameLocal.MigrateLiquidityFailed]: {
        message: string;
    };
    [InterfaceEventNameLocal.CollectLiquidityFailed]: {
        message: string;
    };
    [InterfaceEventNameLocal.EmbeddedWalletCreated]: undefined;
    [InterfaceEventName.NAVBAR_SEARCH_EXITED]: {
        navbar_search_input_text: string;
        hasInput: boolean;
    } & ITraceContext;
    [InterfaceEventName.CHAIN_CHANGED]: {
        result: WalletConnectionResult.SUCCEEDED;
        wallet_address?: string;
        wallet_type: string;
        chain_id?: number;
        previousConnectedChainId: number;
        page?: InterfacePageName;
    } | {
        chain: string;
        page: InterfacePageName.EXPLORE_PAGE;
    };
    [InterfaceEventName.EXPLORE_SEARCH_SELECTED]: undefined;
    [InterfaceEventName.LANGUAGE_SELECTED]: {
        previous_language: string;
        new_language: string;
    };
    [InterfaceEventName.NAVBAR_SEARCH_SELECTED]: ITraceContext;
    [InterfaceEventName.SEND_INITIATED]: {
        currencyId: string;
        amount: string;
        recipient: string;
    };
    [InterfaceEventName.TOKEN_SELECTOR_OPENED]: undefined;
    [InterfaceEventNameLocal.LimitedWalletSupportToastDismissed]: {
        chainId?: number;
    };
    [InterfaceEventNameLocal.LimitedWalletSupportToastShown]: {
        chainId?: number;
    };
    [InterfaceEventNameLocal.LimitedWalletSupportToastLearnMoreButtonClicked]: {
        chainId?: number;
    };
    [InterfaceEventNameLocal.WalletCapabilitiesDetected]: {
        chainId: number;
        capabilities: {
            [capability: string]: string | boolean;
        };
    };
    [LiquidityEventName.COLLECT_LIQUIDITY_SUBMITTED]: LiquidityAnalyticsProperties;
    [LiquidityEventName.SELECT_LIQUIDITY_POOL_FEE_TIER]: {
        action: FeePoolSelectAction;
        fee_tier: number;
        is_new_fee_tier?: boolean;
    } & ITraceContext;
    [LiquidityEventName.MIGRATE_LIQUIDITY_SUBMITTED]: {
        action: string;
    } & LiquidityAnalyticsProperties;
    [LiquidityEventName.ADD_LIQUIDITY_SUBMITTED]: {
        createPool?: boolean;
        createPosition?: boolean;
        expectedAmountBaseRaw: string;
        expectedAmountQuoteRaw: string;
    } & LiquidityAnalyticsProperties;
    [LiquidityEventName.REMOVE_LIQUIDITY_SUBMITTED]: {
        expectedAmountBaseRaw: string;
        expectedAmountQuoteRaw: string;
        closePosition?: boolean;
    } & LiquidityAnalyticsProperties;
    [LiquidityEventName.TRANSACTION_MODIFIED_IN_WALLET]: {
        expected?: string;
        actual: string;
    } & LiquidityAnalyticsProperties;
    [MobileEventName.AutomatedOnDeviceRecoveryTriggered]: {
        showNotificationScreen: boolean;
        showBiometricsScreen: boolean;
        notificationOSPermission: string;
        hasAnyNotificationsEnabled: boolean;
        deviceSupportsBiometrics: boolean | undefined;
        isBiometricsEnrolled: boolean | undefined;
        isBiometricAuthEnabled: boolean;
    };
    [MobileEventName.AutomatedOnDeviceRecoveryMnemonicsFound]: {
        mnemonicCount: number;
    };
    [MobileEventName.AutomatedOnDeviceRecoverySingleMnemonicFetched]: {
        balance: number;
        hasUnitag: boolean;
        hasENS: boolean;
    };
    [MobileEventName.DeepLinkOpened]: {
        url: string;
        screen: 'swap' | 'transaction';
        is_cold_start: boolean;
    };
    [MobileEventName.ExploreFilterSelected]: {
        filter_type: string;
    };
    [MobileEventName.ExploreNetworkSelected]: {
        networkChainId: number | 'all';
    };
    [MobileEventName.ExploreSearchNetworkSelected]: {
        networkChainId: number | 'all';
    };
    [MobileEventName.ExploreSearchResultClicked]: SearchResultContextProperties & AssetDetailsBaseProperties & {
        type: 'collection' | 'token' | 'address';
    };
    [MobileEventName.ExploreTokenItemSelected]: AssetDetailsBaseProperties & {
        position: number;
    };
    [MobileEventName.HomeExploreTokenItemSelected]: AssetDetailsBaseProperties & {
        position: number;
    };
    [MobileEventName.FavoriteItem]: AssetDetailsBaseProperties & {
        type: 'token' | 'wallet';
    };
    [MobileEventName.FiatOnRampQuickActionButtonPressed]: ITraceContext;
    [MobileEventName.NotificationsToggled]: ITraceContext & {
        enabled: boolean;
        type: NotificationToggleLoggingType;
    };
    [MobileEventName.OnboardingCompleted]: OnboardingCompletedProps & ITraceContext;
    [MobileEventName.PerformanceReport]: RenderPassReport;
    [MobileEventName.ShareLinkOpened]: {
        entity: ShareableEntity;
        url: string;
    };
    [MobileEventName.TokenDetailsOtherChainButtonPressed]: ITraceContext;
    [MobileEventName.TokenDetailsContextMenuAction]: ITraceContext & {
        action: string;
    };
    [MobileEventName.WalletConnectSheetCompleted]: {
        request_type: WCEventType;
        eth_method?: EthMethod | UwULinkMethod;
        dapp_url: string;
        dapp_name: string;
        wc_version: string;
        connection_chain_ids?: number[];
        chain_id?: number;
        outcome: WCRequestOutcome;
    };
    [MobileEventName.WidgetConfigurationUpdated]: WidgetEvent;
    [MobileEventName.WidgetClicked]: {
        widget_type: WidgetType;
        url: string;
    };
    [SharedEventName.PAGE_VIEWED]: ITraceContext;
    [SharedEventName.ANALYTICS_SWITCH_TOGGLED]: {
        enabled: boolean;
    };
    [SharedEventName.HEARTBEAT]: undefined;
    [MoonpayEventName.MOONPAY_GEOCHECK_COMPLETED]: {
        success: boolean;
        networkError: boolean;
    } & ITraceContext;
    [NFTEventName.NFT_ACTIVITY_SELECTED]: undefined;
    [NFTEventName.NFT_TRENDING_ROW_SELECTED]: {
        collection_address?: string;
        chain_id?: number;
    };
    [NFTEventName.NFT_PROFILE_PAGE_START_SELL]: {
        list_quantity: number;
    } & NFTBagProperties;
    [NFTEventName.NFT_BUY_TOKEN_SELECTOR_CLICKED]: undefined;
    [NFTEventName.NFT_BUY_TOKEN_SELECTED]: {
        token_address: string;
        token_symbol?: string;
    };
    [NFTEventName.NFT_FILTER_SELECTED]: {
        filter_type: NFTFilterTypes;
    };
    [NFTEventName.NFT_BUY_ADDED]: {
        collection_address: string;
        token_id: string;
        token_type?: NftStandard;
    } & ITraceContext;
    [NFTEventName.NFT_SELL_ITEM_ADDED]: {
        collection_address?: string;
        token_id?: string;
    } & ITraceContext;
    [NFTEventName.NFT_SELL_START_LISTING]: {
        marketplaces: string[];
        list_quantity: number;
        usd_value: string;
    } & NFTBagProperties & ITraceContext;
    [NFTEventName.NFT_LISTING_COMPLETED]: {
        signatures_approved: unknown[];
        list_quantity: number;
        usd_value: string;
    } & ITraceContext;
    [NFTEventName.NFT_BUY_BAG_CHANGED]: {
        usd_value: number;
        bag_quantity: number;
        token_types: (NftStandard | undefined)[];
    } & NFTBagProperties;
    [NFTEventName.NFT_BUY_BAG_SIGNED]: {
        transaction_hash: string;
    };
    [NFTEventName.NFT_BUY_BAG_PAY]: {
        usd_value?: string;
        using_erc20: boolean;
    };
    [NFTEventName.NFT_BUY_BAG_SUCCEEDED]: {
        buy_quantity: number;
        usd_value: number;
        transaction_hash: string;
        using_erc20: boolean;
    };
    [NFTEventName.NFT_BUY_BAG_REFUNDED]: {
        buy_quantity: number;
        fail_quantity: number;
        refund_amount_usd: number;
        transaction_hash?: string;
    };
    [NFTEventName.NFT_FILTER_OPENED]: {
        collection_address: string;
        chain_id?: number;
    };
    [SharedEventName.APP_LOADED]: undefined | {
        service_worker: string;
        cache: string;
    };
    [SharedEventName.ELEMENT_CLICKED]: ITraceContext & {
        collection_name?: string;
        collection_address?: string;
        token_id?: string;
    };
    [SharedEventName.PAGE_VIEWED]: ITraceContext;
    [SharedEventName.ANALYTICS_SWITCH_TOGGLED]: {
        enabled: boolean;
    };
    [SharedEventName.HEARTBEAT]: undefined;
    [SharedEventName.WEB_VITALS]: Record<string, unknown>;
    [SharedEventName.TERMS_OF_SERVICE_ACCEPTED]: {
        address: string;
    };
    [SharedEventName.NAVBAR_CLICKED]: undefined;
    [SwapEventName.SWAP_PRESET_TOKEN_AMOUNT_SELECTED]: {
        percentage: number;
    };
    [SwapEventName.SWAP_PRESELECT_ASSET_SELECTED]: {
        chain_id: UniverseChainId;
        token_symbol: string | undefined;
    };
    [SwapEventName.SWAP_PRICE_IMPACT_ACKNOWLEDGED]: SwapPriceImpactActionProperties;
    [SwapEventName.SWAP_PRICE_UPDATE_ACKNOWLEDGED]: SwapPriceUpdateActionProperties;
    [SwapEventName.SWAP_TRANSACTION_COMPLETED]: ClassicSwapTransactionResultProperties | UniswapXTransactionResultProperties | BridgeSwapTransactionResultProperties;
    [SwapEventName.SWAP_TRANSACTION_FAILED]: FailedClassicSwapResultProperties | FailedUniswapXOrderResultProperties | FailedBridgeSwapResultProperties;
    [SwapEventName.SWAP_DETAILS_EXPANDED]: ITraceContext | undefined;
    [SwapEventName.SWAP_AUTOROUTER_VISUALIZATION_EXPANDED]: ITraceContext;
    [SwapEventName.SWAP_QUOTE_RECEIVED]: {
        quote_latency_milliseconds?: number;
    } & SwapTradeBaseProperties;
    [SwapEventName.SWAP_SUBMITTED_BUTTON_CLICKED]: {
        estimated_network_fee_wei?: string;
        gas_limit?: string;
        transaction_deadline_seconds?: number;
        token_in_amount_usd?: number;
        token_out_amount_usd?: number;
        is_auto_slippage?: boolean;
        swap_quote_block_number: Maybe<string>;
        swap_flow_duration_milliseconds?: number;
        is_hold_to_swap?: boolean;
        is_fiat_input_mode?: boolean;
        is_batch?: boolean;
        included_permit_transaction_step?: boolean;
    } & SwapTradeBaseProperties;
    [SwapEventName.SWAP_ESTIMATE_GAS_CALL_FAILED]: {
        error?: ApolloError | FetchBaseQueryError | SerializedError | Error | string;
        txRequest?: EthersTransactionRequest;
        client_block_number?: number;
        isAutoSlippage?: boolean;
        simulationFailureReasons?: TransactionFailureReason[];
    } & SwapTradeBaseProperties;
    [SwapEventName.SWAP_FIRST_ACTION]: {
        time_to_first_swap_action?: number;
    } & ITraceContext;
    [SwapEventName.SWAP_QUOTE_FETCH]: {
        chainId: number;
        isQuickRoute: boolean;
        time_to_first_quote_request?: number;
        time_to_first_quote_request_since_first_input?: number;
    };
    [SwapEventName.SWAP_SIGNED]: Record<string, unknown>;
    [SwapEventName.SWAP_MODIFIED_IN_WALLET]: {
        expected: string;
        actual: string;
        txHash: string;
    } & ITraceContext;
    [SwapEventName.SWAP_ERROR]: {
        wrapType?: WrapType;
        input?: Currency;
        output?: Currency;
    };
    [SwapEventName.SWAP_TOKENS_REVERSED]: undefined;
    [UniswapEventName.TooltipOpened]: ITraceContext & {
        tooltip_name: string;
        is_price_ux_enabled: boolean;
    };
    [UniswapEventName.DelegationDetected]: {
        chainId: number;
        delegationAddress: string;
        isActiveChain?: boolean;
    };
    [UniswapEventName.BalancesReport]: {
        total_balances_usd: number;
        wallets: string[];
        balances: number[];
    };
    [UniswapEventName.BalancesReportPerChain]: {
        total_balances_usd_per_chain: Record<string, number>;
        wallet: string;
        view_only: boolean;
    };
    [UniswapEventName.ConversionEventSubmitted]: {
        id: string;
        eventId: string;
        eventName: string;
        platformIdType: string;
    };
    [UniswapEventName.TokenSelected]: (ITraceContext & AssetDetailsBaseProperties & SearchResultContextProperties & {
        field: CurrencyField;
        preselect_asset: boolean;
        tokenSection?: OnchainItemSectionName;
    }) | InterfaceTokenSelectedProperties;
    [UniswapEventName.BlockaidFeesMismatch]: {
        symbol: string;
        address: string;
        chainId: number;
        buyFeePercent?: number;
        sellFeePercent?: number;
        blockaidBuyFeePercent?: number;
        blockaidSellFeePercent?: number;
        attackType?: string;
        protectionResult?: string;
    };
    [UniswapEventName.LowNetworkTokenInfoModalOpened]: {
        location: 'send' | 'swap';
    };
    [UniswapEventName.LpIncentiveCollectRewardsButtonClicked]: undefined;
    [UniswapEventName.LpIncentiveCollectRewardsErrorThrown]: {
        error: string;
    };
    [UniswapEventName.LpIncentiveCollectRewardsRetry]: undefined;
    [UniswapEventName.LpIncentiveCollectRewardsSuccess]: {
        token_rewards: string;
    };
    [UniswapEventName.LpIncentiveLearnMoreCtaClicked]: undefined;
    [UniswapEventName.SmartWalletMismatchDetected]: {
        chainId: string;
        delegatedAddress: string;
    };
    [UnitagEventName.UnitagBannerActionTaken]: {
        action: 'claim' | 'dismiss';
        entryPoint: 'home' | 'settings';
    };
    [UnitagEventName.UnitagOnboardingActionTaken]: {
        action: 'select' | 'later';
    };
    [UnitagEventName.UnitagChanged]: undefined;
    [UnitagEventName.UnitagClaimAvailabilityDisplayed]: {
        result: 'unavailable' | 'restricted' | 'available';
    };
    [UnitagEventName.UnitagClaimed]: UnitagClaimContext;
    [UnitagEventName.UnitagMetadataUpdated]: {
        avatar: boolean;
        description: boolean;
        twitter: boolean;
    };
    [UnitagEventName.UnitagRemoved]: undefined;
    [WalletEventName.AppRating]: {
        type: 'store-review' | 'feedback-form' | 'remind' | 'close';
        appRatingPromptedMs?: number;
        appRatingProvidedMs?: number;
    };
    [WalletEventName.BackupMethodAdded]: {
        backupMethodType: 'manual' | 'cloud' | 'passkey' | 'maybe-manual';
        newBackupCount: number;
    };
    [WalletEventName.BackupMethodRemoved]: {
        backupMethodType: 'manual' | 'cloud' | 'passkey' | 'maybe-manual';
        newBackupCount: number;
    };
    [WalletEventName.DappRequestCardPressed]: DappRequestCardEventProperties;
    [WalletEventName.DappRequestCardClosed]: DappRequestCardEventProperties;
    [WalletEventName.ExternalLinkOpened]: {
        url: string;
    };
    [WalletEventName.GasEstimateAccuracy]: GasEstimateAccuracyProperties;
    [WalletEventName.KeyringMissingMnemonic]: KeyringMissingMnemonicProperties;
    [WalletEventName.MismatchAccountSignatureRequestBlocked]: undefined;
    [WalletEventName.PendingTransactionTimeout]: PendingTransactionTimeoutProperties;
    [WalletEventName.TokenVisibilityChanged]: {
        currencyId: string;
        visible: boolean;
    };
    [WalletEventName.TransferSubmitted]: TransferProperties;
    [WalletEventName.WalletAdded]: OnboardingCompletedProps & ITraceContext;
    [WalletEventName.WalletRemoved]: {
        wallets_removed: Address[];
    } & ITraceContext;
    [WalletEventName.TransferCompleted]: TransferProperties;
    [WalletEventName.ExploreSearchCancel]: {
        query: string;
    };
    [WalletEventName.ModalClosed]: ITraceContext & Record<string, unknown>;
    [WalletEventName.NetworkFilterSelected]: ITraceContext & {
        chain: UniverseChainId | 'All';
    };
    [WalletEventName.NFTVisibilityChanged]: {
        tokenId?: string;
        chainId?: UniverseChainId;
        contractAddress?: Address;
        isSpam?: boolean;
        visible: boolean;
    };
    [WalletEventName.NFTsLoaded]: {
        shown: number;
        hidden: number;
    };
    [WalletEventName.OnboardingIntroCardSwiped]: OnboardingCardEventProperties;
    [WalletEventName.OnboardingIntroCardPressed]: OnboardingCardEventProperties;
    [WalletEventName.OnboardingIntroCardClosed]: OnboardingCardEventProperties;
    [WalletEventName.PerformanceGraphql]: {
        dataSize: number;
        duration: number;
        operationName: string;
        operationType?: string;
    };
    [WalletEventName.PortfolioBalanceFreshnessLag]: {
        freshnessLag: number;
        updatedCurrencies: string[];
    };
    [WalletEventName.SendRecipientSelected]: {
        domain: string;
    };
    [WalletEventName.ShareButtonClicked]: {
        entity: ShareableEntity;
        url: string;
    };
    [WalletEventName.SwapSubmitted]: ({
        transaction_hash: string;
    } | {
        order_hash: string;
    }) & SwapTradeBaseProperties;
    [WalletEventName.TestnetModeToggled]: {
        enabled: boolean;
        location: 'settings' | 'deep_link_modal';
    };
    [WalletEventName.TestnetEvent]: {
        originalEventName: string;
    } & Record<string, unknown>;
    [WalletEventName.ViewRecoveryPhrase]: undefined;
};
export type AppsFlyerEventProperties = {
    [MobileAppsFlyerEvents.OnboardingCompleted]: {
        importType: ImportType;
    };
    [MobileAppsFlyerEvents.SwapCompleted]: undefined;
    [MobileAppsFlyerEvents.WalletFunded]: {
        sumOfFunds: number;
    };
};
export {};
//# sourceMappingURL=types.d.ts.map