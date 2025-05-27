import { ReactNode } from 'react';
import { ModalNameType } from 'uniswap/src/features/telemetry/constants';
export interface MenuItemProp {
    key: string;
    onPress: () => void;
    render: () => ReactNode;
}
interface ActionSheetModalContentProps {
    closeButtonLabel?: string;
    onClose: () => void;
    options: MenuItemProp[];
    header?: ReactNode | string;
}
/**
 * Sheet modal with rows of actionable options.
 */
export declare function ActionSheetModalContent(props: ActionSheetModalContentProps): JSX.Element;
interface ActionSheetModalProps extends ActionSheetModalContentProps {
    isVisible: boolean;
    name: ModalNameType;
    isDismissible?: boolean;
}
export declare function ActionSheetModal({ isVisible, onClose, name, isDismissible, ...rest }: ActionSheetModalProps): JSX.Element | null;
export {};
//# sourceMappingURL=ActionSheetModal.d.ts.map