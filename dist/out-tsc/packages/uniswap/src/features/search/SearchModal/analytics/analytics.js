import { InterfaceEventName, NavBarSearchTypes } from '@uniswap/analytics-events';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { SearchResultType, extractDomain } from 'uniswap/src/features/search/SearchResult';
import { MobileEventName } from 'uniswap/src/features/telemetry/constants';
import { sendAnalyticsEvent } from 'uniswap/src/features/telemetry/send';
import { isMobileApp } from 'utilities/src/platform';
export function sendSearchOptionItemClickedAnalytics({ item, section, rowIndex, searchFilters, }) {
    var _a, _b, _c;
    const searchContext = {
        ...searchFilters,
        category: section.sectionKey,
        isHistory: section.sectionKey === OnchainItemSectionName.RecentSearches, // history item click
        position: rowIndex,
        suggestionCount: section.data.length, // suggestionCount is # of suggestions in this SECTION, not total # of suggestions
    };
    switch (item.type) {
        case OnchainItemListOptionType.Token: {
            const currency = item.currencyInfo.currency;
            if (isMobileApp) {
                sendAnalyticsEvent(MobileEventName.ExploreSearchResultClicked, {
                    ...searchContext,
                    name: (_a = currency.name) !== null && _a !== void 0 ? _a : '',
                    chain: currency.chainId,
                    address: currency.isNative ? 'NATIVE' : currency.address,
                    type: 'token',
                });
            }
            else {
                sendAnalyticsEvent(InterfaceEventName.NAVBAR_RESULT_SELECTED, {
                    ...searchContext,
                    chainId: currency.chainId,
                    suggestion_type: (searchContext === null || searchContext === void 0 ? void 0 : searchContext.isHistory)
                        ? NavBarSearchTypes.RECENT_SEARCH
                        : (searchContext === null || searchContext === void 0 ? void 0 : searchContext.query) && (searchContext === null || searchContext === void 0 ? void 0 : searchContext.query.length) > 0
                            ? NavBarSearchTypes.TOKEN_SUGGESTION
                            : NavBarSearchTypes.TOKEN_TRENDING,
                    total_suggestions: searchContext === null || searchContext === void 0 ? void 0 : searchContext.suggestionCount,
                    query_text: (_b = searchContext === null || searchContext === void 0 ? void 0 : searchContext.query) !== null && _b !== void 0 ? _b : '',
                    selected_search_result_name: (_c = currency.name) !== null && _c !== void 0 ? _c : '',
                    selected_search_result_address: currency.isNative ? 'NATIVE' : currency.address,
                });
            }
            return;
        }
        case OnchainItemListOptionType.WalletByAddress:
            sendAnalyticsEvent(MobileEventName.ExploreSearchResultClicked, {
                ...searchContext,
                address: item.address,
                type: 'address',
            });
            return;
        case OnchainItemListOptionType.ENSAddress:
            sendAnalyticsEvent(MobileEventName.ExploreSearchResultClicked, {
                ...searchContext,
                name: item.ensName,
                address: item.address,
                type: 'address',
                domain: extractDomain(item.ensName, SearchResultType.ENSAddress),
            });
            return;
        case OnchainItemListOptionType.Unitag: {
            sendAnalyticsEvent(MobileEventName.ExploreSearchResultClicked, {
                ...searchContext,
                name: item.unitag,
                address: item.address,
                type: 'address',
                domain: extractDomain(item.unitag, SearchResultType.Unitag),
            });
            return;
        }
        case OnchainItemListOptionType.NFTCollection:
            sendAnalyticsEvent(MobileEventName.ExploreSearchResultClicked, {
                ...searchContext,
                name: item.name,
                chain: item.chainId,
                address: item.address,
                type: 'collection',
            });
            return;
    }
}
//# sourceMappingURL=analytics.js.map