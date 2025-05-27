import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFocusEffect } from '@react-navigation/core';
import { useState } from 'react';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { SectionName } from 'uniswap/src/features/telemetry/constants';
import { TransactionModalFooterContainer } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModal';
import { TransactionScreen, useTransactionModalContext, } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { SwapFormScreen } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormScreen';
import { SwapFormWarningModals } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormWarningModals/SwapFormWarningModals';
import { SwapFormButton } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/SwapFormButton';
import { SwapFormWarningStateProvider } from 'uniswap/src/features/transactions/swap/form/context/SwapFormWarningStateContextProvider';
import { SwapReviewScreen } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/SwapReviewScreen';
import { useEvent } from 'utilities/src/react/hooks';
import { useTimeout } from 'utilities/src/time/timing';
export function CurrentScreen({ settings, onSubmitSwap, }) {
    const { screen } = useTransactionModalContext();
    switch (screen) {
        case TransactionScreen.Form:
            return (_jsxs(Trace, { logImpression: true, section: SectionName.SwapForm, children: [_jsx(SwapFormScreenDelayedRender, { settings: settings }), _jsx(TransactionModalFooterContainer, { children: _jsxs(SwapFormWarningStateProvider, { children: [_jsx(SwapFormButton, {}), _jsx(SwapFormWarningModals, {})] }) })] }));
        case TransactionScreen.Review:
            return (_jsx(Trace, { logImpression: true, section: SectionName.SwapReview, children: _jsx(SwapReviewScreenDelayedRender, { onSubmitSwap: onSubmitSwap }) }));
    }
}
// Please verify this on both an Android and iOS physical device before changing these values.
const SWAP_FORM_SCREEN_TRANSITION_DELAY = 25;
const SWAP_REVIEW_SCREEN_TRANSITION_DELAY = 450;
// We add a short hardcoded delay to allow the sheet to animate quickly both on first render and when going back from Review -> Form.
function SwapFormScreenDelayedRender({ settings }) {
    const { isContentHidden } = useDelayedRender(SWAP_FORM_SCREEN_TRANSITION_DELAY);
    return _jsx(SwapFormScreen, { settings: settings, hideContent: isContentHidden, focusHook: useFocusEffect });
}
// We add a short hardcoded delay to allow the sheet to animate quickly when going from Form -> Review.
function SwapReviewScreenDelayedRender({ onSubmitSwap }) {
    const { isContentHidden } = useDelayedRender(SWAP_REVIEW_SCREEN_TRANSITION_DELAY);
    return _jsx(SwapReviewScreen, { hideContent: isContentHidden, onSubmitSwap: onSubmitSwap });
}
function useDelayedRender(delay) {
    const [isContentHidden, setIsContentHidden] = useState(true);
    const setVisible = useEvent(() => setIsContentHidden(false));
    useTimeout(setVisible, delay);
    return { isContentHidden };
}
//# sourceMappingURL=CurrentScreen.native.js.map