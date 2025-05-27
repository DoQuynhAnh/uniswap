import { ReactNode } from 'react';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { SwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
export interface SwapReviewContextProviderProps {
    children: ReactNode;
    derivedSwapInfo: DerivedSwapInfo;
    swapTxContext: SwapTxAndGasInfo;
    swapAcceptedDerivedSwapInfo?: DerivedSwapInfo;
    newTradeRequiresAcceptance: boolean;
}
export declare function SwapReviewTransactionContextProvider({ children, derivedSwapInfo, swapTxContext, swapAcceptedDerivedSwapInfo, newTradeRequiresAcceptance, }: SwapReviewContextProviderProps): JSX.Element;
//# sourceMappingURL=SwapReviewTransactionContextProvider.d.ts.map