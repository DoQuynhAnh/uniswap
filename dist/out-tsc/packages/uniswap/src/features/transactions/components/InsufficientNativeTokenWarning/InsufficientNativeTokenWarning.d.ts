/// <reference types="react" />
import { Warning } from 'uniswap/src/components/modals/WarningModal/types';
import { GasFeeResult } from 'uniswap/src/features/gas/types';
export declare function InsufficientNativeTokenWarning({ warnings, flow, gasFee, }: {
    warnings: Warning[];
    flow: 'send' | 'swap';
    gasFee: GasFeeResult;
}): JSX.Element | null;
//# sourceMappingURL=InsufficientNativeTokenWarning.d.ts.map