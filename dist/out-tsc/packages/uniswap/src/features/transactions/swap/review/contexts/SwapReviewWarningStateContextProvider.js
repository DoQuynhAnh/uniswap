import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { SwapReviewWarningStateContext } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewWarningStateContext';
export const SwapReviewWarningStateContextProvider = ({ children }) => {
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [warningAcknowledged, setWarningAcknowledged] = useState(false);
    const [shouldSubmitTx, setShouldSubmitTx] = useState(false);
    const [tokenWarningChecked, setTokenWarningChecked] = useState(false);
    const swapWarningState = {
        showWarningModal,
        warningAcknowledged,
        shouldSubmitTx,
        tokenWarningChecked,
        setShowWarningModal,
        setWarningAcknowledged,
        setShouldSubmitTx,
        setTokenWarningChecked,
    };
    return (_jsx(SwapReviewWarningStateContext.Provider, { value: swapWarningState, children: children }));
};
//# sourceMappingURL=SwapReviewWarningStateContextProvider.js.map