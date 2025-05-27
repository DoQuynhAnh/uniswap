import { PayloadAction } from '@reduxjs/toolkit';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyId } from 'uniswap/src/types/currency';
export type Visibility = {
    isVisible: boolean;
};
export type PositionKeyToVisibility = Record<string, Visibility>;
export type CurrencyIdToVisibility = Record<CurrencyId, Visibility>;
export type NFTKeyToVisibility = Record<string, Visibility>;
export interface VisibilityState {
    positions: PositionKeyToVisibility;
    tokens: CurrencyIdToVisibility;
    nfts: NFTKeyToVisibility;
}
export declare const initialVisibilityState: VisibilityState;
export declare const slice: import("@reduxjs/toolkit").Slice<VisibilityState, {
    togglePositionVisibility: (state: import("immer/dist/internal").WritableDraft<VisibilityState>, { payload: { poolId, tokenId, chainId }, }: {
        payload: {
            poolId: string;
            tokenId: string | undefined;
            chainId: UniverseChainId;
        };
        type: string;
    }) => void;
    setTokenVisibility: (state: import("immer/dist/internal").WritableDraft<VisibilityState>, { payload: { currencyId, isVisible } }: {
        payload: {
            currencyId: string;
            isVisible: boolean;
        };
        type: string;
    }) => void;
    setNftVisibility: (state: import("immer/dist/internal").WritableDraft<VisibilityState>, { payload: { nftKey, isVisible } }: {
        payload: {
            nftKey: string;
            isVisible: boolean;
        };
        type: string;
    }) => void;
}, "visibility">;
export declare const togglePositionVisibility: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    poolId: string;
    tokenId: string | undefined;
    chainId: UniverseChainId;
}, "visibility/togglePositionVisibility">, setTokenVisibility: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    currencyId: string;
    isVisible: boolean;
}, "visibility/setTokenVisibility">, setNftVisibility: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    nftKey: string;
    isVisible: boolean;
}, "visibility/setNftVisibility">;
export declare const visibilityReducer: import("redux").Reducer<VisibilityState>;
//# sourceMappingURL=slice.d.ts.map