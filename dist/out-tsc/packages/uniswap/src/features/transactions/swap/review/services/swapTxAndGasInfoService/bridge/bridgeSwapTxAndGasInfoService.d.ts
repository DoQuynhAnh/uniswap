import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { TransactionSettingsContextState } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { EVMSwapInstructionsService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapInstructionsService';
import { SwapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/swapTxAndGasInfoService';
import { BridgeTrade } from 'uniswap/src/features/transactions/swap/types/trade';
export declare function createBridgeSwapTxAndGasInfoService(ctx: {
    instructionService: EVMSwapInstructionsService;
    activeGasStrategy: GasStrategy;
    shadowGasStrategies: GasStrategy[];
    transactionSettings: TransactionSettingsContextState;
    v4SwapEnabled: boolean;
}): SwapTxAndGasInfoService<BridgeTrade>;
//# sourceMappingURL=bridgeSwapTxAndGasInfoService.d.ts.map