import { useCallback } from 'react';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { useTransactionSettingsContext } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { createExecuteSwapService, } from 'uniswap/src/features/transactions/swap/services/executeSwapService';
import { useEvent } from 'utilities/src/react/hooks';
export function useCreateGetExecuteSwapService(ctx) {
    const { swapCallback, wrapCallback, derivedSwapInfo } = ctx;
    const account = useAccountMeta();
    const { customSlippageTolerance } = useTransactionSettingsContext();
    const { isFiatMode, presetPercentage, preselectAsset } = useSwapFormContext();
    // deps for our service
    // useEvent is used to create a stable fn references, but each time
    // these fns are called, they will return the latest values
    const getAccount = useEvent(() => account);
    const getIsFiatMode = useEvent(() => isFiatMode);
    const getDerivedSwapInfo = useEvent(() => derivedSwapInfo);
    const getTxSettings = useEvent(() => ({ customSlippageTolerance }));
    const getPresetInfo = useEvent(() => ({ presetPercentage, preselectAsset }));
    // factory function to create a swap service with minimal dependencies at call site
    // what changes between swap service implementations is only the onSuccess and onFailure
    return useCallback((input) => {
        return createExecuteSwapService({
            getAccount,
            getSwapTxContext: input.getSwapTxContext,
            getDerivedSwapInfo,
            getTxSettings,
            getIsFiatMode,
            getPresetInfo,
            onSuccess: input.onSuccess,
            onFailure: input.onFailure,
            onPending: input.onPending,
            setCurrentStep: input.setCurrentStep,
            setSteps: input.setSteps,
            swapCallback,
            wrapCallback,
        });
    }, [swapCallback, wrapCallback, getAccount, getDerivedSwapInfo, getPresetInfo, getIsFiatMode, getTxSettings]);
}
//# sourceMappingURL=useExecuteSwap.js.map