import { PropsWithChildren, ReactNode } from 'react';
import { GetProps, View } from 'tamagui';
import { CloseIconProps } from 'ui/src/components/icons/CloseIconWithHover';
export declare const ADAPTIVE_MODAL_ANIMATION_DURATION = 200;
export declare function ModalCloseIcon(props: CloseIconProps): JSX.Element;
export declare function WebBottomSheet({ isOpen, onClose, children, gap, ...rest }: ModalProps): JSX.Element | null;
type ModalProps = GetProps<typeof View> & PropsWithChildren<{
    isOpen: boolean;
    onClose?: () => void;
    adaptToSheet?: boolean;
    alignment?: 'center' | 'top';
}>;
/**
 * AdaptiveWebModal is a responsive modal component that adapts to different screen sizes.
 * On larger screens, it renders as a dialog modal.
 * On smaller screens (mobile devices), it adapts into a bottom sheet.
 */
export declare function AdaptiveWebModal({ isOpen, onClose, children, adaptToSheet, style, alignment, gap, px, py, p, zIndex, ...rest }: ModalProps): JSX.Element;
/**
 * Copy of AdaptiveWebModal with a bottom attachment, used temporarily until we can fully test and adapt to rest of app
 * TODO WALL-5146 Combine this with AdaptiveWebModal and fix for all use cases
 */
export declare function WebModalWithBottomAttachment({ isOpen, onClose, children, adaptToSheet, style, alignment, bottomAttachment, backgroundColor, gap, zIndex, ...rest }: ModalProps & {
    bottomAttachment?: ReactNode;
}): JSX.Element;
export {};
//# sourceMappingURL=AdaptiveWebModal.d.ts.map