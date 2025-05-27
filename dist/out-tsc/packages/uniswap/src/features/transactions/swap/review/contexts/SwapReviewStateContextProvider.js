import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { SwapReviewStateContext } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewStateContext';
import { isInterface } from 'utilities/src/platform';
export const SwapReviewStateContextProvider = ({ children, hideContent, }) => {
    const [submissionError, setSubmissionError] = useState();
    const [onPressRetry, setRetrySwap] = useState();
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState();
    const showInterfaceReviewSteps = Boolean(isInterface && currentStep && steps.length > 1); // Only show review steps UI for interface, while a step is active and there is more than 1 step
    const swapReviewState = {
        submissionError,
        onPressRetry,
        steps,
        currentStep,
        showInterfaceReviewSteps,
        hideContent,
        setSubmissionError,
        setRetrySwap,
        setSteps,
        setCurrentStep,
        resetCurrentStep: () => setCurrentStep(undefined),
    };
    return _jsx(SwapReviewStateContext.Provider, { value: swapReviewState, children: children });
};
//# sourceMappingURL=SwapReviewStateContextProvider.js.map