import { createContext, useContext } from 'react';
export const SwapReviewCallbacksContext = createContext(null);
export const useSwapReviewCallbacks = () => {
    const context = useContext(SwapReviewCallbacksContext);
    if (!context) {
        throw new Error('useSwapReviewCallbacks must be used within a SwapReviewCallbacksContext');
    }
    return context;
};
//# sourceMappingURL=SwapReviewCallbacksContext.js.map