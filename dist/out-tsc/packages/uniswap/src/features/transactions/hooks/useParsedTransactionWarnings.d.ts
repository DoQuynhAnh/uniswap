import { AppTFunction } from 'ui/src/i18n/types';
import { ParsedWarnings, Warning } from 'uniswap/src/components/modals/WarningModal/types';
export declare function isPriceImpactWarning(warning: Warning): boolean;
export declare const getNetworkWarning: (t: AppTFunction) => Warning;
export declare function useFormattedWarnings(warnings: Warning[]): ParsedWarnings;
//# sourceMappingURL=useParsedTransactionWarnings.d.ts.map