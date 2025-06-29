import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { StepRowSkeleton } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { StepStatus } from 'uniswap/src/components/ConfirmSwapModal/types';
import { uniswapUrls } from 'uniswap/src/constants/urls';
export function TokenApprovalTransactionStepRow({ step, status, }) {
    var _a;
    const { t } = useTranslation();
    const { token, pair } = step;
    const symbol = (_a = token.symbol) !== null && _a !== void 0 ? _a : '';
    const title = {
        [StepStatus.Preview]: t('common.approveSpend', { symbol }),
        [StepStatus.Active]: t('common.wallet.approve'),
        [StepStatus.InProgress]: t('common.approvePending'),
        [StepStatus.Complete]: t('common.approveSpend', { symbol }),
    }[status];
    return (_jsx(StepRowSkeleton, { title: title, currency: token, pair: pair, learnMore: {
            url: uniswapUrls.helpArticleUrls.approvalsExplainer,
            text: t('common.whyApprove'),
        }, status: status }));
}
export function TokenRevocationTransactionStepRow(props) {
    var _a;
    const { step, status } = props;
    const { t } = useTranslation();
    const { token } = step;
    const symbol = (_a = token.symbol) !== null && _a !== void 0 ? _a : '';
    const title = {
        [StepStatus.Preview]: t('common.resetLimit', { symbol }),
        [StepStatus.Active]: t('common.resetLimitWallet', { symbol }),
        [StepStatus.InProgress]: t('common.resettingLimit', { symbol }),
        [StepStatus.Complete]: t('common.resetLimit', { symbol }),
    }[status];
    return _jsx(StepRowSkeleton, { title: title, currency: token, status: status });
}
//# sourceMappingURL=Approve.js.map