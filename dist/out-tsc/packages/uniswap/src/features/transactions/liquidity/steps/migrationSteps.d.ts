import { MigratePositionTransactionStep, MigratePositionTransactionStepAsync } from 'uniswap/src/features/transactions/liquidity/steps/migrate';
import type { Permit2SignatureStep } from 'uniswap/src/features/transactions/steps/permit2Signature';
import type { Permit2TransactionStep } from 'uniswap/src/features/transactions/steps/permit2Transaction';
export type MigrationSteps = Permit2SignatureStep | Permit2TransactionStep | MigratePositionTransactionStep | MigratePositionTransactionStepAsync;
export type MigrationFlow = {
    permit: undefined;
    migrate: MigratePositionTransactionStep;
    positionTokenPermitTransaction?: Permit2TransactionStep;
} | {
    permit: Permit2SignatureStep;
    positionTokenPermitTransaction: undefined;
    migrate: MigratePositionTransactionStepAsync;
};
export declare function orderMigrateLiquiditySteps(flow: MigrationFlow): MigrationSteps[];
//# sourceMappingURL=migrationSteps.d.ts.map