/// <reference types="react" />
import type { DerivedSwapInfo } from 'uniswap/src/features/transactions/swap/types/derivedSwapInfo';
type FoTWarningRowProps = {
    currencies: DerivedSwapInfo['currencies'];
    outputTokenHasBuyTax: boolean;
};
export declare function FoTWarningRow({ currencies, outputTokenHasBuyTax }: FoTWarningRowProps): JSX.Element;
export {};
//# sourceMappingURL=FoTWarningRow.d.ts.map