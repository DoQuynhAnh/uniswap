import { TokenSelectorFlow } from 'uniswap/src/components/TokenSelector/types';
import { OnchainItemSectionName } from 'uniswap/src/components/lists/OnchainItemList/types';
import { OnchainItemListOptionType } from 'uniswap/src/components/lists/items/types';
import { tradingApiSwappableTokenToCurrencyInfo } from 'uniswap/src/data/apiClients/tradingApi/utils/tradingApiSwappableTokenToCurrencyInfo';
import { SafetyLevel as GqlSafetyLevel } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { SafetyLevel } from 'uniswap/src/data/tradingApi/__generated__';
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { areCurrencyIdsEqual } from 'uniswap/src/utils/currencyId';
import { differenceWith } from 'utilities/src/primitives/array';
export function createEmptyTokenOptionFromBridgingToken(token) {
    const currencyInfo = tradingApiSwappableTokenToCurrencyInfo(token);
    if (!currencyInfo) {
        return undefined;
    }
    return {
        type: OnchainItemListOptionType.Token,
        currencyInfo,
        balanceUSD: null,
        quantity: null,
    };
}
export function toGqlSafetyLevel(safetyLevel) {
    switch (safetyLevel) {
        case SafetyLevel.BLOCKED:
            return GqlSafetyLevel.Blocked;
        case SafetyLevel.MEDIUM_WARNING:
            return GqlSafetyLevel.MediumWarning;
        case SafetyLevel.STRONG_WARNING:
            return GqlSafetyLevel.StrongWarning;
        case SafetyLevel.VERIFIED:
            return GqlSafetyLevel.Verified;
        default:
            return null;
    }
}
// get items in `currencies` that are not in `without`
// e.g. difference([B, C, D], [A, B, C]) would return ([D])
export function tokenOptionDifference(currencies, without) {
    if (!currencies) {
        return undefined;
    }
    return differenceWith(currencies, without !== null && without !== void 0 ? without : [], tokenOptionComparator);
}
function tokenOptionComparator(tokenOption, otherTokenOption) {
    return areCurrencyIdsEqual(tokenOption.currencyInfo.currencyId, otherTokenOption.currencyInfo.currencyId);
}
/**
 * Utility to merge the search results with the bridging tokens.
 * Also updates the search results section name accordingly
 */
export function mergeSearchResultsWithBridgingTokens(searchResults, bridgingTokens, sectionHeaderString) {
    if (!searchResults || !bridgingTokens || bridgingTokens.length === 0) {
        return searchResults;
    }
    const extractedBridgingTokens = [];
    const extractedSearchResults = searchResults.map((section) => {
        const sectionResults = [];
        section.data.forEach((token) => {
            const isBridgingToken = bridgingTokens.some((bridgingToken) => areCurrencyIdsEqual(token.currencyInfo.currencyId, bridgingToken.currencyInfo.currencyId));
            if (isBridgingToken) {
                extractedBridgingTokens.push(token);
            }
            else {
                sectionResults.push(token);
            }
        });
        return {
            ...section,
            data: sectionResults,
        };
    });
    const bridgingSection = {
        sectionKey: OnchainItemSectionName.BridgingTokens,
        data: extractedBridgingTokens,
    };
    // Update the search results section name to "Other tokens on {{network}}" if there is a valid bridging section
    const searchResultsSection = extractedSearchResults.find((section) => section.sectionKey === OnchainItemSectionName.SearchResults);
    if (bridgingSection.data.length > 0 && searchResultsSection && sectionHeaderString) {
        searchResultsSection.name = sectionHeaderString;
    }
    // Remove empty sections
    return [bridgingSection, ...extractedSearchResults].filter((section) => section.data.length > 0);
}
export function isTokenOptionArray(option) {
    return Array.isArray(option) && option.every((item) => item.type === OnchainItemListOptionType.Token);
}
export function isSwapListLoading({ loading, portfolioSection, trendingSection, isTestnetModeEnabled, }) {
    // the trending section is not shown on testnet
    return loading && (isTestnetModeEnabled ? !portfolioSection : !portfolioSection || !trendingSection);
}
export function flowToModalName(flow) {
    switch (flow) {
        case TokenSelectorFlow.Swap:
            return ModalName.Swap;
        case TokenSelectorFlow.Send:
            return ModalName.Send;
        default:
            return undefined;
    }
}
//# sourceMappingURL=utils.js.map