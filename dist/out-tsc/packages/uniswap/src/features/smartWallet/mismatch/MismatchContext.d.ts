import React from 'react';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
interface MismatchContextValue {
    mismatchCallback: (input: {
        address: string;
        chainId: number;
    }) => Promise<boolean>;
    account: {
        address?: string;
        chainId?: number;
    };
    onHasAnyMismatch: () => void;
    chains: UniverseChainId[];
    defaultChainId: UniverseChainId;
    isTestnetModeEnabled: boolean;
}
type MismatchContextProviderProps = Omit<MismatchContextValue, 'account'> & MismatchContextValue['account'];
export declare const MismatchContextProvider: React.NamedExoticComponent<React.PropsWithChildren<MismatchContextProviderProps>>;
export declare function useMismatchContext(): MismatchContextValue;
export {};
//# sourceMappingURL=MismatchContext.d.ts.map