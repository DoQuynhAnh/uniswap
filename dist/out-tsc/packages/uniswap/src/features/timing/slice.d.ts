import { PayloadAction } from '@reduxjs/toolkit';
/**
 * Used for measuring time to complete key flows for analytics.
 */
export interface TimingState {
    swap: {
        startTimestamp: number | undefined;
    };
}
export declare const initialTimingState: TimingState;
export declare const slice: import("@reduxjs/toolkit").Slice<TimingState, {
    updateSwapStartTimestamp: (state: import("immer/dist/internal").WritableDraft<TimingState>, { payload: { timestamp } }: {
        payload: {
            timestamp?: number | undefined;
        };
        type: string;
    }) => void;
}, "timing">;
export declare const updateSwapStartTimestamp: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    timestamp?: number | undefined;
}, "timing/updateSwapStartTimestamp">;
export declare const timingReducer: import("redux").Reducer<TimingState>;
//# sourceMappingURL=slice.d.ts.map