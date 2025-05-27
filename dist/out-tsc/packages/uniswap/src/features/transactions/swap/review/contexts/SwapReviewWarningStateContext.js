import { createContext, useContext } from 'react';
export const SwapReviewWarningStateContext = createContext({
    showWarningModal: false,
    warningAcknowledged: false,
    shouldSubmitTx: false,
    tokenWarningChecked: false,
    setShowWarningModal: () => { },
    setWarningAcknowledged: () => { },
    setShouldSubmitTx: () => { },
    setTokenWarningChecked: () => { },
});
export const useSwapWarningState = () => {
    const context = useContext(SwapReviewWarningStateContext);
    if (!context) {
        throw new Error('useSwapWarningState must be used within a SwapReviewWarningStateContext');
    }
    return context;
};
//# sourceMappingURL=SwapReviewWarningStateContext.js.map