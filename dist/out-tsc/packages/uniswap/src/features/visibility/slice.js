import { createSlice } from '@reduxjs/toolkit';
import { getUniquePositionId } from 'uniswap/src/features/visibility/utils';
export const initialVisibilityState = {
    positions: {},
    tokens: {},
    nfts: {},
};
// Manages user-marked visibility states for positions and tokens
export const slice = createSlice({
    name: 'visibility',
    initialState: initialVisibilityState,
    reducers: {
        togglePositionVisibility: (state, { payload: { poolId, tokenId, chainId }, }) => {
            var _a, _b;
            const positionId = getUniquePositionId(poolId, tokenId, chainId);
            const isVisible = (_b = (_a = state.positions[positionId]) === null || _a === void 0 ? void 0 : _a.isVisible) !== null && _b !== void 0 ? _b : true;
            state.positions[positionId] = { isVisible: !isVisible };
        },
        setTokenVisibility: (state, { payload: { currencyId, isVisible } }) => {
            state.tokens[currencyId] = { ...state.tokens[currencyId], isVisible };
        },
        setNftVisibility: (state, { payload: { nftKey, isVisible } }) => {
            var _a;
            // Ensure state.nfts exists
            (_a = state.nfts) !== null && _a !== void 0 ? _a : (state.nfts = {});
            state.nfts[nftKey] = { isVisible };
        },
    },
});
export const { togglePositionVisibility, setTokenVisibility, setNftVisibility } = slice.actions;
export const { reducer: visibilityReducer } = slice;
//# sourceMappingURL=slice.js.map