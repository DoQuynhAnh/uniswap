import { ColorTokens } from 'ui/src';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
export type UsePriceDifferenceReturnType = {
    priceDifferencePercentage?: number;
    showPriceDifferenceWarning: false;
    priceDifferenceColor: undefined;
} | {
    priceDifferencePercentage: number;
    showPriceDifferenceWarning: true;
    priceDifferenceColor: ColorTokens;
};
export declare function usePriceDifference(derivedSwapInfo?: DerivedSwapInfo): UsePriceDifferenceReturnType;
//# sourceMappingURL=usePriceDifference.d.ts.map