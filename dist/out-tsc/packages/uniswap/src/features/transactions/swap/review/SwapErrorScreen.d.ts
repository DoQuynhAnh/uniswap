/// <reference types="react" />
export declare function SwapErrorScreen({ submissionError, setSubmissionError, onPressRetry, resubmitSwap, onClose, }: {
    submissionError: Error;
    setSubmissionError: (e: Error | undefined) => void;
    resubmitSwap: () => void;
    onPressRetry: (() => void) | undefined;
    onClose: () => void;
}): JSX.Element;
//# sourceMappingURL=SwapErrorScreen.d.ts.map