import { PresetPercentage } from 'uniswap/src/components/CurrencyInputPanel/PresetAmountButton';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { SwapCallback, SwapCallbackParams } from 'uniswap/src/features/transactions/swap/types/swapCallback';
import { SwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { WrapCallback } from 'uniswap/src/features/transactions/swap/types/wrapCallback';
type ExecuteSwap = () => void;
export interface ExecuteSwapService {
    executeSwap: ExecuteSwap;
}
export type GetExecuteSwapService = (ctx: {
    onSuccess: () => void;
    onFailure: () => void;
    onPending: () => void;
    setCurrentStep: SwapCallbackParams['setCurrentStep'];
    setSteps: SwapCallbackParams['setSteps'];
    getSwapTxContext: () => SwapTxAndGasInfo;
}) => ExecuteSwapService;
export declare function createExecuteSwapService(ctx: {
    getAccount?: () => ReturnType<typeof useAccountMeta>;
    getSwapTxContext?: () => ReturnType<typeof useSwapTxContext>;
    getDerivedSwapInfo: () => DerivedSwapInfo;
    getTxSettings: () => {
        customSlippageTolerance?: number;
    };
    getIsFiatMode?: () => boolean;
    getPresetInfo: () => {
        presetPercentage: PresetPercentage | undefined;
        preselectAsset: boolean | undefined;
    };
    onSuccess: () => void;
    onFailure: (error?: Error) => void;
    onPending: () => void;
    setCurrentStep: SwapCallbackParams['setCurrentStep'];
    setSteps: SwapCallbackParams['setSteps'];
    swapCallback: SwapCallback;
    wrapCallback: WrapCallback;
}): {
    executeSwap: ExecuteSwap;
};
export {};
//# sourceMappingURL=executeSwapService.d.ts.map