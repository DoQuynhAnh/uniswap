import { BridgeQuoteResponse, ClassicQuoteResponse, WithV4Flag } from 'uniswap/src/data/apiClients/tradingApi/TradingApiClient';
import { CreateSwapRequest, Permit } from 'uniswap/src/data/tradingApi/__generated__';
import { GasStrategy } from 'uniswap/src/data/tradingApi/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { TransactionSettingsContextState } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { SwapData } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/evmSwapRepository';
import { PresignPermitFn } from 'uniswap/src/features/transactions/swap/review/services/swapTxAndGasInfoService/evm/hooks';
import { ApprovalAction } from 'uniswap/src/features/transactions/swap/types/trade';
type SwapInstructions = {
    response: SwapData;
    unsignedPermit: null;
    swapRequestParams: null;
} | {
    response: null;
    unsignedPermit: Permit;
    swapRequestParams: WithV4Flag<CreateSwapRequest>;
};
/** A service utility capable of fetching swap instructions or returning unsigned permit data when instructions cannot yet be fetched. */
export interface EVMSwapInstructionsService {
    getSwapInstructions: (params: {
        swapQuoteResponse: ClassicQuoteResponse | BridgeQuoteResponse;
        transactionSettings: TransactionSettingsContextState;
        approvalAction: ApprovalAction;
    }) => Promise<SwapInstructions>;
}
interface EVMSwapInstructionsServiceContext {
    v4SwapEnabled: boolean;
    activeGasStrategy: GasStrategy;
    shadowGasStrategies: GasStrategy[];
    /** A function that should be provided in wallet environments that support signing permits without prompting the user. Allows fetching swap instructions earlier for some flows.*/
    presignPermit?: PresignPermitFn;
    getCanBatchTransactions?: (chainId: UniverseChainId | undefined) => boolean;
    getSwapDelegationAddress?: (chainId: UniverseChainId | undefined) => string | undefined;
}
export declare function createEVMSwapInstructionsService(ctx: EVMSwapInstructionsServiceContext): EVMSwapInstructionsService;
export {};
//# sourceMappingURL=evmSwapInstructionsService.d.ts.map