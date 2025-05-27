/// <reference types="react" />
import { TFunction } from 'i18next';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
export interface FoTPercent {
    buyFeePercent?: number;
    sellFeePercent?: number;
}
interface TokenWarningProps {
    currencyInfo0: CurrencyInfo;
    currencyInfo1?: CurrencyInfo;
    isInfoOnlyWarning?: boolean;
    shouldBeCombinedPlural?: boolean;
    hasSecondWarning?: boolean;
    feeOnTransferOverride?: FoTPercent;
}
export interface TokenWarningModalProps extends TokenWarningProps {
    isVisible: boolean;
    onReject?: () => void;
    onToken0BlockAcknowledged?: () => void;
    onToken1BlockAcknowledged?: () => void;
    closeModalOnly: () => void;
    onAcknowledge: () => void;
}
/**
 * Warning speedbump for selecting certain tokens.
 */
export default function TokenWarningModal({ isVisible, currencyInfo0: t0, currencyInfo1: t1, isInfoOnlyWarning, feeOnTransferOverride, onReject, onToken0BlockAcknowledged, onToken1BlockAcknowledged, onAcknowledge, closeModalOnly, }: TokenWarningModalProps): JSX.Element | null;
export declare function getWarningModalButtonTexts(t: TFunction, isInfoOnlyWarning: boolean, severity: WarningSeverity, hasSecondWarning: boolean): {
    rejectText: string | undefined;
    acknowledgeText: string | undefined;
};
export {};
//# sourceMappingURL=TokenWarningModal.d.ts.map