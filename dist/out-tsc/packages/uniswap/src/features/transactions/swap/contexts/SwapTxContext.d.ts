import { PropsWithChildren } from 'react';
import { SwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
export declare const SwapTxContext: import("react").Context<SwapTxAndGasInfo | undefined>;
export declare function SwapTxContextProvider({ children }: PropsWithChildren): JSX.Element;
export declare const useSwapTxContext: () => SwapTxAndGasInfo;
//# sourceMappingURL=SwapTxContext.d.ts.map