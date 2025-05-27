import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from 'uniswap/src/components/modals/Modal';
import Trace from 'uniswap/src/features/telemetry/Trace';
import { ModalName, SectionName } from 'uniswap/src/features/telemetry/constants';
import { TransactionScreen, useTransactionModalContext, } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { SwapFormScreen } from 'uniswap/src/features/transactions/swap/form/SwapFormScreen/SwapFormScreen';
import { SwapReviewScreen } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/SwapReviewScreen';
import { isInterface } from 'utilities/src/platform';
export function CurrentScreen({ settings, onSubmitSwap, tokenColor, }) {
    const { screen, setScreen } = useTransactionModalContext();
    return (_jsxs(_Fragment, { children: [_jsx(Trace, { logImpression: true, section: SectionName.SwapForm, children: _jsx(SwapFormScreen, { settings: settings, hideContent: false, tokenColor: tokenColor }) }), _jsx(Modal, { height: "auto", alignment: isInterface ? 'center' : 'top', isModalOpen: screen === TransactionScreen.Review, name: ModalName.SwapReview, padding: "$spacing12", onClose: () => setScreen(TransactionScreen.Form), children: _jsx(Trace, { logImpression: true, section: SectionName.SwapReview, children: _jsx(SwapReviewScreen, { hideContent: false, onSubmitSwap: onSubmitSwap }) }) })] }));
}
//# sourceMappingURL=CurrentScreen.web.js.map