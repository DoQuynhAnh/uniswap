import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { TransactionSettingsContextState } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { ApprovalTxInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo';
import { EVMSwapInstructionsService } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapInstructionsService';
import { TransactionRequestInfo } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/utils';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { BridgeTrade, ClassicTrade } from 'uniswap/src/features/transactions/swap/types/trade';
type GetEVMSwapTransactionRequestInfoFn = (params: {
    trade: ClassicTrade | BridgeTrade;
    approvalTxInfo: ApprovalTxInfo;
    derivedSwapInfo: DerivedSwapInfo;
}) => Promise<TransactionRequestInfo>;
export declare function createGetEVMSwapTransactionRequestInfo(ctx: {
    instructionService: EVMSwapInstructionsService;
    activeGasStrategy: GasStrategy;
    transactionSettings: TransactionSettingsContextState;
}): GetEVMSwapTransactionRequestInfoFn;
export {};
//# sourceMappingURL=utils.d.ts.map