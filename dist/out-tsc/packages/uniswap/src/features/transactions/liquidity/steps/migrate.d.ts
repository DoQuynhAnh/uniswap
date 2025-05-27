import type { MigrateLPPositionRequest } from 'uniswap/src/data/tradingApi/__generated__';
import { OnChainTransactionFields, TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import { ValidatedTransactionRequest } from 'uniswap/src/features/transactions/swap/utils/trade';
export interface MigratePositionTransactionStep extends OnChainTransactionFields {
    type: TransactionStepType.MigratePositionTransaction;
}
export interface MigratePositionTransactionStepAsync {
    type: TransactionStepType.MigratePositionTransactionAsync;
    getTxRequest(signature: string): Promise<ValidatedTransactionRequest | undefined>;
}
export declare function createMigratePositionStep(txRequest: ValidatedTransactionRequest): MigratePositionTransactionStep;
export declare function createMigratePositionAsyncStep(migratePositionRequestArgs: MigrateLPPositionRequest | undefined, signatureDeadline: number | undefined): MigratePositionTransactionStepAsync;
//# sourceMappingURL=migrate.d.ts.map