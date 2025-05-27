import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { FOR_API_HEADERS } from 'uniswap/src/features/fiatOnRamp/constants';
import { transformPaymentMethods } from 'uniswap/src/features/fiatOnRamp/utils';
export const fiatOnRampAggregatorApi = createApi({
    reducerPath: 'fiatOnRampAggregatorApi-uniswap',
    baseQuery: fetchBaseQuery({
        baseUrl: uniswapUrls.forApiUrl,
        headers: FOR_API_HEADERS,
    }),
    endpoints: (builder) => ({
        fiatOnRampAggregatorCountryList: builder.query({
            query: (request) => ({ url: '/SupportedCountries', body: request, method: 'POST' }),
        }),
        fiatOnRampAggregatorGetCountry: builder.query({
            query: () => ({ url: '/GetCountry', body: {}, method: 'POST' }),
        }),
        fiatOnRampAggregatorCryptoQuote: builder.query({
            query: (request) => ({
                url: '/Quote',
                body: request,
                method: 'POST',
            }),
            keepUnusedDataFor: 0,
            transformResponse: (response) => {
                var _a;
                return ({
                    ...response,
                    quotes: (_a = response.quotes) === null || _a === void 0 ? void 0 : _a.map((quote) => ({
                        ...quote,
                        serviceProviderDetails: {
                            ...quote.serviceProviderDetails,
                            paymentMethods: transformPaymentMethods(quote.serviceProviderDetails.paymentMethods),
                        },
                    })),
                });
            },
        }),
        fiatOnRampAggregatorTransferServiceProviders: builder.query({
            query: () => ({ url: '/TransferServiceProviders', body: {}, method: 'POST' }),
            keepUnusedDataFor: 60 * 60, // 1 hour
        }),
        fiatOnRampAggregatorSupportedTokens: builder.query({
            query: (request) => ({
                url: '/SupportedTokens',
                body: request,
                method: 'POST',
            }),
        }),
        fiatOnRampAggregatorSupportedFiatCurrencies: builder.query({
            query: (request) => ({
                url: '/SupportedFiatCurrencies',
                body: request,
                method: 'POST',
            }),
        }),
        fiatOnRampAggregatorWidget: builder.query({
            query: (request) => ({
                url: '/WidgetUrl',
                body: request,
                method: 'POST',
            }),
        }),
        fiatOnRampAggregatorTransferWidget: builder.query({
            query: (request) => ({
                url: '/TransferWidgetUrl',
                body: request,
                method: 'POST',
            }),
        }),
        /**
         * Fetches a fiat onramp transaction by its ID, with no signature authentication.
         */
        fiatOnRampAggregatorTransaction: builder.query({
            query: (request) => ({ url: '/Transaction', body: request, method: 'POST' }),
        }),
        fiatOnRampAggregatorOffRampWidget: builder.query({
            query: (request) => ({
                url: '/OffRampWidgetUrl',
                body: request,
                method: 'POST',
            }),
        }),
        fiatOnRampAggregatorOffRampTransferDetails: builder.query({
            query: (request) => ({
                url: '/OffRampTransferDetails',
                body: request,
                method: 'POST',
            }),
        }),
    }),
});
export const { useFiatOnRampAggregatorCountryListQuery, useFiatOnRampAggregatorGetCountryQuery, useFiatOnRampAggregatorCryptoQuoteQuery, useFiatOnRampAggregatorTransferServiceProvidersQuery, useFiatOnRampAggregatorSupportedTokensQuery, useFiatOnRampAggregatorSupportedFiatCurrenciesQuery, useFiatOnRampAggregatorWidgetQuery, useFiatOnRampAggregatorTransferWidgetQuery, useFiatOnRampAggregatorOffRampWidgetQuery, } = fiatOnRampAggregatorApi;
//# sourceMappingURL=api.js.map