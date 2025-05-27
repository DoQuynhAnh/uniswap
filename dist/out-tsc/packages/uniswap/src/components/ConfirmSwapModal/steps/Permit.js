import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Flex, useSporeColors } from 'ui/src';
import { Contract } from 'ui/src/components/icons/Contract';
import { Sign } from 'ui/src/components/icons/Sign';
import { StepRowSkeleton } from 'uniswap/src/components/ConfirmSwapModal/steps/StepRowSkeleton';
import { StepStatus } from 'uniswap/src/components/ConfirmSwapModal/types';
import { uniswapUrls } from 'uniswap/src/constants/urls';
const SignIcon = () => (_jsx(Flex, { centered: true, width: "$spacing24", height: "$spacing24", borderRadius: "$roundedFull", backgroundColor: "$accent1", children: _jsx(Sign, { size: "$icon.12" }) }));
export function Permit2SignatureStepRow({ status }) {
    const { t } = useTranslation();
    const colors = useSporeColors();
    const title = status === StepStatus.Active ? t('common.signMessageWallet') : t('common.signMessage');
    return (_jsx(StepRowSkeleton, { title: title, icon: _jsx(SignIcon, {}), learnMore: {
            url: uniswapUrls.helpArticleUrls.approvalsExplainer,
            text: t('common.whySign'),
        }, rippleColor: colors.accent1.val, status: status }));
}
const ContractIcon = () => (_jsx(Flex, { centered: true, width: "$spacing24", height: "$spacing24", borderRadius: "$roundedFull", backgroundColor: "$accent1", children: _jsx(Contract, { size: "$icon.24" }) }));
const CONTRACT_ICON_COLOR = '#00C3A0';
export function Permit2TransactionStepRow({ status, index, count, }) {
    const { t } = useTranslation();
    const indexText = count && count > 1 ? ` (${index + 1}/${count})` : '';
    const title = {
        [StepStatus.Preview]: t('common.approvePermitTx', { indexText }),
        [StepStatus.Active]: t('common.approvePermitTx.active', { indexText }),
        [StepStatus.InProgress]: t('common.approvePermitTx.pending', { indexText }),
        [StepStatus.Complete]: t('common.approvePermitTx', { indexText }),
    }[status];
    return (_jsx(StepRowSkeleton, { title: title, icon: _jsx(ContractIcon, {}), rippleColor: CONTRACT_ICON_COLOR, learnMore: {
            url: uniswapUrls.helpArticleUrls.mismatchedImports,
            text: t('common.approvePermitTx.explainer'),
        }, status: status }));
}
//# sourceMappingURL=Permit.js.map