import { createSlice } from '@reduxjs/toolkit';
export const initialSwapSettingsState = {
    filteredChainIds: undefined,
};
export const slice = createSlice({
    name: 'swapSettings',
    initialState: initialSwapSettingsState,
    reducers: {
        updateFilteredChainIds: (state, { payload: { filteredChainIds }, }) => {
            state.filteredChainIds = { ...filteredChainIds };
        },
        resetFilteredChainIds: (state) => {
            state.filteredChainIds = undefined;
        },
    },
});
export const { updateFilteredChainIds, resetFilteredChainIds } = slice.actions;
export const { reducer: swapSettingsReducer } = slice;
//# sourceMappingURL=slice.js.map