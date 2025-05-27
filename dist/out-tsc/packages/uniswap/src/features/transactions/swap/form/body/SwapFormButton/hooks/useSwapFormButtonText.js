import { useTranslation } from 'react-i18next';
import { useAccountMeta } from 'uniswap/src/contexts/UniswapContext';
import { FeatureFlags } from 'uniswap/src/features/gating/flags';
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useInterfaceWrap } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useInterfaceWrap';
import { useIsAmountSelectionInvalid } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useIsAmountSelectionInvalid';
import { useIsTokenSelectionInvalid } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useIsTokenSelectionInvalid';
import { useIsTradeIndicative } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useIsTradeIndicative';
import { useParsedSwapWarnings } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { getActionName } from 'uniswap/src/features/transactions/swap/review/SubmitSwapButton';
import { CurrencyField } from 'uniswap/src/types/currency';
export const useSwapFormButtonText = () => {
    var _a, _b, _c;
    const { isInterfaceWrap } = useInterfaceWrap();
    const { t } = useTranslation();
    const { swapRedirectCallback } = useTransactionModalContext();
    const { derivedSwapInfo: { currencies, wrapType, chainId }, } = useSwapFormContext();
    const isTokenSelectionInvalid = useIsTokenSelectionInvalid();
    const isAmountSelectionInvalid = useIsAmountSelectionInvalid();
    const isEmbeddedWalletEnabled = useFeatureFlag(FeatureFlags.EmbeddedWallet);
    const { insufficientBalanceWarning, blockingWarning, insufficientGasFundsWarning } = useParsedSwapWarnings();
    const isLogIn = isEmbeddedWalletEnabled;
    const nativeCurrency = NativeCurrency.onChain(chainId);
    const isIndicative = useIsTradeIndicative();
    const activeAccount = useAccountMeta();
    if (swapRedirectCallback) {
        return t('common.getStarted');
    }
    if (isIndicative) {
        return t('swap.finalizingQuote');
    }
    if (!activeAccount) {
        return isLogIn ? t('nav.logIn.button') : t('common.connectWallet.button');
    }
    if (blockingWarning === null || blockingWarning === void 0 ? void 0 : blockingWarning.buttonText) {
        return blockingWarning.buttonText;
    }
    if (isTokenSelectionInvalid) {
        return t('common.selectToken.label');
    }
    if (isAmountSelectionInvalid) {
        return t('common.noAmount.error');
    }
    if (insufficientBalanceWarning) {
        return t('common.insufficientTokenBalance.error.simple', {
            tokenSymbol: (_b = (_a = currencies[CurrencyField.INPUT]) === null || _a === void 0 ? void 0 : _a.currency.symbol) !== null && _b !== void 0 ? _b : '',
        });
    }
    if (insufficientGasFundsWarning) {
        return t('common.insufficientTokenBalance.error.simple', { tokenSymbol: (_c = nativeCurrency.symbol) !== null && _c !== void 0 ? _c : '' });
    }
    if (isInterfaceWrap) {
        return getActionName(t, wrapType);
    }
    return t('swap.button.review');
};
//# sourceMappingURL=useSwapFormButtonText.js.map