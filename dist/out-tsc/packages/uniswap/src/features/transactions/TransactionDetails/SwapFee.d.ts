/// <reference types="react" />
import { Currency } from '@uniswap/sdk-core';
import { SwapFee as SwapFeeType } from 'uniswap/src/features/transactions/swap/types/trade';
export declare function SwapFee({ currency, swapFee, swapFeeUsd, loading, }: {
    currency: Currency;
    swapFee?: SwapFeeType;
    swapFeeUsd?: number;
    loading: boolean;
}): JSX.Element | null;
//# sourceMappingURL=SwapFee.d.ts.map