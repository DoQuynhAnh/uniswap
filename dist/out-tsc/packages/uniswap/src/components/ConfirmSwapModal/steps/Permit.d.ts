/// <reference types="react" />
import { StepRowProps } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { Permit2SignatureStep } from 'uniswap/src/features/transactions/steps/permit2Signature';
import { Permit2TransactionStep } from 'uniswap/src/features/transactions/steps/permit2Transaction';
export declare function Permit2SignatureStepRow({ status }: StepRowProps<Permit2SignatureStep>): JSX.Element;
export declare function Permit2TransactionStepRow({ status, index, count, }: StepRowProps<Permit2TransactionStep> & {
    index: number;
    count?: number;
}): JSX.Element;
//# sourceMappingURL=Permit.d.ts.map