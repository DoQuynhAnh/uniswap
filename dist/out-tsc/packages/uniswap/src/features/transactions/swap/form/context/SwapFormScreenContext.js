import { createContext, useContext } from 'react';
export const SwapFormScreenContext = createContext(undefined);
export function useSwapFormScreenState() {
    const context = useContext(SwapFormScreenContext);
    if (!context) {
        throw new Error('useSwapFormScreenState must be used within a SwapFormScreenContextProvider');
    }
    return context;
}
//# sourceMappingURL=SwapFormScreenContext.js.map