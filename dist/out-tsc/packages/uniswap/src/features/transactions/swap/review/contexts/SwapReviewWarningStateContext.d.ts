/// <reference types="react" />
export interface SwapWarningState {
    showWarningModal: boolean;
    warningAcknowledged: boolean;
    shouldSubmitTx: boolean;
    tokenWarningChecked: boolean;
    setShowWarningModal: (showWarningModal: boolean) => void;
    setWarningAcknowledged: (warningAcknowledged: boolean) => void;
    setShouldSubmitTx: (shouldSubmitTx: boolean) => void;
    setTokenWarningChecked: (tokenWarningChecked: boolean) => void;
}
export declare const SwapReviewWarningStateContext: import("react").Context<SwapWarningState>;
export declare const useSwapWarningState: () => SwapWarningState;
//# sourceMappingURL=SwapReviewWarningStateContext.d.ts.map