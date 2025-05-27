import { TransactionSettingsContextState } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { SwapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/swapTxAndGasInfoService';
import { Trade } from 'uniswap/src/features/transactions/swap/types/trade';
import { ITraceContext } from 'utilities/src/telemetry/trace/TraceContext';
/** Decorates a SwapTxAndGasInfoService with necessary logging for EVM swap flow requests. */
export declare function createDecorateSwapTxInfoServiceWithEVMLogging(ctx: {
    trace: ITraceContext;
    transactionSettings: TransactionSettingsContextState;
}): <T extends Trade>(service: SwapTxAndGasInfoService<T>) => SwapTxAndGasInfoService<T>;
//# sourceMappingURL=logging.d.ts.map