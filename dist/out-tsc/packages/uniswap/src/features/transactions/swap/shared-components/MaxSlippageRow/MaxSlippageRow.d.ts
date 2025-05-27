/// <reference types="react" />
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
interface MaxSlippageRowProps {
    acceptedDerivedSwapInfo: DerivedSwapInfo<CurrencyInfo, CurrencyInfo>;
    autoSlippageTolerance?: number;
    customSlippageTolerance?: number;
}
export declare function MaxSlippageRow({ acceptedDerivedSwapInfo, autoSlippageTolerance, customSlippageTolerance, }: MaxSlippageRowProps): JSX.Element;
export {};
//# sourceMappingURL=MaxSlippageRow.d.ts.map