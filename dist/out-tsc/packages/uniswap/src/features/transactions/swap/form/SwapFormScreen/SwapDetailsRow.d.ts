import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { ReactNode } from 'react';
import { TextProps } from 'ui/src';
import { FeeOnTransferFeeGroupProps } from 'uniswap/src/features/transactions/TransactionDetails/types';
import { UsePriceDifferenceReturnType } from 'uniswap/src/features/transactions/swap/hooks/usePriceDifference';
declare const Outer: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const Label: ({ label, tooltip, analyticsTitle, }: {
    label: string;
    tooltip: ReactNode;
    analyticsTitle: string;
}) => JSX.Element;
declare const ValueLabel: ({ value, color }: {
    value: string;
    color?: TextProps['color'];
}) => JSX.Element;
declare const ReceivingAmount: ({ amount, formattedAmount, priceDifferenceWarning, isIndicative, isLoading, feeOnTransferProps, isLoadingIndicative, }: {
    amount: Maybe<CurrencyAmount<Currency>>;
    formattedAmount?: string | undefined;
    priceDifferenceWarning?: UsePriceDifferenceReturnType | undefined;
    isIndicative?: boolean | undefined;
    isLoading?: boolean | undefined;
    feeOnTransferProps?: FeeOnTransferFeeGroupProps | undefined;
    isLoadingIndicative?: boolean | undefined;
}) => JSX.Element;
export { Label, Outer, ReceivingAmount, ValueLabel };
//# sourceMappingURL=SwapDetailsRow.d.ts.map