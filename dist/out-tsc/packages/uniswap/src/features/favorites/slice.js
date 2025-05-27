import { createSlice } from '@reduxjs/toolkit';
import { Ether } from '@uniswap/sdk-core';
import { WBTC } from 'uniswap/src/constants/tokens';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { currencyId as idFromCurrency } from 'uniswap/src/utils/currencyId';
import { logger } from 'utilities/src/logger/logger';
// Default currency ids, need to be in lowercase to match slice add and remove behavior
const WBTC_CURRENCY_ID = idFromCurrency(WBTC).toLowerCase();
const ETH_CURRENCY_ID = idFromCurrency(Ether.onChain(UniverseChainId.Mainnet)).toLowerCase();
export const initialFavoritesState = {
    tokens: [ETH_CURRENCY_ID, WBTC_CURRENCY_ID],
    watchedAddresses: [],
};
export const slice = createSlice({
    name: 'favorites',
    initialState: initialFavoritesState,
    reducers: {
        addFavoriteToken: (state, { payload: { currencyId } }) => {
            if (state.tokens.indexOf(currencyId) === -1) {
                state.tokens.push(currencyId.toLowerCase()); // normalize all IDs
            }
            else {
                logger.warn('slice', 'addFavoriteToken', `Attempting to favorite a token twice (${currencyId})`);
            }
        },
        removeFavoriteToken: (state, { payload: { currencyId } }) => {
            const newTokens = state.tokens.filter((c) => {
                return c.toLocaleLowerCase() !== currencyId.toLocaleLowerCase();
            });
            if (newTokens.length === state.tokens.length) {
                logger.warn('slice', 'removeFavoriteToken', `Attempting to un-favorite a token that was not in favorites (${currencyId})`);
            }
            state.tokens = newTokens;
        },
        setFavoriteTokens: (state, { payload: { currencyIds } }) => {
            state.tokens = currencyIds;
        },
        addWatchedAddress: (state, { payload: { address } }) => {
            if (!state.watchedAddresses.includes(address)) {
                state.watchedAddresses.push(address);
            }
            else {
                logger.warn('slice', 'addWatchedAddress', `Attempting to watch an address twice (${address})`);
            }
        },
        removeWatchedAddress: (state, { payload: { address } }) => {
            const newWatched = state.watchedAddresses.filter((a) => a !== address);
            if (newWatched.length === state.watchedAddresses.length) {
                logger.warn('slice', 'removeWatchedAddress', `Attempting to remove an address not found in watched list (${address})`);
            }
            state.watchedAddresses = newWatched;
        },
        setFavoriteWallets: (state, { payload: { addresses } }) => {
            state.watchedAddresses = addresses;
        },
    },
});
export const { addFavoriteToken, removeFavoriteToken, setFavoriteTokens, addWatchedAddress, removeWatchedAddress, setFavoriteWallets, } = slice.actions;
export const { reducer: favoritesReducer } = slice;
//# sourceMappingURL=slice.js.map