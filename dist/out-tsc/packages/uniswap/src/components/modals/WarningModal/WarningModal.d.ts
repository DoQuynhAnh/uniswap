import { PropsWithChildren, ReactNode } from 'react';
import type { ColorValue } from 'react-native';
import { WarningSeverity } from 'uniswap/src/components/modals/WarningModal/types';
import { ModalNameType } from 'uniswap/src/features/telemetry/constants';
type WarningModalContentProps = {
    onClose?: () => void;
    onReject?: () => void;
    onAcknowledge?: () => void;
    hideHandlebar?: boolean;
    modalName: ModalNameType;
    title?: string;
    titleComponent?: ReactNode;
    caption?: string;
    captionComponent?: ReactNode;
    rejectText?: string;
    acknowledgeText?: string;
    severity?: WarningSeverity;
    icon?: ReactNode;
    hideIcon?: boolean;
    backgroundIconColor?: ColorValue | false;
    maxWidth?: number;
    analyticsProperties?: Record<string, unknown>;
};
export type WarningModalProps = {
    isOpen: boolean;
    isDismissible?: boolean;
    zIndex?: number;
} & WarningModalContentProps;
export declare function WarningModalContent({ onClose, onReject, onAcknowledge, modalName, title, titleComponent, caption, captionComponent, rejectText: rejectText, acknowledgeText, severity, children, icon, hideIcon, maxWidth, hideHandlebar, backgroundIconColor, analyticsProperties, }: PropsWithChildren<WarningModalContentProps>): JSX.Element;
export declare function WarningModal(props: PropsWithChildren<WarningModalProps>): JSX.Element;
export {};
//# sourceMappingURL=WarningModal.d.ts.map