import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { AccountType } from 'uniswap/src/features/accounts/types';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { useIsBlocked } from 'uniswap/src/features/trm/hooks';
import { isWrapAction } from 'uniswap/src/features/transactions/swap/utils/wrap';
const getIsInvalidSwap = ({ wrapType, trade }) => {
    return !isWrapAction(wrapType) && !trade.trade;
};
const getIsInvalidWrap = ({ wrapType, exactAmountToken, }) => {
    return isWrapAction(wrapType) && (!exactAmountToken || parseFloat(exactAmountToken) === 0);
};
const useIsReviewButtonDisabled = () => {
    const { derivedSwapInfo: { wrapType, trade, exactAmountToken }, isSubmitting, } = useSwapFormContext();
    const activeAccount = useAccountMeta();
    const { blockingWarning } = useParsedSwapWarnings();
    const { isBlocked: isBlockedAccount, isBlockedLoading: isBlockedAccountLoading } = useIsBlocked(activeAccount === null || activeAccount === void 0 ? void 0 : activeAccount.address);
    const { walletNeedsRestore } = useTransactionModalContext();
    const isInvalidSwap = getIsInvalidSwap({ wrapType, trade });
    const isInvalidWrap = getIsInvalidWrap({ wrapType, exactAmountToken });
    return (isInvalidSwap ||
        isInvalidWrap ||
        !!blockingWarning ||
        isBlockedAccount ||
        isBlockedAccountLoading ||
        walletNeedsRestore ||
        isSubmitting);
};
// TODO(WEB-5090): Simplify logic, deduplicate disabled vs isReviewButtonDisabled
export const useIsSwapButtonDisabled = () => {
    const isReviewButtonDisabled = useIsReviewButtonDisabled();
    const { swapRedirectCallback } = useTransactionModalContext();
    const activeAccount = useAccountMeta();
    const isViewOnlyWallet = (activeAccount === null || activeAccount === void 0 ? void 0 : activeAccount.type) === AccountType.Readonly;
    return !!activeAccount && isReviewButtonDisabled && !isViewOnlyWallet && !swapRedirectCallback;
};
//# sourceMappingURL=useIsSwapButtonDisabled.js.map