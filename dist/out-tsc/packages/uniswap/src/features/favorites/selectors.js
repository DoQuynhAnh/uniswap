import { createSelector } from '@reduxjs/toolkit';
import { unique } from 'utilities/src/primitives/array';
const selectFavoriteTokensWithPossibleDuplicates = (state) => state.favorites.tokens;
export const selectFavoriteTokens = createSelector(selectFavoriteTokensWithPossibleDuplicates, unique);
export const selectHasFavoriteTokens = createSelector(selectFavoriteTokens, (tokens) => Boolean((tokens === null || tokens === void 0 ? void 0 : tokens.length) > 0));
export const makeSelectHasTokenFavorited = () => createSelector(selectFavoriteTokens, (_, currencyId) => currencyId, (tokens, currencyId) => tokens === null || tokens === void 0 ? void 0 : tokens.includes(currencyId.toLowerCase()));
const selectWatchedAddresses = (state) => state.favorites.watchedAddresses;
export const selectWatchedAddressSet = createSelector(selectWatchedAddresses, (watched) => new Set(watched));
export const selectHasWatchedWallets = createSelector(selectWatchedAddresses, (watched) => Boolean((watched === null || watched === void 0 ? void 0 : watched.length) > 0));
//# sourceMappingURL=selectors.js.map