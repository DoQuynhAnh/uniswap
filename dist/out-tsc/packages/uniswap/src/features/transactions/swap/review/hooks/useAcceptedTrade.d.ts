import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
export declare function useAcceptedTrade({ derivedSwapInfo, isSubmitting, }: {
    derivedSwapInfo?: DerivedSwapInfo;
    isSubmitting: boolean;
}): {
    onAcceptTrade: () => undefined;
    acceptedDerivedSwapInfo?: DerivedSwapInfo;
    newTradeRequiresAcceptance: boolean;
};
//# sourceMappingURL=useAcceptedTrade.d.ts.map