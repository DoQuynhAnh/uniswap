import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, Button, Flex, useIsShortMobileDevice } from 'ui/src';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { PermitMethod } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { isClassic } from 'uniswap/src/features/transactions/swap/utils/routing';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { TestID } from 'uniswap/src/test/fixtures/testIDs';
import { isInterface } from 'utilities/src/platform';
import { ONE_SECOND_MS } from 'utilities/src/time/time';
const KEEP_OPEN_MSG_DELAY = 3 * ONE_SECOND_MS;
export function SubmitSwapButton({ disabled, onSubmit, showPendingUI, warning }) {
    const { t } = useTranslation();
    const { renderBiometricsIcon } = useTransactionModalContext();
    const { isSubmitting, derivedSwapInfo } = useSwapFormContext();
    const { wrapType, trade: { trade, indicativeTrade }, } = derivedSwapInfo;
    const indicative = Boolean(!trade && indicativeTrade);
    const swapTxContext = useSwapTxContext();
    const actionText = getActionName(t, wrapType, swapTxContext);
    const isShortMobileDevice = useIsShortMobileDevice();
    const size = isShortMobileDevice ? 'medium' : 'large';
    switch (true) {
        case indicative: {
            return (_jsx(Button, { loading: true, variant: "default", emphasis: "secondary", size: size, children: t('swap.finalizingQuote') }));
        }
        case showPendingUI: {
            return (_jsx(Button, { loading: true, variant: "branded", emphasis: "primary", size: size, children: _jsx(DelayedSubmissionText, {}) }));
        }
        case isInterface && isSubmitting: {
            return (_jsx(Button, { loading: true, shouldAnimateBetweenLoadingStates: false, size: size, children: _jsx(ConfirmInWalletText, {}) }));
        }
        case (warning === null || warning === void 0 ? void 0 : warning.severity) === WarningSeverity.High: {
            return (_jsx(Button, { variant: "critical", emphasis: "primary", isDisabled: disabled, icon: renderBiometricsIcon === null || renderBiometricsIcon === void 0 ? void 0 : renderBiometricsIcon({}), size: size, testID: TestID.Swap, onPress: onSubmit, children: actionText }));
        }
        default: {
            const biometricIcon = renderBiometricsIcon === null || renderBiometricsIcon === void 0 ? void 0 : renderBiometricsIcon({});
            return (_jsx(Button, { variant: disabled ? 'default' : 'branded', emphasis: disabled ? 'secondary' : 'primary', isDisabled: disabled, icon: biometricIcon, size: size, testID: TestID.Swap, onPress: onSubmit, children: actionText }));
        }
    }
}
export const getActionName = (t, wrapType, swapTxContext, warning) => {
    var _a;
    const hasPermitTx = swapTxContext && isClassic(swapTxContext) ? ((_a = swapTxContext === null || swapTxContext === void 0 ? void 0 : swapTxContext.permit) === null || _a === void 0 ? void 0 : _a.method) === PermitMethod.Transaction : false;
    const hasApproveTx = Boolean(swapTxContext === null || swapTxContext === void 0 ? void 0 : swapTxContext.approveTxRequest);
    switch (true) {
        case wrapType === WrapType.Wrap:
            return t('swap.button.wrap');
        case wrapType === WrapType.Unwrap:
            return t('swap.button.unwrap');
        case isInterface && (hasPermitTx || hasApproveTx):
            return t('swap.approveAndSwap');
        case isInterface && swapTxContext && isClassic(swapTxContext) && swapTxContext.unsigned:
            return t('swap.signAndSwap');
        case (warning === null || warning === void 0 ? void 0 : warning.severity) === WarningSeverity.High:
            return t('swap.button.swapAnyways');
        default:
            return t('swap.button.swap');
    }
};
function DelayedSubmissionText() {
    const { t } = useTranslation();
    const [showKeepOpenMessage, setShowKeepOpenMessage] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setShowKeepOpenMessage(true), KEEP_OPEN_MSG_DELAY);
        return () => clearTimeout(timeout);
    }, []);
    // Use different key to re-trigger animation when message changes
    const key = showKeepOpenMessage ? 'submitting-text-msg1' : 'submitting-text-msg2';
    return (_jsx(AnimatePresence, { children: _jsx(Flex, { animateEnterExit: "fadeInDownOutDown", animation: "quicker", children: _jsx(Button.Text, { children: showKeepOpenMessage ? t('swap.button.submitting.keep.open') : t('swap.button.submitting') }) }) }, key));
}
function ConfirmInWalletText() {
    const { t } = useTranslation();
    return (_jsx(AnimatePresence, { children: _jsx(Flex, { animateEnterExit: "fadeInDownOutDown", animation: "quicker", children: _jsx(Button.Text, { children: t('common.confirmWallet') }) }) }));
}
//# sourceMappingURL=SubmitSwapButton.js.map