import { PropsWithChildren } from 'react';
interface MaxBalanceInfoModalProps {
    isMax: boolean;
    isModalOpen: boolean;
    isTooltipEnabled: boolean;
    currencySymbol?: string;
    onClose: () => void;
}
export declare function MaxBalanceInfoModal({ isMax, children, isModalOpen, isTooltipEnabled, currencySymbol, onClose, }: PropsWithChildren<MaxBalanceInfoModalProps>): JSX.Element;
export {};
//# sourceMappingURL=MaxBalanceInfoModal.d.ts.map