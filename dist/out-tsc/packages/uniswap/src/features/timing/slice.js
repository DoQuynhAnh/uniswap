import { createSlice } from '@reduxjs/toolkit';
export const initialTimingState = {
    swap: {
        startTimestamp: undefined,
    },
};
export const slice = createSlice({
    name: 'timing',
    initialState: initialTimingState,
    reducers: {
        updateSwapStartTimestamp: (state, { payload: { timestamp } }) => {
            state.swap.startTimestamp = timestamp;
        },
    },
});
export const { updateSwapStartTimestamp } = slice.actions;
export const { reducer: timingReducer } = slice;
//# sourceMappingURL=slice.js.map