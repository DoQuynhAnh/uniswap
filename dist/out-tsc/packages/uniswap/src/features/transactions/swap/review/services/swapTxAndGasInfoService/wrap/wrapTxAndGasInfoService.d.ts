import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { SwapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/swapTxAndGasInfoService';
interface WrapTxAndGasInfoServiceContext {
    activeGasStrategy: GasStrategy;
    shadowGasStrategies: GasStrategy[];
    fallbackGasLimit?: number;
}
export declare function createWrapTxAndGasInfoService(ctx: WrapTxAndGasInfoServiceContext): SwapTxAndGasInfoService<undefined>;
export {};
//# sourceMappingURL=wrapTxAndGasInfoService.d.ts.map