/// <reference types="react" />
import { Currency } from '@uniswap/sdk-core';
import { StepStatus } from 'uniswap/src/components/ConfirmSwapModal/types';
import { TransactionStep } from 'uniswap/src/features/transactions/steps/types';
export interface StepRowProps<TStepType extends TransactionStep> {
    step: TStepType;
    status: StepStatus;
}
interface StepRowSkeletonProps {
    /** If passed, the step row icon will be the currency logo. */
    currency?: Currency;
    /** If passed, the step row icon will be the split currency logo. */
    pair?: [Currency, Currency];
    /** Icon to display if there is no currency to be displayed for this step. */
    icon?: JSX.Element;
    /** Color to display for the ripple effect around the icon or currency logo. This will default to a currency logo extracted color, if currency is defined. */
    rippleColor?: string;
    status: StepStatus;
    title: string;
    secondsRemaining?: number;
    learnMore?: {
        url: string;
        text: string;
    };
}
export declare function StepRowSkeleton(props: StepRowSkeletonProps): JSX.Element;
export {};
//# sourceMappingURL=StepRowSkeleton.d.ts.map