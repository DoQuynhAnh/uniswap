/// <reference types="react" />
import { AppTFunction } from 'ui/src/i18n/types';
import { Warning } from 'uniswap/src/components/modals/WarningModal/types';
import { SwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/types/swapTxAndGasInfo';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
interface SubmitSwapButtonProps {
    disabled: boolean;
    onSubmit: () => void;
    showPendingUI: boolean;
    warning?: Warning;
}
export declare function SubmitSwapButton({ disabled, onSubmit, showPendingUI, warning }: SubmitSwapButtonProps): JSX.Element;
export declare const getActionName: (t: AppTFunction, wrapType: WrapType, swapTxContext?: SwapTxAndGasInfo, warning?: Warning) => string;
export {};
//# sourceMappingURL=SubmitSwapButton.d.ts.map