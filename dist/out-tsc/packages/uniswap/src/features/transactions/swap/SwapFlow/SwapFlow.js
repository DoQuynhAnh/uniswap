import { jsx as _jsx } from "react/jsx-runtime";
import { ModalName } from 'uniswap/src/features/telemetry/constants';
import { TransactionModal } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModal';
import { TransactionSettingsContext, useTransactionSettingsContext, } from 'uniswap/src/features/transactions/components/settings/contexts/TransactionSettingsContext';
import { CurrentScreen } from 'uniswap/src/features/transactions/swap/SwapFlow/CurrentScreen';
import { SwapDependenciesContext, useSwapDependencies, } from 'uniswap/src/features/transactions/swap/contexts/SwapDependenciesContext';
import { SwapFormContext, useSwapFormContext, } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
import { SwapTxContextProvider } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
export function SwapFlow({ settings, onSubmitSwap, tokenColor, ...transactionModalProps }) {
    const swapFormContext = useSwapFormContext();
    const transactionSettingsContext = useTransactionSettingsContext();
    const swapDependenciesContext = useSwapDependencies();
    return (_jsx(TransactionModal, { modalName: ModalName.Swap, ...transactionModalProps, children: _jsx(TransactionSettingsContext.Provider, { value: transactionSettingsContext, children: _jsx(SwapFormContext.Provider, { value: swapFormContext, children: _jsx(SwapTxContextProvider, { children: _jsx(SwapDependenciesContext.Provider, { value: swapDependenciesContext, children: _jsx(CurrentScreen, { settings: settings, tokenColor: tokenColor, onSubmitSwap: onSubmitSwap }) }) }) }) }) }));
}
//# sourceMappingURL=SwapFlow.js.map