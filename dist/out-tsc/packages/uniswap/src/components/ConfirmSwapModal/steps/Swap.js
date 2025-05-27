import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, useSporeColors } from 'ui/src';
import { Swap } from 'ui/src/components/icons/Swap';
import { StepRowSkeleton } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { StepStatus } from 'uniswap/src/components/ConfirmSwapModal/types';
import { uniswapUrls } from 'uniswap/src/constants/urls';
import { TransactionStepType } from 'uniswap/src/features/transactions/steps/types';
import noop from 'utilities/src/react/noop';
const SwapIcon = () => (_jsx(Flex, { centered: true, width: "$spacing24", height: "$spacing24", borderRadius: "$roundedFull", backgroundColor: "$DEP_blue400", children: _jsx(Swap, { color: "$white", size: "$icon.12" }) }));
export function SwapTransactionStepRow({ step, status }) {
    const { t } = useTranslation();
    const colors = useSporeColors();
    const deadline = step.type === TransactionStepType.UniswapXSignature ? step.deadline : undefined;
    const secondsRemaining = useSecondsUntilDeadline(deadline, status);
    const active = status === StepStatus.Active;
    const ranOutOfTimeTitle = active && deadline && !secondsRemaining ? t('common.confirmTimedOut') : undefined;
    const title = ranOutOfTimeTitle !== null && ranOutOfTimeTitle !== void 0 ? ranOutOfTimeTitle : {
        [StepStatus.Preview]: t('swap.confirmSwap'),
        [StepStatus.Active]: t('common.confirmSwap'),
        [StepStatus.InProgress]: t('common.swapPending'),
        [StepStatus.Complete]: t('swap.confirmSwap'),
    }[status];
    return (_jsx(StepRowSkeleton, { title: title, icon: _jsx(SwapIcon, {}), learnMore: {
            url: step.type === TransactionStepType.SwapTransactionBatched
                ? uniswapUrls.helpArticleUrls.batchedSwaps
                : uniswapUrls.helpArticleUrls.howToSwapTokens,
            text: t('common.learnMoreSwap'),
        }, rippleColor: colors.DEP_blue400.val, status: status, secondsRemaining: secondsRemaining }));
}
function useSecondsUntilDeadline(deadline, status) {
    const [secondsRemaining, setSecondsRemaining] = useState();
    useEffect(() => {
        if (!deadline || status !== StepStatus.Active) {
            setSecondsRemaining(undefined);
            return noop;
        }
        const secondsUntilDeadline = deadline - Math.floor(Date.now() / 1000);
        if (secondsUntilDeadline <= 0) {
            return noop;
        }
        setSecondsRemaining(secondsUntilDeadline);
        const timer = setInterval(() => {
            setSecondsRemaining((prevSecondsRemaining) => {
                if (!prevSecondsRemaining) {
                    clearInterval(timer);
                    return prevSecondsRemaining;
                }
                return prevSecondsRemaining - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [deadline, status]);
    return secondsRemaining;
}
//# sourceMappingURL=Swap.js.map