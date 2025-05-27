import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, useSporeColors } from 'ui/src';
import { Swap } from 'ui/src/components/icons/Swap'; // TODO: update to LP icon
import { StepRowSkeleton } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { StepStatus } from 'uniswap/src/components/ConfirmSwapModal/types';
import { uniswapUrls } from 'uniswap/src/constants/urls';
const LPIcon = () => (_jsx(Flex, { centered: true, width: "$spacing24", height: "$spacing24", borderRadius: "$roundedFull", backgroundColor: "$DEP_blue400", children: _jsx(Swap, { color: "$neutral1", size: "$icon.12" }) }));
export function LPTransactionStepRow({ status }) {
    const { t } = useTranslation();
    const colors = useSporeColors();
    const title = {
        [StepStatus.Preview]: t('common.confirmWallet'),
        [StepStatus.Active]: t('common.confirmWallet'),
        [StepStatus.InProgress]: t('common.transactionPending'),
        [StepStatus.Complete]: t('common.confirmWallet'),
    }[status];
    return (_jsx(StepRowSkeleton, { title: title, icon: _jsx(LPIcon, {}), learnMore: {
            url: uniswapUrls.helpArticleUrls.howToSwapTokens,
            text: t('common.learnMoreSwap'),
        }, rippleColor: colors.DEP_blue400.val, status: status }));
}
//# sourceMappingURL=LP.js.map