import { SearchResult } from 'uniswap/src/features/search/SearchResult';
export declare function searchResultId(searchResult: SearchResult): string;
export interface SearchHistoryState {
    results: SearchResult[];
}
export declare const initialSearchHistoryState: Readonly<SearchHistoryState>;
export declare const addToSearchHistory: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    searchResult: SearchResult;
}, "searchHistory/addToSearchHistory">, clearSearchHistory: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"searchHistory/clearSearchHistory">;
export declare const searchHistoryReducer: import("redux").Reducer<Readonly<SearchHistoryState>>;
//# sourceMappingURL=searchHistorySlice.d.ts.map