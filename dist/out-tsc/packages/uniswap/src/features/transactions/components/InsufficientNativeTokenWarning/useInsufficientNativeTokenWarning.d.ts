import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { ComponentProps } from 'react';
import { Warning } from 'uniswap/src/components/modals/WarningModal/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { NativeCurrency } from 'uniswap/src/features/tokens/NativeCurrency';
import { InsufficientNativeTokenWarning } from 'uniswap/src/features/transactions/components/InsufficientNativeTokenWarning/InsufficientNativeTokenWarning';
import { useNetworkColors } from 'uniswap/src/utils/colors';
/**
 * Shows a warning in 2 different cases:
 * 1. When the user doesn't have enough funds to cover the transaction's network cost.
 * 2. When the user is trying to swap a native token and they don't have enough of that token.
 */
export declare function useInsufficientNativeTokenWarning({ flow, gasFee, warnings, }: ComponentProps<typeof InsufficientNativeTokenWarning>): {
    gasAmount: CurrencyAmount<NativeCurrency> | null | undefined;
    gasAmountFiatFormatted: string;
    nativeCurrency: Currency;
    nativeCurrencyInfo: CurrencyInfo;
    networkColors: ReturnType<typeof useNetworkColors>;
    networkName: string;
    modalOrTooltipMainMessage: JSX.Element;
    warning: Warning;
    flow: ComponentProps<typeof InsufficientNativeTokenWarning>['flow'];
} | null;
//# sourceMappingURL=useInsufficientNativeTokenWarning.d.ts.map