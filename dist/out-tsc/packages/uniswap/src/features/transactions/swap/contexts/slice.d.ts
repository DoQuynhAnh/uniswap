import { PayloadAction } from '@reduxjs/toolkit';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyField } from 'uniswap/src/types/currency';
export interface SwapSettingsState {
    filteredChainIds: {
        [key in CurrencyField]?: UniverseChainId;
    } | undefined;
}
export declare const initialSwapSettingsState: SwapSettingsState;
export declare const slice: import("@reduxjs/toolkit").Slice<SwapSettingsState, {
    updateFilteredChainIds: (state: import("immer/dist/internal").WritableDraft<SwapSettingsState>, { payload: { filteredChainIds }, }: {
        payload: {
            filteredChainIds: {
                input?: UniverseChainId | undefined;
                output?: UniverseChainId | undefined;
            };
        };
        type: string;
    }) => void;
    resetFilteredChainIds: (state: import("immer/dist/internal").WritableDraft<SwapSettingsState>) => void;
}, "swapSettings">;
export declare const updateFilteredChainIds: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    filteredChainIds: {
        input?: UniverseChainId | undefined;
        output?: UniverseChainId | undefined;
    };
}, "swapSettings/updateFilteredChainIds">, resetFilteredChainIds: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"swapSettings/resetFilteredChainIds">;
export declare const swapSettingsReducer: import("redux").Reducer<SwapSettingsState>;
//# sourceMappingURL=slice.d.ts.map