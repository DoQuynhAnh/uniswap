import { PayloadAction } from '@reduxjs/toolkit';
import type { DelegatedState } from 'uniswap/src/features/smartWallet/delegation/types';
export declare const delegationSlice: import("@reduxjs/toolkit").Slice<DelegatedState, {
    updateDelegatedState(state: import("immer/dist/internal").WritableDraft<DelegatedState>, { payload }: PayloadAction<{
        chainId: string;
        address: string;
    }>): void;
    setActiveChainId(state: import("immer/dist/internal").WritableDraft<DelegatedState>, { payload }: PayloadAction<{
        chainId?: number;
    }>): void;
}, "delegation">;
export declare const updateDelegatedState: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: string;
    address: string;
}, "delegation/updateDelegatedState">, setActiveChainId: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId?: number | undefined;
}, "delegation/setActiveChainId">;
export declare const delegationReducer: import("redux").Reducer<DelegatedState>;
export declare const delegationListenerMiddleware: import("@reduxjs/toolkit").ListenerMiddlewareInstance<{
    delegation: DelegatedState;
}, import("@reduxjs/toolkit").ThunkDispatch<{
    delegation: DelegatedState;
}, unknown, import("redux").AnyAction>, unknown>;
//# sourceMappingURL=slice.d.ts.map