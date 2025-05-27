/// <reference types="react" />
import { Warning, WarningWithStyle } from 'uniswap/src/components/modals/WarningModal/types';
import { TransactionFailureReason } from 'uniswap/src/data/tradingApi/__generated__/index';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { GasFeeResult } from 'uniswap/src/features/gas/types';
import { FeeOnTransferFeeGroupProps, TokenWarningProps } from 'uniswap/src/features/transactions/TransactionDetails/types';
import { useSwapTxContext } from 'uniswap/src/features/transactions/swap/contexts/SwapTxContext';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
import { UniswapXGasBreakdown } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { IndicativeTrade, Trade } from 'uniswap/src/features/transactions/swap/types/trade';
export interface SwapReviewTransactionContextState {
    trade: Trade | undefined;
    indicativeTrade: IndicativeTrade | undefined;
    acceptedTrade: Trade | undefined;
    swapTxContext: ReturnType<typeof useSwapTxContext>;
    gasFee: GasFeeResult;
    uniswapXGasBreakdown: UniswapXGasBreakdown | undefined;
    derivedSwapInfo: DerivedSwapInfo | undefined;
    acceptedDerivedSwapInfo: DerivedSwapInfo | undefined;
    isWrap: boolean;
    blockingWarning: Warning | undefined;
    reviewScreenWarning: WarningWithStyle | undefined;
    txSimulationErrors: TransactionFailureReason[] | undefined;
    newTradeRequiresAcceptance: boolean;
    feeOnTransferProps: FeeOnTransferFeeGroupProps | undefined;
    tokenWarningProps: TokenWarningProps;
    currencyInInfo: Maybe<CurrencyInfo>;
    currencyOutInfo: Maybe<CurrencyInfo>;
    chainId: UniverseChainId;
}
export declare const SwapReviewTransactionContext: import("react").Context<SwapReviewTransactionContextState>;
export declare const useSwapReviewTransactionState: () => SwapReviewTransactionContextState;
export declare function useIsSwapReviewLoading(): boolean;
export declare function useIsSwapMissingParams(): boolean;
export declare function useSwapReviewError(): {
    submissionError: Error | undefined;
    setSubmissionError: (error?: Error) => void;
    onSwapButtonClick: () => Promise<void>;
    onPressRetry: (() => void) | undefined;
};
//# sourceMappingURL=SwapReviewTransactionContext.d.ts.map