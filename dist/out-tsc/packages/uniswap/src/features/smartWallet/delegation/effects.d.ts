import type { PayloadAction } from '@reduxjs/toolkit';
import type { DelegatedState } from 'uniswap/src/features/smartWallet/delegation/types';
import type { Logger } from 'utilities/src/logger/logger';
type StateGetter = () => {
    delegation: DelegatedState;
};
export declare function getHandleOnUpdateDelegatedState(ctx: {
    getOriginalState: StateGetter;
    getState: StateGetter;
    onDelegationDetected: (input: {
        chainId: number;
        address: string;
        isActiveChain: boolean;
    }) => void;
    onNewDelegateState: (input: {
        delegations: Record<string, string>;
    }) => void;
    logger?: Logger;
}): (input: {
    action: PayloadAction<{
        chainId: string;
        address: string;
    }>;
}) => void;
export declare function getHandleOnSetActiveChainId(ctx: {
    getState: StateGetter;
    onDelegationDetected: (input: {
        chainId: number;
        address: string;
        isActiveChain: boolean;
    }) => void;
    logger?: Logger;
}): (input: {
    action: PayloadAction<{
        chainId?: number;
    }>;
}) => void;
export {};
//# sourceMappingURL=effects.d.ts.map