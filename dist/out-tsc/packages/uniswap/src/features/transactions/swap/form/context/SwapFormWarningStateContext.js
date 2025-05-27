import { createContext, useContext } from 'react';
export const SwapFormWarningStateContext = createContext(null);
export const useSwapFormWarningState = () => {
    const swapFormWarningState = useContext(SwapFormWarningStateContext);
    if (!swapFormWarningState) {
        throw new Error('useSwapFormWarningState must be used within a SwapFormWarningStateProvider');
    }
    return swapFormWarningState;
};
//# sourceMappingURL=SwapFormWarningStateContext.js.map