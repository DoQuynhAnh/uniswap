import { useAccountMeta, useUniswapContext } from 'uniswap/src/contexts/UniswapContext';
import { AccountType } from 'uniswap/src/features/accounts/types';
import { useTransactionModalContext } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { useSwapFormContext } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { useInterfaceWrap } from 'uniswap/src/features/transactions/swap/form/body/SwapFormButton/hooks/useInterfaceWrap';
import { useSwapFormWarningState } from 'uniswap/src/features/transactions/swap/form/context/SwapFormWarningStateContext';
import { useNeedsBridgingWarning, useNeedsLowNativeBalanceWarning, usePrefilledNeedsTokenProtectionWarning, } from 'uniswap/src/features/transactions/swap/hooks/useSwapWarnings';
import { createPrepareSwap } from 'uniswap/src/features/transactions/swap/services/prepareSwapService';
import { logger } from 'utilities/src/logger/logger';
import { useEvent } from 'utilities/src/react/hooks';
const getIsViewOnlyWallet = (activeAccount) => {
    return (activeAccount === null || activeAccount === void 0 ? void 0 : activeAccount.type) === AccountType.Readonly;
};
export function usePrepareSwap(ctx) {
    const { handleShowTokenWarningModal, handleShowBridgingWarningModal, handleShowMaxNativeTransferModal, handleShowViewOnlyModal, } = useSwapFormWarningState();
    const { isInterfaceWrap, onInterfaceWrap } = useInterfaceWrap();
    const { derivedSwapInfo, updateSwapForm, exactAmountToken, prefilledCurrencies, isMax } = useSwapFormContext();
    const { currencies, exactCurrencyField, chainId } = derivedSwapInfo;
    const { swapRedirectCallback, setScreen } = useTransactionModalContext();
    const activeAccount = useAccountMeta();
    const { onConnectWallet } = useUniswapContext();
    // needsTokenProtectionWarning is only true in interface, where swap component might be prefilled with a token that has a protection warning
    const { needsTokenProtectionWarning } = usePrefilledNeedsTokenProtectionWarning(derivedSwapInfo, prefilledCurrencies);
    const needsLowNativeBalanceWarning = useNeedsLowNativeBalanceWarning({ derivedSwapInfo, isMax });
    const needsBridgingWarning = useNeedsBridgingWarning(derivedSwapInfo);
    const isViewOnlyWallet = getIsViewOnlyWallet(activeAccount);
    return useEvent(createPrepareSwap({
        // getAction
        activeAccount,
        isViewOnlyWallet,
        isInterfaceWrap,
        currencies,
        exactAmountToken,
        exactCurrencyField,
        chainId,
        needsTokenProtectionWarning,
        needsBridgingWarning,
        needsLowNativeBalanceWarning,
        // handleEventAction
        handleShowViewOnlyModal,
        handleShowTokenWarningModal,
        handleShowBridgingWarningModal,
        handleShowMaxNativeTransferModal,
        onInterfaceWrap,
        updateSwapForm,
        setScreen,
        // shared
        swapRedirectCallback,
        onConnectWallet,
        // ctx
        warningService: ctx.warningService,
        logger,
    }));
}
//# sourceMappingURL=usePrepareSwap.js.map