/// <reference types="react" />
import { TransactionStep } from 'uniswap/src/features/transactions/steps/types';
interface SwapReviewState {
    submissionError: Error | undefined;
    onPressRetry: (() => void) | undefined;
    steps: TransactionStep[];
    currentStep: {
        step: TransactionStep;
        accepted: boolean;
    } | undefined;
    showInterfaceReviewSteps: boolean;
    hideContent: boolean;
    setSubmissionError: (error?: Error) => void;
    setRetrySwap: (onPressRetry?: () => void) => void;
    setSteps: (steps: TransactionStep[]) => void;
    setCurrentStep: (step: {
        step: TransactionStep;
        accepted: boolean;
    } | undefined) => void;
    resetCurrentStep: () => void;
}
export declare const SwapReviewStateContext: import("react").Context<SwapReviewState>;
export declare const useSwapReviewState: () => SwapReviewState;
export {};
//# sourceMappingURL=SwapReviewStateContext.d.ts.map