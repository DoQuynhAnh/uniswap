import { Selector } from '@reduxjs/toolkit';
import { UniswapRootState } from 'uniswap/src/state';
export declare const selectFavoriteTokens: ((state: import("redux").EmptyObject & {
    readonly "fiatOnRampAggregatorApi-uniswap": import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fiatOnRampAggregatorCountryList: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedCountriesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedCountriesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorGetCountry: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORCountry, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorCryptoQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORQuoteRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORQuoteResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferServiceProviders: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORServiceProvidersResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedTokens: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedTokensRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedTokensResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedFiatCurrencies: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedFiatCurrenciesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedFiatCurrenciesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORTransferWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransaction: import("@reduxjs/toolkit/dist/query").QueryDefinition<Omit<import("../fiatOnRamp/types").FORTransactionRequest, "sessionId"> & {
            sessionId: string;
        }, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORTransactionResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampTransferDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampTransferDetailsRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").OffRampTransferDetailsResponse, "fiatOnRampAggregatorApi-uniswap">;
    }, never, "fiatOnRampAggregatorApi-uniswap">;
    readonly swapSettings: import("../transactions/swap/contexts/slice").SwapSettingsState;
    readonly favorites: import("./slice").FavoritesState;
    readonly notifications: import("../notifications/slice").NotificationState;
    readonly portfolio: import("../portfolio/slice/slice").PortfolioState;
    readonly searchHistory: Readonly<import("../search/searchHistorySlice").SearchHistoryState>;
    readonly timing: import("../timing/slice").TimingState;
    readonly tokens: import("../tokens/slice/slice").TokensState;
    readonly transactions: import("../transactions/slice").TransactionsState;
    readonly transactionSettings: {
        swap: import("../transactions/components/settings/slice").TransactionSettingsState;
        lp: import("../transactions/components/settings/slice").TransactionSettingsState;
    };
    readonly uniswapBehaviorHistory: import("../behaviorHistory/slice").UniswapBehaviorHistoryState;
    readonly userSettings: import("../settings/slice").UserSettingsState;
    readonly visibility: import("../visibility/slice").VisibilityState;
    readonly delegation: import("../smartWallet/delegation/types").DelegatedState;
}) => string[]) & import("reselect").OutputSelectorFields<(args_0: string[]) => string[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectHasFavoriteTokens: ((state: import("redux").EmptyObject & {
    readonly "fiatOnRampAggregatorApi-uniswap": import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fiatOnRampAggregatorCountryList: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedCountriesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedCountriesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorGetCountry: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORCountry, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorCryptoQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORQuoteRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORQuoteResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferServiceProviders: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORServiceProvidersResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedTokens: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedTokensRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedTokensResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedFiatCurrencies: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedFiatCurrenciesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedFiatCurrenciesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORTransferWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransaction: import("@reduxjs/toolkit/dist/query").QueryDefinition<Omit<import("../fiatOnRamp/types").FORTransactionRequest, "sessionId"> & {
            sessionId: string;
        }, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORTransactionResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampTransferDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampTransferDetailsRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").OffRampTransferDetailsResponse, "fiatOnRampAggregatorApi-uniswap">;
    }, never, "fiatOnRampAggregatorApi-uniswap">;
    readonly swapSettings: import("../transactions/swap/contexts/slice").SwapSettingsState;
    readonly favorites: import("./slice").FavoritesState;
    readonly notifications: import("../notifications/slice").NotificationState;
    readonly portfolio: import("../portfolio/slice/slice").PortfolioState;
    readonly searchHistory: Readonly<import("../search/searchHistorySlice").SearchHistoryState>;
    readonly timing: import("../timing/slice").TimingState;
    readonly tokens: import("../tokens/slice/slice").TokensState;
    readonly transactions: import("../transactions/slice").TransactionsState;
    readonly transactionSettings: {
        swap: import("../transactions/components/settings/slice").TransactionSettingsState;
        lp: import("../transactions/components/settings/slice").TransactionSettingsState;
    };
    readonly uniswapBehaviorHistory: import("../behaviorHistory/slice").UniswapBehaviorHistoryState;
    readonly userSettings: import("../settings/slice").UserSettingsState;
    readonly visibility: import("../visibility/slice").VisibilityState;
    readonly delegation: import("../smartWallet/delegation/types").DelegatedState;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: string[]) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const makeSelectHasTokenFavorited: () => Selector<UniswapRootState, boolean, [string]>;
export declare const selectWatchedAddressSet: ((state: import("redux").EmptyObject & {
    readonly "fiatOnRampAggregatorApi-uniswap": import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fiatOnRampAggregatorCountryList: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedCountriesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedCountriesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorGetCountry: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORCountry, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorCryptoQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORQuoteRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORQuoteResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferServiceProviders: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORServiceProvidersResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedTokens: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedTokensRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedTokensResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedFiatCurrencies: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedFiatCurrenciesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedFiatCurrenciesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORTransferWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransaction: import("@reduxjs/toolkit/dist/query").QueryDefinition<Omit<import("../fiatOnRamp/types").FORTransactionRequest, "sessionId"> & {
            sessionId: string;
        }, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORTransactionResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampTransferDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampTransferDetailsRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").OffRampTransferDetailsResponse, "fiatOnRampAggregatorApi-uniswap">;
    }, never, "fiatOnRampAggregatorApi-uniswap">;
    readonly swapSettings: import("../transactions/swap/contexts/slice").SwapSettingsState;
    readonly favorites: import("./slice").FavoritesState;
    readonly notifications: import("../notifications/slice").NotificationState;
    readonly portfolio: import("../portfolio/slice/slice").PortfolioState;
    readonly searchHistory: Readonly<import("../search/searchHistorySlice").SearchHistoryState>;
    readonly timing: import("../timing/slice").TimingState;
    readonly tokens: import("../tokens/slice/slice").TokensState;
    readonly transactions: import("../transactions/slice").TransactionsState;
    readonly transactionSettings: {
        swap: import("../transactions/components/settings/slice").TransactionSettingsState;
        lp: import("../transactions/components/settings/slice").TransactionSettingsState;
    };
    readonly uniswapBehaviorHistory: import("../behaviorHistory/slice").UniswapBehaviorHistoryState;
    readonly userSettings: import("../settings/slice").UserSettingsState;
    readonly visibility: import("../visibility/slice").VisibilityState;
    readonly delegation: import("../smartWallet/delegation/types").DelegatedState;
}) => Set<string>) & import("reselect").OutputSelectorFields<(args_0: string[]) => Set<string>, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectHasWatchedWallets: ((state: import("redux").EmptyObject & {
    readonly "fiatOnRampAggregatorApi-uniswap": import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fiatOnRampAggregatorCountryList: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedCountriesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedCountriesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorGetCountry: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORCountry, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorCryptoQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORQuoteRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORQuoteResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferServiceProviders: import("@reduxjs/toolkit/dist/query").QueryDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORServiceProvidersResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedTokens: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedTokensRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedTokensResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorSupportedFiatCurrencies: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORSupportedFiatCurrenciesRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORSupportedFiatCurrenciesResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransferWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").FORTransferWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorTransaction: import("@reduxjs/toolkit/dist/query").QueryDefinition<Omit<import("../fiatOnRamp/types").FORTransactionRequest, "sessionId"> & {
            sessionId: string;
        }, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORTransactionResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampWidget: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampWidgetUrlRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").FORWidgetUrlResponse, "fiatOnRampAggregatorApi-uniswap">;
        fiatOnRampAggregatorOffRampTransferDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../fiatOnRamp/types").OffRampTransferDetailsRequest, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../fiatOnRamp/types").OffRampTransferDetailsResponse, "fiatOnRampAggregatorApi-uniswap">;
    }, never, "fiatOnRampAggregatorApi-uniswap">;
    readonly swapSettings: import("../transactions/swap/contexts/slice").SwapSettingsState;
    readonly favorites: import("./slice").FavoritesState;
    readonly notifications: import("../notifications/slice").NotificationState;
    readonly portfolio: import("../portfolio/slice/slice").PortfolioState;
    readonly searchHistory: Readonly<import("../search/searchHistorySlice").SearchHistoryState>;
    readonly timing: import("../timing/slice").TimingState;
    readonly tokens: import("../tokens/slice/slice").TokensState;
    readonly transactions: import("../transactions/slice").TransactionsState;
    readonly transactionSettings: {
        swap: import("../transactions/components/settings/slice").TransactionSettingsState;
        lp: import("../transactions/components/settings/slice").TransactionSettingsState;
    };
    readonly uniswapBehaviorHistory: import("../behaviorHistory/slice").UniswapBehaviorHistoryState;
    readonly userSettings: import("../settings/slice").UserSettingsState;
    readonly visibility: import("../visibility/slice").VisibilityState;
    readonly delegation: import("../smartWallet/delegation/types").DelegatedState;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: string[]) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
//# sourceMappingURL=selectors.d.ts.map