/// <reference types="react" />
import { StepRowProps } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { UniswapXSignatureStep } from 'uniswap/src/features/transactions/swap/steps/signOrder';
import { SwapTransactionStep, SwapTransactionStepAsync, SwapTransactionStepBatched } from 'uniswap/src/features/transactions/swap/steps/swap';
type SwapSteps = SwapTransactionStep | SwapTransactionStepAsync | UniswapXSignatureStep | SwapTransactionStepBatched;
export declare function SwapTransactionStepRow({ step, status }: StepRowProps<SwapSteps>): JSX.Element;
export {};
//# sourceMappingURL=Swap.d.ts.map