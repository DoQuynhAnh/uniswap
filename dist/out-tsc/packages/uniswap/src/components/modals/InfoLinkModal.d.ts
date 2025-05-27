import { ReactNode } from 'react';
import { ModalProps } from 'uniswap/src/components/modals/ModalProps';
import { ModalNameType } from 'uniswap/src/features/telemetry/constants';
interface InfoModalProps {
    name: ModalNameType;
    isOpen: boolean;
    showCloseButton?: boolean;
    icon: ReactNode;
    title: string;
    description: string;
    buttonText: string;
    linkText?: string;
    linkUrl?: string;
    onDismiss?: () => void;
    onButtonPress?: () => void;
    onAnalyticsEvent?: () => void;
    height?: ModalProps['height'];
}
export declare function InfoLinkModal({ name, isOpen, showCloseButton, icon, title, description, buttonText, linkText, linkUrl, onDismiss, onButtonPress, onAnalyticsEvent, height, }: React.PropsWithChildren<InfoModalProps>): JSX.Element;
export {};
//# sourceMappingURL=InfoLinkModal.d.ts.map