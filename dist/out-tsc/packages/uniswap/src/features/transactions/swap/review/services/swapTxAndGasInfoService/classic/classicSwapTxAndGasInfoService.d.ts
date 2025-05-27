import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { TransactionSettingsContextState } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { EVMSwapInstructionsService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapInstructionsService';
import { SwapTxAndGasInfoService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/swapTxAndGasInfoService';
import { ClassicTrade } from 'uniswap/src/features/transactions/swap/types/trade';
export declare function createClassicSwapTxAndGasInfoService(ctx: {
    instructionService: EVMSwapInstructionsService;
    activeGasStrategy: GasStrategy;
    transactionSettings: TransactionSettingsContextState;
}): SwapTxAndGasInfoService<ClassicTrade>;
//# sourceMappingURL=classicSwapTxAndGasInfoService.d.ts.map