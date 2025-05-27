/// <reference types="react" />
import { StepRowProps } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { CollectFeesSteps } from 'uniswap/src/features/transactions/liquidity/steps/collectFeesSteps';
import { DecreasePositionTransactionStep } from 'uniswap/src/features/transactions/liquidity/steps/decreasePosition';
import { IncreasePositionTransactionStep, IncreasePositionTransactionStepAsync } from 'uniswap/src/features/transactions/liquidity/steps/increasePosition';
import { MigratePositionTransactionStep, MigratePositionTransactionStepAsync } from 'uniswap/src/features/transactions/liquidity/steps/migrate';
type LPSteps = IncreasePositionTransactionStep | IncreasePositionTransactionStepAsync | DecreasePositionTransactionStep | MigratePositionTransactionStep | MigratePositionTransactionStepAsync | CollectFeesSteps;
export declare function LPTransactionStepRow({ status }: StepRowProps<LPSteps>): JSX.Element;
export {};
//# sourceMappingURL=LP.d.ts.map