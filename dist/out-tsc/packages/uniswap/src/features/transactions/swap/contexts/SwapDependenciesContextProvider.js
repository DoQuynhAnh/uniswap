import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { SwapDependenciesContext } from 'uniswap/src/features/transactions/swap/contexts/SwapDependenciesContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useCreateGetExecuteSwapService } from 'uniswap/src/features/transactions/swap/services/hooks/useExecuteSwap';
export const SwapDependenciesContextProvider = ({ children, swapCallback, wrapCallback, }) => {
    const { derivedSwapInfo } = useSwapFormContext();
    const getExecuteSwapService = useCreateGetExecuteSwapService({
        swapCallback,
        wrapCallback,
        derivedSwapInfo,
    });
    const value = useMemo(() => ({ derivedSwapInfo, getExecuteSwapService, wrapCallback }), [derivedSwapInfo, getExecuteSwapService, wrapCallback]);
    return _jsx(SwapDependenciesContext.Provider, { value: value, children: children });
};
//# sourceMappingURL=SwapDependenciesContextProvider.js.map