/// <reference types="react" />
import type { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import type { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
export declare function TransactionAmountsReview({ acceptedDerivedSwapInfo, newTradeRequiresAcceptance, onClose, }: {
    acceptedDerivedSwapInfo: DerivedSwapInfo<CurrencyInfo, CurrencyInfo>;
    newTradeRequiresAcceptance: boolean;
    onClose: () => void;
}): JSX.Element;
//# sourceMappingURL=TransactionAmountsReview.d.ts.map