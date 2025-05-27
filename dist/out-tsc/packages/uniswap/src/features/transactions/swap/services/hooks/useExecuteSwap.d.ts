import { GetExecuteSwapService } from 'uniswap/src/features/transactions/swap/services/executeSwapService';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { SwapCallback } from 'uniswap/src/features/transactions/swap/types/swapCallback';
import { WrapCallback } from 'uniswap/src/features/transactions/swap/types/wrapCallback';
interface UseSwapServiceParams {
    swapCallback: SwapCallback;
    wrapCallback: WrapCallback;
    derivedSwapInfo: DerivedSwapInfo;
}
export declare function useCreateGetExecuteSwapService(ctx: UseSwapServiceParams): GetExecuteSwapService;
export {};
//# sourceMappingURL=useExecuteSwap.d.ts.map