/// <reference types="react" />
import { GetExecuteSwapService } from 'uniswap/src/features/transactions/swap/services/executeSwapService';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { WrapCallback } from 'uniswap/src/features/transactions/swap/types/wrapCallback';
interface SwapDependenciesContextState {
    derivedSwapInfo: DerivedSwapInfo;
    getExecuteSwapService: GetExecuteSwapService;
    wrapCallback: WrapCallback;
}
export declare const SwapDependenciesContext: import("react").Context<SwapDependenciesContextState>;
export declare const useSwapDependencies: () => SwapDependenciesContextState;
export {};
//# sourceMappingURL=SwapDependenciesContext.d.ts.map