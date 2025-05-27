import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useMemo } from 'react';
import { Flex, IconButton, isWeb, useIsShortMobileDevice } from 'ui/src';
import { BackArrow } from 'ui/src/components/icons/BackArrow';
import { getShouldDisplayTokenWarningCard } from 'uniswap/src/features/transactions/TransactionDetails/utils/getShouldDisplayTokenWarningCard';
import { TransactionModalFooterContainer } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModal';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { SubmitSwapButton } from 'uniswap/src/features/transactions/swap/review/SubmitSwapButton';
import { useSwapReviewCallbacks } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewCallbacksContext';
import { useSwapReviewState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewStateContext';
import { useSwapReviewTransactionState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewTransactionContext';
import { useSwapWarningState } from 'uniswap/src/features/transactions/swap/review/contexts/SwapReviewWarningStateContext';
import { useSwapOnPrevious } from 'uniswap/src/features/transactions/swap/review/hooks/useSwapOnPrevious';
import { isValidSwapTxContext } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
export const SwapReviewFooter = memo(function SwapReviewFooter() {
    const { showInterfaceReviewSteps } = useSwapReviewState();
    const { onPrev } = useSwapOnPrevious();
    const { disabled, showPendingUI, warning, onSubmit } = useSwapSubmitButton();
    const isShortMobileDevice = useIsShortMobileDevice();
    if (showInterfaceReviewSteps) {
        return null;
    }
    return (_jsx(TransactionModalFooterContainer, { children: _jsxs(Flex, { row: true, gap: "$spacing8", children: [!isWeb && !showPendingUI && (_jsx(IconButton, { icon: _jsx(BackArrow, {}), emphasis: "secondary", size: isShortMobileDevice ? 'medium' : 'large', onPress: onPrev })), _jsx(SubmitSwapButton, { disabled: disabled, showPendingUI: showPendingUI, warning: warning, onSubmit: onSubmit })] }) }));
});
function useSwapSubmitButton() {
    var _a;
    const context = useSwapReviewTransactionState();
    const { tokenWarningChecked } = useSwapWarningState();
    const { isSubmitting, showPendingUI } = useSwapFormContext();
    const { onSwapButtonClick } = useSwapReviewCallbacks();
    const { shouldDisplayTokenWarningCard } = getShouldDisplayTokenWarningCard({
        tokenWarningProps: context.tokenWarningProps,
        feeOnTransferProps: context.feeOnTransferProps,
    });
    // Calculate disabled state here instead of in the provider
    const submitButtonDisabled = useMemo(() => {
        const validSwap = isValidSwapTxContext(context.swapTxContext);
        const isTokenWarningBlocking = shouldDisplayTokenWarningCard && !tokenWarningChecked;
        return ((!validSwap && !context.isWrap) ||
            !!context.blockingWarning ||
            context.newTradeRequiresAcceptance ||
            isSubmitting ||
            isTokenWarningBlocking);
    }, [
        context.swapTxContext,
        context.isWrap,
        context.blockingWarning,
        context.newTradeRequiresAcceptance,
        isSubmitting,
        tokenWarningChecked,
        shouldDisplayTokenWarningCard,
    ]);
    return {
        disabled: submitButtonDisabled,
        showPendingUI,
        onSubmit: onSwapButtonClick,
        warning: (_a = context.reviewScreenWarning) === null || _a === void 0 ? void 0 : _a.warning,
    };
}
//# sourceMappingURL=SwapReviewFooter.js.map