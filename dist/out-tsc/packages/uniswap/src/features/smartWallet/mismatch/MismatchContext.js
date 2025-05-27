import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { createContext, useContext, useMemo } from 'react';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { MismatchAccountEffects } from 'uniswap/src/features/smartWallet/mismatch/MismatchAccountEffects';
import { useEvent } from 'utilities/src/react/hooks';
const MismatchContext = createContext(undefined);
export const MismatchContextProvider = React.memo(function MismatchContextProvider({ children, mismatchCallback: mismatchCallbackProp, address, chainId, onHasAnyMismatch, chains, defaultChainId, isTestnetModeEnabled, }) {
    const isMismatchForced = useIsMismatchForced();
    const mismatchCallback = useEvent(async (input) => {
        if (isMismatchForced) {
            return true;
        }
        return mismatchCallbackProp(input);
    });
    const value = useMemo(() => ({
        mismatchCallback,
        account: { address, chainId },
        onHasAnyMismatch,
        chains,
        defaultChainId,
        isTestnetModeEnabled,
    }), [mismatchCallback, address, chainId, onHasAnyMismatch, chains, defaultChainId, isTestnetModeEnabled]);
    return (_jsxs(MismatchContext.Provider, { value: value, children: [_jsx(MismatchAccountEffects, {}), children] }));
});
MismatchContextProvider.displayName = 'MismatchContextProvider';
export function useMismatchContext() {
    const value = useContext(MismatchContext);
    if (!value) {
        throw new Error('MismatchContext not found');
    }
    return value;
}
function useIsMismatchForced() {
    return useFeatureFlag(FeatureFlags.ForcePermitTransactions);
}
//# sourceMappingURL=MismatchContext.js.map