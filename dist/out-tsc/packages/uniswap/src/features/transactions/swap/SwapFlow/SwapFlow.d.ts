/// <reference types="react" />
import { TransactionModalProps } from 'uniswap/src/features/transactions/components/TransactionModal/TransactionModalProps';
import type { TransactionSettingConfig } from 'uniswap/src/features/transactions/components/settings/types';
import { SwapFormState } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext';
export interface SwapFlowProps extends Omit<TransactionModalProps, 'fullscreen' | 'modalName'> {
    prefilledState?: SwapFormState;
    settings: TransactionSettingConfig[];
    hideHeader?: boolean;
    hideFooter?: boolean;
    onSubmitSwap?: () => Promise<void> | void;
    tokenColor?: string;
}
export declare function SwapFlow({ settings, onSubmitSwap, tokenColor, ...transactionModalProps }: SwapFlowProps): JSX.Element;
//# sourceMappingURL=SwapFlow.d.ts.map