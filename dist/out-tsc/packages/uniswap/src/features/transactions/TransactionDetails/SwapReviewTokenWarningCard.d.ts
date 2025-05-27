/// <reference types="react" />
import { FeeOnTransferFeeGroupProps, TokenWarningProps } from 'uniswap/src/features/transactions/TransactionDetails/types';
type SwapReviewTokenWarningCardProps = {
    checked: boolean;
    setChecked: (checked: boolean) => void;
    feeOnTransferProps?: FeeOnTransferFeeGroupProps;
    tokenWarningProps: TokenWarningProps;
};
export declare function SwapReviewTokenWarningCard({ feeOnTransferProps, tokenWarningProps, checked, setChecked, }: SwapReviewTokenWarningCardProps): JSX.Element | null;
export {};
//# sourceMappingURL=SwapReviewTokenWarningCard.d.ts.map