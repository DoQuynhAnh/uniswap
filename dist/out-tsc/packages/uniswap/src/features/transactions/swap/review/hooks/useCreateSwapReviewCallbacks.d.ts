import { ParsedWarnings } from 'uniswap/src/components/modals/WarningModal/types';
import { AuthTrigger } from 'uniswap/src/features/auth/types';
import { TransactionScreen } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { TransactionStep } from 'uniswap/src/features/transactions/steps/types';
import { SwapFormState } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { GetExecuteSwapService } from 'uniswap/src/features/transactions/swap/services/executeSwapService';
import { SetCurrentStepFn } from 'uniswap/src/features/transactions/swap/types/swapCallback';
interface SwapReviewCallbacks {
    onSwapButtonClick: () => Promise<void>;
    onConfirmWarning: () => void;
    onCancelWarning: () => void;
    onShowWarning: () => void;
    onCloseWarning: () => void;
}
export declare function useCreateSwapReviewCallbacks(ctx: {
    resetCurrentStep: () => void;
    setScreen: (screen: TransactionScreen) => void;
    authTrigger?: AuthTrigger;
    onSubmitSwap?: () => Promise<void> | void;
    setSubmissionError: (error?: Error) => void;
    setRetrySwap: (onPressRetry?: () => void) => void;
    onClose: () => void;
    showWarningModal: boolean;
    warningAcknowledged: boolean;
    shouldSubmitTx: boolean;
    setShowWarningModal: (show: boolean) => void;
    setWarningAcknowledged: (acknowledged: boolean) => void;
    setShouldSubmitTx: (shouldSubmit: boolean) => void;
    getExecuteSwapService: GetExecuteSwapService;
    updateSwapForm: (newState: Partial<SwapFormState>) => void;
    reviewScreenWarning: ParsedWarnings['reviewScreenWarning'];
    setCurrentStep: SetCurrentStepFn;
    setSteps: (steps: TransactionStep[]) => void;
}): SwapReviewCallbacks;
export {};
//# sourceMappingURL=useCreateSwapReviewCallbacks.d.ts.map