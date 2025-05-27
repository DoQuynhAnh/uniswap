import { PropsWithChildren, ReactNode } from 'react';
import { WarningModalProps } from 'uniswap/src/components/modals/WarningModal/WarningModal';
import { InfoTooltipProps } from 'uniswap/src/components/tooltip/InfoTooltipProps';
type WarningInfoProps = {
    tooltipProps: Omit<InfoTooltipProps, 'button' | 'trigger'>;
    modalProps: Omit<WarningModalProps, 'onClose' | 'isOpen'>;
    infoButton?: ReactNode;
    trigger?: ReactNode;
    triggerPlacement?: 'start' | 'end';
    analyticsTitle?: string;
};
/**
 * Platform wrapper component used to display additional info either as a tooltip on web
 * or a modal on mobile
 */
export declare function WarningInfo({ tooltipProps, modalProps, infoButton, children, trigger, triggerPlacement, analyticsTitle, }: PropsWithChildren<WarningInfoProps>): JSX.Element;
export {};
//# sourceMappingURL=WarningInfo.d.ts.map