import { createContext, useContext } from 'react';
export const SwapDependenciesContext = createContext(null);
export const useSwapDependencies = () => {
    const context = useContext(SwapDependenciesContext);
    if (!context) {
        throw new Error('useSwapDependencies must be used within a SwapDependenciesContext');
    }
    return context;
};
//# sourceMappingURL=SwapDependenciesContext.js.map