import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { StepRowSkeleton } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { StepStatus } from 'uniswap/src/components/ConfirmSwapModal/types';
import { uniswapUrls } from 'uniswap/src/constants/urls';
export function WrapTransactionStepRow({ step, status }) {
    var _a;
    const { t } = useTranslation();
    const { amount } = step;
    const { currency } = amount;
    const symbol = (_a = currency.symbol) !== null && _a !== void 0 ? _a : '';
    const title = {
        [StepStatus.Active]: t('common.wrapIn', { symbol }),
        [StepStatus.InProgress]: t('common.wrappingToken', { symbol }),
        [StepStatus.Preview]: t('common.wrap', { symbol }),
        [StepStatus.Complete]: t('common.wrap', { symbol }),
    }[status];
    return (_jsx(StepRowSkeleton, { title: title, currency: currency, learnMore: {
            url: uniswapUrls.helpArticleUrls.wethExplainer,
            text: t('common.whyWrap', { symbol }),
        }, status: status }));
}
//# sourceMappingURL=Wrap.js.map