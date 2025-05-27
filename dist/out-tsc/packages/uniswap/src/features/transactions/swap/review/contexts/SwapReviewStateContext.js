import { createContext, useContext } from 'react';
export const SwapReviewStateContext = createContext({
    submissionError: undefined,
    onPressRetry: undefined,
    steps: [],
    currentStep: undefined,
    showInterfaceReviewSteps: false,
    hideContent: false,
    setSubmissionError: () => { },
    setRetrySwap: () => { },
    setSteps: () => { },
    setCurrentStep: () => { },
    resetCurrentStep: () => { },
});
export const useSwapReviewState = () => {
    const context = useContext(SwapReviewStateContext);
    if (!context) {
        throw new Error('SwapReviewStateContext not found');
    }
    return context;
};
//# sourceMappingURL=SwapReviewStateContext.js.map