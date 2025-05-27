import { TokenSelectorFlow } from 'uniswap/src/components/TokenSelector/types';
import { type OnchainItemSection } from 'uniswap/src/components/lists/OnchainItemList/types';
import { OnchainItemListOption, TokenOption } from 'uniswap/src/components/lists/items/types';
import { SafetyLevel as GqlSafetyLevel } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
import { GetSwappableTokensResponse, SafetyLevel } from 'uniswap/src/data/tradingApi/__generated__';
import { ModalNameType } from 'uniswap/src/features/telemetry/constants';
export declare function createEmptyTokenOptionFromBridgingToken(token: GetSwappableTokensResponse['tokens'][0]): TokenOption | undefined;
export declare function toGqlSafetyLevel(safetyLevel: SafetyLevel): GqlSafetyLevel | null;
export declare function tokenOptionDifference(currencies: TokenOption[] | undefined, without: TokenOption[] | undefined): TokenOption[] | undefined;
/**
 * Utility to merge the search results with the bridging tokens.
 * Also updates the search results section name accordingly
 */
export declare function mergeSearchResultsWithBridgingTokens(searchResults: OnchainItemSection<TokenOption>[] | undefined, bridgingTokens: TokenOption[] | undefined, sectionHeaderString: string | undefined): OnchainItemSection<TokenOption>[] | undefined;
export declare function isTokenOptionArray(option: OnchainItemListOption): option is TokenOption[];
export declare function isSwapListLoading({ loading, portfolioSection, trendingSection, isTestnetModeEnabled, }: {
    loading: boolean;
    portfolioSection: OnchainItemSection<TokenOption>[] | undefined;
    trendingSection: OnchainItemSection<TokenOption>[] | undefined;
    isTestnetModeEnabled: boolean;
}): boolean;
export declare function flowToModalName(flow: TokenSelectorFlow): ModalNameType | undefined;
//# sourceMappingURL=utils.d.ts.map