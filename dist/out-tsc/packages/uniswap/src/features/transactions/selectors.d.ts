import { Selector } from '@reduxjs/toolkit';
import { SearchableRecipient } from 'uniswap/src/features/address/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { TransactionsState } from 'uniswap/src/features/transactions/slice';
import { TransactionDetails, UniswapXOrderDetails } from 'uniswap/src/features/transactions/types/transactionDetails';
import { CurrencyIdToVisibility } from 'uniswap/src/features/visibility/slice';
import { UniswapState } from 'uniswap/src/state/uniswapReducer';
export declare const selectTransactions: (state: UniswapState) => TransactionsState;
export declare const selectSwapTransactionsCount: ((state: import("redux").EmptyObject & {
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
    readonly swapSettings: import("./swap/contexts/slice").SwapSettingsState;
    readonly favorites: import("../favorites/slice").FavoritesState;
    readonly notifications: import("../notifications/slice").NotificationState;
    readonly portfolio: import("../portfolio/slice/slice").PortfolioState;
    readonly searchHistory: Readonly<import("../search/searchHistorySlice").SearchHistoryState>;
    readonly timing: import("../timing/slice").TimingState;
    readonly tokens: import("../tokens/slice/slice").TokensState;
    readonly transactions: TransactionsState;
    readonly transactionSettings: {
        swap: import("./components/settings/slice").TransactionSettingsState;
        lp: import("./components/settings/slice").TransactionSettingsState;
    };
    readonly uniswapBehaviorHistory: import("../behaviorHistory/slice").UniswapBehaviorHistoryState;
    readonly userSettings: import("../settings/slice").UserSettingsState;
    readonly visibility: import("uniswap/src/features/visibility/slice").VisibilityState;
    readonly delegation: import("../smartWallet/delegation/types").DelegatedState;
}) => number) & import("reselect").OutputSelectorFields<(args_0: TransactionsState) => number, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export type AddressTransactionsSelector = Selector<UniswapState, TransactionDetails[] | undefined, [Address | null]>;
export declare const makeSelectAddressTransactions: () => AddressTransactionsSelector;
export declare function useSelectAddressTransactions(address: Address | null): TransactionDetails[] | undefined;
export declare function useCurrencyIdToVisibility(addresses: Address[]): CurrencyIdToVisibility;
interface MakeSelectParams {
    address: Address | undefined;
    chainId: UniverseChainId | undefined;
    txId: string | undefined;
}
export declare const makeSelectTransaction: () => Selector<UniswapState, TransactionDetails | undefined, [MakeSelectParams]>;
interface MakeSelectOrderParams {
    orderHash: string;
}
export declare const makeSelectUniswapXOrder: () => Selector<UniswapState, UniswapXOrderDetails | undefined, [
    MakeSelectOrderParams
]>;
export declare const selectRecipientsByRecency: (state: UniswapState) => SearchableRecipient[];
export declare const selectIncompleteTransactions: (state: UniswapState) => TransactionDetails[];
export {};
//# sourceMappingURL=selectors.d.ts.map