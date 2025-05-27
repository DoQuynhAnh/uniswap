import { CreateLPPositionRequest, IncreaseLPPositionRequest } from 'uniswap/src/data/tradingApi/__generated__';
import { OnChainTransactionFields, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface IncreasePositionTransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.IncreasePositionTransaction;
}
export interface IncreasePositionTransactionStepAsync {
    type: TransactionStepType.IncreasePositionTransactionAsync;
    getTxRequest(signature: string): Promise<ValidatedTransactionRequest | undefined>;
}
export declare function createIncreasePositionStep(txRequest: ValidatedTransactionRequest): IncreasePositionTransactionStep;
export declare function createCreatePositionAsyncStep(createPositionRequestArgs: CreateLPPositionRequest | undefined): IncreasePositionTransactionStepAsync;
export declare function createIncreasePositionAsyncStep(increasePositionRequestArgs: IncreaseLPPositionRequest | undefined): IncreasePositionTransactionStepAsync;
//# sourceMappingURL=increasePosition.d.ts.map