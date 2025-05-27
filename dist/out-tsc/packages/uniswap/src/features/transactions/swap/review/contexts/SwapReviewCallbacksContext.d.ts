/// <reference types="react" />
export interface SwapReviewCallbacks {
    onSwapButtonClick: () => Promise<void>;
    onConfirmWarning: () => void;
    onCancelWarning: () => void;
    onShowWarning: () => void;
    onCloseWarning: () => void;
    onAcceptTrade: () => void;
}
export declare const SwapReviewCallbacksContext: import("react").Context<SwapReviewCallbacks>;
export declare const useSwapReviewCallbacks: () => SwapReviewCallbacks;
//# sourceMappingURL=SwapReviewCallbacksContext.d.ts.map