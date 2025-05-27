import { ReactNode } from 'react';
import { AuthTrigger } from 'uniswap/src/features/auth/types';
import { TransactionScreen } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext';
import { GetExecuteSwapService } from 'uniswap/src/features/transactions/swap/services/executeSwapService';
interface SwapReviewCallbacksContextProviderProps {
    children: ReactNode;
    setScreen: (screen: TransactionScreen) => void;
    authTrigger?: AuthTrigger;
    onSubmitSwap?: () => Promise<void> | void;
    onClose: () => void;
    onAcceptTrade: () => void;
    getExecuteSwapService: GetExecuteSwapService;
}
export declare const SwapReviewCallbacksContextProvider: ({ children, setScreen, authTrigger, onSubmitSwap, onClose, onAcceptTrade, getExecuteSwapService, }: SwapReviewCallbacksContextProviderProps) => JSX.Element;
export {};
//# sourceMappingURL=SwapReviewCallbacksContextProvider.d.ts.map