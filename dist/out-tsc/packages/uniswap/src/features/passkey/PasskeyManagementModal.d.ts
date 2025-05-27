/// <reference types="react" />
type PasskeyManagementModalProps = {
    isOpen: boolean;
    onClose: () => void;
    address?: Address;
};
export type PasskeyManagementModalState = Omit<PasskeyManagementModalProps, 'onClose' | 'isOpen'>;
export declare function PasskeyManagementModal({ isOpen, onClose, address }: PasskeyManagementModalProps): JSX.Element;
export {};
//# sourceMappingURL=PasskeyManagementModal.d.ts.map