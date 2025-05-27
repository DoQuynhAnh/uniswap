import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo } from 'react';
import { Flex, isWeb } from 'ui/src';
import { ProgressIndicator } from 'uniswap/src/components/ConfirmSwapModal/ProgressIndicator';
import { TransactionModalInnerContainer } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModal';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useSwapDependencies } from 'uniswap/src/features/transactions/swap/contexts/SwapDependenciesContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { SwapErrorScreen } from 'uniswap/src/features/transactions/swap/review/SwapErrorScreen';
import { SwapReviewFooter } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/SwapReviewFooter';
import { SwapReviewLoadingView } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/SwapReviewLoadingView';
import { SwapReviewSwapDetails } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/SwapReviewSwapDetails';
import { SwapReviewWarningModal } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/SwapReviewWarningModal';
import { SwapReviewWrapTransactionDetails } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/SwapReviewWrapTransactionDetails';
import { TransactionAmountsReview } from 'uniswap/src/features/transactions/swap/review/SwapReviewScreen/TransactionAmountsReview';
import { SwapReviewCallbacksContextProvider } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewCallbacksContextProvider';
import { useSwapReviewState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewStateContext';
import { SwapReviewStateContextProvider } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewStateContextProvider';
import { useIsSwapMissingParams, useIsSwapReviewLoading, useSwapReviewError, useSwapReviewTransactionState, } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewTransactionContext';
import { SwapReviewTransactionContextProvider } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewTransactionContextProvider';
import { SwapReviewWarningStateContextProvider } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewWarningStateContextProvider';
import { useAcceptedTrade } from 'uniswap/src/features/transactions/swap/review/hooks/useAcceptedTrade';
import { useSwapOnPrevious } from 'uniswap/src/features/transactions/swap/review/hooks/useSwapOnPrevious';
import { logger } from 'utilities/src/logger/logger';
export function SwapReviewScreen(props) {
    const { hideContent, onSubmitSwap } = props;
    return _jsx(SwapReviewScreenProviders, { hideContent: hideContent, onSubmitSwap: onSubmitSwap });
}
export function SwapReviewScreenProviders(props) {
    const { hideContent, onSubmitSwap } = props;
    const { onClose, authTrigger, setScreen } = useTransactionModalContext();
    const { isSubmitting } = useSwapFormContext();
    const { derivedSwapInfo, getExecuteSwapService } = useSwapDependencies();
    const swapTxContext = useSwapTxContext();
    const { onAcceptTrade, acceptedDerivedSwapInfo: swapAcceptedDerivedSwapInfo, newTradeRequiresAcceptance, } = useAcceptedTrade({
        derivedSwapInfo,
        isSubmitting,
    });
    return (_jsx(SwapReviewStateContextProvider, { hideContent: hideContent, children: _jsx(SwapReviewWarningStateContextProvider, { children: _jsx(SwapReviewCallbacksContextProvider, { setScreen: setScreen, authTrigger: authTrigger, getExecuteSwapService: getExecuteSwapService, onSubmitSwap: onSubmitSwap, onClose: onClose, onAcceptTrade: onAcceptTrade, children: _jsx(SwapReviewTransactionContextProvider, { derivedSwapInfo: derivedSwapInfo, swapTxContext: swapTxContext, swapAcceptedDerivedSwapInfo: swapAcceptedDerivedSwapInfo, newTradeRequiresAcceptance: newTradeRequiresAcceptance, children: _jsx(SwapReviewContent, {}) }) }) }) }));
}
function SwapReviewContent() {
    const { acceptedDerivedSwapInfo, isWrap, newTradeRequiresAcceptance } = useSwapReviewTransactionState();
    const { hideContent, showInterfaceReviewSteps, steps, currentStep } = useSwapReviewState();
    const { onPrev } = useSwapOnPrevious();
    const isLoading = useIsSwapReviewLoading();
    const isSwapMissingParams = useIsSwapMissingParams();
    const error = useSwapReviewError();
    if (isLoading) {
        return _jsx(SwapReviewLoadingView, {});
    }
    if (isSwapMissingParams) {
        // This should never happen, but sometimes it does because tamagui renders the mobile web drawer when isModalOpen is false.
        logger.error('Missing required props in `derivedSwapInfo` to render `SwapReview` screen.', {
            tags: {
                file: 'SwapReviewScreen',
                function: 'render',
            },
        });
        return null;
    }
    if (error.submissionError) {
        return (_jsx(SwapErrorScreen, { submissionError: error.submissionError, setSubmissionError: error.setSubmissionError, resubmitSwap: error.onSwapButtonClick, onPressRetry: error.onPressRetry, onClose: onPrev }));
    }
    return (_jsxs(_Fragment, { children: [_jsxs(SwapReviewContentWrapper, { children: [_jsx(SwapReviewWarningModal, {}), _jsxs(Flex, { animation: "quick", opacity: hideContent ? 0 : 1, gap: "$spacing16", pt: isWeb ? '$spacing8' : undefined, children: [acceptedDerivedSwapInfo && (_jsx(TransactionAmountsReview, { acceptedDerivedSwapInfo: acceptedDerivedSwapInfo, newTradeRequiresAcceptance: newTradeRequiresAcceptance, onClose: onPrev })), showInterfaceReviewSteps ? (_jsx(ProgressIndicator, { currentStep: currentStep, steps: steps })) : isWrap ? (_jsx(SwapReviewWrapTransactionDetails, {})) : (_jsx(SwapReviewSwapDetails, {}))] })] }), _jsx(SwapReviewFooter, {})] }));
}
const SwapReviewContentWrapper = memo(function SwapReviewContentWrapper({ children, }) {
    const { bottomSheetViewStyles } = useTransactionModalContext();
    return (_jsx(TransactionModalInnerContainer, { bottomSheetViewStyles: bottomSheetViewStyles, fullscreen: false, children: children }));
});
//# sourceMappingURL=SwapReviewScreen.js.map